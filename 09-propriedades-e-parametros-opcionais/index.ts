interface Usuario {
  id: number;
  nome: string;
  // A propriedade 'email' é opcional.
  email?: string;
}

const usuario1: Usuario = {
  id: 1,
  nome: "Yudi"
  // email não foi definido, mas isso é permitido.
};

const usuario2: Usuario = {
  id: 2,
  nome: "Ana",
  email: "ana@example.com"
};