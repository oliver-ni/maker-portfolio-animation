import { Audio, Composition, registerRoot, Sequence } from "remotion";
import background from "./assets/background.mp3";
import speaking from "./assets/speaking.mp3";
import speaking2 from "./assets/speaking2.mp3";
import Architecture from "./clips/Architecture";
import Recordings from "./clips/Recordings";
import Screenshots from "./clips/Screenshots";
import Statistics from "./clips/Statistics";
import Title from "./clips/Title";
import AnimationProvider, { Animation } from "./components/AnimationProvider";

// 97 beats per minute
// 60 * 60 frames per minute
// 60 * 60 / 97 frames per beat
// 60 * 60 / 97 * 4 * bar

const pairwise = <T extends unknown>(a: T[]): [T, T][] => a.slice(1).map((k, i) => [a[i], k]);
const barToFrame = (x: number) => Math.round((60 * 60 * 4 * x) / 97);

const BARS = [18, 19, 19.5, 21.5, 25, 25.5, 26.5, 28, 29, 30, 31, 32, 33, 34, 38];
const _SCENES = pairwise(BARS.map(barToFrame));

const START = _SCENES[0][0];
const END = _SCENES[_SCENES.length - 1][1];

export const SCENES = _SCENES.reduce<Animation["scenes"]>((acc, scene, i) => {
  if (i !== 0) scene[0] -= 30;
  if (i !== 6) scene[1] += 30;
  return { ...acc, [i]: [scene[0] - START, scene[1] - START] };
}, {});

const Main = () => (
  <div style={{ width: 3840, height: 2160, backgroundColor: "white" }}>
    <AnimationProvider scenes={SCENES}>
      <Title />
      <Screenshots />
      <Statistics />
      <Architecture />
    </AnimationProvider>

    <Audio src={background} startFrom={START} endAt={END} volume={0.2} />
    <Sequence from={60}>
      <Audio src={speaking} />
    </Sequence>
    <Sequence from={752}>
      <Audio src={speaking2} />
    </Sequence>
  </div>
);

const Video = () => (
  <>
    <Composition id="Recordings" component={Recordings} durationInFrames={900} fps={60} width={3840} height={2160} />
    <Composition id="Main" component={Main} durationInFrames={END - START} fps={60} width={3840} height={2160} />
  </>
);

registerRoot(Video);
