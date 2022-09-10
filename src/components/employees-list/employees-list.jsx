import EmployeesItem from '../employees-item/employees-item'
import './employees-list.css'

const EmployeesList = ({data, onDelete, onToggeleLike, onToggeleIncrease, onEditSalary, onEditName}) => {

    const elements = data.map((item, index) => {
        return (
            <EmployeesItem 
                key={item.id}
                name={item.name}
                salary={item.salary}
                increase={item.increase}
                like={item.like}
                onDelete={() => onDelete(item.id)}
                onToggeleIncrease={() => onToggeleIncrease(item.id)}
                onToggeleLike={() => onToggeleLike(item.id)} 
                onEditSalary={(salary) => onEditSalary(item.id, salary)}
                onEditName={(name) => onEditName(item.id, name)} />
        )
    })

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployeesList


//ДЕСТРУКТУРИЗАЦИЯ

// const EmployeesList = ({data}) => {

//     const elements = data.map((item, index) => {
//         const {id, ...itemProps} = item
//         return (
//             <EmployeesItem key={id} {...itemProps} />
//         )
//     })

//     return (
//         <ul className="app-list list-group">
//             {elements}
//         </ul>
//     )
// }

// export default EmployeesList