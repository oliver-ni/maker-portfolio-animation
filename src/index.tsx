import { Composition, Img, registerRoot } from "remotion";
import mongodb from "./assets/mongodb.svg";
import { Discord, Kubernetes, Poketwo, Postgres, RabbitMQ, Redis } from "./components";
import Animated from "./components/Animated";
import AnimationProvider, { Animation } from "./components/AnimationProvider";

const SCENES: Animation["scenes"] = {
  "1": [0, 140],
  "2": [100, 260],
  "3": [220, 380],
  "4": [340, 500],
  "5": [460, 620],
  "6": [580, 740],
  "7": [700, 840],
};

const Main = () => (
  <div style={{ width: 3840, height: 2160, backgroundColor: "white" }}>
    <AnimationProvider scenes={SCENES}>
      <Discord
        scenes={{
          "1": { x: 1920, y: 480, w: 720, h: 240 },
          "2": { x: 1920, y: 480, w: 1560, h: 240 },
          "3": { x: 1920, y: 420, w: 2280, h: 240 },
          "4": { x: 1920, y: 300, w: 2400, h: 240 },
          "5": { x: 1290, y: 240, w: 1140, h: 240 },
          "6": { x: 1020, y: 240, w: 840, h: 240 },
          "7": { x: 780, y: 240, w: 1320, h: 240 },
        }}
      />

      <Animated
        scenes={{
          "1": { x: 1920, y: 1680, w: 720, h: 240, labelHeight: 120 },
          "2": { x: 2340, y: 1680, w: 720, h: 240, labelHeight: 120 },
          "3": { x: 2520, y: 1740, w: 1080, h: 240, labelHeight: 120 },
          "4": { x: 2340, y: 1740, w: 1560, h: 480, labelHeight: 90 },
          "5": { x: 2340, y: 1740, w: 1560, h: 600, labelHeight: 90 },
          "6": { x: 2400, y: 1740, w: 1680, h: 600, labelHeight: 90 },
          "7": { x: 1920, y: 1740, w: 1680, h: 600, labelHeight: 90 },
        }}
        backgroundColor="#21313C"
        justifyContent="flex-end"
        renderLabel={(height) => <Img src={mongodb} height={height} style={{ marginBottom: (2 * height) / 3 - 20 }} />}
      />

      <Redis
        scenes={{
          "1": { o: 0, s: 0.8 },
          "2": { o: 1, s: 1, x: 1500, y: 1680, w: 720, h: 240 },
          "3": { x: 1320, y: 1740, w: 1080, h: 240 },
          "4": { x: 1080, y: 1740, w: 720, h: 480 },
          "5": { x: 1080, y: 1560, w: 720, h: 240 },
          "6": { x: 1020, y: 1560, w: 840, h: 240 },
          "7": { x: 540, y: 1560, w: 840, h: 240 },
        }}
      />

      <Kubernetes
        scenes={{
          "1": { o: 0, s: 0.8 },
          "2": { o: 0, s: 0.8 },
          "3": { o: 0, s: 0.8 },
          "4": { o: 1, s: 1, x: 1920, y: 960, w: 2400, h: 840, bottomLabel: "Main Cluster (Auto-Scaling)" },
          "5": { x: 1920, y: 960, w: 2400, h: 840, bottomLabel: "Main Cluster (Auto-Scaling)" },
          "6": { x: 1500, y: 900, w: 1800, h: 840, bottomLabel: "Main Cluster (Auto-Scaling)" },
          "7": { x: 540, y: 900, w: 840, h: 840, bottomLabel: "Gateway Cluster" },
        }}
      />

      <Poketwo
        scenes={{
          "1": { x: 1920, y: 1080, w: 720, h: 720, label: "Bot" },
          "2": { x: 1920, y: 1080, w: 1560, h: 720, label: "Bot" },
          "3": { x: 1020, y: 1020, w: 480, h: 720, label: "Shard" },
          "4": { x: 1065, y: 900, w: 450, h: 480, label: "Shard" },
          "5": { x: 1065, y: 900, w: 450, h: 480, label: "Shard", fontSize: 64 },
          "6": { o: 1, s: 1, x: 847.5, y: 960, w: 375, h: 240, label: "Shard", fontSize: 48 },
          "7": { o: 0, s: 0.8 },
        }}
      />

      <Poketwo
        scenes={{
          "1": { o: 0, s: 0.8 },
          "2": { o: 0, s: 0.8 },
          "3": { o: 1, s: 1, x: 1620, y: 1020, w: 480, h: 720 },
          "4": { x: 1635, y: 900, w: 450, h: 480 },
          "5": { x: 1635, y: 900, w: 450, h: 480, fontSize: 64 },
          "6": { x: 1282.5, y: 960, w: 375, h: 240, fontSize: 48 },
          "7": { x: 290, y: 960, w: 200, h: 240, fontSize: 48 },
        }}
        label="Shard"
      />

      <Poketwo
        scenes={{
          "1": { o: 0, s: 0.8 },
          "2": { o: 0, s: 0.8 },
          "3": { o: 1, s: 1, x: 2220, y: 1020, w: 480, h: 720 },
          "4": { x: 2205, y: 900, w: 450, h: 480 },
          "5": { x: 2205, y: 900, w: 450, h: 480, fontSize: 64 },
          "6": { x: 1717.5, y: 960, w: 375, h: 240, fontSize: 48 },
          "7": { x: 540, y: 960, w: 200, h: 240, fontSize: 48 },
        }}
        label="Shard"
      />

      <Poketwo
        scenes={{
          "1": { o: 0, s: 0.8, label: "Shard" },
          "2": { o: 0, s: 0.8, label: "Shard" },
          "3": { o: 1, s: 1, x: 2820, y: 1020, w: 480, h: 720, borderStyle: "solid", label: "Shard" },
          "4": { x: 2775, y: 900, w: 450, h: 480, borderStyle: "dashed", label: "More..." },
          "5": { x: 2775, y: 900, w: 450, h: 480, borderStyle: "dashed", label: "More...", fontSize: 64 },
          "6": { x: 2152.5, y: 960, w: 375, h: 240, borderStyle: "dashed", label: "More...", fontSize: 48 },
          "7": { x: 800, y: 960, w: 200, h: 240, borderStyle: "dashed", label: "...", fontSize: 48 },
        }}
      />

      <Animated
        scenes={{
          "1": { o: 0, s: 0.8 },
          "2": { o: 0, s: 0.8 },
          "3": { o: 0, s: 0.8 },
          "4": { o: 1, s: 1, x: 1840, y: 1685, w: 440, h: 250 },
          "5": { x: 1840, y: 1685, w: 440, h: 370 },
          "6": { x: 1860, y: 1685, w: 480, h: 370 },
          "7": { x: 1380, y: 1685, w: 480, h: 370 },
        }}
        backgroundColor={"rgba(255 255 255 / 0.1"}
        fontSize={48}
        color="white"
        label="Replica Set Member"
      />

      <Animated
        scenes={{
          "1": { o: 0, s: 0.8 },
          "2": { o: 0, s: 0.8 },
          "3": { o: 0, s: 0.8 },
          "4": { o: 1, s: 1, x: 2340, y: 1685, w: 440, h: 250 },
          "5": { x: 2340, y: 1685, w: 440, h: 370 },
          "6": { x: 2400, y: 1685, w: 480, h: 370 },
          "7": { x: 1920, y: 1685, w: 480, h: 370 },
        }}
        backgroundColor={"rgba(255 255 255 / 0.1"}
        fontSize={48}
        color="white"
        label="Replica Set Member"
      />

      <Animated
        scenes={{
          "1": { o: 0, s: 0.8 },
          "2": { o: 0, s: 0.8 },
          "3": { o: 0, s: 0.8 },
          "4": { o: 1, s: 1, x: 2840, y: 1685, w: 440, h: 250 },
          "5": { x: 2840, y: 1685, w: 440, h: 370 },
          "6": { x: 2940, y: 1685, w: 480, h: 370 },
          "7": { x: 2460, y: 1685, w: 480, h: 370 },
        }}
        backgroundColor={"rgba(255 255 255 / 0.1"}
        fontSize={48}
        color="white"
        label="Arbiter"
      />

      <Poketwo
        scenes={{
          "1": { o: 0, s: 0.8 },
          "2": { o: 0, s: 0.8 },
          "3": { o: 0, s: 0.8 },
          "4": { o: 0, s: 0.8 },
          "5": { o: 1, s: 1, x: 2550, y: 240, w: 1140, h: 240 },
          "6": { x: 1980, y: 240, w: 840, h: 240 },
          "7": { x: 2220, y: 240, w: 1320, h: 240 },
        }}
        label="HTTP Proxy"
      />

      <Poketwo
        scenes={{
          "1": { o: 0, s: 0.8 },
          "2": { o: 0, s: 0.8 },
          "3": { o: 0, s: 0.8 },
          "4": { o: 0, s: 0.8 },
          "5": { o: 1, s: 1, x: 1080, y: 1920, w: 720, h: 240 },
          "6": { x: 1020, y: 1920, w: 840, h: 240 },
          "7": { x: 540, y: 1920, w: 840, h: 240 },
        }}
        label="Webhook Server"
      />

      <Poketwo
        scenes={{
          "1": { o: 0, s: 0.8 },
          "2": { o: 0, s: 0.8 },
          "3": { o: 0, s: 0.8 },
          "4": { o: 0, s: 0.8 },
          "5": { o: 0, s: 0.8 },
          "6": { o: 1, s: 1, x: 847.5, y: 660, w: 375, h: 240 },
          "7": { o: 0, s: 0.8 },
        }}
        label="Shard"
        fontSize={48}
      />

      <Poketwo
        scenes={{
          "1": { o: 0, s: 0.8 },
          "2": { o: 0, s: 0.8 },
          "3": { o: 0, s: 0.8 },
          "4": { o: 0, s: 0.8 },
          "5": { o: 0, s: 0.8 },
          "6": { o: 1, s: 1, x: 1282.5, y: 660, w: 375, h: 240 },
          "7": { x: 290, y: 660, w: 200, h: 240 },
        }}
        label="Shard"
        fontSize={48}
      />

      <Poketwo
        scenes={{
          "1": { o: 0, s: 0.8 },
          "2": { o: 0, s: 0.8 },
          "3": { o: 0, s: 0.8 },
          "4": { o: 0, s: 0.8 },
          "5": { o: 0, s: 0.8 },
          "6": { o: 1, s: 1, x: 1717.5, y: 660, w: 375, h: 240 },
          "7": { x: 540, y: 660, w: 200, h: 240 },
        }}
        label="Shard"
        fontSize={48}
      />

      <Poketwo
        scenes={{
          "1": { o: 0, s: 0.8 },
          "2": { o: 0, s: 0.8 },
          "3": { o: 0, s: 0.8 },
          "4": { o: 0, s: 0.8 },
          "5": { o: 0, s: 0.8 },
          "6": { o: 1, s: 1, x: 2152.5, y: 660, w: 375, h: 240 },
          "7": { x: 800, y: 660, w: 200, h: 240 },
        }}
        label="Shard"
        fontSize={48}
      />

      <Kubernetes
        scenes={{
          "1": { o: 0, s: 0.8 },
          "2": { o: 0, s: 0.8 },
          "3": { o: 0, s: 0.8 },
          "4": { o: 0, s: 0.8 },
          "5": { o: 0, s: 0.8 },
          "6": { o: 1, s: 1, x: 2880, y: 720, w: 720, h: 1200, bottomLabel: "Image Cluster" },
          "7": { x: 3360, y: 720, w: 720, h: 1200, bottomLabel: "Image Cluster" },
        }}
      />

      <Poketwo
        scenes={{
          "1": { o: 0, s: 0.8 },
          "2": { o: 0, s: 0.8 },
          "3": { o: 0, s: 0.8 },
          "4": { o: 0, s: 0.8 },
          "5": { o: 0, s: 0.8 },
          "6": { o: 1, s: 1, x: 2880, y: 270, w: 600, h: 180 },
          "7": { x: 3360, y: 270, w: 600, h: 180 },
        }}
        label="Image Server"
        fontSize={48}
      />

      <Poketwo
        scenes={{
          "1": { o: 0, s: 0.8 },
          "2": { o: 0, s: 0.8 },
          "3": { o: 0, s: 0.8 },
          "4": { o: 0, s: 0.8 },
          "5": { o: 0, s: 0.8 },
          "6": { o: 1, s: 1, x: 2880, y: 510, w: 600, h: 180 },
          "7": { x: 3360, y: 510, w: 600, h: 180 },
        }}
        label="Image Server"
        fontSize={48}
      />

      <Poketwo
        scenes={{
          "1": { o: 0, s: 0.8 },
          "2": { o: 0, s: 0.8 },
          "3": { o: 0, s: 0.8 },
          "4": { o: 0, s: 0.8 },
          "5": { o: 0, s: 0.8 },
          "6": { o: 1, s: 1, x: 2880, y: 750, w: 600, h: 180 },
          "7": { x: 3360, y: 750, w: 600, h: 180 },
        }}
        label="Image Server"
        fontSize={48}
      />

      <Poketwo
        scenes={{
          "1": { o: 0, s: 0.8 },
          "2": { o: 0, s: 0.8 },
          "3": { o: 0, s: 0.8 },
          "4": { o: 0, s: 0.8 },
          "5": { o: 0, s: 0.8 },
          "6": { o: 1, s: 1, x: 2880, y: 990, w: 600, h: 180 },
          "7": { x: 3360, y: 990, w: 600, h: 180 },
        }}
        borderStyle="dashed"
        label="More..."
        fontSize={48}
      />

      <RabbitMQ
        scenes={{
          "1": { o: 0, s: 0.8 },
          "2": { o: 0, s: 0.8 },
          "3": { o: 0, s: 0.8 },
          "4": { o: 0, s: 0.8 },
          "5": { o: 0, s: 0.8 },
          "6": { o: 0, s: 0.8 },
          "7": { o: 1, s: 1, x: 1260, y: 900, w: 360, h: 840 },
        }}
      />

      <Postgres
        scenes={{
          "1": { o: 0, s: 0.8 },
          "2": { o: 0, s: 0.8 },
          "3": { o: 0, s: 0.8 },
          "4": { o: 0, s: 0.8 },
          "5": { o: 0, s: 0.8 },
          "6": { o: 0, s: 0.8 },
          "7": { o: 1, s: 1, x: 3300, y: 1740, w: 840, h: 600 },
        }}
      />

      <Kubernetes
        scenes={{
          "1": { o: 0, s: 0.8 },
          "2": { o: 0, s: 0.8 },
          "3": { o: 0, s: 0.8 },
          "4": { o: 0, s: 0.8 },
          "5": { o: 0, s: 0.8 },
          "6": { o: 0, s: 0.8 },
          "7": { o: 1, s: 1, x: 2220, y: 900, w: 1320, h: 840, bottomLabel: "Worker Cluster" },
        }}
      />

      <Poketwo
        scenes={{
          "1": { o: 0, s: 0.8 },
          "2": { o: 0, s: 0.8 },
          "3": { o: 0, s: 0.8 },
          "4": { o: 0, s: 0.8 },
          "5": { o: 0, s: 0.8 },
          "6": { o: 0, s: 0.8 },
          "7": { o: 1, s: 1, x: 1800, y: 660, w: 360, h: 240 },
        }}
        label="Worker"
        fontSize={48}
      />

      <Poketwo
        scenes={{
          "1": { o: 0, s: 0.8 },
          "2": { o: 0, s: 0.8 },
          "3": { o: 0, s: 0.8 },
          "4": { o: 0, s: 0.8 },
          "5": { o: 0, s: 0.8 },
          "6": { o: 0, s: 0.8 },
          "7": { o: 1, s: 1, x: 2220, y: 660, w: 360, h: 240 },
        }}
        label="Worker"
        fontSize={48}
      />

      <Poketwo
        scenes={{
          "1": { o: 0, s: 0.8 },
          "2": { o: 0, s: 0.8 },
          "3": { o: 0, s: 0.8 },
          "4": { o: 0, s: 0.8 },
          "5": { o: 0, s: 0.8 },
          "6": { o: 0, s: 0.8 },
          "7": { o: 1, s: 1, x: 2640, y: 660, w: 360, h: 240 },
        }}
        label="Worker"
        fontSize={48}
      />

      <Poketwo
        scenes={{
          "1": { o: 0, s: 0.8 },
          "2": { o: 0, s: 0.8 },
          "3": { o: 0, s: 0.8 },
          "4": { o: 0, s: 0.8 },
          "5": { o: 0, s: 0.8 },
          "6": { o: 0, s: 0.8 },
          "7": { o: 1, s: 1, x: 1800, y: 960, w: 360, h: 240 },
        }}
        label="Worker"
        fontSize={48}
      />

      <Poketwo
        scenes={{
          "1": { o: 0, s: 0.8 },
          "2": { o: 0, s: 0.8 },
          "3": { o: 0, s: 0.8 },
          "4": { o: 0, s: 0.8 },
          "5": { o: 0, s: 0.8 },
          "6": { o: 0, s: 0.8 },
          "7": { o: 1, s: 1, x: 2220, y: 960, w: 360, h: 240 },
        }}
        label="Worker"
        fontSize={48}
      />

      <Poketwo
        scenes={{
          "1": { o: 0, s: 0.8 },
          "2": { o: 0, s: 0.8 },
          "3": { o: 0, s: 0.8 },
          "4": { o: 0, s: 0.8 },
          "5": { o: 0, s: 0.8 },
          "6": { o: 0, s: 0.8 },
          "7": { o: 1, s: 1, x: 2640, y: 960, w: 360, h: 240 },
        }}
        borderStyle="dashed"
        label="More..."
        fontSize={48}
      />
    </AnimationProvider>
  </div>
);

const Video = () => (
  <Composition id="Main" component={Main} durationInFrames={840} fps={60} width={3840} height={2160} />
);

registerRoot(Video);
