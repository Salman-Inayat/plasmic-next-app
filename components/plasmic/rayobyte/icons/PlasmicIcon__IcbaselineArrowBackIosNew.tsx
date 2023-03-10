// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IcbaselineArrowBackIosNewIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IcbaselineArrowBackIosNewIcon(
  props: IcbaselineArrowBackIosNewIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 18 18"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M13.328 2.828L12 1.5 4.5 9l7.5 7.5 1.328-1.328L7.155 9l6.173-6.172z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IcbaselineArrowBackIosNewIcon;
/* prettier-ignore-end */
