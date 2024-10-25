function search() {
    var searchTerm = document.getElementById('search-box').value;
    alert("搜索功能尚未实现。您搜索的内容是：" + searchTerm);
}

function addToCart(productName, price) {
    alert(productName + " 已加入购物车。价格: $" + price);
}

// 初始化Swiper
var swiper = new Swiper('.swiper-container', {
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

// 粒子效果配置
particlesJS.load('particles-js', 'particles.json', function() {
    console.log('particles.js loaded - callback');
});

// 模态窗口功能
var modal = document.getElementById('myModal');
var btn = document.createElement("BUTTON"); // 创建一个按钮元素
btn.innerHTML = "打开模态窗口";
btn.onclick = function() {
    modal.style.display = "block";
};
document.body.appendChild(btn); // 将按钮添加到页面中

var span = document.getElementsByClassName("close")[0];

// 当用户点击关闭按钮时，关闭模态窗口
span.onclick = function() {
    modal.style.display = "none";
}

// 当用户点击窗口中的任意位置时，关闭模态窗口
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}