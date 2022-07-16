import { SiGithub, SiLinkedin, SiDevpost, SiMedium, SiHashnode, SiTwitter } from "react-icons/si";


const Footer = () => {
    return (
        <div className="mt-12 lg:mt-18 sm:pb-36 sm:py-12 py-6">
            <div className="max-w-4xl px-4 mx-auto text-gray-800 dark:text-white">
                <div className="pb-8 mb-2 border-t-2 border-gray-300 dark:border-white-300"></div>
                <div className="flex flex-col justify-between lg:flex-row items-center">
                    <span text-gray-900 font-semibold text-lg mr-2>Yawcodes</span>&copy; {new Date().getFullYear()} All Rights Reserved
                    <div className="flex flex-wrap pt-2 sm:space-x-4 space-x-2 font-medium lg:pt-0">
                        <a
                            href="https://twitter.com/nanayaw_codes"
                            className={"transition-colors hover:text-yellow-500"}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <SiTwitter />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/felix-osei-1890401a1/"
                            className={"transition-colors hover:text-yellow-500"}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <SiLinkedin />
                        </a>
                        <a
                            href="https://github.com/NanaPokun"
                            className={"transition-colors hover:text-yellow-500"}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <SiGithub />
                        </a>
                        <a
                            href="https://medium.com/@nanaseipoku25"
                            className={"transition-colors hover:text-yellow-500"}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <SiMedium />
                        </a>
                        <a
                            href="https://dev.to/nanayaw_codes"
                            className={"transition-colors hover:text-yellow-500"}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <SiDevpost />
                        </a>
                        <a
                            href="https://nanapokun.hashnode.dev/"
                            className={"transition-colors hover:text-yellow-500"}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <SiHashnode />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Footer;