const INITIAL_STATE ={
    descriptions: 'Ler livro',
    list: [{
        _id: 1,
        description: 'Pagar Fatura do cartao ',
        done: true
    },
    {
        _id: 2,
        description: 'Reunião com a equipe as 10:00',
        done: false
    },
    {
        _id: 3,
        description: 'Consulta medica na terça depois do almoço',
        done: false
    }]
}

export default (state = INITIAL_STATE, action) =>{
    switch(action.type){
        case'DESCRIPTION_CHANGED':
        return{...state,description:action.payload}
        default:
            return state
    }
}