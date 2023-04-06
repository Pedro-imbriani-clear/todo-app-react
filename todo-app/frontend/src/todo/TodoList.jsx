import React from 'react'
import IconButton from '../template/IconButton'
import { connect } from 'react-redux'


const TodoList = props => {

    const renderRows = () => {
        const lista = props.list || []
        console.log(lista)
        return(
            lista.map(list => {
                return(

                    <tr key={list._id}>

                        <td className={list.done ? 'markedAsDone' : ''}>{list.description}</td>
                        <td>
                            <IconButton style='success' icon='check' hide={list.done} 
                            onClick={() => props.handleMarkAsDone(list)}>                          
                            </IconButton>

                            <IconButton style='warning' icon='undo' hide={!list.done} 
                            onClick={() => props.handleMarkAsPending(list)}>
                            </IconButton>

                            <IconButton style='danger' icon='trash-o' hide={!list.done} 
                            onClick={() => props.handleRemove(list)}>
                            </IconButton>
                            
                        </td>
                    </tr>
                 )
            })
        )
    }

    return(
        <table className='table'>
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th className='tableActions'>Actions</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}

const mapStateToProps = state => ({list: state.todo.list})
export default connect(mapStateToProps)(TodoList)