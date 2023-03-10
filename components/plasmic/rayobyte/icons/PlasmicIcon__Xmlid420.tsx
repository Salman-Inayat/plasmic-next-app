// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Xmlid420IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Xmlid420Icon(props: Xmlid420IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 12 16"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M0 7.95c0 4.47 3.505 7.921 8.004 7.921 1.27 0 2.374-.248 3.7-.883V11.51c-1.188 1.187-2.237 1.656-3.562 1.656-2.98 0-5.106-2.153-5.106-5.244 0-2.926 2.18-5.217 4.968-5.217 1.408 0 2.485.497 3.7 1.711V.938C10.405.276 9.328 0 8.06 0 3.616 0 0 3.533 0 7.95z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Xmlid420Icon;
/* prettier-ignore-end */
