import React, {Component} from 'react';

class Contact extends Component {

    componentDidMount(){
        console.log(this.props);
    }

    render(){
        return(
            <div>
            <h3>This is coming from the Contact Page</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
        </div>
        );
    }
}

export default Contact;