// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector4IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector4Icon(props: Vector4IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 13 16"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M4.333 0H0v15.18h4.333c2.291 0 3.947-.551 5.41-1.738a7.592 7.592 0 002.76-5.824C12.477 3.12 9.137 0 4.334 0zm3.478 11.427c-.938.828-2.125 1.215-4.057 1.215h-.8V2.595h.8c1.904 0 3.064.33 4.057 1.214 1.022.91 1.629 2.319 1.629 3.781 0 1.463-.607 2.926-1.629 3.837z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector4Icon;
/* prettier-ignore-end */
