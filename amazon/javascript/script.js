// dropdownmy
  const dropdownButton = document.querySelector('.search-dropdown');
  const dropdownMenu = document.querySelector('.dropdownmenu');

  dropdownButton.addEventListener('click', () => {
    dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
  });

  document.addEventListener('click', (event) => {
    if (!dropdownButton.contains(event.target)) {
      dropdownMenu.style.display = 'none';
    }
  });

// hamburger menü
const openNavSidebar = document.getElementById('open-nav-sidebar');
const sidebarContainer = document.querySelector('.sidebar-container-navigation');
const sidebarCloseButton = document.getElementById('sidebar-navigation-close');

openNavSidebar.addEventListener('click', () => {
  sidebarContainer.classList.add('slidebar-show');
});

sidebarCloseButton.addEventListener('click', () => {
  sidebarContainer.classList.remove('slidebar-show');
});

// image slider
let slideBtnLeft = document.getElementById("slide-btn-left")
let slideBtnRight = document.getElementById("slide-btn-right")
let imgItem = document.querySelectorAll(".image-item")


console.log(imgItem.length - 1)

let startSlider = 0
let endSlider = (imgItem.length - 1) * 100 

slideBtnLeft.addEventListener("click", handleLeftBtn)

function handleLeftBtn() {
    if (startSlider < 0) {
        startSlider = startSlider + 100;
    }
    imgItem.forEach(element => {
        element.style.transform = `translateX(${startSlider}%)`;
    })
}

slideBtnRight.addEventListener("click", handleRightBtn)

function handleRightBtn() {
    if (startSlider >= -endSlider + 100) {
        startSlider = startSlider - 100;
    }
    imgItem.forEach(element => {
        element.style.transform = `translateX(${startSlider}%)`;
    })

}

// card slider

    const prevButton = document.getElementById('today_deal_btn_prev');
    const nextButton = document.getElementById('today_deal_btn_next');
    const productContainer = document.querySelector('.today_deals_product_list');
    const productItems = document.querySelectorAll('.today_deals_product_item');
    const itemWidth = productItems[0].offsetWidth + 10;

    let currentIndex = 0;

    function showProduct(index) {
        if (index < 0) {
            currentIndex = productItems.length - 1;
        } else if (index >= productItems.length) {
            currentIndex = 0;
        }

        const offset = -currentIndex * itemWidth;
        productContainer.style.transform = `translateX(${offset}px)`;
    }

    prevButton.addEventListener('click', () => {
        currentIndex--;
        showProduct(currentIndex);
    });

    nextButton.addEventListener('click', () => {
        currentIndex++;
        showProduct(currentIndex);
    });

    showProduct(currentIndex);