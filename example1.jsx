// https://facebook.github.io/react/docs/interactivity-and-dynamic-uis.html
var HelloWorld = React.createClass({
    constructor(){
        super();
        this.state = {
            inputname: "",
            date: new Date()
        };
    },

    handleChange() {
        
        this.setState({
            inputname: "",
            date: new Date()
        });
    },

    render: function() {
        return (
            <p>
                Hello, <input type="text" placeholder="Your name here" value={this.state.inputname} />!
                It is {this.state.date.toTimeString()}
                <input type="text" onchange={this.handleChange} />
            </p>
        );
    }
});


setInterval(function(){
    var str = $(".yourName").val();
    
    ReactDOM.render(
        <HelloWorld date={new Date()} inputname={str}/>,
        $("#example")[0]
        //document.getElementById('example')
    );
}, 500);