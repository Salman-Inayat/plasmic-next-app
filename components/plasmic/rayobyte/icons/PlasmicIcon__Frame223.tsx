// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Frame223IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Frame223Icon(props: Frame223IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 247 43"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M21.5 0l4.827 14.856h15.62L29.31 24.038l4.827 14.856L21.5 29.712 8.863 38.894l4.827-14.856-12.638-9.182h15.62L21.5 0zm51 0l4.827 14.856h15.62L80.31 24.038l4.827 14.856L72.5 29.712l-12.637 9.182 4.827-14.856-12.638-9.182h15.62L72.5 0zm51 0l4.827 14.856h15.621l-12.638 9.182 4.827 14.856-12.637-9.182-12.637 9.182 4.827-14.856-12.638-9.182h15.621L123.5 0zm51 0l4.827 14.856h15.621l-12.638 9.182 4.827 14.856-12.637-9.182-12.637 9.182 4.827-14.856-12.638-9.182h15.621L174.5 0zm51 0l4.827 14.856h15.621l-12.638 9.182 4.827 14.856-12.637-9.182-12.637 9.182 4.827-14.856-12.638-9.182h15.621L225.5 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Frame223Icon;
/* prettier-ignore-end */
