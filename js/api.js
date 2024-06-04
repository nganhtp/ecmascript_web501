function wrapProduct() {
    const url = 'http://localhost:3000/products';
    fetch(url)
        .then((api) => api.json())
        .then((data) => {
            const listProduct = document.getElementById('product');
            let productsHTML = '';

            data.forEach((item, index) => {
                productsHTML += `
                    <div class="col-lg-3 col-md-4 col-sm-6 mix fastfood vegetables">
                        <div class="featured__item">
                            <div class="featured__item__pic set-bg">
                                <a href="shop-details.html?id=${item.id}"><img src="${item.image}" alt=""></a>
                                <ul class="featured__item__pic__hover">
                                    <li><a href="#"><i class="fa fa-heart"></i></a></li>
                                    <li><a href="#"><i class="fa fa-retweet"></i></a></li>
                                    <li><a href="#"><i class="fa fa-shopping-cart"></i></a></li>
                                </ul>
                            </div>
                            <div class="featured__item__text">
                                <h6><a href="shop-details.html?id=${item.id}">${item.name}</a></h6>
                                <h5>${item.price}</h5>
                            </div>
                        </div>
                    </div>
                `;
            });

            listProduct.innerHTML = productsHTML;
        });
}

wrapProduct();


function wrapCategory() {
    const url = `http://localhost:3000/categories`;
    fetch(url)
        .then((api) => api.json())
        .then((data) => {
            const listCategory = document.getElementById("category");
            let categoriesHTML = "";

            data.forEach((item) => {
                categoriesHTML += `
                <div class="hero__categories__all">
                    <a href="index.html?id=${item.id}">${item.name}</a>
                </div>
                `;
            });

            listCategory.innerHTML = categoriesHTML;
        })
        .catch((error) => {
            console.error("Error fetching categories:", error);
        });
}
wrapCategory()

function wrapDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    if (!productId) {
        console.error("Product ID not found in the URL");
        return;
    }
    const url = `http://localhost:3000/products/${productId}`;
    fetch(url)
        .then((response) => response.json())
        .then((item) => {
            const listDetails = document.getElementById("details");
            let detailsHTML = `
                <div class="container" id="details">
                    <div class="row">
                        <div class="col-lg-6 col-md-6">
                            <div class="product__details__pic">
                                <div class="product__details__pic__item">
                                    <img src="${item.image}" alt="">
                                </div>
                                <div class="product__details__pic__slider owl-carousel">
                                    <img src="${item.image}" alt="">
                                    <img src="${item.image1}" alt="">
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6">
                            <div class="product__details__text">
                                <h3>${item.name}</h3>
                                <div class="product__details__rating">
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star-half-o"></i>
                                    <span>(18 reviews)</span>
                                </div>
                                <div class="product__details__price">${item.price}</div>
                                <p>${item.detail}</p>
                                <div class="product__details__quantity">
                                    <div class="quantity">
                                        <div class="pro-qty">
                                            <input type="text" value="1">
                                        </div>
                                    </div>
                                </div>
                                <a href="#" class="primary-btn">ADD TO CART</a>
                                <a href="#" class="heart-icon"><span class="icon_heart_alt"></span></a>
                                <ul>
                                    <div class="share">
                                        <a href="#"><i class="fa fa-facebook"></i></a>
                                        <a href="#"><i class="fa fa-twitter"></i></a>
                                        <a href="#"><i class="fa fa-instagram"></i></a>
                                        <a href="#"><i class="fa fa-pinterest"></i></a>
                                    </div>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-12">
                            <div class="product__details__tab">
                                <ul class="nav nav-tabs" role="tablist">
                                    <li class="nav-item">
                                        <a class="nav-link active" data-toggle="tab" href="#tabs-1" role="tab" aria-selected="true">Description</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" data-toggle="tab" href="#tabs-2" role="tab" aria-selected="false">Information</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" data-toggle="tab" href="#tabs-3" role="tab" aria-selected="false">Reviews <span>(1)</span></a>
                                    </li>
                                </ul>
                                <div class="tab-content">
                                    <div class="tab-pane active" id="tabs-1" role="tabpanel">
                                        <div class="product__details__tab__desc">
                                            <h6>Product Information</h6>
                                            <p>Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Pellentesque in ipsum id orci porta dapibus. Proin eget tortor risus. Vivamus suscipit tortor eget felis porttitor volutpat. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Donec rutrum congue leo eget malesuada. Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Proin eget tortor risus.</p>
                                            <p>Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Cras ultricies ligula sed magna dictum porta. Cras ultricies ligula sed magna dictum porta. Sed porttitor lectus nibh. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Sed porttitor lectus nibh. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Proin eget tortor risus.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`;

            listDetails.innerHTML = detailsHTML;
        })
        .catch((error) => {
            console.error("Error fetching product details:", error);
        });
}

wrapDetails();

