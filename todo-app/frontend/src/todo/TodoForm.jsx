
import React, {Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'


import Grid from '../template/grid'
import IconButton from '../template/iconButton'
import { add, changeDescription, search, clear } from './todoActions'


class TodoForm extends Component {
    constructor(props){
        super(props)

        this.keyHandler = this.keyHandler.bind(this)
    }

    keyHandler(e){

        const {add, search, description} = this.props

        if(e.key === 'Enter'){
            e.shiftKey ? search() : add(description)
        }
        else if(e.key === 'Escape'){
            this.props.clear()
        }
    }

    componentWillMount(){
        this.props.search()
    }

    render() {
        return (
            <div role='form' className='todoForm'>

                <Grid cols='12 9 10'>
                    <input value={props.description}
                        onChange={props.changeDescription}
                        id='description'
                        className='form-control'
                        placeholder='Adicione uma tarefa'
                        onKeyUp={keyHandler} />
                </Grid>
                <Grid cols='12 3 2'>
                    <IconButton style='primary' icon='plus'
                        onClick={props.handleAdd}>
                    </IconButton>

                    <IconButton style='info' icon='search'
                        onClick={props.handleSearch}>
                    </IconButton>

                    <IconButton style='default' icon='close'
                        onClick={props.handleClear}>
                    </IconButton>

                </Grid>
            </div>
        )
    }
} 

const mapStateToprops = state => ({description: state.todo.description})

const mapDispatchToprops = dispatch => 
bindActionCreators({add, changeDescription, search, clear}, dispatch)

export default connect(mapStateToprops, mapDispatchToprops)(TodoForm)