import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


class Gift extends React.Component {
  deleteGift = (e) => {
    e.preventDefault();
    this.props.deleteGift(this.props.id);
  };
  updateGift = (e) => {
    e.preventDefault();
    this.props.updateGift(this.props.id);
  }

  render() {
    return (
      <div class="card">
        <img src={this.props.image}/>
        <div>
        <h2>{this.props.title}</h2>
        <sub class="card-title">{this.props.description}</sub>
       <div >
         <a class="card-button" href="#" onClick={this.deleteGift}> Delete </a>
         <a class="card-button" href="#" onClick={this.updateGift}> Update </a>
        </div>
      </div>
      </div>
    );
  }
}

export default Gift;