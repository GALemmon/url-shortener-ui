import React, { Component } from 'react'

class UrlForm extends Component {
  constructor(props) {
    super()
    this.props = props
    this.state = {
      title: '',
      urlToShorten: ''
    }
  }

  handleNameChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.clearInputs()
  }

  clearInputs = () => {
    this.setState({ title: '', urlToShorten: '' })
  }

  render() {
    return (
      <form className='form'>
        <input
          className='title-input'
          type='text'
          placeholder='Title...'
          name='title'
          value={this.state.title}
          onChange={(e) => this.handleNameChange(e)}
        />

        <input
          type='text'
          placeholder='URL to Shorten...'
          name='urlToShorten'
          value={this.state.urlToShorten}
          onChange={(e) => this.handleNameChange(e)}
        />

        <button
          name='submit-button'
          onClick={(e) => {
            this.props.postNewUrl(this.state.urlToShorten, this.state.title)
            this.handleSubmit(e)
          }}
        >
          Shorten Please!
        </button>
      </form>
    )
  }
}

export default UrlForm
