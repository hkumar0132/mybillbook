import React from 'react';

import './Footer.css';

function Footer() {
  return (
    <div className="d-flex p-5">
      {/* Get in touch */}
      <div className="p-3 m-3">
        <div className="title my-1">Get in touch</div>
        <div className="email mt-1">help@flobiz.in</div>
        <div className="contact-no">+91 7400417400</div>
        <div className="d-flex">
          <a href="https://api.whatsapp.com/send?phone=917400417400" target="_blank" rel="noreferrer" className="text-decoration-none" >
            <div className="whatsapp">
              <img src="https://mybillbook.in/static-assets/images/whatsapp-1.webp" alt="whatsapp logo" /> &nbsp;
              <div>WhatsApp us</div>
            </div>
          </a>
          <a href="https://api.whatsapp.com/send?phone=917400417400" target="_blank" rel="noreferrer" className="text-decoration-none" >
            <div className="chat">
            <img width="30" height="30" src="https://img.icons8.com/dotty/48/4a90e2/chat.png" alt="Chat logo"/> &nbsp;
              <div>Chat with us</div>
            </div>
          </a>
        </div>
      </div>
      {/* Information */}
      <div className="p-3 m-3">
        <div className="title">Information</div>
        <div>Refund Policy</div>
        <div className="light-title">Privacy Policy</div>
        <div>Terms & Conditions</div>
      </div>
      {/* FAQs, Pricing, etc */}
      <div className="p-3 m-3">
        <div>FAQs</div>
        <div>Pricing</div>
        <div>FloBiz Business Group</div>
        <div>Blogs</div>
      </div>
      {/* Follow us */}
      <div className="follow p-3 m-3">
        <div className="title m-0">
          Follow us
        </div>
        <div class="social-media">
          <a class="link mr-1" href="https://www.youtube.com/channel/UCSGJlHTQCdQS_OGxCk6xJsw" target="_blank" rel="noreferrer">
            <img src="https://mybillbook.in/static-assets/images/landing-page/youtube.webp" alt="youtube logo " loading="lazy" />
          </a>
          <a class="link mr-1" href="https://www.facebook.com/mybillbook.in" target="_blank" rel="noreferrer">
            <img src="https://mybillbook.in/static-assets/images/landing-page/facebook_Icon.webp" alt="facebook logo " loading="lazy" />
          </a>
          <a class="link mr-1" href="https://www.instagram.com/mybillbookofficial/" target="_blank" rel="noreferrer">
            <img src="https://mybillbook.in/static-assets/images/landing-page/instagram.webp" alt="instagram logo " loading="lazy" />
          </a>
          <a class="link mr-1" href="https://twitter.com/FloBizOfficial" target="_blank" rel="noreferrer">
            <img src="https://mybillbook.in/static-assets/images/landing-page/twitter-icon.webp" alt=" twitter icon" loading="lazy" />
          </a>
          <a class="link" href="https://www.linkedin.com/company/flobiz/" target="_blank" rel="noreferrer">
            <img src="https://mybillbook.in/static-assets/images/landing-page/linkedin-icon.webp" alt=" linkedin icon " loading="lazy" />
          </a>
        </div>
        <div>
          <b>FloBooks is a product by <a href="https://flobiz.in/" target="_blank" rel="noreferrer">FloBiz</a></b>
        </div>
      </div>
    </div>
  )
}

export default Footer;
