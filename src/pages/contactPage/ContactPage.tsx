import ContactForm from './components/ContactForm';
import './styles.scss';

const ContactPage = () => {
  return (
    <div id='contact-page' className='pages'>
      <header className='contents'>
        <h1>contact us</h1>
      </header>
      <div id='form-area'>
        <div className='contents'>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
