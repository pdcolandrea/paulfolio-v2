import CurrentTime from "./CurrentTime";
import Heading from "./Heading";
import LinkTag from "./links/LinkTag";
import { Text } from "./Text";

function ContactMe() {
  return (
    <section className="flex flex-col mb-12">
      <Heading>Contact</Heading>
      <Text>
        Be sure to shoot me a{" "}
        <LinkTag href="https://twitter.com/the_neanderpaul" target="_blank">
          DM on Twitter
        </LinkTag>
        .
      </Text>
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
