
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

    button.addEventListener('click', ()=> getSingleProduct(product.id));        

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






const getSingleProduct = async (id) => {
  const url = `https://fakestoreapi.com/products/${id}`;
  try{
      const apiResponse = await fetch(url, {
         "method":"GET",
         "application-content":"application-json" 
      })
      const product = await apiResponse.json();
      console.log(product);
      renderSingleproduct(product);
      // const currentUrl = window.location.href;
      console.log(currentUrl);            
  
  } catch (e){
      throw new Error();
  }
}



const renderSingleproduct = (product) => {
  const productItem = document.getElementById("single-product");
  productItem.style.marginBottom = "200px";

  const fullProdCard = document.createElement("div");
  fullProdCard.className = "product";
  const fullProdImageWrapper = document.createElement("div");
  fullProdImageWrapper.className = "fullProdImageWrapper";
  const price = document.createElement("div");
  price.style.fontSize = "30px";
  price.style.color = "#000";

  const title = document.createElement("h3");
  const image = document.createElement("img");
  image.style.height = "700px";
  const des = document.createElement("p");
  const ratingBox = document.createElement("div");
  for(let i = 0; i < product?.rating?.rate; i++){
      let rating = document.createElement("i");
      rating.className = "fa fa-star";
      rating.style.color = "orange";
      ratingBox.appendChild(rating);
  }

  des.style.color = "grey";
  des.textContent = product.description;

  image.src = product.image;
  price.textContent = `$ ${product?.price}`
  title.textContent = product.title;
  title.style.color = "blue";

  fullProdImageWrapper.appendChild(image);
  fullProdCard.appendChild(fullProdImageWrapper);
  fullProdCard.appendChild(title);
  fullProdCard.appendChild(price);
  fullProdCard.appendChild(des);
  fullProdCard.appendChild(ratingBox);

  productItem.appendChild(fullProdCard);
}
















































































