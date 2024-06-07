import { FaEnvelope, FaPhone } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="border-b border-neutral-800 pb-24 bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] text-white">
      <h1 className="my-20 text-center text-4xl">Contact</h1>
      <div className="flex flex-col items-center">
        <div className="flex items-center gap-4 my-4">
          <FaEnvelope className="text-2xl" />
          <a href="mailto:rajkodmalwar.in@gmail.com" className="text-xl hover:underline">
            rajkodmalwar.in@gmail.com
          </a>
        </div>
        <div className="flex items-center gap-4 my-4">
          <FaPhone className="text-2xl" />
          <span className="text-xl">7020153178</span>
        </div>
      </div>
    </div>
  );
}

export default Contact;
