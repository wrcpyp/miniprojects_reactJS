const FilterBar = ({ showActiveTasks, showDoneTasks, showAllTasks }) => {
    return (
        <div className="mt-[10px]">
            <button onClick={showAllTasks} className="border-[1px] mr-[10px] p-[5px]">All</button>
            <button onClick={showActiveTasks} className="border-[1px] mr-[10px] p-[5px]">Active</button>
            <button onClick={showDoneTasks} className="border-[1px] p-[5px]">Done</button>
        </div>
    )
}

export default FilterBar
