const Menu = ({ menu, icon, links }) => {
    return (
        <div>
            {menu.map((val, index) => (
                <div className="w-[700px]">
                    <a href={links[index]} target="_blank" className="flex justify-center items-center text-[#F8FAFC] border-[2px] mt-[20px] p-[10px] rounded-[10px] transition-all duration-300 ease-in-out hover:bg-[#38BDF8]">
                        <i className={`${icon[index]} mr-[5px]`}></i>
                        <p>{val}</p>
                    </a>
                </div>
            ))}
        </div>
    )
}

export default Menu
