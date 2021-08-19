import React, { Component } from 'react';
import { getFriend, getShirtColor } from '../utils.js';
import '../Home.css';

class Details extends Component {
    state = { 
        name: '',
        cool_factor: 0,
        cool_haircut: false,
        shirt_id: 0
     };

     componentDidMount = async () => {
         const friendId = this.props.match.params.friendId;
         const friendData = await getFriend(friendId);
         const shirtColor = await getShirtColor();
         this.setState({...friendData, shirtColor});
     }
    render() { 
        return ( 
            <>
            <h1>{this.state.name}</h1>
            {/* <img src={this.state.image_url} alt="face" /> */}
            <form id="update-friend">
                <div className="form-group">
                    <label>Name </label>
                    <input
                        onChange={(e) => {
                            this.setState({ name: e.target.value });
                        }}
                        type="text"
                        value={this.state.name}
                    ></input>
                </div>
                <div className="form-group">
                    <label>Cool Factor: </label>
                    <input
                        onChange={(e) => {
                            this.setState({
                                cool_factor: e.target.value,
                            });
                        }}
                        type="number"
                        value={this.state.cool_factor}
                        ></input>
                </div>
                <div className="form-group">
                    <label>Cool Haircut: </label>
                    <input
                        onChange={(e) => {
                            this.setState({ cool_haircut: e.target.value });
                        }}
                        type="boolean"
                        value={this.state.cool_haircut}
                        ></input>
                </div>
                <div className="form-group">
                    <label>Shirt Color</label>
                    <select>
                        <option>red</option>
                        <option>blue</option>
                        <option>yellow</option>
                        <option>brown</option>
                        <option>green</option>
                        {/* {this.state.shirt_color.map((shrt) => {
                            return (
                                <option value={shrt.color}>{shrt.color}</option>
                            );
                        })} */}
                    </select>
                </div>
            {/* <div className="form-group">
                <label>Image URL: </label>
                <input
                    onChange={(e) => {
                        this.setState({ image_url: e.target.value });
                    }}
                    type="text"
                    value={this.state.image_url}
                ></input> */}
            {/* </div> */}
            </form>
        </>
         );
        }
    }
    
    export default Details;


