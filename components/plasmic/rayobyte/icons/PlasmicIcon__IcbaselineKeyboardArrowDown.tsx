// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IcbaselineKeyboardArrowDownIconProps =
  React.ComponentProps<"svg"> & {
    title?: string;
  };

export function IcbaselineKeyboardArrowDownIcon(
  props: IcbaselineKeyboardArrowDownIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={"M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IcbaselineKeyboardArrowDownIcon;
/* prettier-ignore-end */
