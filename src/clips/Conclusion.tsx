import { Img } from "remotion";
import { conclusion } from "..";
import message_1 from "../assets/messages/message_1.png";
import message_2 from "../assets/messages/message_2.png";
import message_3 from "../assets/messages/message_3.png";
import message_4 from "../assets/messages/message_4.png";
import message_5 from "../assets/messages/message_5.png";
import message_6 from "../assets/messages/message_6.png";
import message_7 from "../assets/messages/message_7.png";
import message_8 from "../assets/messages/message_8.png";
import message_9 from "../assets/messages/message_9.png";
import Animated from "../components/Animated";
import AnimationProvider from "../components/AnimationProvider";

const Conclusion = () => (
  <div style={{ width: 3840, height: 2160 }}>
    <AnimationProvider scenes={conclusion.scenes}>
      <Animated
        label={<Img src={message_1} width={1000} />}
        scenes={{
          "0": { o: 0, s: 0.8 },
          "1": { o: 1, s: 1, x: 800, y: 832 },
          "2": { o: 0, s: 0.8 },
        }}
        w={1000}
        h={1388}
        borderRadius={18}
        boxShadow="0 0 60px rgba(0, 0, 0, 0.5)"
      />

      <Animated
        label={<Img src={message_2} width={1000} />}
        scenes={{
          "0": { o: 0, s: 0.8 },
          "1": { o: 1, s: 1, x: 800, y: 1834 },
          "2": { o: 0, s: 0.8 },
        }}
        w={1000}
        h={376}
        borderRadius={18}
        boxShadow="0 0 60px rgba(0, 0, 0, 0.5)"
        offset={5}
      />

      <Animated
        label={<Img src={message_3} width={1000} />}
        scenes={{
          "0": { o: 0, s: 0.8 },
          "1": { o: 1, s: 1, x: 1920, y: 518 },
          "2": { o: 0, s: 0.8 },
        }}
        w={1000}
        h={640}
        borderRadius={18}
        boxShadow="0 0 60px rgba(0, 0, 0, 0.5)"
        offset={10}
      />

      <Animated
        label={<Img src={message_4} width={1000} />}
        scenes={{
          "0": { o: 0, s: 0.8 },
          "1": { o: 1, s: 1, x: 1920, y: 1212 },
          "2": { o: 0, s: 0.8 },
        }}
        w={1000}
        h={508}
        borderRadius={18}
        boxShadow="0 0 60px rgba(0, 0, 0, 0.5)"
        offset={15}
      />

      <Animated
        label={<Img src={message_5} width={1000} />}
        scenes={{
          "0": { o: 0, s: 0.8 },
          "1": { o: 1, s: 1, x: 1920, y: 1774 },
          "2": { o: 0, s: 0.8 },
        }}
        w={1000}
        h={376}
        borderRadius={18}
        boxShadow="0 0 60px rgba(0, 0, 0, 0.5)"
        offset={20}
      />

      <Animated
        label={<Img src={message_6} width={1000} />}
        scenes={{
          "0": { o: 0, s: 0.8 },
          "1": { o: 1, s: 1, x: 3040, y: 358 },
          "2": { o: 0, s: 0.8 },
        }}
        w={1000}
        h={464}
        borderRadius={18}
        boxShadow="0 0 60px rgba(0, 0, 0, 0.5)"
        offset={25}
      />

      <Animated
        label={<Img src={message_7} width={1000} />}
        scenes={{
          "0": { o: 0, s: 0.8 },
          "1": { o: 1, s: 1, x: 3040, y: 964 },
          "2": { o: 0, s: 0.8 },
        }}
        w={1000}
        h={508}
        borderRadius={18}
        boxShadow="0 0 60px rgba(0, 0, 0, 0.5)"
        offset={30}
      />

      <Animated
        label={<Img src={message_8} width={1000} />}
        scenes={{
          "0": { o: 0, s: 0.8 },
          "1": { o: 1, s: 1, x: 3040, y: 1548 },
          "2": { o: 0, s: 0.8 },
        }}
        w={1000}
        h={420}
        borderRadius={18}
        boxShadow="0 0 60px rgba(0, 0, 0, 0.5)"
        offset={35}
      />

      <Animated
        label={<Img src={message_9} width={1000} />}
        scenes={{
          "0": { o: 0, s: 0.8 },
          "1": { o: 1, s: 1, x: 3040, y: 1956 },
          "2": { o: 0, s: 0.8 },
        }}
        w={1000}
        h={156}
        borderRadius={18}
        boxShadow="0 0 60px rgba(0, 0, 0, 0.5)"
        offset={40}
      />
    </AnimationProvider>
  </div>
);

export default Conclusion;
