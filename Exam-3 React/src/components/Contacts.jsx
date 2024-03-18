import React, { useState} from 'react';
import { toast } from 'react-toastify';

export default function Contacts() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const isValidEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    const CHAT_ID = '-1002005768837';
    const BOT_TOKEN = '6752195686:AAEk2PgvXP44n-Tv5IJcvCZCkkHOrzeH7pQ';
    if (!name.trim()) {
      toast.error('Enter your name, please');
      return;
    }
    if (name.trim().length < 2) {
      toast.error('Your name is too short');
      return;
    }
    if (!email.trim()) {
      toast.error('Enter your email, please');
      return;
    }
    if (!isValidEmail(email)) {
      toast.error('Incorrect email format, please');
      return;
    }
  
    const message = `<b>Name: </b> ${name}\r\n<b>Email: </b>${email}`;
    const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${encodeURIComponent(message)}&parse_mode=HTML`;
  
    try {
      const response = await fetch(url, {
        method: 'POST'
      });
  
      if (response.ok) {
        setName('');
        setEmail('');
        toast.success('Your message successfully sent.');
      } else {
        throw new Error('Some error occurred.');
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
  

  return (
    <footer>
      <div className='container'>
        <div className='title'><h2>Contacts</h2></div>
        <div id="contact">
          <div>
            <div className="contact-block">
              <div className="lb-contact">
                <ul className="contacts">
                  <li><a href="#" target="_blank" rel="nofollow"><img src="src\assets\images\icon-phone.png"
                    alt="phone" /> +001 356-868-2454</a>
                  </li>
                  <li><a href="#" target="_blank" rel="nofollow"><img src="src\assets\images\icon-emails.png" alt="email" /> moviematrix@servise.com</a>
                  </li>
                </ul>
              </div>
              <form id="feedback_form" onSubmit={handleSubmit}>
                <div className="name">
                  <input type="text" className="form-control" value={name} onChange={handleNameChange} name="name"  placeholder="Name" />
                </div>
                <div className="email">
                  <input type="text" className="form-control" value={email} onChange={handleEmailChange} name="email" placeholder="Email" />
                </div>
                <button type="submit" className="btn-primary">Submit</button>
              </form>
            </div>
          </div>
          <div className="footer-block">
            <div className="social-link wow animate__animated animate__slideInUp">
              <ul>
                <li><a href="#" target="_blank" rel="nofollow"><img className="lazy" src="src\assets\images\icon-facebook.png" alt="link facebook" /></a></li>
                <li><a href="#" target="_blank" rel="nofollow"><img src="src\assets\images\icon-twitter.png" alt="link twitter" /></a></li>
                <li><a href="#" target="_blank" rel="nofollow"><img className="lazy" src="src\assets\images\con-instagram.png" alt="link instagram" /></a></li>
              </ul>
            </div>
            <div className="copi">Copyrights © 2024 MovieMatrix</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
