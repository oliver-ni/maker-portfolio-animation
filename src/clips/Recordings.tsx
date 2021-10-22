import { Sequence, Video } from "remotion";
import clt from "../assets/recordings/clt.mp4";
import contestdojo from "../assets/recordings/contestdojo.mp4";
import webcat from "../assets/recordings/webcat.mp4";
import Animated from "../components/Animated";
import AnimationProvider, { Animation } from "../components/AnimationProvider";

const CLIPS = {
  clt: [107, 291],
  webcat: [311, 508],
  contestdojo: [528, 821],
};

const SCENES: Animation["scenes"] = {
  zero: [0, 107 + 20],
  clt: [107 - 40, 291 + 40],
  webcat: [311 - 40, 508 + 40],
  contestdojo: [528 - 40, 821 + 40],
  end: [821 - 20, 900],
};

const Recordings = () => (
  <div style={{ width: 3840, height: 2160 }}>
    <AnimationProvider scenes={SCENES}>
      <Animated
        scenes={{ zero: { o: 0, s: 0.9 }, clt: { o: 1, s: 0.95, x: 1920, y: 1080 }, webcat: { o: 0, s: 0.9 } }}
        h={2100}
        w={3360}
        borderRadius={20}
        boxShadow="0 0 60px rgba(0, 0, 0, 0.1)"
      >
        <Sequence from={CLIPS.clt[0]}>
          <Video src={clt} startFrom={819} endAt={1003} />
        </Sequence>
      </Animated>

      <Animated
        scenes={{ clt: { o: 0, s: 0.9 }, webcat: { o: 1, s: 0.95, x: 1920, y: 1080 }, contestdojo: { o: 0, s: 0.9 } }}
        h={2100}
        w={3360}
        borderRadius={20}
        boxShadow="0 0 60px rgba(0, 0, 0, 0.1)"
      >
        <Sequence from={CLIPS.webcat[0]}>
          <Video src={webcat} startFrom={860} endAt={1009} />
        </Sequence>
        <Sequence from={CLIPS.webcat[0] + 149}>
          <Video src={webcat} startFrom={1325} endAt={1373} />
        </Sequence>
      </Animated>

      <Animated
        scenes={{ webcat: { o: 0, s: 0.9 }, contestdojo: { o: 1, s: 0.95, x: 1920, y: 1080 }, end: { o: 0, s: 0.9 } }}
        h={2100}
        w={3360}
        borderRadius={20}
        boxShadow="0 0 60px rgba(0, 0, 0, 0.1)"
      >
        <Sequence from={CLIPS.contestdojo[0]}>
          <Video src={contestdojo} startFrom={227} endAt={520} />
        </Sequence>
      </Animated>
    </AnimationProvider>
  </div>
);

export default Recordings;
