var products = [];

async function fetchAPIProducts() {
    try {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        products = data.products;

        var display = document.querySelector('.section-3 .container .swiper-3 .swiper-wrapper');
        var htmls = "";

        for (let i = 0; i < 9; i++) {
            const rating = products[i].rating; // Lấy giá trị rating
            const fullStars = Math.floor(rating); // Số sao vàng đầy đủ
            const halfStar = rating % 1 >= 0.5 ? 1 : 0; // Kiểm tra nếu có nửa sao
            const emptyStars = 5 - fullStars - halfStar; // Số sao xám còn lại

            // Tạo chuỗi HTML cho các ngôi sao
            let starsHTML = '';
            for (let j = 0; j < fullStars; j++) {
                starsHTML += '<i class="fi fi-ss-star star full"></i>'; // Sao vàng đầy
            }
            if (halfStar) {
                starsHTML += '<i class="fi fi-ss-star-sharp-half-stroke"></i>'; // Nửa sao vàng
            }
            for (let k = 0; k < emptyStars; k++) {
                starsHTML += '<i class="fi fi-ss-star star empty"></i>'; // Sao xám
            }

            htmls += `
                <div class="swiper-slide">
                    <a href="#">
                        <div class="inner-image">
                            <img src="${products[i].images[0]}" alt="${products[i].title}">
                            <div class="optional">
                                <div class="icon"><a href="#"><i class="fi fi-rr-heart"></i></a></div>
                                <div class="icon"><a href="#"><i class="fi fi-rr-eye"></i></a></div>
                                <div class="icon"><a href="#"><i class="fi fi-rr-arrows-repeat"></i></a></div>
                                <div class="icon"><a href="#"><i class="fi fi-rr-shopping-basket"></i></a></div>
                            </div>
                        </div>
                        <div class="description">
                            <div class="category">${products[i].category}</div>
                            <div class="title">${products[i].title}</div>
                            <div class="rating">${starsHTML}</div>
                            <div class="price">
                                <b>$${products[i].price}</b>
                                <del>$${(products[i].price * 1.2).toFixed(2)}</del>
                            </div>
                        </div>
                    </a>                  
                </div>`;
        }

        display.innerHTML = htmls;

    } catch (error) {
        console.error("Lỗi khi lấy dữ liệu:", error);
    }
}

fetchAPIProducts();
