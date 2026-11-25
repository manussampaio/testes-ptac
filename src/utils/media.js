export function media(notas) {
    if (!Array.isArray(notas) || notas.length === 0) {
        throw new Error('Lista de notas vazia')
    }
    const soma = notas.reduce((acc, nota) => acc + nota, 0)
    return soma / notas.length
}