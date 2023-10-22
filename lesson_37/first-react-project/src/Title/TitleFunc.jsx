function TitleFunc(props) {
    console.log(props, 'function');
    let sendData = () => {
        console.log('sending....')
    }
    return(
        <div className="my-color">
            <h1>Hello {props.name}</h1>
            {props.children}
            <header>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                    Ea fugit odit sapiente laborum nulla soluta, omnis repellendus neque illo sequi. 
                    Corporis iste suscipit totam aspernatur minima ratione accusamus laboriosam ullam.
                </p>
                <button onClick={sendData}>Send</button>
            </header>
        </div>
    );
}
export default TitleFunc;