var app = new Vue({
    el: '#app',
    data: {
        product: 'Socks',
        description: 'A pair of warm, fuzzy socks.',
        image: './assets/socks.jpg',
        link: 'https://www.google.com',
        inventory: 100,
        onSale: true,
        details: ["80% cotton", "20% polyester", "Gender neutral"],
        variants: [
            {
                variantId: 2234,
                variantColor: "green",
                variantImage: './assets/socks-green.jpg'
            },
            {
                variantId: 2235,
                variantColor: "blue",
                variantImage: './assets/socks-blue.jpg'
            }
        ],
        sizes: ["Baby", "Youth", "Adults"],
        cart: 0
    },
    methods: {
        addToCart: function () {
            this.cart += 1
        }
    }
})