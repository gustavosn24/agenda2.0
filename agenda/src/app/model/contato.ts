export enum TipoContato {
    AMIGO = 'Amigo(a)',
    FAMILIA = 'Família',
    IFRN = 'IFRN',
    TRABALHO = 'Trabalho',
    OUTROS = 'Outros'
}
export type Contato = {
    nome: string
    telefone: string
    email: string
    aniversario: Date
    tipo: TipoContato
}

/**
 * class: Tipo mais completo. Permite criação de objetos, ações (métodos), 
 * criar atributos, restringir acesso a atributos e métodos.
 * interface: Criar um contrato de implementação para uma classe. 
 * enum: tipo enumerado. Usado quando se quer associar constantes a valores. 
 * type: usado quando se quer receber informações simples (de uma API por exemplo) 
*/
