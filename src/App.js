import React, {Component} from "react";
import Dog from "./Dog";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Dog/>
                <div>I am another Div, not in dog component.</div>
            </div>
        );
    }
}

export default App;
