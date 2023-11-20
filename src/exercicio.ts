function multi (a: number, b: number): number {
    return a * b;
}

const result: number = multi (5, 5);
console.log('Resultado é:', result);

function saudacao (nome: string): string {
    return 'Olá ' + nome;
}

const msgSaudacao: string = saudacao ('Gabi');
console.log(msgSaudacao);