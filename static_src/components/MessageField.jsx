import React from 'react';
import Message from './Message';


export default class MessageField extends React.Component {
    state = {
        messages:['mes1', 'mes2', 'mes3']
    };
    // componentDidMount(){
    //     const newMessage = [...this.state.messages,'newmess'];
    //     setTimeout(()=>this.setState({messages:newMessage}),1000)
    // }
    componentDidUpdate(prevProps,prevState){
       console.log(prevProps);
       console.log(this.state);

        if ( this.state.messages.length % 2 ===0) {
            const newMessage = [...this.state.messages,'ответ на сообщение'];
            setTimeout(()=>this.setState({messages:newMessage}),1000)

        }



    }
    handleClick = () => {
        const newMessage = [...this.state.messages,'мое сообщение'];
        this.setState({messages:newMessage})
    }
    render() {
        const messages = this.state.messages.map((message,index) =>
        <Message key={index} text={message}/>
        );
        return(
        <div>
            { messages }
            <button onClick={this.handleClick}>отпрвить сообщение</button>
        </div>
        )
    }

}