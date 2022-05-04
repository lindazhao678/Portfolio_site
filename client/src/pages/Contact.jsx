import React from "react";

import Joi from "joi";
import { joiResolver } from "@hookform/resolvers/joi";

import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";

import { useForm, Controller } from "react-hook-form";

import { FaGithub, FaLinkedin } from "react-icons/fa";

function Contact({ contactRef }) {
  const schema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string()
      .required()
      .email({
        minDomainSegments: 2,
        tlds: { allow: ["com", "net"] },
      }),
    subject: Joi.string(),
    message: Joi.string().required(),
  });

  const result = useForm({
    resolver: joiResolver(schema),
    defaultValues: {},
  });
  const errors = result.formState.errors;
  const control = result.control;
  const handleSubmit = result.handleSubmit;

  const onSubmit = (data) => {
    console.log(data);
    window.alert("Thank you for your message!");
  };

  return (
    <div className="contact-section pt-5 clearfix" ref={contactRef}>
      <h2 className="title-v float-start d-none d-lg-block">CONTACT</h2>
      <h1 className="text-center text-light d-lg-none">CONTACT</h1>
      <h3 className="text-light text-center pt-4 pb-2">Message me</h3>
      <Row className="justify-content-center">
        <Form
          onSubmit={handleSubmit(onSubmit)}
          className="form"
          noValidate
        >
          <Form.Group>
            <Controller
              name="name"
              control={control}
              render={({ field }) => (
                <Form.Control {...field} placeholder="Name*" />
              )}
            />
            <p className="text-light">{errors.name?.message}</p>
          </Form.Group>
          <Form.Group>
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <Form.Control {...field} placeholder="Email*" type="email" />
              )}
            />
            <p className="text-light">{errors.email?.message}</p>
          </Form.Group>
          <Form.Group>
            <Controller
              name="subject"
              control={control}
              render={({ field }) => (
                <Form.Control {...field} placeholder="Subject" />
              )}
            />
            <p className="text-light">{errors.subject?.message}</p>
          </Form.Group>
          <Form.Group>
            <Controller
              name="message"
              control={control}
              render={({ field }) => (
                <Form.Control
                  {...field}
                  placeholder="Message*"
                  as="textarea"
                  rows={3}
                />
              )}
            />
            <p className="text-light">{errors.message?.message}</p>
          </Form.Group>
          <button className="send-button mb-5 w-100">Send</button>
        </Form>
      </Row>

      <div className="text-center pb-3">
        <h4 className="text-light px-5 pt-5">Follow me</h4>
        <div className="contact-icon d-flex text-center justify-content-center">
          <a
            href="https://www.linkedin.com/in/linda-zhao-930b47124/"
            className="contact-link"
          >
            <FaLinkedin className="col-4 contact-link-icon" />
          </a>
          <a href="https://github.com/lindazhao678" className="contact-link">
            <FaGithub className="col-4 contact-link-icon" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
