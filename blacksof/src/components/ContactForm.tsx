export const ContactForm = () => {
  return (
    <div className="bg-[#0066b2] h-screen text-white px-4 md:px-80 py-10 flex flex-col md:flex-row justify-evenly items-center md:gap-x-1">
      
      {/* Left Section - Contact Info */}
      <div className="md:w-1/2 w-full space-y-6">
        <h2 className="text-[48px] font-semibold">Get in touch</h2>

        <hr className="w-12 border-t-3 border-white" />

        <p className="py-2 text-[24px]">For general enquiries</p>

        <div>
          <p className="text-[20px] font-semibold">Address :</p>
          <p className="text-[20px]">
            110, 16th Road, Chembur, Mumbai – 400071
          </p>
        </div>

        <div>
          <p className="text-[20px] font-semibold">Phone :</p>
          <p className="text-[20px]">+91 22 25208822</p>
        </div>

        <div>
          <p className="text-[20px] font-semibold">Email :</p>
          <p className="text-[20px]">info@supremegroup.co.in</p>
        </div>
      </div>

      {/* Right Section - Form */}
      <form className="md:w-1/2 w-full space-y-12">
        <div className="flex flex-col space-y-14">
          <input
            type="text"
            id="name"
            style={{
              borderColor: "rgba(255, 255, 255, 0.4)",
            }}
            className="bg-transparent border-b-2 outline-none py-2 text-white placeholder-white placeholder:text-[20px]"
            placeholder="Full name"
          />

          <input
            type="email"
            id="email"
            style={{ borderColor: "rgba(255, 255, 255, 0.4)" }}
            className="bg-transparent border-b-2 outline-none py-2 text-white placeholder-white placeholder:text-[20px]"
            placeholder="Email"
          />

          <input
            type="text"
            id="subject"
            style={{ borderColor: "rgba(255, 255, 255, 0.4)" }}
            className="bg-transparent border-b-2 outline-none py-2 text-white placeholder-white placeholder:text-[20px]"
            placeholder="Subject"
          />

          <input
            type="text"
            id="message"
            style={{ borderColor: "rgba(255, 255, 255, 0.4)" }}
            className="bg-transparent border-b-2 outline-none py-2 text-white placeholder-white placeholder:text-[20px]"
            placeholder="Message"
          />
        </div>

        <button
          type="submit"
          className="bg-white text-black px-12 py-3
          rounded-full hover:opacity-90 transition"
        >
          Send
        </button>
      </form>
    </div>
  );
};
