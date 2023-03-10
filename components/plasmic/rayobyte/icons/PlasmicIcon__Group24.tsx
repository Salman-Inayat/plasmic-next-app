// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group24IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group24Icon(props: Group24IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 73 3"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M2.273 0H0v2.273h2.273V0zm4.545 0H4.546v2.273h2.272V0zm4.546 0H9.09v2.273h2.273V0z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M13.636 0h-2.272v2.273h2.272V0zm6.818 0h-2.272v2.273h2.273V0zM34.09 0h-2.272v2.273h2.273V0z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={"M36.364 0H34.09v2.273h2.273V0zm4.546 0h-2.274v2.273h2.273V0z"}
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M43.182 0h-2.273v2.273h2.273V0zM50 0h-2.273v2.273H50V0zm4.545 0h-2.272v2.273h2.272V0z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M56.818 0h-2.273v2.273h2.273V0zm6.818 0h-2.272v2.273h2.272V0zm4.546 0h-2.273v2.273h2.273V0z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={"M70.454 0h-2.272v2.273h2.272V0zm2.273 0h-2.273v2.273h2.273V0z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group24Icon;
/* prettier-ignore-end */
