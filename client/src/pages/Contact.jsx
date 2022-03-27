import React from "react";
import { Link } from "react-router-dom";

import Joi from "joi";
import { joiResolver } from "@hookform/resolvers/joi";

import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import { useForm, Controller } from "react-hook-form";

import { FaGithub, FaLinkedin, FaTwitterSquare } from "react-icons/fa";

function Contact({ contactRef }) {
  const schema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net"] },
    }),
    message: Joi.string().required(),
  });
  //React Hook Form
  const result = useForm({
    resolver: joiResolver(schema),
    defaultValues: {},
  });
  const errors = result.formState.errors;
  const control = result.control;
  const handleSubmit = result.handleSubmit;
  //Submit
  const onSubmit = (data) => {
    console.log(data);
    window.alert("Thanks for your message!");
  };

  return (
    <div className="contact-section clearfix" ref={contactRef}>
      <h2 className="title-v float-start d-none d-lg-block">CONTACT</h2>
      <h1 className="text-center text-light d-lg-none">CONTACT</h1>
      <Row className="pt-3 justify-content-center">
        <h3 className="text-light text-center px-5 p-3">You can message me here:</h3>
      </Row>
      <Row className="justify-content-center">
        <Form
          onSubmit={handleSubmit(onSubmit)}
          className="form col-6"
          noValidate
        >
          <Form.Group>
            <Form.Label className="fs-5 text-white">NAME</Form.Label>
            <Controller
              name="name"
              control={control}
              render={({ field }) => (
                <Form.Control {...field} placeholder="name" />
              )}
            />
            <p className="text-danger">{errors.name?.message}</p>
          </Form.Group>
          <Form.Group>
            <Form.Label className="fs-5 text-white">EMAIL</Form.Label>
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <Form.Control {...field} placeholder="email" type="email" />
              )}
            />
            <p className="text-danger">{errors.email?.message}</p>
          </Form.Group>
          <Form.Group>
            <Form.Label className="fs-5 text-light">MESSAGE</Form.Label>
            <Controller
              name="mesage"
              control={control}
              render={({ field }) => (
                <Form.Control
                  {...field}
                  placeholder="message"
                  as="textarea"
                  rows={5}
                />
              )}
            />
            <p className="text-light">{errors.message?.message}</p>
          </Form.Group>
          <button className="send-button mt-1 mb-5 w-100">
            Send
          </button>
        </Form>
      </Row>

      <div className="container pb-3">
        <h3 className="text-light text-center px-5 pt-5">You can find me on:</h3>
        <div className="contact-icon d-flex text-center justify-content-center">
          <Link to="#" className="contact-link">
            <FaLinkedin className="col-4 contact-link-icon" />
          </Link>
          <Link to="#" className="contact-link">
            <FaGithub className="col-4 contact-link-icon" />
          </Link>
          <Link to="#" className="contact-link">
            <FaTwitterSquare className="col-4 contact-link-icon" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Contact;
