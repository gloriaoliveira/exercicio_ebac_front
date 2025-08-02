function Gato (nome, idade, raca, vacinado) {
    this.nome = nome;
    this.idade = idade;
    this.raca = raca;
    this.vacinado = vacinado;
    this.comer = function() {
        console.log(this.nome + " está comendo.");
    }
}

function GatoNutella (nome, idade, raca, vacinado, deApartamento) {
    Gato.call(this, nome, idade, raca, vacinado);
    this.deApartamento = deApartamento;
}

function GatoRaiz (nome, idade, raca, vacinado, deRua) {
    Gato.call(this, nome, idade, raca, vacinado);
    this.deRua = deRua;
}


let shinji = new GatoNutella("Shinji", 8, "Maine Coon", "vacinado", "deApartamento");
let peti = new GatoRaiz("Peti", 6, "SRD", "vacinado", "deRua");
let pirlo = new Gato("Pirlo", 4, "Bengal", "não vacinado");


console.log(shinji);
console.log(peti);  
console.log(pirlo);