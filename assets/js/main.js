import axios from "axios";

const ipAddressPlaceholder = document.querySelector("#ipAddress");
// Get the ip address from this url: https://ipv4.icanhazip.com/

// const URL = "/ip"
const URL = "https://ipv4.icanhazip.com/";

let xhr = new XMLHttpRequest();

xhr.onreadystatechange = function () {
  if (this.readyState === 4) {
    if (this.status === 200) {
      ipAddressPlaceholder.textContent = xhr.responseText;

      console.log("xhr: ", xhr.responseText);
    } else {
      ipAddressPlaceholder.innerHTML =
        "<div class='alert-danger'>COULDN'T GET YOUR IP. <a href='/Get-My-IP-Web-App/' class='retry-btn'>Retry</a></div>";
    }
  }
};
xhr.open(
  "GET",
  // "https://cors-anywhere.herokuapp.com/https://ipv4.icanhazip.com/"
  URL
);
xhr.send();

async function logIP() {
  const response = await fetch(URL);
  const ipAddress = await response.text();
  console.log("fetchAPI", ipAddress);
}

const searchFromApi = async (query) => {
  const result = await axios.get(URL, {
    params: query,
  });

  ipAddressPlaceholder.textContent = result.data;
  console.log("axios", result.data);
};

logIP();
searchFromApi();
