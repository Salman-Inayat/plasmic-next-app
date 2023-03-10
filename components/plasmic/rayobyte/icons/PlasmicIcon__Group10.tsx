// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group10IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group10Icon(props: Group10IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 35 3"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M2.273 0H0v2.273h2.273V0zM9.09 0H6.819v2.273h2.273V0zm6.819 0h-2.273v2.273h2.273V0zm13.636 0h-2.272v2.273h2.272V0zm2.273 0h-2.273v2.273h2.273V0zm2.272 0h-2.272v2.273h2.273V0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group10Icon;
/* prettier-ignore-end */
