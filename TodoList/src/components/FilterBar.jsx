const FilterBar = ({ filter, showAllTasks, showActiveTasks, showDoneTasks }) => {
    const btn = (label, onClick, active) =>
        <button
            onClick={onClick}
            className={`text-sm px-3 py-1 rounded-md transition-colors ${active
                    ? "bg-stone-800 text-white"
                    : "text-stone-400 hover:text-stone-700"
                }`}
        >
            {label}
        </button>

    return (
        <div className="flex gap-1 mb-4">
            {btn("All", showAllTasks, filter === "All")}
            {btn("Active", showActiveTasks, filter === "Active")}
            {btn("Done", showDoneTasks, filter === "Done")}
        </div>
    )
}

export default FilterBar