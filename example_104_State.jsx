var ReactText = React.createClass({
    getInitialState: function() {
        return {
            text: "", 
            length: 0
        };
    },
    handleChange: function(event) {
        var inputTxt = this.refs.myTextInput.value;
        var lengthOfTxt = inputTxt.length;
        this.setState({
            text: inputTxt, 
            length: lengthOfTxt
        }); 
    },
    render: function() {
        var spanStyle = {
            background: 'lightcyan'
        };
        return <div>
            <span style={spanStyle}>{this.state.text}</span><br />
            <span style={spanStyle}>{this.state.length} characters.</span><br />
            <input type="text" ref="myTextInput" onChange={this.handleChange} />
        </div>;
    }
});

ReactDOM.render(
        <ReactText />,
        $("#example")[0]
);