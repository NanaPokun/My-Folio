import Image from "next/image";
import profile from "../public/profile.png";

const About = () => {
    return (
        <div className="container px-4 mx-auto">
            <div className="lg:space-x-5 lg:flex lg:flex-row item-center lg:-mx-4 flex flex-col-reverse text-center lg:text-left">
                <div className="lg:px-4 lg:mt-12 ">
                    <h1 className="text-2xl font-bold text-gray-900 lg:text-5xl dark:text-white">
                        Hello there,
                    </h1>
                    <div className="mt-6 text-gray-800 dark:text-white">
                        <p className="mb-4">
                        I am Felix, a Self taught Developer skilled in Python, HTML, CSS & JS, React & 
                        NextJs, Django, Ruby on Rails, UI/UX design with Canva and Figma. 
                        Front-End Development is what I do most often, a Level 6 Google Maps 
                        Local Guide and a strong Digital Marketing professional. Experienced Service 
                        Technician with a demonstrated history of working in the health, teaching, computer
                        and network security industries. Follow me.
                        </p>
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