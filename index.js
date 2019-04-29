
class Forfatter {
    constructor(fornavn, etternavn, info) {
      this.fornavn = fornavn;
      this.etternavn = etternavn;
      this.info = info;
    }
    
    get heleNavnet() {
      return this.fornavn + " " + this.etternavn;
    }
  
    get forfatterDiv() {
      return `
        <div>
          <h1>${this.heleNavnet}</h1>
          <p>${this.info}</p>
        </div>
      `;
    }
  }
  
  const ibsen = new Forfatter("Henrik", "Ibsen", "Ibsen var en dramatiker av format");
  // Refererer til et HTML-element med id="root"
  const root = document.querySelector("#root");
  
  root.innerHTML = ibsen.forfatterDiv;