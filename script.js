const mainImg = document.getElementById("mainImg");
const titlesDiv = document.getElementById("titlesDiv");
const vendorName = document.getElementById("vendor");
const title = document.getElementById("title");
const discountedPrice = document.getElementById("discountedPrice");
const actualPrice = document.getElementById("actualPrice");
const sizeContainer = document.getElementById("sizeContainer");
const desc = document.getElementById("descContainer");
const colorBoxContainer = document.getElementById("colorBoxContainer");
const colorBox1 = document.querySelector(".colorBox1");
const colorPicker1 = document.querySelector(".colorPicker1");
const colorBox2 = document.querySelector(".colorBox2");
const colorPicker2 = document.querySelector(".colorPicker2");
const colorBox3 = document.querySelector(".colorBox3");
const colorPicker3 = document.querySelector(".colorPicker3");
const colorBox4 = document.querySelector(".colorBox4");
const colorPicker4 = document.querySelector(".colorPicker4");

async function fetchData() {
  const response = await fetch(
    "https://cdn.shopify.com/s/files/1/0564/3685/0790/files/singleProduct.json?v=1701948448"
  );
  const data = await response.json();

  vendorName.innerText = data.product.vendor;

  title.innerText = data.product.title;

  discountedPrice.innerText = data.product.price + ".00";

  actualPrice.innerText = data.product.compare_at_price + ".00";

  sizeContainer.innerHTML = data.product.options[1].values
    .map((item) => {
      return `<div class="sizeChildContainer">
    <input type="radio" name="size"/>
    <label class="sizeLabel">${item}</label>
    </div>`;
    })
    .join("");

  desc.innerHTML = data.product.description;

  const colorArr = data.product.options[0].values;

  colorBox1.style.border = `1px solid ${colorArr[0].Yellow}`;
  colorPicker1.style.backgroundColor = `${colorArr[0].Yellow}`;
  colorBox2.style.border = `1px solid ${colorArr[1].Green}`;
  colorPicker2.style.backgroundColor = `${colorArr[1].Green}`;
  colorBox3.style.border = `1px solid ${colorArr[2].Blue}`;
  colorPicker3.style.backgroundColor = `${colorArr[2].Blue}`;
  colorBox4.style.border = `1px solid ${colorArr[3].Pink}`;
  colorPicker4.style.backgroundColor = `${colorArr[3].Pink}`;
}

fetchData();
