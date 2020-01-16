import React from 'react';
import './testimoni.css';


class Data extends React.Component {
    constructor () {
        super ();
        this.state = {
            data: []
        }
    }

    componentDidMount (){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({data: users}));
    }
    render (){
        const item = this.state.data;
        return(<>
            <div className="testimoni-title">
                <h3>Testimoni</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </div>
            <div className="card-all">
                <div className="card-item">
                    {item.map(data =>(
                        <div className="card">
                            <div className="user">
                                <img src={`https://robohash.org/${data.id}?set=set2`} alt="Profile"></img>
                                <div className="identity">
                                    <h2>{data.name}</h2>
                                    <h5>{data.email}</h5>
                                </div>
                            </div>
                            <div className="comment">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum quos aut temporibus repellendus omnis voluptate.</div>
                        </div>
                    ))}
                </div>
            </div>
        </>
        );
    }
}
  

export default Data;