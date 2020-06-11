import React,{Component} from 'react';
import '../Styles/index.css';
import Add from '../Components/Add';
import Edit from '../Components/Edit';
import List from '../Components/List';
import {url} from '../constants/url';

export default class Home extends Component {
  state = {list:[],errMassege:"",title:"Add Employee",itemEdit:''}

  componentDidMount() {
      this.fetchData();
  }

  fetchData() {
    fetch(url)
    .then(res => res.json())
    .then(res => this.setState({list:res}))
    .catch(err => this.setState({errMassege:err.massege}));
  }

  handleAdd = ({name,email,adress,phone})=>{
      fetch(url,{ method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({name,email,adress,phone})
                })
      .then(res => {
        if(res.status === 201) return res.json()
        throw new Error ("Employee Is Not Found !")})
      .then(res => this.setState({errMassege:"Added successfully !"},
      () => { return setTimeout(() => this.setState({errMassege:""}),1000)}))
      .then(res => this.fetchData())
      .catch(err => this.setState({errMassege:err}));
  }

  handleEdit = ({_id,name,email,adress,phone})=>{
      fetch(`${url}/${_id}`,{  method: 'PUT',
                  headers:{'Content-Type': 'application/json'},
                  body:JSON.stringify({name,email,adress,phone})
                })
      .then(res => {
        if(res.status !== 404) return res.json()
        throw new Error ("Employee Is Not Found !")})
      .then(res => this.setState({title:"Add Employee",errMassege:"Edited successfully !"},
      () => { return setTimeout(() => {
        return this.setState({ errMassege: "" });
      },1000)}))
      .then(res => this.AddOrEdit())
      .then(res => this.fetchData())
      .catch(err => this.setState({errMassege:err.massege}));
  }

  handleItemEdit=(_id) =>{
    fetch(`${url}/${_id}`)
    .then(res => {
      if(res.status !== 404) return res.json()
      throw new Error ("Employee Is Not Found !")})
    .then(res => this.setState({itemEdit:res,title:"Edit Employee"}))
    .then(res => this.AddOrEdit())
    .catch(err => this.setState({errMassege:err.message}));
  }

  handleDelete = (_id) => {
    fetch(`${url}/${_id}`,{method:"delete",headers: { 'Content-type': 'application/json'}})
    .then(res => res.json())
    .then(res => this.setState({errMassege:"Deleted successfully !"},
    () => { return setTimeout(() => this.setState({errMassege:""}),1000)}))
    .then(res => this.fetchData())
    .catch(err => this.setState({errMassege:err.massege}));
  }

  AddOrEdit(){
    if(this.state.title === "Add Employee"){
      return <Add title={this.state.title} handleAdd={this.handleAdd}/>
    }else{
      return <Edit itemEdit={this.state.itemEdit} title={this.state.title} handleEdit={this.handleEdit}/>
    }
  }

  render() 
  {
    return (
      <div >
          {
            this.state.errMassege &&
              <div className="error">
              {this.state.errMassege}
              </div>
          }
          <div className="container">
              <div className="formAddEdit">
              {this.AddOrEdit()}
              </div>
              <div className="formList">
                <List list={this.state.list} handleDelete={this.handleDelete} handleEdit={this.handleItemEdit}/>
              </div>
          </div>
      </div>
    );
  }
}

