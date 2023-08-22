import { useRef } from 'react';
import emailjs from '@emailjs/browser';

function ContactUs2() {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const sendEmail = () => { 
    // võtmeteks vasakule poole mis läks template sisse kahe loogelise sulu vahele
    if (nameRef.current && emailRef.current && messageRef.current) {
      const data = {
        "from_name": nameRef.current.value,
        "from_email": emailRef.current.value,
        "message": messageRef.current.value
      }                                                // saadab HTMLi emailJSi
      emailjs.send('service_fum24bj', 'template_ld2lsyd', data, 'Xbn0xj_4LjNugxYGl')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    }
  };

  return (
    <div>
      <label>Name</label> <br />
      <input ref={nameRef} type="text" /> <br />
      <label>Email</label> <br />
      <input ref={emailRef} type="email" /> <br />
      <label>Message</label> <br />
      <textarea ref={messageRef} name="message" /> <br />
      <button onClick={sendEmail}>Sendd</button> <br />
    </div>
  )
}

export default ContactUs2