// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector28IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector28Icon(props: Vector28IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 121 69"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M69.153 67.58L1.687 29.26c-2.494-1.462-2.2-3.949.733-5.557L41.286 1.327c2.787-1.609 7.187-1.755 9.68-.439l67.466 38.318c2.494 1.463 2.2 3.95-.733 5.558L78.833 67.14c-2.934 1.61-7.187 1.755-9.68.44z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector28Icon;
/* prettier-ignore-end */
