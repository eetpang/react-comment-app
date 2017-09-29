import React, { Component } from 'react';
import CommentInput from './CommentInput';
import CommentList from './CommentList';
import Clock from './Clock';

class CommentApp extends Component {
  constructor(){
    super();
    this.state = {
      comments: [
        {username: 'Jerry', content: 'Hello'},
        {username: 'Tomy', content: 'World'},
        {username: 'Lucy', content: 'Good'}
      ],
      isShown: false
    }
  }
  handleIsShown = () => {
    console.log('clicking')
    // this.setState({
    //   isShown: !this.state.isShown
    // })
    this.setState((prevState) => {
      return {isShown: !prevState.isShown}
    })
  }

  handleSubmit = (value) => {
    console.log(value)
    this.state.comments.push(value)
    this.setState({
      comments: this.state.comments
    })
    // this.setState((prevState,props) => {
    //   return {comments: prevState.comments.push(value)};
    // })
  }

  render() {
    return (
            <div>
              {this.state.isShown? <Clock /> : null }
              <button onClick={this.handleIsShown}>{this.state.isShown? 'Hide' : 'Show'} Me</button>
              <CommentInput onSubmit={ this.handleSubmit }/>
              <CommentList comments={ this.state.comments }/>
            </div>
        );
    }
}

export default CommentApp;

