import React, { useEffect } from 'react';
import ReactPaginate from 'react-paginate';

const Pagination = ({ totalPages, page, setPage }) => {

    const handlePageChange = (selected) => {
        setPage(selected.selected + 1);
    };


    useEffect(() => {
        if (page > totalPages) {
            setPage(totalPages);
        }
    }, [page, totalPages, setPage]);

    return (
        <div className="pagination-container d-flex justify-content-center">
            <ReactPaginate
                pageCount={totalPages}
                pageRangeDisplayed={3}
                marginPagesDisplayed={3}
                onPageChange={handlePageChange}
                forcePage={page - 1}
                previousLabel="Prev"
                nextLabel="Next"
                breakLabel="..."
                containerClassName="pagination justify-content-center"
                pageClassName="page-item"
                pageLinkClassName="page-link"
                activeClassName="active"
                previousClassName="btn btn-primary"
                nextClassName="btn btn-primary"
            />
        </div>
    );

    // Pagination only with prev and next
    
    //   var next = () => {
    //     setPage((x) => x+1);
    //   };

    //   var prev = () => {
    //     if(page === 1) return;
    //     setPage((x) => x-1);
    //   };

    //   return (
    //     <div className='container d-flex justify-content-center gap-5'>
    //         <button onClick={prev} className='btn btn-primary'>Prev</button>
    //         <button onClick={next} className='btn btn-primary'>Next</button>
    //     </div>
    //   )
}

export default Pagination;
