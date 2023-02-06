/* https://kea-alt-del.dk/t7/api/products/ */
/*  res istedet for response bare for at vise at vi bestemmer hvad den hedder */
/* og vi hiver json ud
.then((data) => showProducts(data)) er samme som linje 7 */
fetch("https://kea-alt-del.dk/t7/api/products/")
  .then((res) => res.json())
  .then(showProducts);

//sender data med showproducts og neden under modtager data'en + kalder den noget
// ------ tilføj selv billeder igen ligesom forrige video----
function showProducts(products) {
  //looper og shower showProduct (ental)
  products.forEach(showProduct);
}
// (product=>showProduct(product) ^forEach gør dette i parantesen og sender det for os
function showProduct(product) {
  //console.log(product);
  //fang template
  const template = document.querySelector("#smallProductTemplate").content;
  //lav en kopi
  const copy = template.cloneNode(true);
  //ændre indhold
  copy.querySelector("h3").textContent = product.productdisplayname;
  if (product.soldout) {
    //produktet er udsolgt
    copy.querySelector("article").classList.add("soldOut");
  }
  //apende hvor den skal være i DOM for før findes ikke
  document.querySelector("main").appendChild(copy);
}
/* 
{
  "id": 1165,
  "gender": "Men",
  "category": "Apparel",
  "subcategory": "Topwear",
  "articletype": "Tshirts",
  "season": "Summer",
  "productionyear": 2013,
  "usagetype": "Sports",
  "productdisplayname": "Mean Team India Cricket Jersey",
  "price": 2495,
  "discount": 45,
  "brandname": "Nike",
  "soldout": 0
}
*/
/* 
<article class="smallProduct onSale">
        <img src="./img/lemon.png" alt="Blue T20" />
        <h3>Sticker - John Lemon</h3>
        <p class="subtle">Sticker | Ami</p>
        <p class="price"><span>Prev.</span> 60,-</p>
        <div class="discounted">
          <p>Now DKK 48,-</p>
          <p class="now-price">-20%</p>
        </div>
        <a href="produktet2.html">Read More</a>
      </article>
      <article class="smallProduct soldOut">
        <img src="./img/pack.png" alt="Blue T20 Indian Cricket Jersey" />
        <h3>Sticker - Pack</h3>
        <p class="subtle">Tshirts | Nike</p>
        <p class="price"><span>Prev.</span> DKK 1595,-</p>
        <div class="discounted">
          <p>Now DKK 1560,-</p>
          <p>-34%</p>
        </div>
        <a href="produktet3.html">Read More</a>
      </article>
*/
