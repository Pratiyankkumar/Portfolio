import { Heading } from "./Heading";
import { ContactLinks } from "./ContactLinks";

export function Contact() {
  return (
    <div className="mt-6 flex flex-col items-start">
      <Heading
        upperText="CONTACT"
        belowText="INFORMATION"
        fontSize="text-8xl"
      />
      <ContactLinks
        name="Gmail"
        url="https://static-00.iconduck.com/assets.00/gmail-old-icon-512x512-fqvmk27h.png"
        redirectUrl="https://mail.google.com/mail/?view=cm&fs=1&to=pratiyank49@gmail.com"
      />
      <ContactLinks
        name="Git Hub"
        redirectUrl="https://github.com/Pratiyankkumar"
        url="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png"
      />
      <ContactLinks
        name="Resume"
        url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS08KOBuqfP4UnLQ6StvxJnp-qJ5w-Y9zC3Q&s"
        redirectUrl="https://drive.google.com/file/d/1myqQ4AljCVKdYY1P301PA3FjVazt1w43/view?usp=sharing"
      />
    </div>
  );
}
