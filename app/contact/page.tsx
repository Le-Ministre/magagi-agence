"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const page = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [formStatus, setFormStatus] = useState(null);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const isFormValid = email && subject && message;

  const handleFormSubmit = (e: any) => {
    e.preventDefault();

    if (!isFormValid) {
      setFormStatus(formStatus);
      alert("veillez remplir tout les champs");
    }

    setIsButtonDisabled(true);

    let data = {
      name: name,
      email: email,
      subject: subject,
      message: message, // ou simplement message
    };
    console.log(data);

    fetch("/api/send", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, subject, message }),
    })
      .then((response) => {
        return response.json();
      })
      .then(() => {
        // Réinitialisez les champs du formulaire après la soumission réussie
        setFormStatus(formStatus);
        setEmail("");
        setSubject("");
        setMessage("");
      })
      .catch((error) => {
        setFormStatus(formStatus);
        console.error(error);
      })
      .finally(() => {
        setIsButtonDisabled(false);
      });
  };

  // const handleClick = (e: any) => {
  //   e.preventDefault();
  // };

  // function handleClick(event: MouseEvent<HTMLButtonElement, MouseEvent>): void {
  //   throw new Error('Function not implemented.');
  // }

  return (
    <section
      id="contact"
      className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 py-24 "
    >
      <div className="text-center">
        <div className="flex text-center justify-center bg-slate-500 w-96 mx-auto">
          <FontAwesomeIcon icon={faPhone} className="text-6xl pt-4 me-8" />
          <div className="pt-4">
          <h5 className="text-4xl font-bold">Contact Us</h5>
          <p>+227 99232802</p>
          <p>+90 536 013 57 04</p>
          </div>
        </div>
        <div>
          <FontAwesomeIcon icon={faPhone} className="text-6xl " />
          <h5>Our Email</h5>
          <p>Agencemagagi@gmail.com</p>
        </div>
        <div>
          <FontAwesomeIcon icon={faPhone} className="text-6xl " />
          <h5>Our Localisation</h5>
          <p>Niamey Niger</p>
          <p>Le virage entre BCAO et FENIFOOT à 500m</p>
          <p>Turquie Istanbul</p>
          <p>Ortakoy.1 850</p>
        </div>
        <div>
          <FontAwesomeIcon icon={faPhone} className="text-6xl " />
          <h5>Open Hours</h5>
          <p>Mon - Fri: 9:00 - 17:00</p>
          <p>+90 536 013 57 04</p>
        </div>
      </div>

      <div className="me-8">
        <div>
          <h1 className="text-4xl font-blod text-black mb-12">Contact Me</h1>
          <h5 className="text-xl font-bold text-black my-2 "> Let Connect</h5>
          <p className="text-black mb-4max-w-md">
            {""}I am currently looking for new opportunities, my inbox is always
            open. Whether you have a question or just want to say hi, I will try
            my best to get back to you!
          </p>
        </div>
        <form className="flex flex-col grap-6 mt-8" onSubmit={handleFormSubmit}>
          <div className="flex w-full ">
            <div className="mb-6 w-1/2 me-2">
              <label
                htmlFor="name"
                className="text-black block mb-2 text-sm font-medium"
              >
                Your full name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                name="name"
                id="name"
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-6 w-1/2">
              <label
                htmlFor="email"
                className="text-black block mb-2 text-sm font-medium"
              >
                Your email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                name="email"
                id="email"
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Enter your email@gmail.com"
              />
            </div>
          </div>
          <div className="flex w-full">
            <div className="mb-6 w-1/2 me-2">
              <label
                htmlFor="number"
                className="text-black block mt-4 text-sm font-medium"
              >
                Your number
              </label>
              <input
                type="number"
                value={number}
                onChange={(e) => {
                  setNumber(e.target.value);
                }}
                name="number"
                id="number"
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Enter your number "
              />
            </div>
            <div className="mb-6 w-1/2">
              <label
                htmlFor="Subject"
                className="text-black block  text-sm font-medium"
              >
                Subject
              </label>
              <input
                type="text"
                value={subject}
                onChange={(e) => {
                  setSubject(e.target.value);
                }}
                name="subject"
                id="subject"
                className="bg-[#18191E] mt-4 border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="just say hi"
              />
            </div>
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-black block mt-4 text-sm font-medium"
            >
              Message
            </label>
            <textarea
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              name="message"
              id="message"
              className="bg-[#18191E] mt-4 border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Let's talk about... "
            />
          </div>
          <button
            type="submit"
            // onClick={handleClick}
            className="bg-sky-900 hover:bg-primary-700 text-gray-100 font-medium py-2  rounded-lg w-1/4 "
            disabled={!isFormValid || isButtonDisabled}
          >
            Send Message
          </button>
          {formStatus === "ton message à bien été réussi, merci!"}
          {/* {formStatus && <p style={{ color: formStatus.includes('succès') ? 'green' : 'red' }}>{formStatus}</p>} */}
          {/* <p className='text-secondary-500 text-sm mt-2'>
            Email sent successfully
          </p> */}
        </form>
      </div>

      {/* <div className='bg-black'></div> */}
    </section>
  );
};

export default page;
