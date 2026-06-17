import React from "react";
import Title from "../components/Title";
import { FaInstagram, FaFacebook, FaTiktok, FaYoutube } from "react-icons/fa6";

const Contact = () => {
  return (
    <div className="pt-24 mx-8 lg:mx-20">
      <div className="text-center text-2xl pt-10">
        <Title text1={"CONTACT"} text2={"US"} />
      </div>

      <div className="text-sm lg:text-base flex flex-col justify-center gap-10 mb-28 md:flex-row">
        <img
          className="w-full md:max-w-[480px] h-[500px]"
          src="/assets/contact.jpg"
          alt="contact-image"
        />
        <div className="flex flex-col justify-center items-start gap-10">
          <div className="flex flex-col gap-3">
            <p className="font-semibold text-xl text-green-700">Our Store</p>
            <p className="text-green-900">sharzastore@gmail.com</p>
            <p className="text-green-900">+92 336 6151096</p>
            <p className="text-green-900">Rawalpindi, Pakistan</p>
          </div>
          <div className="flex flex-col gap-3">
            <p className="font-semibold text-xl text-green-700">Social Media</p>
            <p className="text-green-900 ">
              Follow us on social media for beauty tips, product launches,
              exclusive offers, and daily inspiration. Stay connected with our
              community and be the first to discover our latest herbal skincare,
              haircare, and fragrance collections.
            </p>
            <div className="flex w-56 justify-between m-5">
              <a
                href="https://www.instagram.com/herbessence_by_sharza?igsh=MjduOTlncndiMm5k"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="text-3xl text-green-700 hover:text-green-900 transition" />
              </a>
              <a
                href="https://www.facebook.com/share/18MBKKTo6V/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="text-3xl text-green-700 hover:text-green-900 transition" />
              </a>
              <a
                href="https://www.tiktok.com/@herb.essence.by.sh?_r=1&_t=ZS-977w6BbHGSH"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTiktok className="text-3xl text-green-700 hover:text-green-900 transition" />
              </a>
              <a
                href="https://youtube.com/@herbessencebysharza?si=iX-kct4Ar_AzgW7M"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube className="text-3xl text-green-700 hover:text-green-900 transition" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
