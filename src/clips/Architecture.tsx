import { Img } from "remotion";
import mongodb from "../assets/logos/mongodb.svg";
import {
  ArrowDoubleHorizontal,
  ArrowDoubleVertical,
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowSpecial,
  ArrowSpecialPostgres,
  ArrowSpecialRedis,
  ArrowUp,
  Discord,
  Kubernetes,
  Poketwo,
  Postgres,
  RabbitMQ,
  Redis,
} from "../components";
import Animated from "../components/Animated";

const Architecture = () => (
  <>
    <>
      {/* Discord <-> Bot */}
      <ArrowDoubleVertical
        scenes={{
          "6": { o: 0, s: 0.8 },
          "7": { o: 1, s: 1, x: 1920, y: 660 },
          "8": { x: 1920, y: 660 },
          "9": { x: 1020, y: 600 },
          "10": { o: 1, s: 1, x: 1920, y: 480 },
          "11": { o: 0, s: 0.8 },
        }}
      />

      {/* Discord <-> Shard */}
      <ArrowDoubleVertical
        scenes={{ "8": { o: 0, s: 0.8 }, "9": { o: 1, s: 1, x: 1620, y: 600 }, "10": { o: 0, s: 0.8 } }}
      />
      <ArrowDoubleVertical
        scenes={{ "8": { o: 0, s: 0.8 }, "9": { o: 1, s: 1, x: 2220, y: 600 }, "10": { o: 0, s: 0.8 } }}
      />
      <ArrowDoubleVertical
        scenes={{ "8": { o: 0, s: 0.8 }, "9": { o: 1, s: 1, x: 2820, y: 600 }, "10": { o: 0, s: 0.8 } }}
      />

      {/* Big Special Arrow */}
      <ArrowSpecial scenes={{ "8": { o: 0, s: 0.8 }, "9": { o: 1, s: 1, x: 1920, y: 1500 }, "10": { o: 0, s: 0.8 } }} />

      {/* Bot <-> MongoDB */}
      <ArrowDoubleVertical
        scenes={{
          "6": { o: 0, s: 0.8 },
          "7": { o: 1, s: 1, x: 1920, y: 1500 },
          "8": { o: 1, s: 1, x: 2340, y: 1500 },
          "9": { o: 0, s: 0.8 },
          "10": { o: 1, s: 1, x: 2340, y: 1440 },
          "11": { x: 2340, y: 1380 },
          "12": { o: 1, s: 1, x: 1980, y: 1380 },
          "13": { o: 0, s: 0.8 },
        }}
      />

      {/* Bot / Main Cluster / Gateway Cluster <-> Redis */}
      <ArrowDoubleVertical
        scenes={{
          "7": { o: 0, s: 0.8 },
          "8": { o: 1, s: 1, x: 1500, y: 1500 },
          "9": { o: 0, s: 0.8 },
          "10": { o: 1, s: 1, x: 1080, y: 1440 },
          "11": { x: 1080, y: 1380 },
          "12": { x: 1020, y: 1380 },
          "13": { x: 540, y: 1380 },
        }}
      />

      {/* HTTP Proxy <- Main Cluster */}
      <ArrowUp
        scenes={{
          "10": { o: 0, s: 0.8 },
          "11": { o: 1, s: 1, x: 2520, y: 420 },
          "12": { o: 1, s: 1, x: 1980, y: 420 },
          "13": { o: 0, s: 0.8 },
        }}
      />

      {/* Discord -> Main Cluster / Gateway Cluster */}
      <ArrowDown
        scenes={{
          "10": { o: 0, s: 0.8 },
          "11": { o: 1, s: 1, x: 1320, y: 420 },
          "12": { x: 1020, y: 420 },
          "13": { x: 540, y: 420 },
        }}
      />

      {/* Discord <- HTTP Proxy */}
      <ArrowLeft
        scenes={{
          "10": { o: 0, s: 0.8 },
          "11": { o: 1, s: 1, x: 1920, y: 240 },
          "12": { x: 1500, y: 240 },
          "13": { x: 1500, y: 240 },
        }}
      />

      {/* Redis <-> Webhook Server */}
      <ArrowDoubleVertical
        scenes={{
          "10": { o: 0, s: 0.8 },
          "11": { o: 1, s: 1, x: 1080, y: 1740 },
          "12": { x: 1020, y: 1740 },
          "13": { x: 540, y: 1740 },
        }}
      />

      {/* Webhook Server <-> MongoDB */}
      <ArrowDoubleHorizontal
        scenes={{
          "10": { o: 0, s: 0.8 },
          "11": { o: 1, s: 1, x: 1500, y: 1920 },
          "12": { x: 1500, y: 1920 },
          "13": { x: 1020, y: 1920 },
        }}
      />

      {/* Main Cluster <-> Image Cluster */}
      <ArrowDoubleHorizontal
        scenes={{
          "11": { o: 0, s: 0.8 },
          "12": { o: 1, s: 1, x: 2460, y: 900 },
          "13": { x: 2940, y: 900 },
        }}
      />

      {/* HTTP Proxy <-> Worker Cluster */}
      <ArrowUp scenes={{ "12": { o: 0, s: 0.8 }, "13": { o: 1, s: 1, x: 2220, y: 420 } }} />

      {/* Worker Cluster <-> MongoDB */}
      <ArrowDoubleVertical scenes={{ "12": { o: 0, s: 0.8 }, "13": { o: 1, s: 1, x: 2220, y: 1380 } }} />

      {/* Gateway Cluster <-> RabbitMQ */}
      <ArrowRight scenes={{ "12": { o: 0, s: 0.8 }, "13": { o: 1, s: 1, x: 1020, y: 720 } }} />
      <ArrowLeft scenes={{ "12": { o: 0, s: 0.8 }, "13": { o: 1, s: 1, x: 1020, y: 1080 } }} />

      {/* RabbitMQ <-> Worker Cluster */}
      <ArrowRight scenes={{ "12": { o: 0, s: 0.8 }, "13": { o: 1, s: 1, x: 1500, y: 720 } }} />
      <ArrowLeft scenes={{ "12": { o: 0, s: 0.8 }, "13": { o: 1, s: 1, x: 1500, y: 1080 } }} />

      {/* Redis <-> Worker Cluster */}
      <ArrowSpecialRedis scenes={{ "12": { o: 0, s: 0.8 }, "13": { o: 1, s: 1, x: 1260, y: 1380 } }} />

      {/* Worker Cluster <-> Postgres*/}
      <ArrowSpecialPostgres scenes={{ "12": { o: 0, s: 0.8 }, "13": { o: 1, s: 1, x: 2880, y: 1380 } }} />
    </>

    <Discord
      scenes={{
        "6": { o: 0, s: 0.8 },
        "7": { o: 1, s: 1, x: 1920, y: 480, w: 720, h: 240 },
        "8": { x: 1920, y: 480, w: 1560, h: 240 },
        "9": { x: 1920, y: 420, w: 2280, h: 240 },
        "10": { x: 1920, y: 300, w: 2400, h: 240 },
        "11": { x: 1290, y: 240, w: 1140, h: 240 },
        "12": { x: 1020, y: 240, w: 840, h: 240 },
        "13": { x: 780, y: 240, w: 1320, h: 240 },
      }}
    />

    <Animated
      scenes={{
        "6": { o: 0, s: 0.8 },
        "7": { o: 1, s: 1, x: 1920, y: 1680, w: 720, h: 240, labelProp: 120 },
        "8": { x: 2340, y: 1680, w: 720, h: 240, labelProp: 120 },
        "9": { x: 2520, y: 1740, w: 1080, h: 240, labelProp: 120 },
        "10": { x: 2340, y: 1740, w: 1560, h: 480, labelProp: 90 },
        "11": { x: 2340, y: 1740, w: 1560, h: 600, labelProp: 90 },
        "12": { x: 2400, y: 1740, w: 1680, h: 600, labelProp: 90 },
        "13": { x: 1920, y: 1740, w: 1680, h: 600, labelProp: 90 },
      }}
      backgroundColor="#21313C"
      justifyContent="flex-end"
      renderLabel={(height) => <Img src={mongodb} height={height} style={{ marginBottom: (2 * height) / 3 - 20 }} />}
    />

    <Redis
      scenes={{
        "7": { o: 0, s: 0.8 },
        "8": { o: 1, s: 1, x: 1500, y: 1680, w: 720, h: 240 },
        "9": { x: 1320, y: 1740, w: 1080, h: 240 },
        "10": { x: 1080, y: 1740, w: 720, h: 480 },
        "11": { x: 1080, y: 1560, w: 720, h: 240 },
        "12": { x: 1020, y: 1560, w: 840, h: 240 },
        "13": { x: 540, y: 1560, w: 840, h: 240 },
      }}
    />

    <Kubernetes
      scenes={{
        "9": { o: 0, s: 0.8 },
        "10": { o: 1, s: 1, x: 1920, y: 960, w: 2400, h: 840, bottomLabel: "Main Cluster (Auto-Scaling)" },
        "11": { x: 1920, y: 900, w: 2400, h: 840, bottomLabel: "Main Cluster (Auto-Scaling)" },
        "12": { x: 1500, y: 900, w: 1800, h: 840, bottomLabel: "Main Cluster" },
        "13": { x: 540, y: 900, w: 840, h: 840, bottomLabel: "Gateway Cluster" },
      }}
    />

    <Poketwo
      scenes={{
        "6": { o: 0, s: 0.8 },
        "7": { o: 1, s: 1, x: 1920, y: 1080, w: 720, h: 720, label: "Bot" },
        "8": { x: 1920, y: 1080, w: 1560, h: 720, label: "Bot" },
        "9": { x: 1020, y: 1020, w: 480, h: 720, label: "Shard" },
        "10": { x: 1065, y: 900, w: 450, h: 480, label: "Shard" },
        "11": { x: 1065, y: 840, w: 450, h: 480, label: "Shard", fontSize: 64 },
        "12": { o: 1, s: 1, x: 847.5, y: 960, w: 375, h: 240, label: "Shard", fontSize: 48 },
        "13": { o: 0, s: 0.8 },
      }}
    />

    <Poketwo
      scenes={{
        "8": { o: 0, s: 0.8 },
        "9": { o: 1, s: 1, x: 1620, y: 1020, w: 480, h: 720 },
        "10": { x: 1635, y: 900, w: 450, h: 480 },
        "11": { x: 1635, y: 840, w: 450, h: 480, fontSize: 64 },
        "12": { r: 0, x: 1282.5, y: 960, w: 375, h: 240, fontSize: 48 },
        "13": { r: -90, x: 290, y: 960, w: 240, h: 200, fontSize: 48 },
      }}
      label="Shard"
    />

    <Poketwo
      scenes={{
        "8": { o: 0, s: 0.8 },
        "9": { o: 1, s: 1, x: 2220, y: 1020, w: 480, h: 720 },
        "10": { x: 2205, y: 900, w: 450, h: 480 },
        "11": { x: 2205, y: 840, w: 450, h: 480, fontSize: 64 },
        "12": { r: 0, x: 1717.5, y: 960, w: 375, h: 240, fontSize: 48 },
        "13": { r: -90, x: 540, y: 960, w: 240, h: 200, fontSize: 48 },
      }}
      label="Shard"
    />

    <Poketwo
      scenes={{
        "6": { o: 0, s: 0.8 },
        "7": { o: 0, s: 0.8, label: "Shard" },
        "8": { o: 0, s: 0.8, label: "Shard" },
        "9": { o: 1, s: 1, x: 2820, y: 1020, w: 480, h: 720, borderStyle: "solid", label: "Shard" },
        "10": { x: 2775, y: 900, w: 450, h: 480, borderStyle: "dashed", label: "More..." },
        "11": { x: 2775, y: 840, w: 450, h: 480, borderStyle: "dashed", label: "More...", fontSize: 64 },
        "12": { r: 0, x: 2152.5, y: 960, w: 375, h: 240, borderStyle: "dashed", label: "More...", fontSize: 48 },
        "13": { r: -90, x: 800, y: 960, w: 240, h: 200, borderStyle: "dashed", label: "···", fontSize: 48 },
      }}
    />

    <Animated
      scenes={{
        "9": { o: 0, s: 0.8 },
        "10": { o: 1, s: 1, x: 1840, y: 1685, w: 440, h: 250 },
        "11": { x: 1840, y: 1685, w: 440, h: 370 },
        "12": { x: 1860, y: 1685, w: 480, h: 370 },
        "13": { x: 1380, y: 1685, w: 480, h: 370 },
      }}
      backgroundColor={"rgba(255 255 255 / 0.1"}
      fontSize={48}
      color="white"
      label="Replica Set Member"
    />

    <Animated
      scenes={{
        "9": { o: 0, s: 0.8 },
        "10": { o: 1, s: 1, x: 2340, y: 1685, w: 440, h: 250 },
        "11": { x: 2340, y: 1685, w: 440, h: 370 },
        "12": { x: 2400, y: 1685, w: 480, h: 370 },
        "13": { x: 1920, y: 1685, w: 480, h: 370 },
      }}
      backgroundColor={"rgba(255 255 255 / 0.1"}
      fontSize={48}
      color="white"
      label="Replica Set Member"
    />

    <Animated
      scenes={{
        "9": { o: 0, s: 0.8 },
        "10": { o: 1, s: 1, x: 2840, y: 1685, w: 440, h: 250 },
        "11": { x: 2840, y: 1685, w: 440, h: 370 },
        "12": { x: 2940, y: 1685, w: 480, h: 370 },
        "13": { x: 2460, y: 1685, w: 480, h: 370 },
      }}
      backgroundColor={"rgba(255 255 255 / 0.1"}
      fontSize={48}
      color="white"
      label="Arbiter"
    />

    <Poketwo
      scenes={{
        "10": { o: 0, s: 0.8 },
        "11": { o: 1, s: 1, x: 2550, y: 240, w: 1140, h: 240 },
        "12": { x: 1980, y: 240, w: 840, h: 240 },
        "13": { x: 2220, y: 240, w: 1320, h: 240 },
      }}
      label="HTTP Proxy"
    />

    <Poketwo
      scenes={{
        "10": { o: 0, s: 0.8 },
        "11": { o: 1, s: 1, x: 1080, y: 1920, w: 720, h: 240 },
        "12": { x: 1020, y: 1920, w: 840, h: 240 },
        "13": { x: 540, y: 1920, w: 840, h: 240 },
      }}
      label="Webhook Server"
    />

    <Poketwo
      scenes={{
        "11": { o: 0, s: 0.8 },
        "12": { o: 1, s: 1, x: 847.5, y: 660, w: 375, h: 240 },
        "13": { o: 0, s: 0.8 },
      }}
      label="Shard"
      fontSize={48}
    />

    <Poketwo
      scenes={{
        "11": { o: 0, s: 0.8 },
        "12": { r: 0, o: 1, s: 1, x: 1282.5, y: 660, w: 375, h: 240 },
        "13": { r: -90, x: 290, y: 660, w: 240, h: 200 },
      }}
      label="Shard"
      fontSize={48}
    />

    <Poketwo
      scenes={{
        "11": { o: 0, s: 0.8 },
        "12": { r: 0, o: 1, s: 1, x: 1717.5, y: 660, w: 375, h: 240 },
        "13": { r: -90, x: 540, y: 660, w: 240, h: 200 },
      }}
      label="Shard"
      fontSize={48}
    />

    <Poketwo
      scenes={{
        "11": { o: 0, s: 0.8 },
        "12": { r: 0, o: 1, s: 1, x: 2152.5, y: 660, w: 375, h: 240 },
        "13": { r: -90, x: 800, y: 660, w: 240, h: 200 },
      }}
      label="Shard"
      fontSize={48}
    />

    <Kubernetes
      scenes={{
        "11": { o: 0, s: 0.8 },
        "12": { o: 1, s: 1, x: 2880, y: 720, w: 720, h: 1200, bottomLabel: "Image Cluster" },
        "13": { x: 3360, y: 720, w: 720, h: 1200, bottomLabel: "Image Cluster" },
      }}
    />

    <Poketwo
      scenes={{
        "11": { o: 0, s: 0.8 },
        "12": { o: 1, s: 1, x: 2880, y: 270, w: 600, h: 180 },
        "13": { x: 3360, y: 270, w: 600, h: 180 },
      }}
      label="Image Server"
      fontSize={48}
    />

    <Poketwo
      scenes={{
        "11": { o: 0, s: 0.8 },
        "12": { o: 1, s: 1, x: 2880, y: 510, w: 600, h: 180 },
        "13": { x: 3360, y: 510, w: 600, h: 180 },
      }}
      label="Image Server"
      fontSize={48}
    />

    <Poketwo
      scenes={{
        "11": { o: 0, s: 0.8 },
        "12": { o: 1, s: 1, x: 2880, y: 750, w: 600, h: 180 },
        "13": { x: 3360, y: 750, w: 600, h: 180 },
      }}
      label="Image Server"
      fontSize={48}
    />

    <Poketwo
      scenes={{
        "11": { o: 0, s: 0.8 },
        "12": { o: 1, s: 1, x: 2880, y: 990, w: 600, h: 180 },
        "13": { x: 3360, y: 990, w: 600, h: 180 },
      }}
      borderStyle="dashed"
      label="More..."
      fontSize={48}
    />

    <RabbitMQ
      scenes={{
        "12": { o: 0, s: 0.8 },
        "13": { o: 1, s: 1, x: 1260, y: 900, w: 840, h: 360 },
      }}
      r={-90}
    />

    <Postgres
      scenes={{
        "12": { o: 0, s: 0.8 },
        "13": { o: 1, s: 1, x: 3300, y: 1740, w: 840, h: 600 },
      }}
    />

    <Kubernetes
      scenes={{
        "12": { o: 0, s: 0.8 },
        "13": { o: 1, s: 1, x: 2220, y: 900, w: 1320, h: 840, bottomLabel: "Worker Cluster" },
      }}
    />

    <Poketwo
      scenes={{
        "12": { o: 0, s: 0.8 },
        "13": { o: 1, s: 1, x: 1800, y: 660, w: 360, h: 240 },
      }}
      label="Worker"
      fontSize={48}
    />

    <Poketwo
      scenes={{
        "12": { o: 0, s: 0.8 },
        "13": { o: 1, s: 1, x: 2220, y: 660, w: 360, h: 240 },
      }}
      label="Worker"
      fontSize={48}
    />

    <Poketwo
      scenes={{
        "12": { o: 0, s: 0.8 },
        "13": { o: 1, s: 1, x: 2640, y: 660, w: 360, h: 240 },
      }}
      label="Worker"
      fontSize={48}
    />

    <Poketwo
      scenes={{
        "12": { o: 0, s: 0.8 },
        "13": { o: 1, s: 1, x: 1800, y: 960, w: 360, h: 240 },
      }}
      label="Worker"
      fontSize={48}
    />

    <Poketwo
      scenes={{
        "12": { o: 0, s: 0.8 },
        "13": { o: 1, s: 1, x: 2220, y: 960, w: 360, h: 240 },
      }}
      label="Worker"
      fontSize={48}
    />

    <Poketwo
      scenes={{
        "12": { o: 0, s: 0.8 },
        "13": { o: 1, s: 1, x: 2640, y: 960, w: 360, h: 240 },
      }}
      borderStyle="dashed"
      label="More..."
      fontSize={48}
    />
  </>
);

export default Architecture;
