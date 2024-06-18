import React from 'react'

const Pagination = ({onPageChange, currentPage, blogs, pageSize}) => {
    const totalPages = Math.ceil(blogs.length / pageSize);

    const renderPaginationLinks = ( ) => {
        return Array.from({length: totalPages}, (_, i) => i + 1).map((pageNumber) => (
            <li className={pageNumber === currentPage ? "activePagination" : ""} key={pageNumber}>
                <a href="#" onClick={() => onPageChange(pageNumber)}>{pageNumber}</a>
            </li>
        ));
    }

  return (
    <ul className='pagination my-8 flex-wrap gap-4'>
        <li className='border-black border-2 bg-orange-100 font-bold py-1 px-2 rounded-md'>
            <button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>Previous</button>
        </li>
        <div className='flex gap-1 font-bold'>
            {renderPaginationLinks()}
        </div>
        <li  className='border-black border-2 font-bold bg-orange-100 py-1 px-2 rounded-md'>
            <button onClick={() => onPageChange(currentPage + 1) } disabled={currentPage === totalPages}>Next</button>
        </li>
    </ul>
  )
}

export default Pagination
