import Link from "next/link";
import ThemeSwitch from "../components/ThemeSwitch";

const Navbar = () => {
    return (
        // <div className="flex mb-4 dark:bg-black">
        //     <div className="w-1/4 bg-gray-500 h-12">
        //         <Link href= "/">
        //             <a className= {"font-medium tracking-wider transition-colors text-gray-900 hover:text-sky-500 uppercase dark:text-white"} >
        //                 Felix Opoku Osei
        //             </a>
        //         </Link>
        //     </div>
        //     <div className={"w-1/4 bg-gray-400 h-12"}>
        //         <Link href="/about">
        //                 <a className={"block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"}>
        //                     About
        //                 </a>
        //             </Link>
        //     </div>
        // </div>
        <nav className={"flex items-center justify-between flex-wrap bg-black-500 p-8"}>   
            <div className={"flex items-center flex-shrink-0 text-white mr-6"}>
                <Link href="/">
                    <a>
                        <h1 className={"font-semibold tracking-wider transition-colors text-xl-gray-950 hover:text-sky-500 uppercase dark:text-white"}>
                            Felix O. Osei
                        </h1>
                        <p className="text-xs font-light text-gray-500 dark:text-gray-200">
                            Front End Developer
                        </p>
                    </a>
                </Link>
            </div>
            <div className={"w-full block flex-grow lg:flex lg:items-center lg:w-auto"}>
                <div className={"text-lg lg:flex-grow"}>
                    <Link href="/about">
                        <a className={"block mt-4 lg:inline-block lg:mt-0 text-gray-600 hover:text-sky-500 mr-4"}>
                            About
                        </a>
                    </Link>
                    <Link href="/project">
                        <a className={"block mt-4 lg:inline-block lg:mt-0 text-gray-600 hover:text-sky-500 mr-4"}>
                            Projects
                        </a>
                    </Link>
                    <Link href="/">
                        <a className={"block mt-4 lg:inline-block lg:mt-0 text-gray-600 hover:text-sky-500"}>
                            Designs
                        </a>
                    </Link>
                </div>
                <div>
                    <Link href="/contact">
                        <a className={"inline-block text-lg px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"}>
                            Contact
                        </a>
                    </Link>
                </div>
                <ThemeSwitch />
            </div>
        </nav>
    );
}
 
export default Navbar;