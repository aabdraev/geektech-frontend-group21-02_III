const tabs = document.querySelectorAll(".tabheader__item");
const tabsParent = document.querySelector(".tabheader__items");
const tabsContent = document.querySelectorAll(".tabcontent");
let index = 0;

const showTabContent = () => {
    let i;
    for (i = 0; i < tabsContent.length; i++) {
        tabsContent[i].classList.add("fade");
        tabsContent[i].style.display = "none";
        tabs[i].classList.remove("tabheader__item_active");
    }
    index++;
    if (index > tabsContent.length) {
        index = 1;
    }
    tabsContent[index - 1].style.display = "block";
    tabs[index - 1].classList.add("tabheader__item_active");
    setTimeout(showTabContent, 5000);
};

showTabContent();

const modalTrigger = document.querySelector(".btn_white");
const modal = document.querySelector(".modal");
const modalCloseBtn = document.querySelector(".modal__close");

const openModal = () => {
    modal.classList.add("show");
    modal.classList.remove("hide");
    document.body.style.overflow = "hidden";
};

const openModalEOP = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        modal.classList.add("show");
        modal.classList.remove("hide");
        document.body.style.overflow = "hidden";
        window.scrollBy(0, -1);
    }
};

modalTrigger.addEventListener("click", openModal);

const closeModal = () => {
    modal.classList.add("hide");
    modal.classList.remove("show");
    document.body.style.overflow = "";
};

modalCloseBtn.addEventListener("click", closeModal);

modal.addEventListener("click", (e) => {
    if (e.target.classList.contains("modal")) {
        closeModal();
    }
});

window.addEventListener("scroll", openModalEOP);
