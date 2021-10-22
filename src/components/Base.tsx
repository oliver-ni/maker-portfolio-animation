import { Property } from "csstype";
import { PropsWithChildren, ReactNode } from "react";

export type BaseProps = PropsWithChildren<{
  x?: number;
  y?: number;
  w?: number;
  h?: number;
  s?: Property.Scale;
  o?: Property.Opacity;
  r?: number;
  borderRadius?: number;
  boxShadow?: Property.BoxShadow;
  backgroundColor?: Property.BackgroundColor;
  borderColor?: Property.BackgroundColor;
  borderStyle?: Property.BorderStyle;
  color?: Property.Color;
  fontSize?: number;
  fontFamily?: Property.FontFamily;
  fontWeight?: Property.FontWeight;
  label?: string | ReactNode;
  bottomLabel?: string | ReactNode;
  justifyContent?: Property.JustifyContent;
  labelProp?: number;
  renderLabel?: (height: number) => ReactNode;
}>;

const Base = ({
  x = -10000,
  y = -10000,
  w = 0,
  h = 0,
  s = 1,
  o = 1,
  r = 0,
  borderRadius = 36,
  boxShadow,
  backgroundColor = "white",
  borderColor,
  borderStyle = "solid",
  color = "black",
  fontSize = 64,
  fontFamily = "Jetbrains Mono",
  fontWeight = "bold",
  label,
  bottomLabel,
  justifyContent = "center",
  labelProp = 0,
  renderLabel,
  children,
}: BaseProps) => (
  <div
    style={{
      position: "absolute",
      left: x,
      top: y,
      width: w,
      height: h,
      opacity: o,
      transform: `translateX(-50%) translateY(-50%) scale(${s}) rotate(${r}deg)`,
      overflow: "hidden",

      boxShadow,
      backgroundColor,
      borderColor,
      color,
      borderWidth: borderColor && (w >= 450 && h >= 240 ? 15 : 10),
      borderStyle: borderColor && borderStyle,
      borderRadius,

      display: "flex",
      flexDirection: "column",
      justifyContent,
      alignItems: "center",
      textAlign: "center",

      fontSize,
      fontFamily,
      fontWeight,
    }}
  >
    {bottomLabel && (
      <div
        style={{
          position: "absolute",
          left: 150,
          right: 150,
          bottom: 0,
          height: 240,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        {bottomLabel}
      </div>
    )}

    {label}
    {renderLabel && renderLabel(labelProp)}
    {children}
  </div>
);

export default Base;
