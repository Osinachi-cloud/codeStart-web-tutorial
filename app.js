
const products = [];

const fetchProductsApi = async () => {
  let url = `https://fakestoreapi.com/products`;
  try {
    let apiProductsResponse = await fetch(url, {
      "method": "GET"
    });
    let productList = await apiProductsResponse.json();
    renderProducts(productList);
  } catch (e) {
    console.log(e);
  }
}

window.onload = () =>{
  fetchProductsApi();

}



const renderProducts = (products) => {

  const wrapper = document.getElementById("wrapper");
  wrapper.className = "wrapper";

  for (let product of products) {

    const card = document.createElement("div");
    card.className = "card";

    const imageWrapper = document.createElement("div");
    imageWrapper.className = "img-wrapper";

    const image = document.createElement("img");
    image.src = product.image;

    const contentWrapper = document.createElement("div");
    contentWrapper.className = "content-wrapper";

    const titleBlock = document.createElement("div");
    titleBlock.className = "title-block";

    const title = document.createElement("span");
    title.title = "title"
    title.textContent = product.title.substring(0, 20);

    const des = document.createElement("p");
    des.className = "des";
    des.textContent = product.description.substring(0, 100);

    const price = document.createElement("h3");
    price.className = "price";
    price.textContent = product.price;

    const button = document.createElement("button");
    button.className = "buy-now";
    button.textContent = "open";


    card.appendChild(imageWrapper);
    card.appendChild(contentWrapper);
    imageWrapper.appendChild(image);
    contentWrapper.appendChild(titleBlock);
    card.appendChild(button);

    titleBlock.appendChild(title);
    contentWrapper.appendChild(price);
    contentWrapper.appendChild(des);

    wrapper.append(card);
  }
}















































































