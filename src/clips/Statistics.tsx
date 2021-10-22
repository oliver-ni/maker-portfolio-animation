import { interpolate, useCurrentFrame } from "remotion";
import Animated from "../components/Animated";
import { useAnimation } from "../components/AnimationProvider";
import { INTERPOLATE_OPTS } from "../config";

const fmt = Intl.NumberFormat();

const Statistics = () => {
  const frame = useCurrentFrame();
  const { scenes } = useAnimation();

  const usersStart = (scenes["4"][1] + scenes["5"][0]) / 2;
  const serversStart = (scenes["5"][1] + scenes["6"][0]) / 2;

  const users = interpolate(frame, [usersStart, usersStart + 60], [0, 2500000], INTERPOLATE_OPTS);
  const servers = interpolate(frame, [serversStart, serversStart + 60], [0, 650000], INTERPOLATE_OPTS);

  return (
    <>
      <Animated
        label={fmt.format(Math.floor(users))}
        scenes={{
          "4": { o: 0, s: 0.8 },
          "5": { o: 1, s: 1, x: 1920, y: 1020, w: 1000, h: 240 },
          "6": { o: 1, s: 1, x: 1300, y: 1020, w: 1000, h: 240 },
          "7": { o: 0, s: 0.8 },
        }}
        fontSize={144}
      />

      <Animated
        label="Users"
        scenes={{
          "4": { o: 0, s: 0.8 },
          "5": { o: 1, s: 1, x: 1920, y: 1200, w: 1000, h: 120 },
          "6": { o: 1, s: 1, x: 1300, y: 1200, w: 1000, h: 120 },
          "7": { o: 0, s: 0.8 },
        }}
        fontWeight="normal"
        fontSize={90}
      />

      <Animated
        label={fmt.format(Math.floor(servers))}
        scenes={{
          "5": { o: 0, s: 0.8 },
          "6": { o: 1, s: 1, x: 2540, y: 1020, w: 1000, h: 240 },
          "7": { o: 0, s: 0.8 },
        }}
        fontSize={144}
      />

      <Animated
        label="Communities"
        scenes={{
          "5": { o: 0, s: 0.8 },
          "6": { o: 1, s: 1, x: 2540, y: 1200, w: 1000, h: 120 },
          "7": { o: 0, s: 0.8 },
        }}
        fontWeight="normal"
        fontSize={90}
      />
    </>
  );
};

export default Statistics;
