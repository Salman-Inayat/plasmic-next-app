// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Xmlid421IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Xmlid421Icon(props: Xmlid421IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 11 16"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M6.155 6.045C4.39 5.382 3.865 4.94 3.865 4.14c0-.966.938-1.683 2.207-1.683.884 0 1.629.358 2.374 1.242l1.546-2.015C8.722.58 7.204 0 5.52 0 2.843 0 .773 1.877.773 4.361c0 2.098.966 3.174 3.726 4.168 1.16.414 1.739.69 2.043.856.58.386.883.938.883 1.573 0 1.242-.966 2.153-2.291 2.153-1.408 0-2.54-.718-3.23-2.015L0 12.946c1.352 2.014 3.009 2.897 5.244 2.897 3.064 0 5.245-2.042 5.245-4.995.055-2.457-.966-3.561-4.334-4.803z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Xmlid421Icon;
/* prettier-ignore-end */
