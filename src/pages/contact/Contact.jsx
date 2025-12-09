import './Contact.css'
import contact from '../../assets/images/contact.jpg'
import Footer from "../../components/footer/Footer";
import Hero from "../../components/hero/Hero";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'

export default function Contact() {
  return (
    <>
    <Hero
      title={"Contact Us"}
      image={contact}
    />

    <main className='contact-dub-info container'>
      <section className='contact-det'>
          <h1>Reel Revival</h1>
          <h2>123 Tackle Lane Harbor, FL 12345</h2>
          <a className='phone-num' href='tel:5551234567'><p><FontAwesomeIcon icon={faPhone}/>&nbsp; (555) 123 - 4567</p></a>
          <br />
          <a className='email' href="mailto:info@reelrevival.com"><p className='email'><FontAwesomeIcon icon={faEnvelope}/>&nbsp; info@reelrevival.com</p></a>
      </section>

      <section className='contact-fm'>
          <form>
              <input type="text" name='Name' placeholder='Name' required/>
              <input type="email" name='Email' placeholder='Email' required />
              <input type="text" name='Subject' placeholder='Subject' required/>
              <textarea name="Message" id="" rows="6" placeholder='Message' required></textarea>
              <button type='submit'>Submit</button>
            </form>
      </section>
    </main>
    <Footer/>
    </>
  )
}