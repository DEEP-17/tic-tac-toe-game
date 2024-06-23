const URL="https://api.thecatapi.com/v1/images/search";
const factPara=document.querySelector("#fact");
const btn=document.querySelector("#btn");
const getFacts=async ()=>
    {
        console.log("data loading...");
        let response=await fetch(URL);
        let data=await response.json();
        console.log(data[0]);
        factPara.src=data[0].url;
        console.log(data[0].url);
    };
    btn.addEventListener("click",getFacts);