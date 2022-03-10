
var trendingListItems = [
  {
    "listItem": "Top Products"
  },
  {
    "listItem": "New Arrivals"
  },
  {
    "listItem": "Best Sellers"
  },
]
var trendingProducts = [
  {
    'imgage': 'img/trending/item1.png',
    'cardCategory': 'chair',
    'name': 'Minimal LCD chair',
    'actualPrice': '$180',
    'oldPrice': '$250',
    // 'type': 'new'
  },
  {
    'imgage': 'img/trending/item2.png',
    'cardCategory': 'chair',
    'name': 'Minimal iconic chair',
    'actualPrice': '$120',
    'oldPrice': '$150',
    // 'type': 'new'
  },
  {
    'imgage': 'img/trending/item3.png',
    'cardCategory': 'chair',
    'name': 'Dining chairs',
    'actualPrice': '$100',
    'oldPrice': '$120',
    // 'type': 'sale'
  },
  {
    'imgage': 'img/trending/item4.png',
    'cardCategory': 'chair',
    'name': 'Buskbo armchair',
    'actualPrice': '$130',
    'oldPrice': '$150',
    // 'type': 'sale'
  },
  {
    'imgage': 'img/trending/item5.png',
    'cardCategory': 'chair',
    'name': 'Modern chairs$100',
    'actualPrice': '$100',
    'oldPrice': '$120',
    // 'type': 'sale'
  },
  {
    'imgage': 'img/trending/item6.png',
    'cardCategory': 'chair',
    'name': 'Plastic dining chair',
    'actualPrice': '$130',
    'oldPrice': '$150',
    // 'type': 'sale'
  },
  {
    'imgage': 'img/trending/item7.png',
    'cardCategory': 'chair',
    'name': 'Minimal Wood chair',
    'actualPrice': '$180',
    'oldPrice': '$250',
    // 'type': 'new'
  },
  {
    'imgage': 'img/trending/item8.png',
    'cardCategory': 'chair',
    'name': 'Elegent wood chair',
    'actualPrice': '$120',
    'oldPrice': '$150',
    // 'type': 'new'
  },
]
var offer = [
  {
    'photo': 'img/offer/offer1.png',
    'name': 'Living Room Furniture',
    'text': 'You don\'t have a chair. Are you ready for growth? Shop with us 40% discount!',
    'newPrice': '$150',
    'oldPrice': '$250',
  },
  {
    'photo': 'img/offer/offer2.png',
    'name': 'Modern chair',
    'text': 'Hot chairs of the modern era are now available in our stock.',
    'newPrice': '$75',
    'oldPrice': '$150',
  },
]
var productsList = [
  {
    'listItem': 'All Products',
    'link': '',
  },
  {
    'listItem': 'Best Sellers',
    'link': '',
  },
  {
    'listItem': 'New Arrivals',
    'link': '',
  },
  {
    'listItem': 'Todays Deals',
    'link': '',
  },
]
var productsProduct = [
  {
    'imgage': 'img/products/card1.png',
    'cardCategory': 'chair',
    'name': 'Minimal LCD chair',
    'actualPrice': '$180',
    'oldPrice': '$250',
  },
  {
    'imgage': 'img/products/card2.png',
    'cardCategory': 'sofa',
    'name': 'Modern Sofa',
    'actualPrice': '$120',
    'oldPrice': '$150',
    // 'type': 'new'
  },
  {
    'imgage': 'img/products/card3.png',
    'cardCategory': 'sofa',
    'name': 'Microfiber Sofa',
    'actualPrice': '$100',
    'oldPrice': '$120',
    // 'type': 'sale'
  },
  {
    'imgage': 'img/products/card4.png',
    'cardCategory': 'tabble',
    'name': 'Wood Coffee Tables',
    'actualPrice': '$130',
    'oldPrice': '$150',
    // 'type': 'sale'
  },
  {
    'imgage': 'img/products/card5.png',
    'cardCategory': 'chair',
    'name': 'Acacia Wood Club Chairs',
    'actualPrice': '$100',
    'oldPrice': '$120',
    // 'type': 'sale'
  },
  {
    'imgage': 'img/products/card6.png',
    'cardCategory': 'bench',
    'name': 'Amalia Cowhide Bench',
    'actualPrice': '$130',
    'oldPrice': '$150',
    // 'type': 'sale'
  },
  {
    'imgage': 'img/products/card7.png',
    'cardCategory': 'storage',
    'name': 'Juno-Hinged Lid Storage',
    'actualPrice': '$180',
    'oldPrice': '$250',
    // 'type': 'new'
  },
  {
    'imgage': 'img/products/card8.png',
    'cardCategory': 'furniture',
    'name': 'Delicia 3 Piece Living Room',
    'actualPrice': '$120',
    'oldPrice': '$150',
    // 'type': 'new'
  },
]
var articles = [
  {
    'img': 'img/articles/Card.png',
    'bench': 'Furniture',
    'date': '23 September 2022',
    'name': 'Begineer guide buying minimal sofa'
  },
  {
    'img': 'img/articles/Card-1.png',
    'bench': 'TABLE',
    'date': '23 September 2022',
    'name': 'Buying best minimal computer table'
  },
  {
    'img': 'img/articles/Card-2.png',
    'bench': 'Bench',
    'date': '23 march 2022',
    'name': 'How to choose best modern bench'
  },
  {
    'img': 'img/articles/Card-3.png',
    'bench': 'Chair',
    'date': '23 march 2022',
    'name': 'Best Summer Outfit Style in this Country'
  },
]
// Logic of Vue
const trendingList = {
  data() {
    return {
      categories: window.trendingListItems,
      tProducts: window.trendingProducts,
      offerCard: window.offer,
      categories: window.productsList,
      products: window.productsProduct,
      articles: window.articles,
    }
  }
}

Vue.createApp(trendingList).mount('#app')
