"use strict";

window.addEventListener("DOMContentLoaded", () => {

    let tabContent = document.querySelectorAll(".tab__content"),
        tabs = document.querySelectorAll(".tab__header-item"),
        tabsParent = document.querySelector(".tab__header-items");


    function hideTabContent() {
        tabContent.forEach(item => {
            item.classList.add("hide");
            item.classList.remove("show");
        });

        tabs.forEach(item => {
            item.classList.remove("item__active");
        });
    }
    hideTabContent();


    function showTabContent(i = 0) {
        tabContent[i].classList.add("show");
        tabContent[i].classList.remove('hide');
        tabs[i].classList.add("item__active");
    }
    showTabContent()


    tabsParent.addEventListener("click", (e) => {
        let target = e.target
        if (target && e.target.classList.contains("tab__header-item")) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i)
                }
            })
        }
    })
});

