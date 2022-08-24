import { useState } from 'react';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const [nameInput, setNameInput] = useState<string>('');
  const [mailInput, setMailInput] = useState<string>('');
  const [subjectInput, setSubjectInput] = useState<string>('');
  const [messageInput, setMessageInput] = useState<string>('');
  const [copyInput, setCopyInput] = useState<boolean>(false);

  document.title = 'Contact - JS Dev - Ivan Mankovich';

  const sendEmail = (e: any) => {
    e.preventDefault();
    let a = {
      nameInput: nameInput,
      messageInput: messageInput,
      mailInput: copyInput ? mailInput : '',
      subjectInput: subjectInput,
    };
    emailjs.send('yandex', 'template_0iQK8f1e', a, 'user_D7RLROMMbazb5bBgDJaZG').then(
      () => {
        alert('Message successfully sent!');
        window.location.reload();
      },
      () => {
        alert('Failed to send the message, please try again or contact me via LinkedIn or GitHub');
      }
    );
  };

  return (
    <div className="mt-[48px] xl:mt-0 relative">
      <h1 className="text-3xl md:text-6xl mt-0 md:mt-4">Contact</h1>
      <p className="mt-2 xl:mt-4">
        I am interested in any opportunities - especially on ambitious or large projects. However, if you have any other
        requests or questions, don't hesitate to contact me using below form either.
      </p>
      <form className="block p-6 rounded-lg shadow-lg bg-white/50 max-w-md mt-2 xl:mt-4" onSubmit={sendEmail}>
        <div className="form-group mb-6">
          <input
            type="text"
            className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-green-400 focus:outline-none"
            id="nameInput"
            name="nameInput"
            placeholder="Name"
            required
            value={nameInput}
            onChange={(e: any) => setNameInput(e.target.value)}
          />
        </div>
        <div className="form-group mb-6">
          <input
            type="email"
            className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-green-400 focus:outline-none"
            id="mailInput"
            name="mailInput"
            placeholder="Email address"
            value={mailInput}
            onChange={(e: any) => setMailInput(e.target.value)}
          />
        </div>
        <div className="form-group mb-6">
          <input
            type="text"
            className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-green-400 focus:outline-none"
            id="subjectInput"
            name="subjectInput"
            placeholder="Subject"
            value={subjectInput}
            onChange={(e: any) => setSubjectInput(e.target.value)}
          />
        </div>
        <div className="form-group mb-6">
          <textarea
            className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-green-400 focus:outline-none
      "
            id="messageInput"
            name="messageInput"
            rows={3}
            placeholder="Message"
            value={messageInput}
            onChange={(e: any) => setMessageInput(e.target.value)}
          ></textarea>
        </div>
        <div className="form-group form-check text-center mb-6">
          <input
            type="checkbox"
            className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-green-400 checked:border-green-400 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer"
            id="sendCopyInput"
            checked={copyInput}
            onChange={() => {
              setCopyInput(!copyInput);
            }}
          />
          <label className="form-check-label inline-block text-gray-800" htmlFor="sendCopyInput">
            Send me a copy of this message
          </label>
        </div>
        <input
          type="submit"
          className="
      w-full
      px-8
      py-3
      bg-slate-100
      text-slate-800
      font-medium
      text-base
      leading-tight
      uppercase
      rounded
      border-t-2 border-t-fuchsia-600
      border-l-2 border-l-fuchsia-600
      border-b-2 border-b-green-400
      border-r-2 border-r-green-400
      shadow-md
      hover:bg-slate-300 hover:shadow-lg
      focus:bg-slate-300 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-slate-400 active:shadow-lg
      disabled:bg-slate-600
      disabled:border-t-slate-600
      disabled:border-l-slate-600
      disabled:border-b-slate-600
      disabled:border-r-slate-600
      transition
      duration-150
      ease-in-out"
          value={'Send'}
          disabled={!nameInput?.trim?.() || !mailInput?.trim?.() || !subjectInput?.trim?.() || !messageInput?.trim?.()}
        ></input>
      </form>
    </div>
  );
};
