import React from "react";

const FilterBar = () => {
    return (
        <>
            <div>
                <button className="border-[1px] mr-[10px]">All</button>
                <button className="border-[1px] mr-[10px]">Activ</button>
                <button className="border-[1px]">Done</button>
            </div>
        </>
    )
}

export default FilterBar
