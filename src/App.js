import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { v4 as uuidV4 } from "uuid";

import TextEditor from "./TextEditor";

function App() {
  const [documentId, setDocumentId] = useState("");

  useEffect(() => {
    const id = uuidV4();
    // console.log("docs>>>>>>>>>>", id);

    setDocumentId(id);
  }, []);

  useEffect(() => {
    if (documentId) {
      window.location.href = `/documents/${documentId}`;
    }
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/documents/:id" element={<TextEditor />} />
        <Route
          path="/*"
          element={<Navigate to={`/documents/${documentId}`} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
