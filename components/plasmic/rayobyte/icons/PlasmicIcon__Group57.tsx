// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group57IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group57Icon(props: Group57IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 56 46"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M47.544 23.873L7.798.948C3.522-1.557 0 1.073 0 6.836c0 5.762 3.522 12.276 7.798 14.782l39.747 22.924c4.276 2.506 7.798-.125 7.798-5.887 0-5.638-3.522-12.277-7.799-14.782z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group57Icon;
/* prettier-ignore-end */
