import React, {Component} from 'react';
import axios from "axios";
import { createGift } from '../api';

export default class CreateGift extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: [],
            description: [],
            image: []
        };
    };
    handleChange = event => this.setState({
        [event.target.name]: event.target.value
      })
    onSubmit=()=>{
        const newgift={
            title: this.state.title,
            description: this.state.description,
            image: this.state.image
        }
            console.log(newgift)
        createGift(newgift)
    }
    render(){
        const { title, description, image } = this.state
        return(
            <form  onSubmit={this.onSubmit}>
        <h3>Sign Up</h3>

        <label htmlFor="title">Title</label>
        <input
          required
          name="title"
          value={title}
          type="title"
          placeholder="Wite a title here"
          onChange={this.handleChange}
        />
        <label htmlFor="description">Description</label>
        <input
          required
          name="description"
          value={description}
          type="description"
          placeholder="Write a description here"
          onChange={this.handleChange}
        />
        <label htmlFor="image">Image</label>
        {/* <input
          required
          name="image"
          value={image}
          type="image"
          placeholder="Put a link for an image"
          onChange={this.handleChange}
        /> */}
        <button type="submit">Create</button>
      </form>
        )
    }
}

