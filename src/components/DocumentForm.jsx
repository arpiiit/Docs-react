import React from 'react';

function DocumentForm({ form, handleChange, handleAdd }) {
  return (
    <div className="w-full bg-zinc-700 p-5 fixed top-0 left-0 z-10 flex justify-center items-center">
      <div className="max-w-6xl w-full">
        <h3 className="text-white mb-3 text-center text-xl font-semibold">Add New Document</h3>
        <div className="flex gap-4 items-center">
          <input
            type="text"
            name="desc"
            placeholder="Description"
            value={form.desc}
            onChange={handleChange}
            className="p-2 rounded bg-zinc-600 text-white flex-grow"
          />
          <input
            type="text"
            name="filesize"
            placeholder="File Size"
            value={form.filesize}
            onChange={handleChange}
            className="p-2 rounded bg-zinc-600 text-white flex-grow"
          />
          <select
            name="tagTitle"
            value={form.tagTitle}
            onChange={handleChange}
            className="p-2 rounded bg-zinc-600 text-white flex-grow"
          >
            <option value="Save">Save</option>
            <option value="Download Now">Download Now</option>
            <option value="Upload">Upload</option>
            <option value="Download">Download</option>
          </select>
          <select
            name="tagColor"
            value={form.tagColor}
            onChange={handleChange}
            className="p-2 rounded bg-zinc-600 text-white flex-grow"
          >
            <option value="green">Green</option>
            <option value="blue">Blue</option>
          </select>
          <button
            onClick={handleAdd}
            className="bg-blue-500 text-white p-2 rounded"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default DocumentForm;
