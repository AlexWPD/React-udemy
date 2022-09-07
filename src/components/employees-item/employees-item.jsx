import './employees-item.css'

const EmployeesItem = ({name, salary, onDelete, onToggeleIncrease, onToggeleLike, increase, like}) => {

    let classNames = 'list-group-item d-flex justify-content-between';

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
            <input type="text" 
                className="list-group-item-input"
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