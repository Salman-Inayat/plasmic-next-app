// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Frame154IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Frame154Icon(props: Frame154IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 72 12"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <circle cx={"6"} cy={"6"} r={"6"} fill={"currentColor"}></circle>

      <circle
        opacity={".3"}
        cx={"26"}
        cy={"6"}
        r={"6"}
        fill={"currentColor"}
      ></circle>

      <circle
        opacity={".3"}
        cx={"46"}
        cy={"6"}
        r={"6"}
        fill={"currentColor"}
      ></circle>

      <circle
        opacity={".3"}
        cx={"66"}
        cy={"6"}
        r={"6"}
        fill={"currentColor"}
      ></circle>
    </svg>
  );
}

export default Frame154Icon;
/* prettier-ignore-end */
