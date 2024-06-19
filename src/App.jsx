import './App.css';
import React, { useState } from 'react';
import Backgroung from './components/Backgroung';
import Forground from './components/Forground';
import DocumentForm from './components/DocumentForm';

function App() {
  const [documents, setDocuments] = useState([
    {
      id: 1,
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
      filesize: ".9mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },
    {
      id: 2,
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
      filesize: ".9mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "blue" },
    },
    {
      id: 3,
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
      filesize: ".9mb",
      close: true,
      tag: { isOpen: false, tagTitle: "Upload", tagColor: "green" },
    },
  ]);

  const [form, setForm] = useState({ desc: "", filesize: "", tagTitle: "Save", tagColor: "green" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleAdd = () => {
    const newDocument = {
      id: documents.length + 1,
      desc: form.desc,
      filesize: form.filesize,
      close: true,
      tag: { isOpen: true, tagTitle: form.tagTitle, tagColor: form.tagColor },
    };
    setDocuments([...documents, newDocument]);
    setForm({ desc: "", filesize: "", tagTitle: "Save", tagColor: "green" });
  };

  const handleDelete = (id) => {
    setDocuments(documents.filter((doc) => doc.id !== id));
  };

  const handleEdit = (id) => {
    const doc = documents.find((doc) => doc.id === id);
    setForm({ desc: doc.desc, filesize: doc.filesize, tagTitle: doc.tag.tagTitle, tagColor: doc.tag.tagColor });
    handleDelete(id);
  };

  const handleAction = (action, data) => {
    if (action === "Download Now") {
      const blob = new Blob([data.desc], { type: "text/plain" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "document.txt";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } else if (action === "Save") {
      // Logic to save the document
      alert(`Saving ${data.desc}`);
    } else if (action === "Upload") {
      // Logic to upload the document
      alert(`Uploading ${data.desc}`);
    }
  };

  return (
    <div className="w-full relative h-screen bg-zinc-800">
      <Backgroung />
      <DocumentForm form={form} handleChange={handleChange} handleAdd={handleAdd} />
      <Forground documents={documents} handleDelete={handleDelete} handleEdit={handleEdit} handleAction={handleAction} />
    </div>
  );
}

export default App;
