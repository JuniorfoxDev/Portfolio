import React, { useState } from "react";

const Skills = () => {
  const [resumeFile, setResumeFile] = useState(null);
  const [resumeURL, setResumeURL] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setResumeFile(file);
      setResumeURL(URL.createObjectURL(file));
    }
  };

  const handleDownload = () => {
    if (resumeFile) {
      const link = document.createElement("a");
      link.href = resumeURL;
      link.download = resumeFile.name;
      link.click();
    }
  };

  return (
    <div className="bg-neutral-900 min-h-screen flex flex-col items-center justify-center p-4 text-neutral-100">
      <h1 className="text-3xl font-bold mb-6">Resume Viewer</h1>

      <div className="flex gap-4 mb-6">
        <label className="bg-sky-600 hover:bg-sky-500 text-white py-2 px-4 rounded cursor-pointer">
          Upload Resume
          <input type="file" accept=".pdf,.png,.jpg,.jpeg" className="hidden" onChange={handleFileChange} />
        </label>
        {resumeFile && (
          <button
            onClick={handleDownload}
            className="bg-green-600 hover:bg-green-500 text-white py-2 px-4 rounded"
          >
            Download Resume
          </button>
        )}
      </div>

      <div className="w-full max-w-4xl bg-neutral-800 rounded shadow-lg p-4 flex justify-center items-center min-h-[600px]">
        {resumeURL ? (
          resumeFile.type === "application/pdf" ? (
            <iframe
              src={resumeURL}
              title="Resume Preview"
              className="w-full h-[600px]"
            />
          ) : (
            <img
              src={resumeURL}
              alt="Resume Preview"
              className="max-h-[600px] w-auto"
            />
          )
        ) : (
          <p className="text-neutral-400">No resume uploaded yet. Please upload a file to preview.</p>
        )}
      </div>
    </div>
  );
};

export default Skills;
