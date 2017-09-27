function Converse(name, img, size, price) {
  this.name = name;
  this.img = img;
  this.size = size;
  this.price = price;
}

var black = new Converse('Black Chuck Taylor', 'img/chucktaylorblack.jpg', 9, 49.99);
var blue = new Converse('Blue Chuck Taylor', 'img/chucktaylorblue.jpg', 8, 54.99);
var green = new Converse('Green Chuck Taylor', 'img/chucktaylorgreen.jpeg', 9.5, 59.99);
var purple = new Converse('Purple Chuck Taylor', 'img/chucktaylorpurple.jpg', 10, 69.99);
var red = new Converse('Red Chuck Taylor', 'img/chucktaylorred.jpg', 9.5, 44.99);
var white = new Converse('White Chuck Taylor', 'img/chucktaylorwhite.jpg', 8.5, 64.99);

var converseShoes = [black, blue, green, purple, red, white];

for (var i = 0; i < converseShoes.length; i++) {
  var divShoes = document.getElementById('shoes');
  var divShoe = document.createElement('div')
  var newH1 = document.createElement('h1');
  var img = document.createElement('img');
  var sizeH3 = document.createElement('h2');
  var priceP = document.createElement('h2');
  var buyBtn = document.createElement('button');
  console.log(divShoes, newH1, img, sizeH3, priceP);

  var newH1Text = document.createTextNode(converseShoes[i].name);
  var sizeH3Text = document.createTextNode("Size: " + converseShoes[i].size);
  var pricePText = document.createTextNode("Price: $" + converseShoes[i].price);
  var buyBtnText = document.createTextNode("BUY");
  console.log(newH1Text, sizeH3Text, pricePText);

  newH1.appendChild(newH1Text);
  sizeH3.appendChild(sizeH3Text);
  priceP.appendChild(pricePText);
  buyBtn.appendChild(buyBtnText);

  img.src = converseShoes[i].img;
  img.alt = converseShoes[i].name + " - Size: " + converseShoes[i].size;
  img.className = "img-responsive";

  divShoe.className = "col-md-4";

  buyBtn.className = "btn btn-success"

  divShoe.appendChild(newH1);
  divShoe.appendChild(img);
  divShoe.appendChild(sizeH3);
  divShoe.appendChild(priceP);
  divShoe.appendChild(buyBtn);

  divShoes.appendChild(divShoe);
}
