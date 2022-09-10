import { Component } from 'react';
import './employees-item.css'

class EmployeesItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: this.props.name
        }
    }

    // onChangeSalary = (e) => {
    //     this.props.onEditItem(e.target.value)
    // }

    onChangeName = () => {
        const newItemValue = prompt('Edit name')
        console.log(newItemValue);

        if (newItemValue === null || newItemValue.length === 0) {
            alert('Ничего не ввели')
        } else {
            this.props.onEditName(newItemValue)

            this.setState({
                name: newItemValue
            })
        }
    }

    render() {
        const {salary, onDelete, onToggeleIncrease, onToggeleLike, increase, like, onEditSalary} = this.props
        const {name} = this.state

        let classNames = 'list-group-item d-flex justify-content-between'

        if (increase) {
            classNames+= ' increase'
        }
        
        if (like) {
            classNames+= ' like'
        }
    
        return (
            <li className={classNames}>
                <span 
                    className="list-group-item-label"
                    onClick={onToggeleLike}>{name}
                </span>
                <button type="button"
                        className="btn btn-primary"
                        onClick={this.onChangeName} >Edit_name
                </button>
                <input type="text" 
                    className="list-group-item-input"
                    //onChange={this.onChangeSalary}
                    onChange={(e) => onEditSalary(e.target.value)}
                    defaultValue={"$" + salary}/>
                <div className='d-flex justify-content-center align-items-center'>
                    <button type="button"
                        className="btn-cookie btn-sm" 
                        onClick={onToggeleIncrease}>
                        <i className="fas fa-cookie"></i>
                    </button>
    
                    <button type="button"
                            className="btn-trash btn-sm"
                            onClick={onDelete} >
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
        )
    }
}


export default EmployeesItem


//ФУНКЦИОНАЛЬНЫЙ КОМПОНЕНТ

// const EmployeesItem = ({name, salary, active}) => {

//     let classNames = 'list-group-item d-flex justify-content-between';
//     if (active) {
//         classNames+= ' increase'
//     }

//     return (
//         <li className={classNames}>
//             <span className="list-group-item-label">{name}</span>
//             <input type="text" className="list-group-item-input" defaultValue={"$" + salary}/>
//             <div className='d-flex justify-content-center align-items-center'>
//                 <button type="button"
//                     className="btn-cookie btn-sm ">
//                     <i className="fas fa-cookie"></i>
//                 </button>

//                 <button type="button"
//                         className="btn-trash btn-sm ">
//                     <i className="fas fa-trash"></i>
//                 </button>
//                 <i className="fas fa-star"></i>
//             </div>
//         </li>
//     )
// }

// export default EmployeesItem