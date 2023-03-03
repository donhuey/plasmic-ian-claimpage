// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 8HMNFKnEv7gJ55SbTqvTiU
// Component: SRxjb5uqQx
import * as React from "react";
import { useRouter } from "next/router";
import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_im_xbeanies.module.css"; // plasmic-import: 8HMNFKnEv7gJ55SbTqvTiU/projectcss
import sty from "./PlasmicClaimButton.module.css"; // plasmic-import: SRxjb5uqQx/css

export const PlasmicClaimButton__VariantProps = new Array("isVerified");

export const PlasmicClaimButton__ArgProps = new Array();

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

function PlasmicClaimButton__RenderFunc(props) {
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
  const stateSpecs = React.useMemo(
    () => [
      {
        path: "isVerified",
        type: "private",
        variableType: "variant",
        initFunc: true
          ? ({ $props, $state, $queries, $ctx }) => $props.isVerified
          : undefined
      }
    ],

    [$props, $ctx]
  );

  const $state = p.useDollarState(stateSpecs, { $props, $ctx, $queries });
  return (hasVariant($state, "isVerified", "isVerified") ? true : true) ? (
    <button
      data-plasmic-name={"rectangle8"}
      data-plasmic-override={overrides.rectangle8}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.button,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        sty.rectangle8,
        {
          [sty.rectangle8isVerified]: hasVariant(
            $state,
            "isVerified",
            "isVerified"
          )
        }
      )}
      ref={ref => {
        $refs["rectangle8"] = ref;
      }}
    >
      <div
        data-plasmic-name={"text"}
        data-plasmic-override={overrides.text}
        className={classNames(projectcss.all, projectcss.__wab_text, sty.text)}
      >
        {"CLAIM"}
      </div>
    </button>
  ) : null;
}

const PlasmicDescendants = {
  rectangle8: ["rectangle8", "text"],
  text: ["text"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicClaimButton__ArgProps,
          internalVariantPropNames: PlasmicClaimButton__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicClaimButton__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "rectangle8") {
    func.displayName = "PlasmicClaimButton";
  } else {
    func.displayName = `PlasmicClaimButton.${nodeName}`;
  }
  return func;
}

export const PlasmicClaimButton = Object.assign(
  // Top-level PlasmicClaimButton renders the root element
  makeNodeComponent("rectangle8"),
  {
    // Helper components rendering sub-elements
    text: makeNodeComponent("text"),
    // Metadata about props expected for PlasmicClaimButton
    internalVariantProps: PlasmicClaimButton__VariantProps,
    internalArgProps: PlasmicClaimButton__ArgProps
  }
);

export default PlasmicClaimButton;
/* prettier-ignore-end */
