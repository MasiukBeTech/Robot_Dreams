import React from "react";
import './Title.css'

export class Title extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
    }

    sendData() {
        console.log('sending....');
    }


    render() {
        return (
        <div className="my-color">
            <h1>Hello {this.props.name}</h1>
            {this.props.children}
            <header>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                    Ea fugit odit sapiente laborum nulla soluta, omnis repellendus neque illo sequi. 
                    Corporis iste suscipit totam aspernatur minima ratione accusamus laboriosam ullam.
                </p>
                <button onClick={this.sendData}>Send</button>
            </header>
        </div>
      );
    }
}


