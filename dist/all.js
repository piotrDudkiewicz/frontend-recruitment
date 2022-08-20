const template=document.createElement("template");template.innerHTML=`
<style>
@import "dist/main.css";
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
</section>`;class Card extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(template.content.cloneNode(!0)),this.shadowRoot.querySelector("h1").innerText=this.getAttribute("title"),this.shadowRoot.querySelector("p").innerText=this.getAttribute("desc"),this.button=this.shadowRoot.querySelector("button");const t=this.shadowRoot.querySelector("img");t.alt=this.getAttribute("image-alt"),t.src=this.getAttribute("image")}connectedCallback(){this.button.onclick=t=>{}}disconnectedCallback(){this.button.onclick=null}}window.customElements.define("card-item",Card);