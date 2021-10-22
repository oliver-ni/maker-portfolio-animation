import { Img } from "remotion";
import arrow_double from "../assets/arrow_double.svg";
import arrow_special from "../assets/arrow_special.svg";
import arrow_special_postgres from "../assets/arrow_special_postgres.svg";
import arrow_special_redis from "../assets/arrow_special_redis.svg";
import arrow_up from "../assets/arrow_up.svg";
import discord from "../assets/logos/discord.svg";
import kubernetes from "../assets/logos/kubernetes.svg";
import postgres from "../assets/logos/postgres.svg";
import rabbitmq from "../assets/logos/rabbitmq.svg";
import redis from "../assets/logos/redis.svg";
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
  <Animated backgroundColor="#FF6600" label={<Img src={rabbitmq} height={90} />} {...props} />
);

export const Postgres = (props: AnimatedProps) => (
  <Animated backgroundColor="#336791" label={<Img src={postgres} height={240} />} {...props} />
);

export const ArrowUp = (props: AnimatedProps) => (
  <Animated label={<Img src={arrow_up} height={120} />} {...props} w={30} h={120} />
);

export const ArrowDown = (props: AnimatedProps) => (
  <Animated label={<Img src={arrow_up} height={120} />} {...props} w={30} h={120} r={180} />
);

export const ArrowLeft = (props: AnimatedProps) => (
  <Animated label={<Img src={arrow_up} height={120} />} {...props} w={30} h={120} r={-90} />
);

export const ArrowRight = (props: AnimatedProps) => (
  <Animated label={<Img src={arrow_up} height={120} />} {...props} w={30} h={120} r={90} />
);

export const ArrowDoubleVertical = (props: AnimatedProps) => (
  <Animated label={<Img src={arrow_double} height={120} />} {...props} w={30} h={120} />
);

export const ArrowDoubleHorizontal = (props: AnimatedProps) => (
  <Animated label={<Img src={arrow_double} height={120} />} {...props} w={30} h={120} r={90} />
);

export const ArrowSpecial = (props: AnimatedProps) => (
  <Animated label={<Img src={arrow_special} height={240} />} {...props} w={1830} h={240} />
);

export const ArrowSpecialRedis = (props: AnimatedProps) => (
  <Animated label={<Img src={arrow_special_redis} height={120} />} {...props} w={1110} h={120} />
);

export const ArrowSpecialPostgres = (props: AnimatedProps) => (
  <Animated label={<Img src={arrow_special_postgres} height={120} />} {...props} w={510} h={120} />
);
