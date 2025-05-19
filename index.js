import { createWalletClient, custom } from "https://esm.sh/viem";


const connectButton = document.getElementById("connectButton");

// variable to help us interact with blockchain wallet
let walletClient;

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

connectButton.onclick = connect();

