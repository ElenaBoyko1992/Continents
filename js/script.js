//настройки gulp======================================
function testWebP(callback) {
  var webP = new Image();
  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };
  webP.src =
    "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
};

testWebP(function (support) {
  if (support == true) {
    document.querySelector("body").classList.add("webp");
  } else {
    document.querySelector("body").classList.add("no-webp");
  }
});

//подключение слайдера swiper
new Swiper('.choose-sliders__slider', {
        observer: true,
        observeParents: true,
        spaceBetween: 30,
        speed: 800,
        //loop: true, 
        breakpoints: {
                320: {
                    slidesPerView: 1,
                },
                767: {
                    slidesPerView: 2,
                 },
                 991: {
                   slidesPerView: 3,
                     },
                
             },
});
new Swiper('.slider-specialoffer__container', {
        observer: true,
        observeParents: true,
        speed: 800,
        loop: true, 
        navigation: {
            nextEl: '.slider-specialoffer__arrow_right',
            prevEl: '.slider-specialoffer__arrow_left'
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 0,
            },
            580: {
                slidesPerView: 2,
                spaceBetween: 0,
            },
            767: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
            991: {
                slidesPerView: 4,
                spaceBetween: 30,
                 },

         },

});
new Swiper('.slider-page__slider', {
    observer: true,
    observeParents: true,
    speed: 800,
    loop: true, 
    spaceBetween: 0,
    breakpoints: {
        320: {
            slidesPerView: 2,
        },
        580: {
            slidesPerView: 3,
        },
        767: {
            slidesPerView: 4,
        },
        991: {
            slidesPerView: 6,
             },
     },
});
new Swiper('.awards-page__slider_1', {
    speed: 800,
    spaceBetween: 80,
    navigation: {
        nextEl: '.awards-page__arrow_next-1',
        prevEl: '.awards-page__arrow_prev-1',
    },
    
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
        580: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        767: {
            slidesPerView: 3,
        },
     },
     
});
new Swiper('.awards-page__slider_2', {
    speed: 800,
    spaceBetween: 80,
    navigation: {
        nextEl: '.awards-page__arrow_next-2',
        prevEl: '.awards-page__arrow_prev-2',
    },
    
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
        580: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        767: {
            slidesPerView: 3,
        },
     },
});

//подключение табов
let tabsItems = document.querySelectorAll('._tabs-item');
let tabsBlocks = document.querySelectorAll('._tabs-block');
for (let index = 0; index < tabsItems.length; index++) {
  let tabsItem = tabsItems[index];
  let tabsBlock = tabsBlocks[index];
  tabsItem.addEventListener("click", function () {
    for (let index = 0; index < tabsItems.length; index++) {
      let tabsItemRemove = tabsItems[index];
      let tabsBlockRemove = tabsBlocks[index];
      if (tabsItemRemove.classList.contains('_active')) {
        tabsItemRemove.classList.remove('_active');
        tabsBlockRemove.classList.remove('_active');
      };
    };
    tabsItem.classList.add('_active');
    tabsBlock.classList.add('_active');
  });
};



//Открытие блока с контактами в мобильной версии (хедер)=======
  let blocksHeaderTitle = document.querySelector('.blocks-header__title');
  let rightBlock = document.querySelector('.blocks-header__right');

  blocksHeaderTitle.addEventListener("click", function () {
    blocksHeaderTitle.classList.toggle('_active');
    rightBlock.classList.toggle('_active');
  });


//Popup с документами (11 блок)===========

let itemForPopup = document.querySelectorAll('.item-for-popup');
let popup = document.querySelectorAll('.popup'); 
for (let index=0; index < itemForPopup.length; index++) {
  itemForPopup[index].addEventListener ("click", function (e) {
    popup[index].classList.add('_active');
    popup[index].addEventListener("click", function() {
      popup[index].classList.remove('_active');
    });
  });
};



