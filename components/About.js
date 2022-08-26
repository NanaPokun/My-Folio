import Image from "next/image";
import profile from "../public/profile.png";
import userData from "../constants/data";



const experience = [
    {
        title: "General Manager",
        company: "KIC",
        year: "2022",
        companyLink: "#",
        desc: "Contributed to our EdTech programme",
    },
    {
        title: "Freelancer",
        company: "Upwork",
        year: "2021",
        companyLink: "#",
        desc: "Developed scalable websites and applications using tools like React, Next, HTML",
    },
    {
        title: "Founder and Developer",
        company: "Space to Learn",
        year: "2022",
        companyLink: "#",
        desc: "Taking the time to help young ones of various background to develop through technology to meet world demands",
    },
    {
        title: "Internship",
        company: "Fivver",
        year: "2018",
        companyLink: "https://www.fiverr.com/",
        desc: "Developed and designed websites and UI/UX templates for development.",
    },
    {
        title: "National Service",
        company: "SODA, Dodowa.",
        year: "2018",
        companyLink: "#",
        desc: "Assisted in all I.T related issues in the office and participated in data management in on-field activities.",
    },
    // {
    //     title: "College",
    //     company: "University of Ghana, Legon-Accra.",
    //     year: "2015",
    //     companyLink: "https://ug.edu,gh",
    //     desc: "Subjects being CHN- I barely survived with 3.10 GPA. Flex fridays, fellas.",
    // },
];

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
                            </div>
                        </section>
                        <aside className="container px-4 mx-auto mt-16 antialiased">
                            <h2 className="text-5xl font-bold text-gray-900 lg:text-3xl dark:text-white text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-sky-500">
                                Experience
                            </h2>
                            <div className="flex flex-col">
                                <div className="my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                                        <div className="shadow overflow-hidden">
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                                        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                                            <table className="min-w-full divide-y divide-gray-200">
                                                <thead className="bg-gray-50">
                                                    <tr>
                                                        <th
                                                            scope="col"
                                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                        >
                                                            Company
                                                        </th>
                                                        <th
                                                            scope="col"
                                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                        >
                                                            Title
                                                        </th>
                                                        <th
                                                            scope="col"
                                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                        >
                                                            Year
                                                        </th>
                                                        <th
                                                            scope="col"
                                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                        >
                                                            CompanyLink
                                                        </th>
                                                        {/* <th scope="col" className="relative px-6 py-3">
                                                            <span className="sr-only">Edit</span>
                                                        </th> */}
                                                    </tr>
                                                </thead>
                                                <tbody className="bg-white divide-y divide-gray-200">
                                                    {experience.map(exp => (
                                                    <tr key={exp.title}>
                                                        <td className="px-6 py-4 whitespace-nowrap">
                                                            <div className="flex items-center">
                                                                {exp.company }
                                                                {/* company goes here */}
                                                            </div>
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap">
                                                            { exp.title }
                                                            {/* title goes here */}
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap">
                                                            { exp.year }
                                                            {/* year goes here */}
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                            <a href={ exp.companyLink } className="text-red-600 hover:text-blue-900">
                                                                Visit site
                                                            </a>
                                                            {/* company link goes here */}
                                                        </td>
                                                        {/* <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                            <a href={ exp.companyLink } className="text-indigo-600 hover:text-indigo-900">
                                                                Edit
                                                            </a>
                                                        </td> */}
                                                    </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </aside>
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