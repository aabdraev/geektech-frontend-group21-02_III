const som = document.querySelector("#som");
const usd = document.querySelector("#usd");
const eur = document.querySelector("#eur");

fetch("data.json")
    .then((response) => response.json())
    .then((data) => {
        const convert = (elem, target, target2) => {
            elem.addEventListener("input", () => {
                if (elem === som) {
                    target.value = (elem.value / data.usd).toFixed(2);
                    target2.value = (elem.value / data.eur).toFixed(2);
                } else if (elem === usd) {
                    target.value = (elem.value * data.usd).toFixed(2);
                    target2.value = (
                        (elem.value * data.usd) /
                        data.eur
                    ).toFixed(2);
                } else if (elem === eur) {
                    target.value = (elem.value * data.eur).toFixed(2);
                    target2.value = (
                        (elem.value * data.eur) /
                        data.usd
                    ).toFixed(2);
                }

                if (elem.value === "") {
                    target.value = "";
                    target2.value = "";
                }
            });
        };

        convert(som, usd, eur);
        convert(usd, som, eur);
        convert(eur, som, usd);
    })
    .catch(() => console.error("Check data"))
    .finally(() => console.log("Data is loaded"));
