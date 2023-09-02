// "use client";
// import React, {
//   useEffect,
//   useState,
//   useRef,
//   useMemo,
//   forwardRef,
//   useImperativeHandle,
// } from "react";
// // ... (other imports)
// import JoditEditor from "jodit-react"; // Import the JoditEditor component directly

// const Page = ({ props, ref }) => {
//   const editor = useRef(null);
//   const [content, setContent] = useState("");
//   const [author, setAuthor] = useState("");
//   const [userId, setUserid] = useState("");
//   const [randNumber, setRandNumber] = useState();
//   const [slug, setSlug] = useState("");
//   const [title, setTitle] = useState("");
//   const [category, setCategory] = useState("");
//   // ... (rest of your code)

//   // Expose JoditEditor's API functions through the ref
//   useImperativeHandle(ref, () => ({
//     getContent: () => editor.current?.value,
//     // Add more functions here if needed
//   }));
//   const modules = {
//     toolbar: [
//       [{ header: "1" }, { header: "2" }, { font: [] }],
//       [{ size: [] }],
//       ["bold", "italic", "underline", "strike", "blockquote"],
//       [
//         { list: "ordered" },
//         { list: "bullet" },
//         { indent: "-1" },
//         { indent: "+1" },
//       ],
//       ["link", "image", "video"],
//       ["clean"],
//     ],
//     clipboard: {
//       // toggle to add extra line breaks when pasting HTML:
//       matchVisual: false,
//     },
//   };
//   const formats = [
//     "header",
//     "font",
//     "size",
//     "bold",
//     "italic",
//     "underline",
//     "strike",
//     "blockquote",
//     "list",
//     "bullet",
//     "indent",
//     "link",
//     "image",
//     "video",
//   ];
//   const config = {
//     readonly: false,
//     height: "450px",
//     width: "100%",
//     showXPathInStatusbar: false,
//     showCharsCounter: false,
//     showWordsCounter: false,
//     toolbarAdaptive: true,
//     toolbarSticky: true,
//     imageDefaultWidth: 250,
//     style: {
//       background: "#27272E",
//       color: "rgba(255,255,255,0.5)",
//     },
//   };

//   return (
//     <div className="pb-16">
//       <JoditEditor
//         ref={editor} // Use the ref for the JoditEditor component
//         value={content}
//         tabIndex={1}
//         config={config}
//         onBlur={(newContent) => setContent(newContent)}
//         onChange={(newContent) => {}}
//       />
//       {/* ... (rest of your JSX) */}
//     </div>
//   );
// };

// export default Page;
import React from 'react'

const Page = () => {
  return (
    <div>Page</div>
  )
}

export default Page