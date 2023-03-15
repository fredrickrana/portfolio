'use client'
import React from "react";
import { motion } from "framer-motion";
import { EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function Contact() {
  const { register, handleSubmit } = useForm<Inputs>();
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
      <div className="flex w-[90%] m-auto text-2xl items-center justify-center mt-10 space-x-5">
        <EnvelopeIcon className="text-[#62f8d5]/70 h-7 w-7 animate-pulse" />
        <p className="hover:text-[#62f8d5]/70 cursor-pointer" onClick={
          () => { window.location.href = 'mailto:fredrickrana@gmail.com'; }
        }>fredrickrana@gmail.com</p>
      </div>
      <div className="flex w-[90%] m-auto text-md  sm:text-xl items-center justify-center mt-10">
        <motion.form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-2 w-fit mx-auto"
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          transition={{
            duration: 1.5
          }}
        >
          <div className="flex space-x-2">
            <input {...register('name')} className="contactInput" type="text" placeholder="Name" />
            <input {...register('email')} className="contactInput" type="email" placeholder="Email" />
          </div>
          <input {...register('subject')} className="contactInput" type="text" placeholder="Subject" />
          <textarea {...register('message')} className="contactInput resize-none scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#62f8d5]" cols={30} rows={10} placeholder="Message"></textarea>
          <button className="bg-[#62f8d5]/40 py-5 px-10 rounded-md font-bold text-lg hover:bg-[#62f8d5]/60" type="submit">
            Submit
          </button>
        </motion.form>
      </div>
    </div>
  )
}
