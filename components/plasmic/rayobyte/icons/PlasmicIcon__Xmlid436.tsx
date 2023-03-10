// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Xmlid436IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Xmlid436Icon(props: Xmlid436IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 3 3"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M1.61.914C1.61.638 1.417.5 1.113.5H.672v1.324h.331V1.3l.387.524h.386l-.442-.552c.166-.027.276-.165.276-.358zm-.552.193h-.055V.748h.055c.166 0 .249.055.249.166 0 .138-.083.193-.249.193z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M1.16 0C.523 0 0 .524 0 1.16c0 .634.524 1.159 1.16 1.159.634 0 1.159-.525 1.159-1.16C2.319.524 1.794 0 1.159 0zm0 2.125a.954.954 0 01-.94-.966c0-.524.415-.966.94-.966.496 0 .91.442.91.966 0 .525-.414.966-.91.966z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Xmlid436Icon;
/* prettier-ignore-end */
