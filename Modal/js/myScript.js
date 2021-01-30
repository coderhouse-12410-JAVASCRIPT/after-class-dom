// Aquie pondremos nuestro codigo

var cartContainer = document.getElementById("cartContainer");

function Product(argImage, argName, argPrice) {
    this.image= argImage;
    this.name = argName;
    this.price = argPrice;
}

function ShopItemSlot( argProduct, argCount){
    this.product = argProduct;
    this.count = argCount;

    this.total = function total(){
        return this.count * this.product.price;
    }
}

var cartList = [];

for(let i=0; i < 10 ; i++) {
    var myProduct = new Product("Image"+i, "Name"+i, i+2);
    var myShopItemSlot = new ShopItemSlot( myProduct, i * 2  );
    cartList[i] = myShopItemSlot;
    var trElement = document.createElement("tr");
    cartContainer.append(trElement);
}



// <tr>
// <td class="w-25">
// <img src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/vans.png"
 //   class="img-fluid img-thumbnail" alt="Sheep">
//</td>
//<td>Vans Sk8-Hi MTE Shoes</td>
//<td>89$</td>
//<td class="qty"><input type="text" class="form-control" id="input1" value="2"></td>
///<td>178$</td>
// <td>
// <a href="#" class="btn btn-danger btn-sm">
//    <i class="fa fa-times"></i>
//</a>
//</td>
//</tr>

