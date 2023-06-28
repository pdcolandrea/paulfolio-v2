import CurrentTime from "./CurrentTime";
import Heading from "./Heading";
import LinkTag from "./links/LinkTag";
import { Text } from "./Text";

async function ContactMe() {
  return (
    <section className="flex flex-col mb-12">
      <Heading>Contact</Heading>
      <Text>
        For more serious matters{" "}
        <LinkTag href={`mailto:colandreapaul@gmail.com`}>
          shoot me an email
        </LinkTag>
        .
      </Text>

      <div className="flex flex-col justify-center border-t border-teal-100 dark:border-teal-900 mt-10 pt-5 w-full">
        {/* <ContactForm /> */}
        <div className="mt-6">
          <CurrentTime />
        </div>
      </div>
    </section>
  );
}

export default ContactMe;
