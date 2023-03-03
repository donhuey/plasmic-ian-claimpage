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
import sty from "./PlasmicWalletconnectButton.module.css"; // plasmic-import: 0SLk0MG_H_/css

export const PlasmicWalletconnectButton__VariantProps = new Array();

export const PlasmicWalletconnectButton__ArgProps = new Array();

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

function PlasmicWalletconnectButton__RenderFunc(props) {
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
      <button
        data-plasmic-name={"rectangle7"}
        data-plasmic-override={overrides.rectangle7}
        className={classNames(
          projectcss.all,
          projectcss.button,
          sty.rectangle7
        )}
        ref={ref => {
          $refs["rectangle7"] = ref;
        }}
      >
        <div
          data-plasmic-name={"connectWallet"}
          data-plasmic-override={overrides.connectWallet}
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.connectWallet
          )}
        >
          {"Connect Wallet"}
        </div>
      </button>
    </div>
  );
}

const PlasmicDescendants = {
  _0XAddressButton: ["_0XAddressButton", "rectangle7", "connectWallet"],
  rectangle7: ["rectangle7", "connectWallet"],
  connectWallet: ["connectWallet"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicWalletconnectButton__ArgProps,
          internalVariantPropNames: PlasmicWalletconnectButton__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicWalletconnectButton__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "_0XAddressButton") {
    func.displayName = "PlasmicWalletconnectButton";
  } else {
    func.displayName = `PlasmicWalletconnectButton.${nodeName}`;
  }
  return func;
}

export const PlasmicWalletconnectButton = Object.assign(
  // Top-level PlasmicWalletconnectButton renders the root element
  makeNodeComponent("_0XAddressButton"),
  {
    // Helper components rendering sub-elements
    rectangle7: makeNodeComponent("rectangle7"),
    connectWallet: makeNodeComponent("connectWallet"),
    // Metadata about props expected for PlasmicWalletconnectButton
    internalVariantProps: PlasmicWalletconnectButton__VariantProps,
    internalArgProps: PlasmicWalletconnectButton__ArgProps
  }
);

export default PlasmicWalletconnectButton;
/* prettier-ignore-end */