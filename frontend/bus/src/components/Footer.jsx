import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faGoogle, faInstagram, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
<footer className="gray-footer bg-body-tertiary text-center text-white">
        <div>
            <h1>
            Busology Digitals
            </h1>
        </div>
      <div className="container p-4 pb-0">
        <section className="mb-4">
          <a
            href="#!"
            className="btn btn-floating m-1"
            style={{ backgroundColor: "#3b5998" }}
          >
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a
            href="#!"
            className="btn btn-floating m-1"
            style={{ backgroundColor: "#55acee" }}
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a
            href="#!"
            className="btn btn-floating m-1"
            style={{ backgroundColor: "#dd4b39" }}
          >
            <FontAwesomeIcon icon={faGoogle} />
          </a>
          <a
            href="#!"
            className="btn btn-floating m-1"
            style={{ backgroundColor: "#ac2bac" }}
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a
            href="#!"
            className="btn btn-floating m-1"
            style={{ backgroundColor: "#0082ca" }}
          >
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
          <a
            href="#!"
            className="btn btn-floating m-1"
            style={{ backgroundColor: "#333333" }}
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </section>
      </div>

      Team Jastlimo
 <a className="text-body" href="https://mdbootstrap.com/"></a>
      
    </footer>
  );
}

export default Footer;
