import React from 'react';

class Gift extends React.Component {
  updateGift = (e) => {
    e.preventDefault();
    this.props.updateGift(this.props.id);
  }

  render() {
    return (
      <div className="gift">
        <img src={this.props.image}/>
        <h2>{this.props.title}</h2>
        <sub>{this.props.description}</sub>
        <p>
          
        </p>
        <a href="#" onClick={this.updateGift}>Update</a>
      </div>
    );
  }
}

export default Gift;