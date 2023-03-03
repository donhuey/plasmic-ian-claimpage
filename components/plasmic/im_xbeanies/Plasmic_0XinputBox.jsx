// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 8HMNFKnEv7gJ55SbTqvTiU
// Component: 0SLk0MG_H_
import * as React from "react";
import { useRouter } from "next/router";
import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_im_xbeanies.module.css"; // plasmic-import: 8HMNFKnEv7gJ55SbTqvTiU/projectcss
import sty from "./Plasmic_0XinputBox.module.css"; // plasmic-import: 0SLk0MG_H_/css

export const Plasmic_0XinputBox__VariantProps = new Array();

export const Plasmic_0XinputBox__ArgProps = new Array();

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());

const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function Plasmic_0XinputBox__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const __nextRouter = useNextRouter();
  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);
  const $props = {
    ...args,
    ...variants
  };
  const refsRef = React.useRef({});
  const $refs = refsRef.current;
  const currentUser = p.useCurrentUser?.() || {};
  const [$queries, setDollarQueries] = React.useState({});
  return (
    <div
      data-plasmic-name={"_0XAddressButton"}
      data-plasmic-override={overrides._0XAddressButton}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        sty._0XAddressButton
      )}
    >
      <div
        data-plasmic-name={"rectangle7"}
        data-plasmic-override={overrides.rectangle7}
        className={classNames(projectcss.all, sty.rectangle7)}
      >
        <input
          data-plasmic-name={"textInput"}
          data-plasmic-override={overrides.textInput ?? overrides.textbox}
          className={classNames(
            projectcss.all,
            projectcss.input,
            sty.textInput
          )}
          defaultValue={""}
          placeholder={"ETH or ENS Address"}
          size={1}
          title={"Enter your address"}
          type={"text"}
          value={""}
        />
      </div>
    </div>
  );
}

const PlasmicDescendants = {
  _0XAddressButton: ["_0XAddressButton", "rectangle7", "textInput", "textbox"],
  rectangle7: ["rectangle7", "textInput", "textbox"],
  textInput: ["textInput", "textbox"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: Plasmic_0XinputBox__ArgProps,
          internalVariantPropNames: Plasmic_0XinputBox__VariantProps
        }),
      [props, nodeName]
    );

    return Plasmic_0XinputBox__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "_0XAddressButton") {
    func.displayName = "Plasmic_0XinputBox";
  } else {
    func.displayName = `Plasmic_0XinputBox.${nodeName}`;
  }
  return func;
}

export const Plasmic_0XinputBox = Object.assign(
  // Top-level Plasmic_0XinputBox renders the root element
  makeNodeComponent("_0XAddressButton"),
  {
    // Helper components rendering sub-elements
    rectangle7: makeNodeComponent("rectangle7"),
    textInput: makeNodeComponent("textInput"),
    // Metadata about props expected for Plasmic_0XinputBox
    internalVariantProps: Plasmic_0XinputBox__VariantProps,
    internalArgProps: Plasmic_0XinputBox__ArgProps
  }
);

export default Plasmic_0XinputBox;
/* prettier-ignore-end */