const container = document.querySelector(".main_container");

const styleCard = (card) => {
    card.style.border = "2px solid";
    card.style.marginBottom = "20px";
    card.style.background = "#a9a9a9";
    card.style.padding = "10px";
};

const styleCardPicture = (picture, trooper) => {
    picture.src = trooper.URL;
    picture.style.width = "300px";
    picture.style.height = "400px";
    picture.style.border = "1px solid";
    picture.style.marginBottom = "5px";
};

const styleCardContent = (serialNumber, nickname, trooper) => {
    serialNumber.innerHTML = trooper.Serial_Number;
    serialNumber.style.fontSize = "20px";
    nickname.innerHTML = trooper.Nickname;
    nickname.style.fontSize = "15px";
};

fetch("data.json")
    .then((response) => response.json())
    .then((data) =>
        data.map((item) => {
            const container_card = document.createElement("div");
            const cardInfo = document.createElement("div");
            const cardSerialNumber = document.createElement("div");
            const cardNickname = document.createElement("div");
            const cardPicture = document.createElement("img");

            container_card.classList.add("container_item");
            cardInfo.classList.add("item_info");

            styleCard(container_card);
            styleCardPicture(cardPicture, item);
            styleCardContent(cardNickname, cardSerialNumber, item);

            cardInfo.append(cardSerialNumber);
            cardInfo.append(cardNickname);
            container_card.append(cardPicture);
            container_card.append(cardInfo);
            container.append(container_card);
        })
    )
    .catch(() => console.error("Check your data"))
    .finally(() => console.log("Data is fetched"));
