const connectButton = document.getElementById("connectButton");


function connect(){
    if (typeof window.ethereum !== 'undefined'){
        console.log("MetaMask is installed!");
    } else {
        connectButton.innerHTML = "Please install metamask";
    }
}

connectButton.onclick = connect();

