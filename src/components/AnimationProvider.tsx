import { createContext, PropsWithChildren, useContext } from "react";

export type Animation = {
  scenes: {
    [key: string]: [number, number];
  };
};

const AnimationContext = createContext<Animation>({ scenes: {} });
export const useAnimation = () => useContext(AnimationContext);

export type AnimationProviderProps = PropsWithChildren<{
  scenes: Animation["scenes"];
}>;

const AnimationProvider = ({ scenes, children }: AnimationProviderProps) => (
  <AnimationContext.Provider value={{ scenes }}>
    {children}
  </AnimationContext.Provider>
);

export default AnimationProvider;
