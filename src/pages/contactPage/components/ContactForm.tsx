import { useState } from 'react';

interface FormValues {
  name: string;
  email: string;
  description: string;
}

const ContactForm: React.FC = () => {
  const [formValues, setFormValues] = useState<FormValues>({
    name: '',
    email: '',
    description: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    // console.log('e.target: ', e.target);
    const { name, value } = e.target;
    setFormValues((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // console.log('formValues: ', formValues);
    const { name, email, description } = formValues;
    if (name && email && description) {
      const message = `Name: ${name}\nEmail: ${email}\nDescription: ${description}`;
      //server side send an email
      //TO DO: DO THIS
      console.log('sending email: ', message);
    }
  };

  return (
    <div id='contact'>
      <div id='contact-blurb'>
        <h2>Reach Out!</h2>
        <p>
          Our team would love to hear about your project and how we can help.
          Let's get started!
        </p>
      </div>
      <div id='verticle-line'></div>
      <hr id='horizontal-line' />
      <form id='contact-form' onSubmit={handleSubmit}>
        <div className='form-group'>
          <span>
            <label htmlFor='name'>Name</label>
          </span>
          <input
            type='text'
            id='name'
            name='name'
            onChange={handleChange}
            value={formValues.name}
            required
          />
        </div>
        <div className='form-group'>
          <span>
            <label htmlFor='email'>Email </label>
          </span>
          <input
            type='email'
            id='email'
            name='email'
            onChange={handleChange}
            value={formValues.email}
            required
          />
        </div>
        <label htmlFor='description' id='description-label'>
          Tell us a little bit about your project...
        </label>
        <textarea
          id='description'
          name='description'
          onChange={handleChange}
          value={formValues.description}
          required
        />
        <button type='submit' id='contact-sumbit-button'>
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
