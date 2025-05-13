import { Button } from "../ui/Button/Button";
import { TextInput } from "../ui/Input/Input";

export const ContactForm = () => {
  return (
 <div className="bg-third-part min-h-screen px-4 sm:px-8 md:px-16 lg:px-32 xl:px-80 flex flex-col md:flex-row justify-evenly gap-y-12 md:gap-x-12 items-start py-10 pt-50">

      {/* Left Section - Contact Info */}
      <div className="md:w-1/2 w-full space-y-6 text-left">
        <h2 className="text-4xl font-semibold">Get in touch</h2>

        <hr className="w-12 border-t-3 border-white" />

        <p className="py-2 text-2xl">For general enquiries</p>

        <div>
          <p className="text-lg font-semibold">Address :</p>
          <p className="text-lg">110, 16th Road, Chembur, Mumbai – 400071</p>
        </div>

        <div>
          <p className="text-lg font-semibold">Phone :</p>
          <p className="text-lg">+91 22 25208822</p>
        </div>

        <div>
          <p className="text-lg font-semibold">Email :</p>
          <p className="text-lg">info@supremegroup.co.in</p>
        </div>
      </div>

      {/* Right Section - Form */}
      <form className="md:w-1/2 w-full space-y-12 mt-5">
        <div className="flex flex-col space-y-12">
          <TextInput id="name" placeholder="Full name" />
          <TextInput type="email" id="email" placeholder="E-mail" />
          <TextInput id="subject" placeholder="Subject" />
          <TextInput id="message" placeholder="Message" />
        </div>

        <div className="text-left">
        <Button className="bg-primary" type="submit">Send</Button>
        </div>
      </form>
    </div>
  );
};
