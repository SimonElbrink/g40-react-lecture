import React from 'react';

function Header(){
    return(
        <div>
            <Welcome message="Hello Group 40"/>
        </div>
    )
}
function Welcome(props){
    return(
        <div>
            {props.message}
        </div>
    )
}

function Content(){
    return(
        <div>
        Content
        </div>
)
}


function Footer(){
    return(
        <div>
            Footer
        </div>
    );
}

function App() {
    return (
        <div>
            <Header/>
            <Content/>
            <Footer/>
        </div>
    );
}

export default App;