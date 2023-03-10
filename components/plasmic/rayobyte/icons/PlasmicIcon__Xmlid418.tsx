// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Xmlid418IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Xmlid418Icon(props: Xmlid418IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 9 16"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M0 15.18h8.39v-2.566H2.954V8.529h5.245V5.962H2.953V2.595h5.438V0H0v15.18z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Xmlid418Icon;
/* prettier-ignore-end */
