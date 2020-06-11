import React,{Component} from 'react';
import '../Styles/index.css';

export default class List extends Component{
  render() {
    const {list,handleDelete,handleEdit} = this.props;
  return (
      <div className="container">
          <div className="table-wrapper">
              <div className="table-title">
                  <div className="row">
                      <div className="col-sm-12">
                        <h2 className="modal-title"><b>Manage Employees</b></h2>
                      </div>
                  </div>
              </div>
              <table className="table table-striped table-hover">
                  <thead>
                      <tr>
                          <th>Name</th>
                          <th>Email</th>
                          <th>Address</th>
                          <th>Phone</th>
                          <th>Actions</th>
                      </tr>
                  </thead>
                  <tbody>
              {
                    list.map(item => (
                      <tr key={item._id}>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.adress}</td>
                        <td>{item.phone}</td>
                        <td>
                          <i className="material-icons Edit"  title="Edit" onClick={()=> handleEdit(item._id)}>&#xE254;</i>
                          <i className="material-icons Delete" title="Delete" onClick={()=> handleDelete(item._id) }>&#xE872;</i>
                        </td>
                      </tr> 
                    ))
                  }
                  </tbody>
              </table>
          </div>
      </div>
  );
}
}

