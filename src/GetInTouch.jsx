import React, { useRef, useState } from "react";
import { FaGithub, FaPhone } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import emailjs from "@emailjs/browser";

const GetInTouch = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_r4nwh45", "template_kjescyi", form.current, {
        publicKey: "baUsdZVFWBmX_cqqB",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
      setName('');
      setEmail('');
      setMessage('');
  };

  return (
    <div>
      <h1 className="items-center justify-center flex p-4 font-bold lg:text-2xl underline decoration-sky-500">
        Get in Touch
      </h1>
      <p className="items-center justify-center flex font-bold text-center p-10 lg:text-xl">
        I'm always open to discussing new projects, collaborations, or
        opportunities. Feel free to reach out through any of the following
        methods!
      </p>
      <div className=" justify-evenly items-center md:flex lg:flex">
        <div className="bg-slate-400 justify-center items-center rounded-lg  shadow-xl  p-6">
          <h1 className="justify-center items-center text-2xl p-2 font-bold">
            Contact
          </h1>
          <form className="space-y-4 flex-col p-3 mb-3" ref={form} onSubmit={sendEmail}>
            <input
              required
              className="rounded-lg p-1"
              placeholder="Name"
              type="text"
              name="from_name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <br />
            <input
              required
              className="rounded-lg p-1"
              placeholder="Email"
              type="email"
              name="from_email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <textarea
              required
              className="rounded-lg p-1"
              placeholder="message"
              name="message"
              value={message}
              onChange={(e)=>setMessage(e.target.value)}
            />
            <br />
            <input
              className="bg-white p-1 font-bold rounded-md hover:text-white hover:bg-black"
              type="submit"
              value="Send"
            />
          </form>
        </div>
        <div className="justify-start items-center flex-col text-start font-bold flex gap-3 p-4">
          <div>
            <div className="flex p-3">
              <div>
                <IoIosMail />
              </div>
              <div>sivabalan082001@gmail.com</div>
            </div>
            <div className="flex p-3">
              <div>
                <FaPhone />
              </div>
              <div>7558180687</div>
            </div>
            <div className="flex p-3">
              <div>
                <FaGithub />
              </div>
              <div>sivabalanmano</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
