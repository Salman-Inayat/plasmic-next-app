// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group62IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group62Icon(props: Group62IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 52 31"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M0 7.14C0 3.132 5.409 0 12.83 0c7.295 0 12.703 3.132 12.703 7.14 0 4.01-5.408 7.14-12.704 7.14C5.41 14.28 0 11.025 0 7.14zm39.243-2.756l4.905 1.629-33.205 21.17-4.906-1.628 33.206-21.17zM16.603 7.14c0-1.252-1.635-2.38-4.025-2.38-2.264 0-3.9 1.002-3.9 2.38 0 1.253 1.636 2.38 3.9 2.38 2.39-.125 4.025-1.127 4.025-2.38zm9.56 16.286c0-4.009 5.408-7.14 12.829-7.14 7.295 0 12.703 3.256 12.703 7.14 0 4.008-5.408 7.14-12.703 7.14-7.421 0-12.83-3.132-12.83-7.14zm16.602 0c0-1.253-1.635-2.38-4.025-2.38-2.264 0-3.9 1.002-3.9 2.38 0 1.252 1.636 2.38 3.9 2.38 2.516-.125 4.025-1.128 4.025-2.38z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group62Icon;
/* prettier-ignore-end */
