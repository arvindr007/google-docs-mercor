import { useCallback, useEffect, useRef, useState } from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css";
import { useParams } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";

const TOOLBAR_OPTIONS = [
  ["bold", "italic", "underline", "strike"], // toggled buttons
  ["blockquote", "code-block"],

  [{ header: 1 }, { header: 2 }], // custom button values
  [{ list: "ordered" }, { list: "bullet" }],
  [{ script: "sub" }, { script: "super" }], // superscript/subscript
  [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
  [{ direction: "rtl" }], // text direction
  [{ size: ["small", false, "large", "huge"] }], // custom dropdown
  [{ header: [1, 2, 3, 4, 5, 6, false] }],
  [{ color: [] }, { background: [] }], // dropdown with defaults from theme
  [{ font: [] }],
  [{ align: [] }],
  ["clean"],
];

export default function TextEditor() {
  const { id: documentId } = useParams();
  const [quill, setQuill] = useState(null);
  const wrapperRef = useCallback((wrapper) => {
    if (wrapper == null) return;

    wrapper.innerHTML = "";
    const editor = document.createElement("div");
    wrapper.append(editor);
    const q = new Quill(editor, {
      theme: "snow",
      modules: { toolbar: TOOLBAR_OPTIONS },
    });
    q.disable();
    q.setText("Loading...");
    setQuill(q);
  }, []);

  useEffect(() => {
    if (quill && quill.getText().trim() === "Loading...") {
      quill.enable();
      quill.setText(""); // Clear the loading message
    }
  }, [quill]);

  const handleShare = () => {
    if (quill) {
      const content = quill.root.innerHTML;
      // Implement your sharing logic using the 'content' variable
      console.log("Sharing document:", content);
    }
  };

  const docTitle = (title) => {
    if (title) return title;
    else return "Untitled Document";
  };

  return (
    <div>
      <div className="docs-ele">
        <p className="doc-title">{docTitle()}</p>
        <button className="share-button" onClick={handleShare}>
          <span>
            <FontAwesomeIcon icon={faLock} />
            Share
          </span>
        </button>
      </div>
      <div id="editor" className="container" ref={wrapperRef} />;
    </div>
  );
}
