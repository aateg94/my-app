import React,{Component} from 'react';
import '../Styles/index.css';

export default class Edit extends Component{

    state = {
        _id:this.props.itemEdit._id,name:this.props.itemEdit.name,email:this.props.itemEdit.email,adress:this.props.itemEdit.adress,phone:this.props.itemEdit.phone
    }

    hendleInput = e => this.setState({[e.target.name]:e.target.value })

    handleEditClick = ()=>{ 
        this.props.handleEdit({_id:this.state._id,name:this.state.name,email:this.state.email,adress:this.state.adress,phone:this.state.phone});
        this.setState({_id:"",name:"",email:"",adress:"",phone:""});
    }
    
    render() 
    {
        return (
            
            <div className="container">
                <div className="table-wrapper">
                    <div className="table table-striped">
                        <div className="modal-header table-title">						
                            <h2 className="modal-title"><b>{this.props.title}</b></h2>
                        </div>
                        <div className="modal-body">
                            <input type="hidden" name="_id" value={this.state._id} onChange ={this.hendleInput}/>					
                            <div className="form-group">
                                <label>Name</label>
                                <input type="text" className="form-control" required name="name" autoComplete="off" value={this.state.name} onChange ={this.hendleInput}/>
                            </div>
                            <div className="form-group">
                                <label>Email</label>
                                <input type="email" className="form-control" required name="email" autoComplete="off"  value={this.state.email} onChange ={this.hendleInput}/>
                            </div>
                            <div className="form-group">
                                <label>Address</label>
                                <textarea className="form-control" required name="adress" autoComplete="off" value={this.state.adress} onChange ={this.hendleInput}>{this.state.adress}</textarea>
                            </div>
                            <div className="form-group">
                                <label>Phone</label>
                                <input type="text" className="form-control" required name="phone" autoComplete="off" value={this.state.phone} onChange ={this.hendleInput}/>
                            </div>					
                        </div>
                        <div className="modal-footer">
                            <button onClick={this.handleEditClick} 
                               className="btn btn-block btn-info"><i className="fa fa-database"></i> Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

