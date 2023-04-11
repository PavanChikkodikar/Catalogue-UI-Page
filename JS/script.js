//function for debounce
function debounce(func,delay=3000){
  let timer;
  return (args) => {
    clearTimeout(timer);
    timer = setTimeout(() => { func.apply(this,args);
    }, delay);
  };
}

//function for search 
function search(){
  let searchQuery = document.getElementById("srch").value;
  window.parent.location=`index_PLP.html?q=${searchQuery}`;
}

//function for checkbox in facets/filters
function checkbox(){
  var dict = {}
  var markedCheckBox = document.querySelectorAll('input[type="checkbox"]:checked.filter');
  for (let i=0;i<markedCheckBox.length;i+=1){
    if (!(markedCheckBox[i].name in dict)){
      dict[markedCheckBox[i].name] = [];
      dict[markedCheckBox[i].name].push(markedCheckBox[i].id)
    }
    else if (markedCheckBox[i].name in dict){
      dict[markedCheckBox[i].name].push(markedCheckBox[i].id);
    }
  }
  var keys = Object.keys(dict) || [];
  var facetQuery = [];
  for (let i = 0; i<keys.length; i += 1){
    for (let j = 0;j < dict[keys[i]].length;j += 1){
      var stri = "";
          stri += (keys[i]);
          stri += ":\\";
          stri +='"';
          stri += (dict[keys[i]][j]);
          stri += "\\";
          stri += '"';
          facetQuery.push(String(stri))
    
    }
  }
  window.location.href = `index_PLP.html?facets=${facetQuery}`
}

const processChanges = debounce(() => search());
const check = debounce(() => checkbox());


window.onload = function()
{
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  let prod_query = urlParams.get('q');
  let facets = urlParams.get('facets');
  let decoded = decodeURIComponent(facets);
  const facetArray = decoded.split(",")
    const decodedFacetArray = [];
    for (let i = 0;i < facetArray.length;i += 1){
      let newq = facetArray[i].replaceAll('\\\"','\"');
      decodedFacetArray.push(newq)
    }
    if (decodedFacetArray[0] === "null"){
      decodedFacetArray.pop()
    }
  var myHeaders = new Headers();
myHeaders.append("Accept", "*/*");
myHeaders.append("Accept-Language", "en-GB,en-US;q=0.9,en;q=0.8");
myHeaders.append("Connection", "keep-alive");
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Cookie", "ajs_user_id=sivanv@unbxd.com; _ga=GA1.2.44711214.1628009891; fs_cid=1.0; fs_uid=#BCTWS#5827173059792896:5552003249360896:::#89e388a9#/1687244231; intercom-device-id-uksd1f47=65dacc19-cc8f-4a38-9280-d7f1930483b8; ajs_user_id=sivanv@unbxd.com; ajs_anonymous_id=0d8cfecc-572a-4fb9-8771-7f8ebd343592; _gid=GA1.2.1181530657.1679289145; _un_sso_uid=eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjpudWxsLCJleHBpcnkiOiIyMDIzLTAzLTI4IDA0OjE4OjMwIFVUQyIsImVtYWlsIjoic2l2YW52QHVuYnhkLmNvbSIsInJlZ2lvbnMiOnsidXMiOnsicmVmX3VzZXJfaWQiOjcwMjUxfSwic2ciOnsicmVmX3VzZXJfaWQiOjM4OX0sInVrIjp7InJlZl91c2VyX2lkIjoyNTl9LCJhdSI6eyJyZWZfdXNlcl9pZCI6MjYyfSwidXNfZ2NwIjp7InJlZl91c2VyX2lkIjoyNjZ9fX0.HjcmYCYF2_Jni6WGoGkMqdirdsjGZI15EiDlCNJRp50; _un_csrf=eyJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6InNpdmFudkB1bmJ4ZC5jb20iLCJleHBpcnkiOiIyMDIzLTAzLTMxIDA0OjE4OjMwIFVUQyIsInVzZXJfaWQiOiI1ZDA5ZGUyOWIxZDI1MDAwMjNiOTc1MmIiLCJ0aW1lc3RhbXAiOiIyMDIzLTAzLTIxVDA0OjE4OjMwLjc4OVoifQ.afdTOWa8_r12If2N-9ZkK7Wd0ydjQRvm0vM280rMN_w; mp_4d8b093383efd0132a7afde806127f49_mixpanel=%7B%22distinct_id%22%3A%20%22186cf4aae0dfe8-07f65447b74e8f-1f525634-29b188-186cf4aae0e1c0d%22%2C%22%24device_id%22%3A%20%22186cf4aae0dfe8-07f65447b74e8f-1f525634-29b188-186cf4aae0e1c0d%22%2C%22mp_lib%22%3A%20%22Segment%3A%20web%22%2C%22%24initial_referrer%22%3A%20%22%24direct%22%2C%22%24initial_referring_domain%22%3A%20%22%24direct%22%7D; connect.sid=s%3ArfsVqhM8NaF8eDe-O0xZ-GCC-BxSNgO7.AeW2wRDrJUNK891rbKv15DAcFiiWaXHoqv5O0fWxj80; ajs_group_id=8542a739d0b398ee28a5b32c351e45e1; ajs_anonymous_id=0d8cfecc-572a-4fb9-8771-7f8ebd343592; intercom-session-uksd1f47=TkJHUVZxN3pPMVJySWk4RGtkWHhZcXltNFd5Y0JkRHhFMngwYUJrdGd1N2FjRngrUURPbEthanQ1MmpGdWMweC0takNYY29GaHhrd0lidTRsUWNEU3NXUT09--831f39c58176f7b8a7d643f6e9eb71ccc544b2a6; JSESSIONID=o5s6-GZRx9jj4DTZ430OHTjfwx3OftI7RsDWLOyh");
myHeaders.append("Origin", "https://pim.unbxd.io");
myHeaders.append("Referer", "https://pim.unbxd.io/catalogueView/");
myHeaders.append("Sec-Fetch-Dest", "empty");
myHeaders.append("Sec-Fetch-Mode", "cors");
myHeaders.append("Sec-Fetch-Site", "same-origin");
myHeaders.append("User-Agent", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36");
myHeaders.append("X-Requested-With", "XMLHttpRequest");
myHeaders.append("sec-ch-ua", "\"Chromium\";v=\"110\", \"Not A(Brand\";v=\"24\", \"Google Chrome\";v=\"110\"");
myHeaders.append("sec-ch-ua-mobile", "?0");
myHeaders.append("sec-ch-ua-platform", "\"macOS\"");

var raw = JSON.stringify({
  "page": 1,
  "count": 21,
  "facet_filters": decodedFacetArray,
  "search_str": prod_query 
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};



fetch("https://pim.unbxd.io/peppercorn/api/v2/catalogueView/6391b1448f93e67002742cef", requestOptions)
  .then(response => {
    response.json().then(data => {
      let prodcard = document.getElementById("forma")
      products = data["response"]["products"]
      let filters = data["facets"]
      console.log(filters)
      //iterating throught all products 
      for (let i = 0; i < products.length; i++) {

        let card = document.createElement("div")
        let cardImg = document.createElement("img")
        let cardBody = document.createElement("div")
        let cardTitle = document.createElement("h6")
        let cardUniqueId = document.createElement("p")
        let cardLink = document.createElement("a")
        // let cardButton = document.createElement("button")

        card.classList.add("card")
        cardImg.classList.add("card-img-top")
        cardBody.classList.add("card-body")
        cardTitle.classList.add("card-title")
        cardLink.classList.add("btn", "btn-dark", "stretched-link")
        // cardButton.classList.add("btn", "btn-dark", "stretched-link")
        //displaying the default image if we dont have any product image
        const defaultImageUrl = '/Images/default_img.jpeg';
        for (let i = 0; i < products.length; i++) {
          if (products[i]["productImage"] === undefined) {
            products[i]["productImage"] = defaultImageUrl;
          }
        }
        
        cardImg.setAttribute("src", products[i]["productImage"])
        cardImg.setAttribute("alt", "...")
        cardTitle.textContent = products[i]["productName"]
        cardUniqueId.textContent = "UniqueId:" + products[i]["uniqueId"]
        cardLink.setAttribute("href", "/pdp.html?ProductId=" + products[i]["uniqueId"])
        // cardButton.textContent = "View Product"
    
        var cardButton = document.createElement("button");
        cardButton.textContent = "View Product";
        var myCard = document.getElementById("myCard");
        cardButton.onclick = function() {
          window.open(`index_PDP.html?ProductId=${products[i]['uniqueId']}`);
        };
        cardBody.appendChild(cardTitle)
        cardBody.appendChild(cardUniqueId)
        cardBody.appendChild(cardLink)
        card.appendChild(cardImg)
        card.appendChild(cardBody)
        card.appendChild(cardButton);
        prodcard.appendChild(card)

        card.style.maxWidth = "18rem"
        card.style.margin = "1rem"
        card.style.border = "1px solid #dee2e6"
        cardImg.style.width = "100%"
        cardLink.style.position = "absolute"
        cardLink.style.bottom = "0"
        cardLink.style.width = "100%"
        cardButton.style.marginLeft = "100px"
        cardButton.style.height = "45px"
        cardButton.style.width = "90px"
        cardButton.style.borderRadius = "15px"

      }
    //getting all the filters
      for (let fieldId in filters) {
        const displayName = filters[fieldId].displayName;
        const values = filters[fieldId].values;
            sideBar = document.getElementsByClassName('sidebar')[0];
            facets = data["facets"] || {};
            keys = Object.keys(facets) || [];
            sideBar.innerHTML += '<hr class="horizontalbreak1">'
            for (ind in keys) {
              var fieldName = document.createElement("div");
      
              fieldName.innerHTML += `
              <p class="p"><b>${facets[keys[ind]]["displayName"]}</b></p>
              <form id = "category">
              `
              for (let ind2 = 0; ind2 < facets[keys[ind]]["values"].length; ind2 += 2) {
      
                  fieldName.innerHTML += `
                      <input type="checkbox" class="filter" name="`+facets[keys[ind]]["fieldId"]+`" id="`+facets[keys[ind]]["values"][ind2]+`" onchange=check()>
                      <label for="categorylabel"> ${facets[keys[ind]]["values"][ind2]}(${(facets[keys[ind]]["values"][ind2+1])})</label><br>
                  `
              }
              fieldName.innerHTML += '<hr class="horizontalbreak1">';
              fieldName.innerHTML += "</form>";
              sideBar.appendChild(fieldName);
            }
      }
    })
  })
}