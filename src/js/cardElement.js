const template = document.createElement("template");
template.innerHTML = `
<style>
@import "dist/main.css";
@import "dist/card.css";
</style>
<section class="module">
    <div>
        <img src="" alt=""/>
    </div>
    <div>
        <h1></h1>
        <p></p>
        <button aria-label="Button that opens a pop-up window">Button</button>
    </div>
</section>`;

class Card extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.shadowRoot.querySelector("h1").innerText = this.getAttribute("title");
    this.shadowRoot.querySelector("p").innerText = this.getAttribute("desc");

    this.button = this.shadowRoot.querySelector("button");

    const img = this.shadowRoot.querySelector("img");

    img.alt = this.getAttribute("image-alt");
    img.src = this.getAttribute("image");
  }

  connectedCallback() {
    this.button.onclick = (event) => {
      popup.style.display = "flex";
      counter++;
      localStorage.setItem("counter", counter);
      popupTextElement.innerHTML = popupMessage();

      if (counter > 5) {
        resetButton.style.display = "inline";
      }
    };
  }

  disconnectedCallback() {
    this.button.onclick = null;
  }
}
