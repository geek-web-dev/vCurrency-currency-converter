import Title from "../components/common/Title";
import { APP_NAME } from "../constants";

const About = () => {
  return (
    <div>
      <Title title="about" />

      <p className="leading-loose">
        Welcome to {APP_NAME}, your go-to currency converter for quick,
        accurate, and hassle-free conversions. Whether you're a traveler, or
        simply need to keep track of foreign exchange rates, our app provides
        real-time updates for over {APP_NAME}
        global currencies. Designed with simplicity and efficiency in mind,
        {APP_NAME} ensures you can easily calculate conversions and stay
        informed with the latest exchange rates, all in one place. Trust us to
        make your currency conversion experience seamless and reliable!
      </p>
    </div>
  );
};

export default About;
