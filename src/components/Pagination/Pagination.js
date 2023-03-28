import React, { useState } from 'react';

const Pagination = ({ itemsPerPage, totalItems, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
        pageNumbers.push(i);
    }

    const [currentPage, setCurrentPage] = useState(1);

    const handleClick = (event, pageNumber) => {
        event.preventDefault();
        setCurrentPage(pageNumber);
        paginate(pageNumber);
    };

    return (
        <nav className=''>
            <ul className='flex justify-center -space-x-px mt-16'>
                {pageNumbers.map((pageNumber) => (
                    <li key={pageNumber}>
                        <a href="!#" class={`${pageNumber === currentPage ? 'px-3 py-2 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 ' : 'px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700'} `}
                            onClick={(event) => handleClick(event, pageNumber)}> {pageNumber}</a>
                    </li>

                ))}
            </ul>
        </nav>
    );
};

export default Pagination;
