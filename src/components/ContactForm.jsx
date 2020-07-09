import React, { useState } from 'react';
import axios from 'axios';

const ContactForm = ({ data }) => {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });
  const [inputs, setInputs] = useState({ email: '', message: '' });
  const handleServerResponse = (ok, msg) => {
    if (ok) {
      setStatus({
        sumitted: true,
        submitting: false,
        info: { error: false, msg },
      });
      setInputs({
        email: '',
        message: '',
      });
    } else {
      setStatus({
        info: { error: true, msg },
      });
    }
  };
  const handleOnChange = (event) => {
    event.persist();
    setInputs((prev) => ({ ...prev, [event.target.id]: event.target.value }));
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    });
  };
  const handleOnSubmit = (event) => {
    event.preventDefault();
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
    axios({
      method: 'POST',
      url: 'https://formspree.io/xwkrrpgo',
      data: inputs,
    })
      .then(() => {
        handleServerResponse(
          true,
          'Thank you! I will reply to your email soon.'
        );
      })
      .catch((error) => {
        handleServerResponse(false, error.response.data.error);
      });
  };
  return (
    <form onSubmit={handleOnSubmit}>
      <h3 className="title is-3 has-text-centered">Contact me!</h3>
      <div className="field">
        <label className="label" htmlFor="email">
          Email
          <div className="control">
            <input
              className="input"
              type="email"
              id="email"
              name="_replyto"
              onChange={handleOnChange}
              required
              value={inputs.email}
            />
          </div>
        </label>
      </div>
      <div className="field">
        <label className="label" htmlFor="message">
          Message
          <textarea
            className="textarea"
            name="message"
            id="message"
            onChange={handleOnChange}
            required
            value={inputs.message}
          />
        </label>
      </div>
      <div className="field">
        <div className="control">
          <button className="button" type="submit" disabled={status.submitting}>
            {
              // eslint-disable-next-line no-nested-ternary
              !status.submitting
                ? !status.submitted
                  ? 'Submit'
                  : 'Submitted'
                : 'Submitting...'
            }
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
