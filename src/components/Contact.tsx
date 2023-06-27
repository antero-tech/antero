import { useState } from 'react';

interface FormValues {
  name: string;
  email: string;
  description: string;
}

const Contact: React.FC = () => {
  const [formValues, setFormValues] = useState<FormValues>({
    name: '',
    email: '',
    description: '',
  });
  return (
    <div id='contact'>
      <div id='contact-blurb'>
        <h2>Get in contact.</h2>
        <p>
          Our team would love to hear about your project and how we can help.
          Let's get started!
        </p>
      </div>
      <form id='contact-form'>
        <label htmlFor='name'>Name</label>
        <input type='text' name='name' />
        <label htmlFor='email'>Email</label>
        <input type='email' name='email' required={true} />
        <label htmlFor='description'>
          Tell us a little bit about your project
        </label>
        <input type='text' name='description' />
        <button type='submit' id='contact-sumbit-button'>
          Send
        </button>
      </form>
    </div>
  );
};

export default Contact;
