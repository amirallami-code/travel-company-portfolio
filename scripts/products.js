const pageProductsTitle = document.querySelector('.productsTitle')
const placeElementWrapper = document.querySelector('.destinations__places')
const filterElement = document.querySelector('#filter')

// all products
let allProducts = [
    { id: 1, tripName: "Trickle Creek Ranch", caption: "Book unique camping experiences on over 300,000 campsites.", price: 14.99, imageSrc: "./images/image1.jpg" },
    { id: 2, tripName: "Dragonfly Tiny Cabin", caption: "Book unique camping experiences on over 300,000 campsites.", price: 49.99, imageSrc: "./images/image2.jpg" },
    { id: 3, tripName: "Tiny Cabin in the mountains", caption: "Book unique camping experiences on over 300,000 campsites.", price: 24.99, imageSrc: "./images/image3.jpg" },
    { id: 4, tripName: "The Stuga", caption: "Book unique camping experiences on over 300,000 campsites.", price: 9.99, imageSrc: "./images/image12.jpg" },
    { id: 5, tripName: "Luxury Tiny Beach Cabin", caption: "Book unique camping experiences on over 300,000 campsites.", price: 59.99, imageSrc: "./images/image4.jpg" },
    { id: 6, tripName: "The Summit Cabin", caption: "Book unique camping experiences on over 300,000 campsites.", price: 19.99, imageSrc: "./images/image5.jpg" },
    { id: 7, tripName: "Kindred Spirits Cabin", caption: "Book unique camping experiences on over 300,000 campsites.", price: 29.99, imageSrc: "./images/image6.jpg" },
    { id: 8, tripName: "The Hermitage Cabin", caption: "Book unique camping experiences on over 300,000 campsites.", price: 45.99, imageSrc: "./images/image7.jpg" },
    { id: 9, tripName: "Red Lifeguard Stand", caption: "Book unique camping experiences on over 300,000 campsites.", price: 99.99, imageSrc: "./images/image8.jpg" },
    { id: 10, tripName: "The Tree House", caption: "Book unique camping experiences on over 300,000 campsites.", price: 13.99, imageSrc: "./images/image1.jpg" },
    { id: 11, tripName: "Barrier island elevated tent", caption: "Book unique camping experiences on over 300,000 campsites.", price: 25.99, imageSrc: "./images/image9.jpg" },
    { id: 12, tripName: "Ninovan on the Shore", caption: "Book unique camping experiences on over 300,000 campsites.", price: 45.99, imageSrc: "./images/image10.jpg" },
    { id: 13, tripName: "The Hermitage Cabin", caption: "Book unique camping experiences on over 300,000 campsites.", price: 45.99, imageSrc: "./images/image11.jpg" },
    { id: 14, tripName: "The Hermitage Cabin", caption: "Book unique camping experiences on over 300,000 campsites.", price: 45.99, imageSrc: "./images/image12.jpg" },
    { id: 15, tripName: "Trickle Creek Ranch", caption: "Book unique camping experiences on over 300,000 campsites.", price: 14.99, imageSrc: "./images/image1.jpg" },
    { id: 16, tripName: "Dragonfly Tiny Cabin", caption: "Book unique camping experiences on over 300,000 campsites.", price: 49.99, imageSrc: "./images/image2.jpg" },
    { id: 17, tripName: "Tiny Cabin in the mountains", caption: "Book unique camping experiences on over 300,000 campsites.", price: 24.99, imageSrc: "./images/image3.jpg" },
    { id: 18, tripName: "The Stuga", caption: "Book unique camping experiences on over 300,000 campsites.", price: 9.99, imageSrc: "./images/image12.jpg" },
    { id: 19, tripName: "Luxury Tiny Beach Cabin", caption: "Book unique camping experiences on over 300,000 campsites.", price: 59.99, imageSrc: "./images/image4.jpg" },
    { id: 20, tripName: "The Summit Cabin", caption: "Book unique camping experiences on over 300,000 campsites.", price: 19.99, imageSrc: "./images/image5.jpg" },
    { id: 21, tripName: "Kindred Spirits Cabin", caption: "Book unique camping experiences on over 300,000 campsites.", price: 29.99, imageSrc: "./images/image6.jpg" },
    { id: 22, tripName: "The Hermitage Cabin", caption: "Book unique camping experiences on over 300,000 campsites.", price: 45.99, imageSrc: "./images/image7.jpg" },
    { id: 23, tripName: "Red Lifeguard Stand", caption: "Book unique camping experiences on over 300,000 campsites.", price: 99.99, imageSrc: "./images/image8.jpg" },
    { id: 24, tripName: "The Tree House", caption: "Book unique camping experiences on over 300,000 campsites.", price: 13.99, imageSrc: "./images/image1.jpg" },
    { id: 25, tripName: "Barrier island elevated tent", caption: "Book unique camping experiences on over 300,000 campsites.", price: 25.99, imageSrc: "./images/image9.jpg" },
    { id: 26, tripName: "Ninovan on the Shore", caption: "Book unique camping experiences on over 300,000 campsites.", price: 45.99, imageSrc: "./images/image10.jpg" },
    { id: 27, tripName: "The Hermitage Cabin", caption: "Book unique camping experiences on over 300,000 campsites.", price: 45.99, imageSrc: "./images/image11.jpg" },
    { id: 28, tripName: "The Hermitage Cabin", caption: "Book unique camping experiences on over 300,000 campsites.", price: 45.99, imageSrc: "./images/image12.jpg" },
    { id: 29, tripName: "Ninovan on the Shore", caption: "Book unique camping experiences on over 300,000 campsites.", price: 45.99, imageSrc: "./images/image10.jpg" },
    { id: 30, tripName: "Kindred Spirits Cabin", caption: "Book unique camping experiences on over 300,000 campsites.", price: 29.99, imageSrc: "./images/image6.jpg" },
]
// page title 
pageProductsTitle.innerHTML = `search between ${allProducts.length} products...`;

// FUNCTIONS
let applyFilterForProducts = (filterType, allProductsArr) => {
    for (let i = 0; i !== allProductsArr.length; i++) {
        insertFilteredProducts(allProductsArr)

        placeElementWrapper.insertAdjacentHTML("afterbegin", " amongus ")
    }
}

function insertFilteredProducts(allProductsArr) {
    for (let a = 0; a !== allProductsArr.length; a++) {
        let cheapestTripPlacePrice = allProductsArr[0].querySelector('.place__price--text')
        let productForComparison = allProductsArr[a].querySelector('.place__price--text')

        let cheapestTripPlacePriceNumber = Number(cheapestTripPlacePrice.getAttribute('value'))
        let productForComparisonNumber = Number(productForComparison.getAttribute('value'))

        if (cheapestTripPlacePriceNumber > productForComparisonNumber) {
            let cheapestTripPlace = productForComparison
            let cheapestTripIndex = a
        }
    }

    return cheapestTripPlace, cheapestTripIndex;
}

// products logic
let productShouldInsertCounter = 1
allProducts.forEach(product => {
    if (productShouldInsertCounter <= 10) {
        let productElement = `
        <div class="place" id="${product.id}">
            <div class="place__banner">
            <img
                src="${product.imageSrc}"
                alt="${product.tripName}"
                class="place__img"
            />
            <div class="place__like">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24.037"
                height="24.037"
                viewBox="0 0 24.037 24.037"
                class="place__like-icon"
                >
                <path
                    id="Path_955"
                    data-name="Path 955"
                    d="M15.822,8.979v.029H4V-2.1A5.915,5.915,0,0,1,9.912-7.841a5.913,5.913,0,0,1,5.849,5.049,5.912,5.912,0,0,1,.061,11.772Z"
                    transform="translate(2.716 20.496) rotate(-45)"
                    fill="#fff"
                    stroke="#e76f51"
                />
                </svg>
            </div>
            <div class="place__price">
                <p class="place__price--text" value="${product.price}" >$${product.price}/night</p>
            </div>
            </div>
            <h3 class="place__title">${product.tripName}</h3>
            <p class="place__caption">
            ${product.caption}
            </p>
            <a href="./products.html" class="btn place__link">Read More</a>
            </div>`

        placeElementWrapper.insertAdjacentHTML("beforeend", productElement)
        productShouldInsertCounter++
    }
})

filterElement.addEventListener("change", event => {

    let allShownProducts = document.querySelectorAll('.place')
    placeElementWrapper.innerHTML = ''
    if (event.target.value === "cheapest") {
        applyFilterForProducts("cheapest", allShownProducts)
    } else if (event.target.value === "expensive") {
        applyFilterForProducts("expensive", allShownProducts)
    }
})