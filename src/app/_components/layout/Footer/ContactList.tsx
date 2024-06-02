import Image from "next/image";
import LocationIcon from "@/assets/images/footer__location-icon.svg";
import PhoneIcon from "@/assets/images/footer__tel-icon.svg";
import MailIcon from "@/assets/images/footer__mail-icon.svg";

const contactInfos = [
  { icon: LocationIcon, title: "Chisinau,15/2 Trandafirilor Str." },
  { icon: PhoneIcon, title: "+373 68 159 759" },
  { icon: MailIcon, title: "hello@amatto.md" },
];

const ContactList = () => {
  return (
    <ul className="flex flex-col gap-y-4 whitespace-nowrap">
      {/* title */}
      <li
        className="mb-2 font-playfair-display font-bold capitalize text-lg
        relative after:absolute after:-bottom-2 after:left-0 after:block
        after:w-12 after:h-[3px] after:rounded-lg after:bg-primary-yellow"
      >
        Republic of Moldova
      </li>

      {/* other items */}
      {contactInfos.map(({ icon, title }) => (
        <li key={title} className="flex items-center gap-x-3 capitalize">
          <Image src={icon} alt="" className="w-5 h-5 object-contain" />
          {title}
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
