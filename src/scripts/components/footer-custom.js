class FooterCustom extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({
            mode: "open"
        });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
        <style>
            #footer{
                margin-top: 10px;
                text-align: center;
                color: #fafafa;
                background-color: #000000;
                padding: 20px;
            }
        </style>
        <div id="footer">
            &copy; 2020 Andi Ganteng
        </div>`
    }
}

customElements.define("footer-custom", FooterCustom);