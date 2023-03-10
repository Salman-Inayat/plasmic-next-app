// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Xmlid427IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Xmlid427Icon(props: Xmlid427IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 81 30"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={"M80.57 0S52.112 20.066 0 29.065h80.57V0z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Xmlid427Icon;
/* prettier-ignore-end */
