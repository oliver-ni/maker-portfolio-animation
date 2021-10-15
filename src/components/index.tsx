import { Img } from "remotion";
import discord from "../assets/discord.svg";
import kubernetes from "../assets/kubernetes.svg";
import postgres from "../assets/postgres.svg";
import rabbitmq from "../assets/rabbitmq.svg";
import redis from "../assets/redis.svg";
import Animated, { AnimatedProps } from "./Animated";

export const Poketwo = (props: AnimatedProps) => <Animated borderColor="#FDD000" {...props} />;

export const Kubernetes = ({ label, ...props }: AnimatedProps) => {
  return (
    <Animated backgroundColor="#E8EFFC" {...props}>
      <Img src={kubernetes} height={90} style={{ position: "absolute", right: 40, bottom: 40 }} />
    </Animated>
  );
};

export const Discord = (props: AnimatedProps) => (
  <Animated backgroundColor="#5865F2" label={<Img src={discord} height={120} />} {...props} />
);

export const Redis = (props: AnimatedProps) => (
  <Animated backgroundColor="#6D7278" label={<Img src={redis} height={120} />} {...props} />
);

export const RabbitMQ = (props: AnimatedProps) => (
  <Animated
    backgroundColor="#FF6600"
    label={<Img src={rabbitmq} height={90} style={{ transform: "rotate(-90deg)" }} />}
    {...props}
  />
);

export const Postgres = (props: AnimatedProps) => (
  <Animated backgroundColor="#336791" label={<Img src={postgres} height={240} />} {...props} />
);
