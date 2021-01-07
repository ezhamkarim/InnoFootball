import * as React from "react";

import { Text, TextProps } from "./Themed";

export function MonoText(props: TextProps) {
  return (
    <Text {...props} style={[props.style, { fontFamily: "space-mono" }]} />
  );
}

export function NotoMediumText(props: TextProps) {
  return (
    <Text {...props} style={[props.style, { fontFamily: "noto-medium" }]} />
  );
}
export function NotoBoldText(props: TextProps) {
  return <Text {...props} style={[props.style, { fontFamily: "noto-bold" }]} />;
}
