// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Xmlid422IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Xmlid422Icon(props: Xmlid422IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 3 16"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path d={"M2.953 0H0v15.18h2.953V0z"} fill={"currentColor"}></path>
    </svg>
  );
}

export default Xmlid422Icon;
/* prettier-ignore-end */
