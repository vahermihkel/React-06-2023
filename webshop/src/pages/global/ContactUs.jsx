import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    console.log(e);
    e.preventDefault(); // JavaScripti tavapärane käitumine kui Form Submititakse
    console.log(form.current); // <---- muutujate sisu kuvamiseks / info saamiseks

                                                      // saadab HTMLi emailJSi
    emailjs.sendForm('service_fum24bj', 'template_ld2lsyd', form.current, 'Xbn0xj_4LjNugxYGl')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label> <br />
      <input type="text" name="from_name" /> <br />
      <label>Email</label> <br />
      <input type="email" name="from_email" /> <br />
      <label>Message</label> <br />
      <textarea name="message" /> <br />
      <input type="submit" value="Send" /> <br />
    </form>
  );
};