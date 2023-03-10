// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type RadioButtonUncheckedIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function RadioButtonUncheckedIcon(props: RadioButtonUncheckedIconProps) {
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

      <g clipPath={"url(#brzPzVqZI2_a)"}>
        <path
          d={
            "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
          }
          fill={"currentColor"}
        ></path>
      </g>

      <defs>
        <clipPath id={"brzPzVqZI2_a"}>
          <path fill={"currentColor"} d={"M0 0h24v24H0z"}></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default RadioButtonUncheckedIcon;
/* prettier-ignore-end */
