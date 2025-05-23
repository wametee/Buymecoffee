import { createWalletClient, custom, createPublicClient } from "https://esm.sh/viem";
const fundingButton = document.getElementById("fundingButton");
const connectButton = document.getElementById("connectButton");
const ethAmountInput = document.getElementById("ethAmount");

// variable to help us interact with blockchain wallet
let walletClient;
let publicClient;

async function connect(){
    if (typeof window.ethereum !== 'undefined'){
        // create wallet 
        // connect to metamask
       walletClient = createWalletClient({
        transport: custom(window.ethereum)
       })
       // Requests a list of accounts managed by a wallet
       //  sends a request to the wallet, asking for permission to access the user's accounts. After the user accepts the request, it will return a list of accounts (addresses).


       await  walletClient.requestAddresses()
        connectButton.innerHTML = "Connected";

    } else {
        connectButton.innerHTML = "Please install metamask";
    }
}

async function fund(){
    const ethAmount = ethAmountInput.value;
    console.log(`Funding with ${ethAmount}...`);

     if (typeof window.ethereum !== 'undefined'){
        // create wallet 
        // connect to metamask
       walletClient = createWalletClient({
        transport: custom(window.ethereum)
       })
      await walletClient.requestAddresses()
      publicClient = createPublicClient({
        transport: custom(window.ethereum)
      })

      await publicClient.simulateContract({
        // address ????
      })

    } else {
        connectButton.innerHTML = "Please install metamask";
    }
}
}

connectButton.onclick = connect();
fundingButton.onClick = fund

