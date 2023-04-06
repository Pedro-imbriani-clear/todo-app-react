import { combineReducers } from 'redux'

const rootReducer = combineReducers({

    todo: () => ({
        descriptions: 'Ler livro',
        list: [{
            _id: 1,
            descriptions: 'Pagar Fatura do cartao ',
            done: true
        },
        {
            _id: 2,
            descriptions: 'Reunião com a equipe as 10:00',
            done: false
        },
        {
            _id: 3,
            descriptions: 'Consulta medica na terça depois do almoço',
            done: false
        }]
    })
})

export default rootReducer