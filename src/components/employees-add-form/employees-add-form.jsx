import { Component } from 'react'
import './employees-add-form.css'

class EmployeesAddForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            salary: ''
        }
    }

    onChangeName = (e) => {
        this.setState({
            name:e.target.value
        })
    }

    onChangeSalary = (e) => {
        this.setState({
            salary:e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault()
        this.props.onAdd(this.state.name, this.state.salary)
        this.setState({
            name: '',
            salary: ''
        })
    }

    render() {
        const {name, salary} = this.state

        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form
                    className="add-form d-flex" 
                    onSubmit={this.onSubmit}>
                    <input 
                        type="text"
                        onChange={this.onChangeName}
                        value={name}
                        className="form-control new-post-label"
                        placeholder="Как его зовут?" />
                    <input 
                        type="number"
                        onChange={this.onChangeSalary}
                        value={salary}
                        className="form-control new-post-label"
                        placeholder="З/П в $?" />
    
                    <button type="submit"
                            className="btn btn-outline-light">Добавить</button>
                </form>
            </div>
        )
    }
}

export default EmployeesAddForm


//ФУНКЦИОНАЛЬНЫЙ КОМПОНЕНТ

// const EmployeesAddForm = () => {
//     return (
//         <div className="app-add-form">
//             <h3>Добавьте нового сотрудника</h3>
//             <form
//                 className="add-form d-flex">
//                 <input type="text"
//                     className="form-control new-post-label"
//                     placeholder="Как его зовут?" />
//                 <input type="number"
//                     className="form-control new-post-label"
//                     placeholder="З/П в $?" />

//                 <button type="submit"
//                         className="btn btn-outline-light">Добавить</button>
//             </form>
//         </div>
//     )
// }

// export default EmployeesAddForm