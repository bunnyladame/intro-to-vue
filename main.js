Vue.component('product-details', {
    props: {
        details: {
            type: Array,
            required: true
        }
    },
    template:
        `<ul>
             <li v-for="detail in details">{{ detail }}</li>
         </ul>`
})

Vue.component('product', {
    props: {
        premium: {
            type: Boolean,
            required: true
        }
    },
    template:
        `<div id="app">
             <div class="product">
                 <div class="product-image">
                     <img v-bind:src="image">
                 </div>
        
             <div class="product-info">
                 <h1>{{ title }}</h1>

                 <p v-if="inventory > 10 && inStock">In Stock</p>
                 <p v-else-if="inventory <=10 && inventory > 0">Almost sold out!</p>
                 <p v-else :class="{ outOfStock: !inStock }">Out of Stock</p>
            
                 <p>Shipping: {{ shipping }}</p>
            
                 <p v-if="onSale">{{ sale }}</p>
            
                 <p>{{ description }}</p>

                 <product-details :details="details"></product-details>

                 <div v-for="(variant, index) in variants"
                   :key="variant.variantId"
                   class="color-box"
                   :style="{ backgroundColor: variant.variantColor }"
                   @mouseover="updateProduct(index)">
                 </div>
           
                 <ul>
                     <li v-for="size in sizes">{{ size }}</li>
                 </ul>

                 <p><a :href="link">More Info</a></p>
            
             <button v-on:click="addToCart" :disabled="!inStock" :class="{ disabledButton: !inStock }">Add to
                Cart</button>
             
             <button v-on:click="removeFromCart">Remove from Cart</button>

             <div class="cart">
                 <p>Cart({{ cart }})</p>
             </div>
            </div>
           </div>
         </div>`,
    data() {
        return {
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
        }
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
            if (this.onSale) {
                return this.title + ' are on sale!'
            }
        },
        shipping() {
            if (this.premium) {
                return "Free"
            }
            return 2.99
        }
    }
})

var app = new Vue({
    el: '#app',
    data: {
        premium: true
    }
})