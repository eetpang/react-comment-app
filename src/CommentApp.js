import React, { Component } from 'react';
import CommentInput from './CommentInput';
import CommentList from './CommentList';
import Clock from './Clock';

class CommentApp extends Component {
  constructor(){
    super();
    this.state = {
      comments:[],
      isShown: false
    }
  }
  componentWillMount () {
    this._loadComments()
  }

  _saveComments (comments) {
    localStorage.setItem('comments', JSON.stringify(comments))
  }

  _loadComments () {
    let comments = localStorage.getItem('comments')
    if (comments) {
      comments = JSON.parse(comments)
      this.setState({ comments })
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

  handleSubmit = (comment) => {
    console.log(comment)
    this.state.comments.push(comment)
    this.setState({
      comments: this.state.comments
    })
    this._saveComments(this.state.comments)
    // this.setState((prevState,props) => {
    //   return {comments: prevState.comments.push(value)};
    // })
  }

  handleClearComments = () => {
    localStorage.setItem('comments',[])
    window.location.reload()
  }

  handleDeleteComment = (index)=> {
    const comments = this.state.comments
    comments.splice(index, 1)
    this.setState({ comments })
    this._saveComments(comments)
  }

  render() {
    return (
            <div>
              {this.state.isShown? <Clock /> : null }
              <button onClick={this.handleIsShown}>{this.state.isShown? 'Hide' : 'Show'} Me</button>
              <button onClick={this.handleClearComments}>Clear Comments</button>
              <CommentInput onSubmit={ this.handleSubmit }/>
              <CommentList onDeleteComment={this.handleDeleteComment} comments={ this.state.comments }/>
            </div>
        );
    }
}

export default CommentApp;

