import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="md:h-64 p-8 bg-slate-900 text-slate-300">
      <div className="flex flex-col md:flex-row justify-around md:items-center gap-8">
        <section>
          <h2 className="uppercase font-bold text-xl mb-4">Sandra Pol</h2>
          <p className="">Consultora SAP BTP junior</p>
        </section>

        <section>
          <h2 className="uppercase font-bold text-xl mb-4">Social</h2>
          <span className="flex gap-4">
            <a
              href="https://www.linkedin.com/in/sandra-polb/"
              target="_blank"
              rel="noopener noreferrer">
              <FaLinkedin className="w-8 h-8" />
            </a>
            <a
              href="https://github.com/Snnip"
              target="_blank"
              rel="noopener noreferrer">
              <FaGithub className="w-8 h-8" />
            </a>
          </span>
        </section>
      </div>

      <div className="flex items-center justify-center">
        <section
          style={{ borderTop: "0.5px solid #e5e7eb" }}
          className=" text-center text-sm mt-20 w-1/2">
          <p className="mt-4">
            © Copyright 2025. Made by{" "}
            <span className="cursor-pointer font-bold">Sandra Pol</span>
          </p>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
