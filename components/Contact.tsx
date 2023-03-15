'use client'
import React from "react";
// import { motion } from "framer-motion";
import { PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};
type Props = {}

// export default function Contact({ }: Props) {
//   const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
//   const onSubmit: SubmitHandler<Inputs> = formData => {
//     window.location.href = `mailto:fredrickrana@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`;
//   };

//   return (
//     <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
//       <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">Contact</h3>
//       <div className="flex flex-col space-y-10">
//         <h4 className="text-4xl font-semibold text-center">
//           I have got just what you need.
//           <span className="decoration-[#F7AB0A]/50 underline">Let's Talk.</span>
//         </h4>

//         <div className="space-y-10">
//           <div className="flex items-center space-x-5 justify-center">
//             <PhoneIcon className="text-[#f7ab0a] h-7 w-7 animate-pulse"/>
//             <p className="text-2xl">+1234567889</p>
//             <EnvelopeIcon className="text-[#f7ab0a] h-7 w-7 animate-pulse" />
//             <p className="text-2xl">fredrickrana@gmail.com</p>

//           </div>
//         </div>

//         <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-2 w-fit mx-auto">
//           <div className="flex space-x-2">
//             <input {...register('name')} className="contactInput" type="text" placeholder="Name"/>
//             <input {...register('email')} className="contactInput" type="email" placeholder="Email" />
//           </div>

//           <input {...register('subject')} className="contactInput" type="text" placeholder="Subject" />

//           <textarea {...register('message')} className="contactInput" name="" id="" cols={30} rows={10} placeholder="Message"></textarea>
//           <button className="bg-[#f7ab0a] py-5 px-10 rounded-md text-black font-bold text-lg" type="submit">Submit</button>
//         </form>

//       </div>
//     </div>
//   )
// }

export default function Contact({ }: Props) {
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = formData => {
    window.location.href = `mailto:fredrickrana@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`;
  };

  return (
    <div className="container h-screen m-auto text-center text-[#e5e1e1]">
      <div className="flex w-full justify-center">
        <h3 className="uppercase tracking-[20px] text-gray-500 text-3xl lg:text-4xl mt-[20%] lg:mt-[10%] mb-[50px]">Contact</h3>
      </div>
      <div className="flex w-[90%] m-auto">
        <h3 className="text-xl font-semibold text-center">
          I'm currently looking for any new opportunities related to Software Development, so please feel free to send me a message. My inbox is always open and I'll try my best to get back to you!
        </h3>
      </div>
      <div className="flex w-[90%] m-auto">
      </div>
    </div>
  )
}
