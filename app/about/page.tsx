import React from "react";

export default function Index() {
  return (
    <div className="w-full max-w-[min(1200px,90vw)] grid gap-16 grid-cols-[0.7fr,0.3fr] py-16">
      <div className="flex flex-col gap-4">
        <h2 className="font-semibold text-4xl">About Us</h2>
        <p className="text-justify text-lg">
          Welcome to <b>AltRecruit</b>, where we believe in giving everyone a
          fair chance to prove their potential. Our mission is to create
          opportunities for individuals who may not have a formal degree or
          professional work experience, enabling them to gain valuable
          experience and gradually climb to more respectable positions and
          salaries.
          <br />
          <br />
          Through our innovative recruitment platform, we connect companies with
          eager candidates willing to start with simple tasks. By removing the
          traditional barriers of degrees and extensive resumes, we focus on
          what truly matters – your ability to learn, grow, and succeed in a
          supportive environment.
          <br />
          <br />
          At <b>AltRecruit</b>, we partner with forward-thinking companies that
          recognize the value of potential over credentials. These companies
          offer entry-level tasks that allow individuals to demonstrate their
          capabilities, build their skills, and progress within the
          organization.
          <br />
          <br />
          Our goal is to empower individuals to achieve their career aspirations
          by providing them with the opportunities they need to shine. Join us
          on this journey and discover a path to a brighter, more fulfilling
          career. Together, we are redefining the recruitment process and
          creating a world where everyone has the chance to succeed.
        </p>
      </div>
      <div></div>
      <div className="flex flex-col gap-4">
        <h2 className="font-semibold text-4xl">Contact Us</h2>
        <p className="text-justify text-lg">
          We'd love to hear from you! Please reach out to us through the
          following channels{" "}
        </p>
        <div className="flex flex-col gap-2">
          <p className="text-lg flex flex-col">
            <b className="font-semibold">Phone Number:</b>
            <a href="tel:">+62 812-3456-7890</a>
          </p>
          <p className="text-lg flex flex-col">
            <b className="font-semibold">Email:</b>
            <a href="mailto:">contact@altrecruit.com</a>
          </p>
          <p className="text-lg flex flex-col">
            <b className="font-semibold">Address:</b>
            <span>
              1234 Main Street, <br />
              Jakarta, Indonesia
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
