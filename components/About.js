import Image from "next/image";
import profile from "../public/profile.png";
import userData from "../constants/data";

const About = () => {
    return (
        <div className="container px-4 mx-auto">
            <div className="lg:space-x-5 lg:flex lg:flex-row item-center lg:-mx-4 flex flex-col-reverse text-center lg:text-left">
                <div className="lg:px-4 lg:mt-12 ">
                    <h1 className="text-2xl font-bold text-gray-900 lg:text-5xl dark:text-white text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-sky-500">
                        Hello there,
                    </h1>
                    <div className="mt-6 text-gray-800 dark:text-white">
                        <p className="mb-4">
                        I am Felix, a Self taught Developer skilled in Python, HTML, CSS & JS, React & 
                        NextJs, Django, Ruby on Rails, UI/UX design with Canva and Figma. 
                        Front-End Development is what I do most often, a Level 6 Google Maps 
                        Local Guide and a strong Digital Marketing professional. Experienced Service 
                        Technician with a demonstrated history of working in the health, teaching, computer
                        and network security industries. 
                        Knowledgeable Front-End Developer with understanding in the creation, design and development of interactive websites.
                        5years experience in building user interactive web pages that are suitable on all screens and compatible with web browsers of
                        the modern era. Expert debugger, data analyst and digital marketer. Follow me.
                        </p>
                        <section className="container px-4 mx-auto mt-16 antialiased">
                            <h2 className="text-5xl font-bold text-gray-900 lg:text-3xl dark:text-white text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-sky-500">
                                Tech Stack
                            </h2>
                            <div className="max-w-4xl mx-auto mt-5 antialiased">
                                <img src={ userData.techstack } alt="mystack" className="object-fill-center h-full w-full " />
                                {/* <div className="col-start-1 col-end-3">
                                    <img src={ userData.techstack } alt="mystack" className="h-full w-full " />
                                </div>
                                <div className="col-end-7 col-span-2">
                                    <img src={ userData.techstack1 } alt="mystack1" className="h-full w-full" />
                                </div> */}
                                
                                {/*  */}
                            </div>
                        </section>
                        {/* <div className="container px-4 mx-auto mt-16 antialiased">
                                <h2 className="text-5xl font-bold text-gray-900 lg:text-3xl dark:text-white text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-sky-500">
                                    Experience
                                </h2>
                                <div className="container">
                                    <h2>{ userData.experience.title }</h2>
                                </div>    
                        </div> */}
                    </div>
                </div>
                <div className="flex-shrink-0 lg:mt-12 lg:px-4 mb-10">
                    <Image
                        src={ profile }
                        alt="Profile"
                        priority={true}
                        className="rounded-full"
                        width={250}
                        height={250}
                        placeholder="blur"
                    />
                </div>
            </div>
        </div>
    );
}
 
export default About;