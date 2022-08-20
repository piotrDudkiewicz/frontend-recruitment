const template=document.createElement("template");template.innerHTML=`
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
</section>`;class Card extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(template.content.cloneNode(!0)),this.shadowRoot.querySelector("h1").innerText=this.getAttribute("title"),this.shadowRoot.querySelector("p").innerText=this.getAttribute("desc"),this.button=this.shadowRoot.querySelector("button");const t=this.shadowRoot.querySelector("img");t.alt=this.getAttribute("image-alt"),t.src=this.getAttribute("image")}connectedCallback(){this.button.onclick=t=>{popup.style.display="flex",counter++,localStorage.setItem("counter",counter),popupTextElement.innerHTML=popupMessage(),5<counter&&(resetButton.style.display="inline")}}disconnectedCallback(){this.button.onclick=null}}const popup=document.querySelector(".popup"),popupTextElement=popup.querySelector("span"),resetButton=popup.querySelector(".reset");let counter=localStorage.getItem("counter")||0;function closePopup(){popup.style.display="none"}function popupMessage(){return`You have clicked ${counter} times to related button.`}popup.addEventListener("click",function(t){"popup"===t.target.className&&(t.target.className,closePopup())}),resetButton.addEventListener("click",function(t){confirm("Are you sure?")&&(counter=0,localStorage.setItem("counter",counter),resetButton.style.display="none",popupTextElement.innerHTML=popupMessage())}),popupTextElement.innerHTML=popupMessage(),window.customElements.define("card-item",Card);