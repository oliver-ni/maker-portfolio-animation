import { Img } from "remotion";
import poketwo from "../assets/logos/poketwo.png";
import Animated from "../components/Animated";

const Title = () => (
  <>
    <Animated
      label={<Img src={poketwo} height={480} />}
      scenes={{
        "0": { o: 0, s: 0.8 },
        "1": { o: 1, s: 1, x: 1920, y: 1080 },
        "2": { o: 1, s: 1, x: 1470, y: 1080 },
        "3": { o: 0, s: 0.8 },
      }}
    />

    <Animated
      label="Pokétwo"
      scenes={{
        "0": { o: 0, s: 0.8 },
        "1": { o: 0, s: 0.8 },
        "2": { o: 1, s: 1, x: 2190, y: 1080 },
        "3": { o: 0, s: 0.8 },
      }}
      fontSize={180}
    />
  </>
);

export default Title;
