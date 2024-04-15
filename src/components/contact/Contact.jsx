import React from "react";
import "./contact.css";

const Contact = () => {
  // The form reference is retained in case you need it for other purposes.

  // If you still need a form submission handler, define a new one here.
  // This example simply prevents the default form submission for demonstration.

  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Get in touch</h2>
      <span className="section__subtitle">Contact Me</span>

      <div className="contact__container container grid">
        <div className="contact__content">
          <div className="contact__info">
            <div className="contact__card">
              <i className="bx bx-mail-send contact__card-icon"></i>

              <h3 className="contact__card-title">Email</h3>
              <span className="contact__card-data">moey.ahmed02@gmail.com</span>

              <a
                href="mailto:examplemail@gmail.com.com"
                className="contact__button"
              >
                Write me{" "}
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>

            <div className="contact__card">
              <i className="bx bxl-linkedin contact__card-icon"></i>

              <h3 className="contact__card-title">Whatsapp</h3>
              <span className="contact__card-data">Mohamed Ahmed</span>

              <a
                href="https://www.linkedin.com/in/mohamed-ahmed-a04245226/"
                className="contact__button"
              >
                Write me{" "}
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>

            <div className="contact__card">
              <i className="bx bxl-github contact__card-icon"></i>

              <h3 className="contact__card-title">Github</h3>
              <span className="contact__card-data">Mohamed Ahmed</span>

              <a
                href="https://github.com/moeyahmed?tab=repositories"
                className="contact__button"
              >
                Write me{" "}
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
