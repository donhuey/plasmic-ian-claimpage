import React, {useState, useEffect} from 'react';
import * as ph from "@plasmicapp/host";
import { PlasmicClaimPage } from "../../components/plasmic/im_xbeanies/PlasmicClaimPage";
// import { useRouter } from "next/router";

import { getNftById } from "@/lib/prisma/Nfts"
import ClaimedRouteWorker from '../../components/claimedRouteWorker'
import ClaimAction from "../../components/claimflow"

import { useRouter } from 'next/navigation';



 function Nfts(props) {
    
    const nft = props.nft

    const [owner,setOwner] = useState("yo");
    const [isUidVerified,setIsUidVerified] = useState(false);
    const router = useRouter()
    const webRoute = `http://localhost:3000/`
    const claimApiRoute = `/api/Claim`;
    const delteApiRoute = `/api/EditNfts`;


async function ClaimNow(tagUid) {
    const JSONdata = JSON.stringify({tagUid:tagUid,claimed:true,owner:"devTest"})
    const endpoint = `${claimApiRoute}` // "api/paymentHandler"
    const options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSONdata,
    }
    const response = await fetch(endpoint, options)
    // {!(typeof window === undefined) && router.push(`/nfts/${tagUid}`)}
    {router.push(`/claim/${tagUid}`)}

    
}

async function destroy(id) {
  await fetch(`${delteApiRoute}`, {
    method: 'DELETE',
  })
  router.push('/')
}

useEffect(() => {
        
  const showClaimButton = async () => {
    console.log('')
      {nft?.claimed ? (
        // console.log('claimed....')
        setIsUidVerified(true)
        ): console.log('not claimed')}
      return
  }

  showClaimButton()
      return


},[isUidVerified]);

    return (
      <main >
       {/* select nft */}
      <PlasmicClaimPage 
            claimBeanieHeader={{claimText:`Claim Nft ${nft.tagUid} Detail`}}

            claimButton={{
              isVerified:nft?.claimed,
              onClick:() => {ClaimNow(nft.tagUid)}
            }}
      />

      {/* <div >
        <header >
          <h2 > Claim Nft {nft.id} Detail</h2>
        </header>
        <div >
          <div>
            <div>
           
              <div>UId</div>
              <div>{nft.tagUid}</div>
            </div>
            <div>
              <div>Issuer</div>
              <div>{nft.issuer}</div>
            </div>
            <div>
              <div>Claimed</div>
              <div>{nft.claimed.toString()}</div>
            </div>
            <div>
              <div>Owner</div>
              <div>{nft.owner}</div>
            </div>
          </div>
        </div>
      </div>
      <ClaimAction nftId={nft.tagUid} claimed={nft.claimed}/> */}
       </main>
    )
  }
  


export const getServerSideProps = async (context) => {
    const {params} = context;
    const id = params.nftId;

    async function getNft() {
        const {nft} = await getNftById(id)
        if (!nft) {
          throw new Error('Failed to fetch data')
        }
        return nft
      }
    const nft = await getNft()
    return {props:{nft}}
  }

  export default Nfts