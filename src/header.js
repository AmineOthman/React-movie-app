import React, { Component } from 'react';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            keyword:''
         }
    }

    nameChange = (event) =>{
        this.setState({keyword:event.target.value},()=>this.props.findName(this.state.keyword))
    }
   
    render() { 
        return (
            <div className="header">
                <input type="text" placeholder="Type movie name to search" onChange={this.nameChange}/>
               
                <button type="button" value="search">Search</button>

                <div className="rating-filter">
                    <p>min rating</p>
                    <span>★★★★★</span>
                </div>
            </div> 

         );
    }
}
 
export default Header;

