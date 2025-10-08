class FruitBasket {
  constructor() {
    this.fruitsBasket = [];
  }

  addItem(fruit) {
    this.fruitsBasket.push(fruit);
    console.log(`${fruit} ditambahkan ke dalam keranjang.`);
  }

  removeLastItem() {
    this.fruitsBasket.pop();
    console.log("Buah terakhir telah dihapus dari keranjang.");
  }

  getInformation() {
    console.log(`Isi keranjang: ${this.fruitsBasket.join(", ")}`);
  }
}

const basket = new FruitBasket();
basket.addItem("Durian");
basket.addItem("Mangga");
basket.addItem("Kurma");
basket.getInformation();
basket.removeLastItem();
basket.getInformation();