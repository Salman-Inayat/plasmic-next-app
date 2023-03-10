// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group33IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group33Icon(props: Group33IconProps) {
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
          "M2.273 0H0v2.273h2.273V0zm4.545 0H4.546v2.273h2.272V0zM9.09 0H6.819v2.273h2.273V0z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M11.364 0H9.09v2.273h2.273V0zm4.545 0h-2.273v2.273h2.273V0zM25 0h-2.273v2.273H25V0zm2.273 0H25v2.273h2.273V0zm2.272 0h-2.272v2.273h2.272V0zm4.545 0h-2.272v2.273h2.273V0z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M36.364 0H34.09v2.273h2.273V0zm11.363 0h-2.272v2.273h2.272V0zm4.546 0H50v2.273h2.273V0zm4.545 0h-2.273v2.273h2.273V0zm4.546 0H59.09v2.273h2.273V0zm4.545 0h-2.273v2.273h2.273V0zm2.273 0h-2.273v2.273h2.273V0zm4.545 0h-2.273v2.273h2.273V0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group33Icon;
/* prettier-ignore-end */
