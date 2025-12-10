import React, { useState } from "react";
import { FilePond, registerPlugin } from "react-filepond";
import "filepond/dist/filepond.min.css";

// Plugins
import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type";
import { Separator } from "@/components/ui/separator";

registerPlugin(FilePondPluginFileValidateType);

const categories = [
    { id: "ownersCdl", label: "Owner's CDL" },
    { id: "Last4QuartersIFTA", label: "Last 4 Quarter's IFTA" },
    { id: "last3YearLossRuns", label: "Last 3 Year Loss Runs" },
];

const formatSize = (bytes) => {
    if (!bytes && bytes !== 0) return "";
    const kb = bytes / 1024;
    const mb = kb / 1024;
    if (mb >= 1) return `${mb.toFixed(1)} MB`;
    return `${Math.max(kb, 1).toFixed(0)} KB`;
};

const FileUpload = () => {
    const [files, setFiles] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(categories[0].id);
    const [docsByCategory, setDocsByCategory] = useState({
        ownersCdl: [
            { name: "abc.docx", size: "16 MB" },
            { name: "abc.docx", size: "16 MB" },
        ],
        Last4QuartersIFTA: [
            { name: "abc.docx", size: "16 MB" },
            { name: "abc.docx", size: "16 MB" },
        ],
        last3YearLossRuns: [
            { name: "abc.docx", size: "16 MB" },
            { name: "abc.docx", size: "16 MB" },
        ],
    });

    const handleAdd = () => {
        if (!files.length) return;
        const newDocs = files.map((f) => ({
            name: f.file?.name || "file",
            size: formatSize(f.file?.size),
        }));
        setDocsByCategory((prev) => ({
            ...prev,
            [selectedCategory]: [...(prev[selectedCategory] || []), ...newDocs],
        }));
        setFiles([]);
    };

    return (
        <>
            <div className="w-full rounded-[20px] border border-[#DDE6ED] bg-white p-6 uploader-box-design">
                <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="mb-4 w-full rounded-md border border-(--light4) bg-white px-3 py-2 text-sm font-medium text-(--dark4)"
                >
                    {categories.map((cat) => (
                        <option key={cat.id} value={cat.id}>
                            {cat.label}
                        </option>
                    ))}
                </select>
                <span className="text-[14px] font-normal text-(--grey8)">
                    Upload File
                </span>

                <FilePond
                    files={files}
                    onupdatefiles={setFiles}
                    allowMultiple
                    maxFiles={5}
                    acceptedFileTypes={[
                        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
                    ]}
                    labelFileTypeNotAllowed="Only .docx files are allowed"
                    name="files"
                    labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
                    allowFileTypeValidation
                    className="mt-2"
                />

                <div className="mt-4 space-y-2">
                    <h4 className="font-semibold">Ready to add</h4>

                    {files.length === 0 && (
                        <p className="text-sm text-gray-400">No files uploaded yet</p>
                    )}

                    {files.map((fileItem, idx) => (
                        <div key={idx} className="flex items-center space-x-3">
                            <span className="rounded-md bg-blue-100 px-2 py-1 text-sm font-semibold text-blue-800">
                                .docx
                            </span>
                            <span className="text-gray-600">{fileItem.file.name}</span>
                            <span className="text-xs text-gray-500">
                                ({formatSize(fileItem.file.size)})
                            </span>
                        </div>
                    ))}
                </div>

                <button onClick={handleAdd} className="btn-primary ms-auto mt-8 px-8">
                    Add
                </button>
            </div>

            {categories.map((cat) => (
                <div
                    key={cat.id}
                    className="mt-5 rounded-[20px] border border-(--light2) p-5"
                >
                    <label className="text-[14px] font-medium text-(--dark4)">
                        {cat.label}
                    </label>
                    <Separator className="mt-3 bg-(--green1)" />

                    <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2">
                        {(docsByCategory[cat.id] || []).map((doc, idx) => (
                            <div
                                key={`${cat.id}-${idx}`}
                                className="flex items-center justify-between rounded-[12px] border border-(--light4) p-4"
                            >
                                <div>
                                    <h4 className="text-[14px] font-medium text-(--dark5)">
                                        {doc.name}
                                    </h4>
                                    <p className="text-[12px] font-normal text-(--dark6)">
                                        {doc.size}
                                    </p>
                                </div>
                                <div>
                                    <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <g clipPath="url(#clip0_1_5233)">
                                            <path
                                                d="M9.87823 18.122C10.1568 18.4008 10.4876 18.6219 10.8517 18.7728C11.2158 18.9237 11.6061 19.0014 12.0002 19.0014C12.3944 19.0014 12.7846 18.9237 13.1487 18.7728C13.5128 18.6219 13.8436 18.4008 14.1222 18.122L17.3332 14.911C17.5054 14.7206 17.5977 14.4713 17.5911 14.2147C17.5846 13.958 17.4795 13.7138 17.2978 13.5325C17.1161 13.3512 16.8716 13.2467 16.615 13.2406C16.3584 13.2346 16.1093 13.3274 15.9192 13.5L12.9932 16.427L13.0002 1C13.0002 0.734784 12.8949 0.48043 12.7073 0.292893C12.5198 0.105357 12.2654 0 12.0002 0V0C11.735 0 11.4807 0.105357 11.2931 0.292893C11.1056 0.48043 11.0002 0.734784 11.0002 1L10.9912 16.408L8.08123 13.5C7.89359 13.3125 7.63914 13.2072 7.37387 13.2073C7.1086 13.2074 6.85423 13.3129 6.66673 13.5005C6.47922 13.6881 6.37393 13.9426 6.37402 14.2079C6.37412 14.4731 6.47959 14.7275 6.66723 14.915L9.87823 18.122Z"
                                                fill="#8B8F92"
                                            />
                                            <path
                                                d="M23 15.9999C22.7348 15.9999 22.4804 16.1052 22.2929 16.2928C22.1054 16.4803 22 16.7347 22 16.9999V20.9999C22 21.2651 21.8946 21.5194 21.7071 21.707C21.5196 21.8945 21.2652 21.9999 21 21.9999H3C2.73478 21.9999 2.48043 21.8945 2.29289 21.707C2.10536 21.5194 2 21.2651 2 20.9999V16.9999C2 16.7347 1.89464 16.4803 1.70711 16.2928C1.51957 16.1052 1.26522 15.9999 1 15.9999C0.734784 15.9999 0.48043 16.1052 0.292893 16.2928C0.105357 16.4803 0 16.7347 0 16.9999L0 20.9999C0 21.7955 0.31607 22.5586 0.87868 23.1212C1.44129 23.6838 2.20435 23.9999 3 23.9999H21C21.7956 23.9999 22.5587 23.6838 23.1213 23.1212C23.6839 22.5586 24 21.7955 24 20.9999V16.9999C24 16.7347 23.8946 16.4803 23.7071 16.2928C23.5196 16.1052 23.2652 15.9999 23 15.9999Z"
                                                fill="#8B8F92"
                                            />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_1_5233">
                                                <rect width="24" height="24" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                        ))}
                        {(docsByCategory[cat.id] || []).length === 0 && (
                            <p className="text-sm text-(--dark6)">No files added yet.</p>
                        )}
                    </div>
                </div>
            ))}
        </>
    );
};

export default FileUpload;