import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CommentInput extends Component {
  constructor(){
    super();
    this.state = {
      username: '',
      content: ''
    }
  }

  componentDidMount(){
    this.input.focus()
  }

  handleUsernameChange = (e) =>{
    this.setState({
      username: e.target.value
    })
  }

  handleContentChange = (e) =>{
    this.setState({
      content: e.target.value
    })
  }

  handleSubmit = (e) => {
    if (this.props.onSubmit) {
      console.log("button clicked")
      if (this.state.username && this.state.content) {
        this.props.onSubmit({
          username: this.state.username,
          content: this.state.content
        })}
      else {
        window.alert('Please enter user name and content')
      }
    }
    this.setState({ content: '' })
  }

  render() {
    return (
      <div className='comment-input'>
        <div className='comment-field'>
          <span className='comment-field-name'>用户名：</span>
          <div className='comment-field-input'>
            <input
              value={this.state.username}
              onChange={this.handleUsernameChange} />
          </div>
        </div>
        <div className='comment-field'>
          <span className='comment-field-name'>评论内容：</span>
          <div className='comment-field-input'>
            <textarea ref={(target) => this.input = target}
              value={this.state.content}
              onChange={this.handleContentChange} />
          </div>
        </div>
        <div className='comment-field-button'>
          <button onClick={this.handleSubmit}>
            发布
          </button>
        </div>
      </div>
    );
  }
}

CommentInput.propTypes = {
  onSubmit: PropTypes.func.isRequired
}
export default CommentInput;
