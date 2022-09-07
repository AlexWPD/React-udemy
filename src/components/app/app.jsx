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
                {name: 'Alex K', salary: 999, increase: false, id: 1},
                {name: 'Alex B', salary: 777, increase: true, id: 2},
                {name: 'Alex W', salary: 222, increase: true, id: 3},
                {name: 'Alex Q', salary: 1258, increase: false, id: 4},
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

    render() {
        const {data} = this.state
        return (
            <div className="app">
                <AppInfo/>
    
                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter/>
                </div>
                <EmployeesList   
                    data={data}
                    onDelete={this.deleteItem} />
                <EmployeesAddForm
                    onAdd={this.addNewItem} />
            </div>
        )
    }
    
}

export default App;