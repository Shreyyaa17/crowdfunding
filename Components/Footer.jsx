import React from "react";

const Footer = () => {
  const productList = ["Marketplace", "Tokens", "Donations"];
  const contactList = [
    "shreyya373@gmail.com",
    "write us email if you have any query",
    "Twitter handle @Shreyyaa104",
  ];
  const usefulLink = ["Home", "About Us", "Bio"];
  return (
    <footer className="text-center text-white backgroundMain lg:text-life">
      <div className="mx-6 py-10 text-center md:text-left">
        <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="">
            <h6 className="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
              Transaction Nexus
            </h6>
            <p>
              Raise Funds, Make Impact: Transform Your Ideas into Reality with
              Us
            </p>
          </div>
          <div className="">
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Products
            </h6>
            {productList.map((el, i) => (
              <p className="mb-4" key={i + 1}>
                <a href="#!">{el}</a>
              </p>
            ))}
          </div>
          <div className="">
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Useful Links
            </h6>
            {usefulLink.map((el, i) => (
              <p className="mb-4" key={i + 1}>
                <a href="#!">{el}</a>
              </p>
            ))}
          </div>
          <div>
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Contact
            </h6>
            {contactList.map((el, i) => (
              <p className="mb-4" key={i + 1}>
                <a href="#!">{el}</a>
              </p>
            ))}
          </div>
        </div>
      </div>
      <div className="backgroundMain p-6 text-center">
        <span>Copyright:</span>
        <a className="font-semibold" href="https://tailwind-elements.com/">
          Transaction Nexus
        </a>
      </div>
    </footer>
  );
};

export default Footer;
