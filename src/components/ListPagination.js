import React from 'react'

export const ListPagination = ({ resultsNumber, currentPage, setPageNumber }) => {
    const pageNumber = Math.ceil(resultsNumber / 10);
    const pages = [...Array(pageNumber)].map((item, index) => item = index + 1);

    const setNextPage = () => {
        if (currentPage < pageNumber) {
            setPageNumber(currentPage + 1)
        }
    }

    const setPrevPage = () => {
        if (currentPage > 1) {
            setPageNumber(currentPage - 1)
        }
    }
    
    return (
        <div className="pagination-wrapper">
            <nav aria-label="Page navigation example">
                <ul className="pagination">
                    <li className="page-item">
                        <button className="page-link" onClick={setPrevPage} aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                            <span className="sr-only">Previous</span>
                        </button>
                    </li>
                    {pageNumber > 3
                        ? <React.Fragment>
                            {pages.slice(currentPage - 1, currentPage + 2).map(page =>
                                <li key={page} className="page-item"><button onClick={() => setPageNumber(page)} className="page-link">{page}</button></li>
                            )}
                            <li key="..." className="page-item"><button className="page-link">...</button></li>
                            <li key="last-page" className="page-item"><button onClick={() => setPageNumber(pageNumber)} className="page-link">{pageNumber}</button></li>
                        </React.Fragment>
                        : pages.map(page =>
                            <li key={page} className="page-item"><button onClick={() => setPageNumber(page)} className="page-link"></button>{page}</li>
                        )
                    }
                    <li className="page-item">
                        <button className="page-link" onClick={setNextPage} aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                            <span className="sr-only">Next</span>
                        </button>
                    </li>
                </ul>
            </nav>
        </div >
    )
};

export default ListPagination;
