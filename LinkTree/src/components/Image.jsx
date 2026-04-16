const Image = ({ url }) => {
    return (
        <div>
            <img src={url} className="rounded-[50%] w-[200px] h-[200px] mb-[20px] object-cover border-[2px] text-[#F8FAFC]"/>
        </div>
    )
}

export default Image
