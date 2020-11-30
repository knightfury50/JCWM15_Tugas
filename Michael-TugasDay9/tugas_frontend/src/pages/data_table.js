import React from 'react'
import Axios from 'axios'
import { Form,Table } from 'react-bootstrap'

class Data_table extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            dbUsers: []
        }
    }
    componentDidMount() {
        Axios.get('http://localhost:2000/users')
        .then((res) => {
            console.log(res.data)
            this.setState({dbUsers: res.data})
        })
        .catch((err) => console.log(err))
    }
    tablehead = () => {
        return(
            <thead>
                <tr style={{color:'white', backgroundColor:'#596275'}}>
                    <th>No</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Action</th>
                </tr>
            </thead>
        )
    }
    tablebody = () => {
        let {dbUsers} = this.state
        return (
            <tbody>
                {dbUsers.map((item,index) => {
                    return (
                        <tr key={index} style={{color:'white', backgroundColor:'gray'}}>
                            <td>{index+1}</td>
                            <td>{item.first_name}</td>
                            <td>{item.last_name}</td>
                            <td>{item.email}</td>
                            <td>
                                <button>Edit</button>
                                <button onClick={() => this.handledel(index)}>Delete</button>
                            </td>
                        </tr>
                    )
                })
                }
            </tbody>
        )
    }
    tableinput = () => {
        return (
            <tbody>
                <tr style={{color:'white', backgroundColor:'#b2bec3'}}>
                    <td>#</td>
                    <td>
                        <Form.Control type="text" placeholder="enter first name" ref="firstname"/>
                    </td>
                    <td>
                        <Form.Control type="text" placeholder="enter last name" ref="lastname"/>
                    </td>
                    <td>
                        <Form.Control type="text" placeholder="enter email" ref="email"/>
                    </td>
                    <td>
                        <button onClick={this.handleadd}>Submit</button>
                    </td>
                </tr>
            </tbody>
        )
    }
    table = () => {
        return (
            <Table>
                {this.tablehead()}
                {this.tablebody()}
                {this.tableinput()}
            </Table>
        )
    }
    handleadd = () => {
        let first_name = this.refs.firstname.value
        let last_name = this.refs.lastname.value
        let email = this.refs.email.value
        Axios.post('http://localhost:2000/users', {
            first_name,
            last_name,
            email
          })
          .then((res) => {
              Axios.get('http://localhost:2000/users')
              .then((res) => {
                  console.log(res.data)
                  this.setState({dbUsers: res.data})
              })
              .catch((err) => console.log(err))
        })
          .catch(err => console.log(err)
          )
    }
    handledel = (index) => {
        Axios.delete(`http://localhost:2000/users/${index}`)
        .then(res => console.log(res.data)
        )
        .catch(err => console.log(err)
        )
    }
    render() {
        console.log(this.state.dbUsers)
        return (
            <div>
                {this.table()}
            </div>
        )
    }
}
export default Data_table