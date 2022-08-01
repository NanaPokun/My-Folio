import React from 'react'
import userData from "../constants/data";
import { SiTwitter, SiLinkedin, SiGithub } from "react-icons/si";

export default function Contact() {
  return (
    <section>
        <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
            <h1 className=" text-6xl md:text-6xl font-bold py-10 text-center">
                Contact Me
            </h1>
        </div>
      <div className="relative z-10 rounded-md shadow-md bg-[#02044A] p-4 md:p-10 lg:p-20 max-w-6xl mx-auto mb-20 -mt-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="md:ml-4">
            <header className="">
              <h1 className="text-gray-50 font-semibold text-2xl">
                  Get in touch with me today.
              </h1>
              <p className="font-light text-base text-gray-200 mt-2">
                  Fill in your details below and I'll get back to you as soon as possible.
              </p>
            </header>
            <div className="icons-container inline-flex flex-col my-20">
              <div className="flex flex-row items-center space-x-6 rounded-md border border-[#02044A] hover:border hover:border-blue-500 p-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-telephone-fill h-4 w-4 text-blue-500"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
                  />
                </svg>
                <p className="text-gray-50 font-light text-sm">
                  {userData.phone}
                </p>
              </div>
              <div className="flex flex-row items-center space-x-6 rounded-md border border-[#02044A] hover:border hover:border-blue-500 p-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-envelope-fill h-4 w-4 text-blue-500"
                  viewBox="0 0 16 16"
                >
                    <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z" />
                </svg>
                <p className="text-gray-50 font-light text-sm">
                    {userData.email}
                </p>
              </div>
              <div className="flex flex-row items-center space-x-6 rounded-md border border-[#02044A] hover:border hover:border-blue-500 p-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-pin-fill h-4 w-4 text-blue-500"
                  viewBox="0 0 16 16"
                >
                  <path d="M4.146.146A.5.5 0 0 1 4.5 0h7a.5.5 0 0 1 .5.5c0 .68-.342 1.174-.646 1.479-.126.125-.25.224-.354.298v4.431l.078.048c.203.127.476.314.751.555C12.36 7.775 13 8.527 13 9.5a.5.5 0 0 1-.5.5h-4v4.5c0 .276-.224 1.5-.5 1.5s-.5-1.224-.5-1.5V10h-4a.5.5 0 0 1-.5-.5c0-.973.64-1.725 1.17-2.189A5.921 5.921 0 0 1 5 6.708V2.277a2.77 2.77 0 0 1-.354-.298C4.342 1.674 4 1.179 4 .5a.5.5 0 0 1 .146-.354z" />
                </svg>
                <p className="text-gray-50 font-light text-sm">
                  {userData.address}
                </p>
              </div>
            </div>
            <div className="social-icons flex flex-row space-x-8">
              <a
                href={userData.socialLinks.twitter}
                className="h-10 w-10 rounded-full hover:bg-blue-500 flex items-center justify-center cursor-pointer"
              >
                <SiTwitter />
              </a>
              <a
                href={userData.socialLinks.linkedin}
                className="h-10 w-10 rounded-full hover:bg-blue-500 flex items-center justify-center cursor-pointer"
              >
                <SiLinkedin />
              </a>
              <a
                href={userData.socialLinks.github}
                className="h-10 w-10 rounded-full hover:bg-blue-500 flex items-center justify-center cursor-pointer"
              >
                <SiGithub />
              </a>
            </div>
          </div>
          <form className="form rounded-lg bg-white p-4 flex flex-col">
            <label htmlFor="name" className="text-sm text-gray-600 mx-4">
              Name
            </label>
            <input
              type="text"
              className="font-light rounded-md border focus:outline-none py-2 mt-2 px-1 mx-4 focus:ring-2 focus:border-none ring-blue-500"
              name="name"
              placeholder='Enter your name here......'
            />
            <label htmlFor="email" className="text-sm text-gray-600 mx-4 mt-4">
              Email
            </label>
            <input
              type="text"
              className="font-light rounded-md border focus:outline-none py-2 mt-2 px-1 mx-4 focus:ring-2 focus:border-none ring-blue-500"
              name="email"
              placeholder='Enter your email here......'
            />
            <label
              htmlFor="message"
              className="text-sm text-gray-600 mx-4 mt-4"
            >
              Message
            </label>
            <textarea
              rows="4"
              type="text"
              className="font-light rounded-md border focus:outline-none py-2 mt-2 px-1 mx-4 focus:ring-2 focus:border-none ring-blue-500"
              name="message"
              placeholder='Write your message here......'
            ></textarea>
            <button
              type="submit"
              className="bg-blue-500 rounded-md w-1/2 mx-4 mt-8 py-2 text-gray-50 text-xs font-bold"
            >
              Submit Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}




















// import React from 'react';
// import { useState } from 'react';
// import { useForm } from 'react-hook-form';

// export default function Contact() {
//     const [ name, setName ] = useState("");
//     const [ email, setEmail ] = useState("");
//     const [ message, setMessage ] = useState("");
//     const [ phone, setPhone ] = useState("");
    
//     const handleSubmit = e => {
//         e.preventDefault();
//         const data = {
//             name: name,
//             email: email,
//             phone: phone,
//             message: message
//         };
//         // console.log(data);
//         fetch('/api/contact', {
//             method: 'post',
//             body: JSON.stringify(data),
//         });
//     };

//     const { register, errors } = useForm();

//     return (
//     <div className='container'>
//         <form onSubmit={ handleSubmit } classname="">
//             <label htmlFor="name">Name:</label>
//             <input 
//                 id="name"
//                 type="text" 
//                 onChange={e => setName(e.target.value)}
//                 ref={register ({ required: true })}
//             />
//             {errors.name && <p>Name required</p>}
//             <label htmlFor="email">Email:</label>
//             <input 
//                 id="email"
//                 type="email" 
//                 onChange={e => setEmail(e.target.value)}
//                 ref={register ({ required: true })}
//             />
//             {errors.email && <p>Email required</p>}
//             <label htmlFor="phone">Telephone:</label>
//             <input 
//                 id="phone"
//                 type="tel" 
//                 onChange={e => setPhone(e.target.value)}
//                 ref={register ({ required: true })}
//             />
//             {errors.phone && <p>Number required</p>}
//             <label htmlFor="message">Message:</label>
//             <input 
//                 id="message"
//                 type="text" 
//                 rows="4"
//                 onChange={e => setMessage(e.target.value)}
//                 ref={register}
//             />
//             <button type='submit'>Send</button>
//         </form>
//     </div>
//   );
// }
