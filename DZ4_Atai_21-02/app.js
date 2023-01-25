const container = document.querySelector(".main_container");

const request = new XMLHttpRequest();
request.open("GET", "data.json");
request.setRequestHeader("Content-Type", "application/json");
request.send();

request.addEventListener("load", () => {
    const data = JSON.parse(request.response);
    console.log(data);

    data.map((item) => {
        // essential elements
        const container_card = document.createElement("div");
        const cardInfo = document.createElement("div");
        const cardSerialNumber = document.createElement("div");
        const cardNickname = document.createElement("div");
        const cardPicture = document.createElement("img");

        // add classlist to main card
        container_card.classList.add("container_item");

        container_card.style.padding = "10px";
        container_card.style.border = "2px solid";
        container_card.style.marginBottom = "20px";
        container_card.style.background = "#a9a9a9";

        //fullfill cards with info
        cardPicture.src = item.URL;
        cardPicture.style.width = "300px";
        cardPicture.style.height = "400px";
        cardPicture.style.border = "1px solid";
        cardPicture.style.marginBottom = "5px";

        cardSerialNumber.innerHTML = item.Serial_Number;
        cardNickname.innerHTML = item.Nickname;

        cardSerialNumber.style.fontSize = "20px";
        cardNickname.style.fontSize = "15px";

        //main card structure
        cardInfo.append(cardSerialNumber);
        cardInfo.append(cardNickname);

        cardInfo.classList.add("item_info");

        container_card.append(cardPicture);
        container_card.append(cardInfo);
        container.append(container_card);
    });
});
