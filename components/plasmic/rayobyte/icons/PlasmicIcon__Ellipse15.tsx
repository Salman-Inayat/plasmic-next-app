// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Ellipse15IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Ellipse15Icon(props: Ellipse15IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 364 364"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <circle
        opacity={".45"}
        cx={"182"}
        cy={"182"}
        r={"176"}
        stroke={"currentColor"}
        strokeWidth={"12"}
      ></circle>
    </svg>
  );
}

export default Ellipse15Icon;
/* prettier-ignore-end */
