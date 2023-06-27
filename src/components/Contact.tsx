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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    console.log('e.target: ', e.target);
    const { name, value } = e.target;
    setFormValues((prev) => {
      return { ...prev, [name]: value };
    });
  };
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log('formValues: ', formValues);
    const { name, email, description } = formValues;
    if (name && email && description) {
      //server side send an email
      //TO DO: DO THIS
      console.log('sending email');
    }
  }

  return (
    <div id='contact'>
      <div id='contact-blurb'>
        <h2>Get in contact.</h2>
        <p>
          Our team would love to hear about your project and how we can help.
          Let's get started!
        </p>
      </div>

      <form id='contact-form' onSubmit={handleSubmit}>
        <label htmlFor='name'>Name: </label>
        <input
          type='text'
          id='name'
          name='name'
          onChange={handleChange}
          value={formValues.name}
          required
        />
        <label htmlFor='email'>Email: </label>
        <input
          type='email'
          id='email'
          name='email'
          onChange={handleChange}
          value={formValues.email}
          required
        />
        <label htmlFor='description'>
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

export default Contact;
