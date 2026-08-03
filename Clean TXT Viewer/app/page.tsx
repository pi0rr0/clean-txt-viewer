"use client";

import DOMPurify from "dompurify";
import hljs from "highlight.js/lib/common";
import { marked, Renderer } from "marked";
import {
  type ChangeEvent,
  type DragEvent,
  useRef,
  useState,
} from "react";

const ACCEPTED_EXTENSIONS = [".txt", ".md"];

type FilePickerWindow = Window & {
  showOpenFilePicker?: (options: {
    multiple: boolean;
    startIn: "downloads";
    types: Array<{
      description: string;
      accept: Record<string, string[]>;
    }>;
  }) => Promise<Array<{ getFile: () => Promise<File> }>>;
};

function isAcceptedFile(file: File) {
  const name = file.name.toLowerCase();
  return ACCEPTED_EXTENSIONS.some((extension) => name.endsWith(extension));
}

function renderMarkdown(markdown: string) {
  const renderer = new Renderer();

  renderer.code = ({ text, lang }) => {
    const requestedLanguage = lang?.trim().split(/\s+/)[0] ?? "";
    const safeLanguage = /^[a-z0-9_+-]+$/i.test(requestedLanguage)
      ? requestedLanguage
      : "";
    const highlighted =
      safeLanguage && hljs.getLanguage(safeLanguage)
        ? hljs.highlight(text, { language: safeLanguage }).value
        : hljs.highlightAuto(text).value;
    const languageClass = safeLanguage ? ` language-${safeLanguage}` : "";

    return `<pre><code class="hljs${languageClass}">${highlighted}</code></pre>`;
  };

  const parsed = marked.parse(markdown, {
    async: false,
    gfm: true,
    renderer,
  });

  const sanitized = DOMPurify.sanitize(parsed, {
    FORBID_TAGS: [
      "style",
      "script",
      "iframe",
      "object",
      "embed",
      "form",
      "img",
      "video",
      "audio",
      "source",
      "track",
    ],
    USE_PROFILES: { html: true },
  });

  const template = document.createElement("template");
  template.innerHTML = sanitized;
  template.content.querySelectorAll("a").forEach((link) => {
    link.target = "_blank";
    link.rel = "noopener noreferrer";
  });

  return template.innerHTML;
}

export default function Home() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [documentHtml, setDocumentHtml] = useState("");
  const [filename, setFilename] = useState("");
  const [error, setError] = useState("");
  const [isDragging, setIsDragging] = useState(false);
  const hasDocument = Boolean(filename);

  async function openFile(file: File | undefined) {
    setError("");

    if (!file) return;
    if (!isAcceptedFile(file)) {
      setError("Please choose a .txt or .md file.");
      return;
    }

    try {
      const contents = await file.text();
      setDocumentHtml(renderMarkdown(contents));
      setFilename(file.name);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch {
      setError("This file could not be read. Please try another one.");
    } finally {
      if (inputRef.current) inputRef.current.value = "";
    }
  }

  function handleFileChange(event: ChangeEvent<HTMLInputElement>) {
    void openFile(event.target.files?.[0]);
  }

  async function chooseFile() {
    const picker = (window as FilePickerWindow).showOpenFilePicker;

    if (!picker) {
      inputRef.current?.click();
      return;
    }

    try {
      const [handle] = await picker({
        multiple: false,
        startIn: "downloads",
        types: [
          {
            description: "Markdown and text files",
            accept: {
              "text/plain": [".txt"],
              "text/markdown": [".md"],
            },
          },
        ],
      });
      await openFile(await handle?.getFile());
    } catch (pickerError) {
      if (pickerError instanceof DOMException && pickerError.name === "AbortError") {
        return;
      }
      inputRef.current?.click();
    }
  }

  function handleDrop(event: DragEvent<HTMLDivElement>) {
    event.preventDefault();
    setIsDragging(false);
    void openFile(event.dataTransfer.files?.[0]);
  }

  return (
    <main className={hasDocument ? "app app--reading" : "app"}>
      <input
        ref={inputRef}
        className="visually-hidden"
        id="file-upload"
        type="file"
        accept=".txt,.md,text/plain,text/markdown"
        onChange={handleFileChange}
      />

      {hasDocument ? (
        <>
          <header className="reader-header">
            <div className="reader-header__brand">Clean TXT Viewer</div>
            <h1 className="reader-header__filename" id="document-filename">
              {filename}
            </h1>
            <button
              className="upload-again"
              type="button"
              onClick={() => void chooseFile()}
            >
              <span aria-hidden="true">↑</span>
              <span className="upload-again__label">Upload another file</span>
            </button>
          </header>

          <section className="reader-shell" aria-labelledby="document-filename">
            <article
              className="markdown-body"
              dangerouslySetInnerHTML={{ __html: documentHtml }}
            />
          </section>
        </>
      ) : (
        <section className="welcome" aria-labelledby="site-title">
          <div className="welcome__brand">
            <h1 id="site-title">Clean TXT Viewer</h1>
          </div>
          <p className="welcome__intro">
            A calm, private place to read your Markdown files.
          </p>

          <div
            className={`dropzone${isDragging ? " dropzone--active" : ""}`}
            onDragEnter={(event) => {
              event.preventDefault();
              setIsDragging(true);
            }}
            onDragOver={(event) => event.preventDefault()}
            onDragLeave={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget as Node)) {
                setIsDragging(false);
              }
            }}
            onDrop={handleDrop}
          >
            <span className="upload-illustration" aria-hidden="true">
              <span className="upload-illustration__arrow">↑</span>
            </span>
            <span className="dropzone__title">Drop your file here</span>
            <span className="dropzone__or">or</span>
            <button
              className="choose-button"
              type="button"
              onClick={() => void chooseFile()}
            >
              Choose a file
            </button>
            <span className="dropzone__hint">Supports .txt and .md files</span>
          </div>

          <p className="error-message" role="alert" aria-live="polite">
            {error}
          </p>

          <div className="privacy-note">
            <span className="privacy-note__icon" aria-hidden="true">✓</span>
            <div>
              <strong>Your file stays private</strong>
              <span>Everything is processed locally in your browser.</span>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
