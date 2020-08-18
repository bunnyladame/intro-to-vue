var app = new Vue({
    el: '#app',
    data: {
        product: 'Socks',
        brand: 'Vue Mastery',
        description: 'A pair of warm, fuzzy socks.',
        selectedVariant: 0,
        link: 'https://www.google.com',
        inventory: 100,
        details: ["80% cotton", "20% polyester", "Gender neutral"],
        variants: [
            {
                variantId: 2234,
                variantColor: "green",
                variantImage: './assets/socks-green.jpg',
                variantQuantity: 100
            },
            {
                variantId: 2235,
                variantColor: "blue",
                variantImage: './assets/socks-blue.jpg',
                variantQuantity: 0
            }
        ],
        sizes: ["Baby", "Youth", "Adults"],
        cart: 0,
        onSale: true
    },
    methods: {
        addToCart() {
            this.cart += 1
        },
        updateProduct(index) {
            this.selectedVariant = index
        },
        removeFromCart() {
            if (this.cart > 0) {
                this.cart -= 1
            }
        }
    },
    computed: {
        title() {
            return this.brand + ' ' + this.product
        },
        image() {
            return this.variants[this.selectedVariant].variantImage
        },
        inStock() {
            return this.variants[this.selectedVariant].variantQuantity
        },
        sale() {
            if(this.onSale) {
                return this.title + ' are on sale!'
            }
        }
    }
})