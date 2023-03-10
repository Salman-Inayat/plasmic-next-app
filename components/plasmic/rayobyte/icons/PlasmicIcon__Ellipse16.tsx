// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Ellipse16IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Ellipse16Icon(props: Ellipse16IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 197 239"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M177.004 224.73c7.977-32.995 5.895-46.529 2.595-72.411A165.431 165.431 0 0014 14.018"
        }
        stroke={"currentColor"}
        strokeWidth={"28"}
        strokeLinecap={"round"}
      ></path>
    </svg>
  );
}

export default Ellipse16Icon;
/* prettier-ignore-end */
