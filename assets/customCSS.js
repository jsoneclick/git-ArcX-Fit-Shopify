const customStyle = document.createElement("style");
customStyle.innerHTML = `
    .follow-text {
        background-color: red !important;
    }
`;
document.querySelector("shop-login-button").shadowRoot.querySelector("shop-follow-button").shadowRoot.querySelector("follow-on-shop-button").shadowRoot.querySelector("style").after(customStyle);