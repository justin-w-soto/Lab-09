import React, { Component } from 'react';
import { getFriends } from '../utils.js';
import { Link } from 'react-router-dom';



class List extends Component {
    state = { friends: [] };

    componentDidMount = async () => {
        const data = await getFriends();
        this.setState({ friends: data });
    };
    
    render() { 
        return ( 
            <section className="friend-list">

                {this.state.friends.map((frns) => (
                    <div className="friendy">

                        <h2>
                            <Link to={`/friends/${frns.id}`}>{frns.name}</Link>
                        </h2>

                        <img src={frns.image_url} />

                        <p>
                           Shirt Color is {frns.shirt_id} 
                        </p>

                    </div>
                ))}
            </section>
         );
    }
}
 
export default List;
