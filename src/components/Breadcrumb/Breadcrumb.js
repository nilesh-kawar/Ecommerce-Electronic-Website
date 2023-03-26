import React from "react";

const Breadcrumb = ({ parent, child }) => {
  return (
    <nav className="flex bg-gray-200 py-6" aria-label="Breadcrumb">
      <div className="container mx-auto">
        <ol className="mx-5 md:mx-0 inline-flex items-center space-x-1 md:space-x-3">
          <li className="inline-flex items-center">
            <a
              href="/"
              className="inline-flex items-center text-base font-medium text-gray-700 hover:text-primary"
            >
              <svg
                aria-hidden="true"
                className="w-4 h-4 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
              </svg>
              {parent}
            </a>
          </li>
          <li aria-current="page">
            <div className="flex items-center">
              <svg
                aria-hidden="true"
                className="w-6 h-6 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="ml-1 text-base font-medium text-gray-500 md:ml-2 ">
                {child}
              </span>
            </div>
          </li>
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumb;

// {
//   /* <li>
//   <div className="flex items-center">
//     <svg
//       aria-hidden="true"
//       className="w-6 h-6 text-gray-400"
//       fill="currentColor"
//       viewBox="0 0 20 20"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <path
//         fill-rule="evenodd"
//         d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
//         clip-rule="evenodd"
//       ></path>
//     </svg>
//     <a
//       href="/"
//       className="ml-1 text-base font-medium text-gray-700 hover:text-primary  md:ml-2 "
//     >
//       Projects
//     </a>
//   </div>
// </li>; */
// }
