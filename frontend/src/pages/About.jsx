import React from "react";
import Title from "../components/Title";

const About = () => {
  return (
    <div className="pt-24 mx-8 lg:mx-20">
      <div className="text-2xl text-center pt-8">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>

      <div className="mb-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full h-[450px] md:max-w-[450px]"
          src="/assets/about.jpg"
          alt="about-image"
        />
        <div className="text-sm lg:text-base flex flex-col justify-center gap-6 md:w-2/4 text-green-900">
          <p>
            At our store, we believe that true beauty begins with nature. Our
            collection of herbal skincare, nourishing haircare, and signature
            scents is carefully crafted using high-quality botanical ingredients
            designed to support healthy, radiant skin and strong, beautiful
            hair.
          </p>
          <p>
            We are passionate about creating products that combine the wisdom of
            traditional herbal care with modern beauty standards. Every product
            is thoughtfully selected to provide a luxurious self-care experience
            while helping you feel confident and refreshed every day.
          </p>
          <b className="text-green-700">OUR MISSION</b>
          <p>
            Our mission is to make natural beauty accessible to everyone by
            offering effective, high-quality products inspired by nature. We
            strive to promote self-care, confidence, and well-being through
            herbal formulations that nourish the body and delight the senses. By
            prioritizing quality, authenticity, and customer satisfaction, we
            aim to become a trusted part of your daily beauty routine.
          </p>
        </div>
      </div>

      <div className="text-xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>

      <div className="text-sm lg:text-base flex flex-col md:flex-row text-md mb-20">
        <div className="m-5 border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b className="text-green-700">Quality Assurance</b>
          <p className="text-md text-green-900">
            We are committed to delivering products made with carefully selected
            ingredients and strict quality standards. Every item is chosen to
            provide safety, effectiveness, and a premium experience you can
            trust.
          </p>
        </div>
        <div className="m-5 border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b className="text-green-700">Convenience</b>
          <p className="text-md text-green-900">
            From browsing our collections to receiving your order at your
            doorstep, we make your shopping experience simple and enjoyable.
            Discover your favorite beauty essentials with just a few clicks.
          </p>
        </div>
        <div className="m-5 border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b className="text-green-700">Exceptional Customer Service</b>
          <p className="text-md text-green-900">
            Your satisfaction is our priority. Our dedicated support team is
            always ready to assist with product recommendations, order
            inquiries, and any questions to ensure a smooth and pleasant
            shopping experience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
