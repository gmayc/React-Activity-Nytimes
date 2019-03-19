import React, { Component } from 'react'

class InputForm extends Component {
  constructor (props) {
    super(props);
    this.state = {
      checked: false
    }
  }


  handleCheck = (e) => {
    let flag = ''
    if(!this.state.checked) {
      flag = true
    } else {
      flag = false
    }
    this.setState({
      checked: flag
    })
  }

  onChange(e) {
    console.log(e)
  }

  render() {
    return (
      <div className='input-container'>
      <div className="hide-label" onClick={() => this.handleCheck()}>
          <div className="label"></div>
      </div>
      <input type="checkbox" id="form-hide" checked={this.state.checked} onChange={this.onChange}/>
      <h3 className="main-header">Make A Post</h3>
      <div className="hide">
        <form action="" autoComplete="off">
          <div className="wrap" >
            <label htmlFor="title-input" className="title">
              <input type="text" id="title-input" placeholder="&nbsp;"/>
              <span id="title-label">Title</span>
              <hr id="border-title"/>
            </label>
          </div>
          <div className="wrap">
            <label htmlFor="dscr-box" className="dsc">
              <textarea id="dscr-box" placeholder="&nbsp;"></textarea>
              <span id="dscr-label">Description</span>
              <hr id="border-dscr"/>
            </label>
          </div>
          <div className="wrap">
            <select className="input-dropdown">
              <option defaultValue>Type</option>
              <option value="LIFESTYLE">LIFESTYLE</option>
              <option value="TRAVEL">TRAVEL</option>
            </select>
          </div>
          <div className="wrap">
            <input type="submit" className="submit"/>
          </div>
        </form>
      </div>
      </div>
    )
  }
}

export default InputForm
