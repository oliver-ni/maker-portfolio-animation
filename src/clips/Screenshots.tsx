import { Img } from "remotion";
import auction from "../assets/screenshots/auction.png";
import battle from "../assets/screenshots/battle.png";
import catching from "../assets/screenshots/catching.png";
import info from "../assets/screenshots/info.png";
import pokemon from "../assets/screenshots/pokemon.png";
import Animated from "../components/Animated";

const Screenshots = () => (
  <>
    <Animated
      label={<Img src={catching} height={837} />}
      scenes={{
        "2": { o: 0, s: 0.8 },
        "3": { o: 1, s: 1, x: 720, y: 540, w: 1080, h: 840 },
        "4": { o: 0, s: 0.8 },
      }}
      boxShadow="0 0 60px rgba(0, 0, 0, 0.05)"
    />

    <Animated
      label={<Img src={info} height={1443} />}
      scenes={{
        "2": { o: 0, s: 0.8 },
        "3": { o: 1, s: 1, x: 1830, y: 1080, w: 900, h: 1440 },
        "4": { o: 0, s: 0.8 },
      }}
      boxShadow="0 0 60px rgba(0, 0, 0, 0.05)"
      offset={10}
    />

    <Animated
      label={<Img src={pokemon} height={847} />}
      scenes={{
        "2": { o: 0, s: 0.8 },
        "3": { o: 1, s: 1, x: 3030, y: 540, w: 1260, h: 840 },
        "4": { o: 0, s: 0.8 },
      }}
      boxShadow="0 0 60px rgba(0, 0, 0, 0.05)"
      offset={20}
    />

    <Animated
      label={<Img src={battle} height={935} />}
      scenes={{
        "2": { o: 0, s: 0.8 },
        "3": { o: 1, s: 1, x: 720, y: 1560, w: 1080, h: 960 },
        "4": { o: 0, s: 0.8 },
      }}
      boxShadow="0 0 60px rgba(0, 0, 0, 0.05)"
      offset={30}
    />

    <Animated
      label={<Img src={auction} height={961} />}
      scenes={{
        "2": { o: 0, s: 0.8 },
        "3": { o: 1, s: 1, x: 3030, y: 1560, w: 1260, h: 960 },
        "4": { o: 0, s: 0.8 },
      }}
      boxShadow="0 0 60px rgba(0, 0, 0, 0.05)"
      offset={40}
    />
  </>
);

export default Screenshots;
