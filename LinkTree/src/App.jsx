import Image from "./components/Image"
import Menu from "./components/Menu"

const App = () => {

    const menu = ["Github", "Facebook", "Instragam", "Line"]
    const iconClass = ["fa-brands fa-github", "fa-brands fa-facebook", "fa-brands fa-instagram", "fa-brands fa-line"]
    const links = [
        "https://github.com/wrcpyp",
        "https://www.facebook.com/worachet.purikuntinest/",
        "https://www.instagram.com/acee1629/",
        "https://www.line.me/en"
    ]

    return (
        <>
            <div className="w-100% h-screen bg-[#0F172A] flex justify-center items-center flex-col">
                <Image url="https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U" />
                <a href="#" className="text-[20px] text-[#F8FAFC] mb-[20px]">@wrcpyp</a>
                <Menu menu={menu} icon={iconClass} links={links}/>
            </div>
        </>
    )

}

export default App