import { Component } from "react";

import React from "react";
import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import './app.css'
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";

class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            data: [
                {name: 'Alex K', salary: 999, increase: false, like: false, id: 1},
                {name: 'Alex B', salary: 777, increase: false, like: false, id: 2},
                {name: 'Alex W', salary: 222, increase: false, like: false, id: 3},
                {name: 'Alex Q', salary: 1258, increase: false, like: false, id: 4},
            ]
        }
        this.maxId = 5
    }


    deleteItem = (id) => {
        this.setState((state) => {
            // const index = state.data.findIndex(elem => elem.id === id)
            // const before = state.data.slice(0, index)
            // const after = state.data.slice(index + 1)
            // const newArr = [...before, ...after]

            // return {
            //     data: newArr
            // }

            return {
                data: state.data.filter(item => item.id !== id)
            }
        })
    }

    addNewItem = (name, salary) => {
        const newItem = {
            name,
            salary,
            increase: false,
            like: false,
            id: this.maxId++
        }
        console.log(newItem);
        this.setState((state) => {
            const newArr = [...state.data, newItem]
            return {
                data: newArr
            }
        } )
    }

    onToggeleIncrease = (id) => {
        // this.setState((state) => {
        //     const index = state.data.findIndex(elem => elem.id === id)

        //     const old = state.data[index]
        //     console.log(old);
        //     const newItem = {...old, increase: !old.increase}
        //     //console.log(newItem);
        //     const newArr = [...state.data.slice(0, index), newItem, ...state.data.slice(index + 1)]
        //     console.log(newArr);

        //     return {
        //         data: newArr
        //     }
        
        // })

        this.setState((state) => ({
            data: state.data.map(item => {
                if (item.id === id) {
                    return{...item, increase: !item.increase}
                }
                return item
            })
        }))
    }

    onToggeleLike = (id) => {
        this.setState((state) => ({
            data: state.data.map(item => {
                console.log(item.like);
                if (item.id === id) {
                    return{...item, like: !item.like}
                }
                return item
            })
        }))
    }

    onEditItem = (id, salary) => {
        console.log(`change this imput value ${id}`);
        this.setState((state) => ({
            data: state.data.map(item => {
                if (item.id === id) {
                    return{...item, salary: salary}
                }
                return item
            })
        }))
    }


    render() {
        const {data} = this.state
        const employees = data.length
        const increased = data.filter(item => item.increase).length
        console.log(data)

        return (
            <div className="app">
                <AppInfo employees={employees} increased={increased} />
    
                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter/>
                </div>
                <EmployeesList   
                    data={data}
                    onDelete={this.deleteItem}
                    onToggeleIncrease={this.onToggeleIncrease}
                    onToggeleLike={this.onToggeleLike}
                    onEditItem={this.onEditItem} />
                <EmployeesAddForm
                    onAdd={this.addNewItem} />
            </div>
        )
    }
    
}

export default App;