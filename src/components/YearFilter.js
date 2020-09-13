import React from 'react';

const YearFilter = ({ year, setYear }) => {
    const handleKeyDown = e => {
        if (e.keyCode === 13) {
            setYear(e.target.value);
        }
    };

    return (
        <div className="year-filter">
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="inputGroup-sizing-default">Year</span>
                </div>
                <input type="text" className="form-control" onKeyDown={(e) => handleKeyDown(e)} placeholder={year} />
            </div>
        </div>
    );
};

export default YearFilter;