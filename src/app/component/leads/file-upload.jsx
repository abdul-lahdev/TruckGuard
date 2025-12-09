import React, { useState } from "react";
import { FilePond, registerPlugin } from "react-filepond";
import "filepond/dist/filepond.min.css";

// Plugins
import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type";

registerPlugin(FilePondPluginFileValidateType);

const FileUpload = () => {
    const [files, setFiles] = useState([]);

    return (
        <div className="p-6 w-full bg-white border border-[#DDE6ED] rounded-[20px]">

            <FilePond
                files={files}
                onupdatefiles={setFiles}
                allowMultiple={true}
                maxFiles={5}
                acceptedFileTypes={['application/vnd.openxmlformats-officedocument.wordprocessingml.document']}
                labelFileTypeNotAllowed="Only .docx files are allowed"
                name="files"
                labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
                allowFileTypeValidation={true}
            />

            <div className="mt-4 space-y-2">
                <h4 className="font-semibold">Uploaded Files</h4>

                {files.length === 0 && (
                    <p className="text-gray-400 text-sm">No files uploaded yet</p>
                )}

                {files.map((fileItem, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                        <span className="bg-blue-100 text-blue-800 text-sm font-semibold px-2 py-1 rounded-md">
                            .docx
                        </span>

                        <span className="text-gray-600">{fileItem.file.name}</span>

                        <button
                            className="text-blue-500 hover:text-blue-700"
                            onClick={() => {
                                const url = URL.createObjectURL(fileItem.file);
                                const link = document.createElement('a');
                                link.href = url;
                                link.download = fileItem.file.name;
                                link.click();
                            }}
                        >
                            Download
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FileUpload;
