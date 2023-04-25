//function for reset button
function reset(){
  window.location.href = 'index_PLP.html';
}

// opening pdp images in new tab
function openImage(src) {
  window.open(src);
}

function safeTraverse(obj, paths = []){
    let val = obj;
    let idx = 0;
  
    while (idx < paths.length) {
        if (!val) {
            return null;
        }
        val = val[paths[idx]];
        idx++;
    }
    return val === 0 ? '0' : val;
  }

window.onload = function () {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  let prodId = urlParams.get('ProductId');
  // productImage.innerHTML = "";
  let prodQuery = urlParams.get('q') || "";
  let catalogId = urlParams.get('CatalogID');

  var myHeaders = new Headers();
  myHeaders.append("Accept", "*/*");
  myHeaders.append("Accept-Language", "en-GB,en-US;q=0.9,en;q=0.8");
  myHeaders.append("Connection", "keep-alive");
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append(
    "Cookie",
    "ajs_user_id=sivanv@unbxd.com; _ga=GA1.2.44711214.1628009891; fs_cid=1.0; fs_uid=#BCTWS#5827173059792896:5552003249360896:::#89e388a9#/1687244231; intercom-device-id-uksd1f47=65dacc19-cc8f-4a38-9280-d7f1930483b8; ajs_user_id=sivanv@unbxd.com; ajs_anonymous_id=0d8cfecc-572a-4fb9-8771-7f8ebd343592; _gid=GA1.2.1181530657.1679289145; _un_sso_uid=eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjpudWxsLCJleHBpcnkiOiIyMDIzLTAzLTI4IDA0OjE4OjMwIFVUQyIsImVtYWlsIjoic2l2YW52QHVuYnhkLmNvbSIsInJlZ2lvbnMiOnsidXMiOnsicmVmX3VzZXJfaWQiOjcwMjUxfSwic2ciOnsicmVmX3VzZXJfaWQiOjM4OX0sInVrIjp7InJlZl91c2VyX2lkIjoyNTl9LCJhdSI6eyJyZWZfdXNlcl9pZCI6MjYyfSwidXNfZ2NwIjp7InJlZl91c2VyX2lkIjoyNjZ9fX0.HjcmYCYF2_Jni6WGoGkMqdirdsjGZI15EiDlCNJRp50; _un_csrf=eyJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6InNpdmFudkB1bmJ4ZC5jb20iLCJleHBpcnkiOiIyMDIzLTAzLTMxIDA0OjE4OjMwIFVUQyIsInVzZXJfaWQiOiI1ZDA5ZGUyOWIxZDI1MDAwMjNiOTc1MmIiLCJ0aW1lc3RhbXAiOiIyMDIzLTAzLTIxVDA0OjE4OjMwLjc4OVoifQ.afdTOWa8_r12If2N-9ZkK7Wd0ydjQRvm0vM280rMN_w; mp_4d8b093383efd0132a7afde806127f49_mixpanel=%7B%22distinct_id%22%3A%20%22186cf4aae0dfe8-07f65447b74e8f-1f525634-29b188-186cf4aae0e1c0d%22%2C%22%24device_id%22%3A%20%22186cf4aae0dfe8-07f65447b74e8f-1f525634-29b188-186cf4aae0e1c0d%22%2C%22mp_lib%22%3A%20%22Segment%3A%20web%22%2C%22%24initial_referrer%22%3A%20%22%24direct%22%2C%22%24initial_referring_domain%22%3A%20%22%24direct%22%7D; connect.sid=s%3ArfsVqhM8NaF8eDe-O0xZ-GCC-BxSNgO7.AeW2wRDrJUNK891rbKv15DAcFiiWaXHoqv5O0fWxj80; ajs_group_id=8542a739d0b398ee28a5b32c351e45e1; ajs_anonymous_id=0d8cfecc-572a-4fb9-8771-7f8ebd343592; intercom-session-uksd1f47=TkJHUVZxN3pPMVJySWk4RGtkWHhZcXltNFd5Y0JkRHhFMngwYUJrdGd1N2FjRngrUURPbEthanQ1MmpGdWMweC0takNYY29GaHhrd0lidTRsUWNEU3NXUT09--831f39c58176f7b8a7d643f6e9eb71ccc544b2a6; JSESSIONID=o5s6-GZRx9jj4DTZ430OHTjfwx3OftI7RsDWLOyh"
  );
  myHeaders.append("Origin", "https://pim.unbxd.io");
  myHeaders.append("Referer", "https://pim.unbxd.io/catalogueView/");
  myHeaders.append("Sec-Fetch-Dest", "empty");
  myHeaders.append("Sec-Fetch-Mode", "cors");
  myHeaders.append("Sec-Fetch-Site", "same-origin");
  myHeaders.append(
    "User-Agent",
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36"
  );
  myHeaders.append("X-Requested-With", "XMLHttpRequest");
  myHeaders.append(
    "sec-ch-ua",
    '"Chromium";v="110", "Not A(Brand";v="24", "Google Chrome";v="110"'
  );
  myHeaders.append("sec-ch-ua-mobile", "?0");
  myHeaders.append("sec-ch-ua-platform", '"macOS"');

  const catalogueId = "6391b1448f93e67002742cef";
  const raw = JSON.stringify({
    catalogue_id: catalogueId,
    unique_id: prodId,
  });

  const getCatalogueConfig = async () => {
    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };
    const response = await fetch(
      `https://pim.unbxd.io/api/v1/catalogueConfig/${catalogueId}`,
      requestOptions
    );
    const result = await response.json();

    const data = result?.data || {};

    const dictionary = {};
    const relatedFields = {};
    for (const { field_id, name, group } of data.properties) {
        dictionary[field_id] = { name, group };
        relatedFields[group] = relatedFields[group] || [];
        relatedFields[group].push(field_id);
      }
      
      return { dictionary, relatedFields };
    
  };

  const postCatalogueProduct = async () => {
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    const response = await fetch(
      "https://pim.unbxd.io/peppercorn/api/v2/catalogueProduct",
      requestOptions
    );
    const result = await response.json();

    const prod_container = document.getElementById("row");
    const product =
      safeTraverse(result, ["data", "response", "products", "0"]) || {};
    const price = `${product["field_390"]}.00` || "";
    
    const displayPrice = String(parseInt(price)) || "";

    prod_container.innerHTML = `

    <div class="main-container">

        <div class="container1">
          <img class="image" src="${product["productImage"]}" onclick="openImage(this.src)" onclick="window.open('${product["productImage"]}','_self')"  >
        </div>

        <div class="container2" >
          <p class="product-title"><h2 id="title">${product["productName"]}</h2></p>
          <hr class="Line">

          <p class="info">Price :&nbsp;  &#8377; ${displayPrice}</sup></p>
      
          <p class="info">UniqueID : &nbsp;   ${product["uniqueId"]}</p>
        
          <p class="info">SKU : &nbsp; ${product["field_337"]}</p> 

          <p class="info">Quanitity : &nbsp; ${product["field_485"]}</p>

          <p class="info">Product Status: &nbsp; ${product["product_status"]}</p> 
          
          <div class="container3>
            <p class="column-heading">Additional Information</p>
            <hr class="Line">
            <p class="image_body">${product["field_476"]}</p>

            <p class="column-heading">More Information</p>
            <hr class="Line">
            <p class="info">Created at : ${product["created_at"]}</p>

            <p class="info">Updated_at :${product["updated_at"]}</p>

            <p class="info">More info 1 :${product["field_443"]}</p>

            <p class="info">More info 2 :${product["field_491"]}</p>
                      
            <p class="info">${product["field_489"]}</p>

            

          </div>

        </div>

    </div>
   
  `;
  };

  Promise.all([getCatalogueConfig(), postCatalogueProduct()]);
};