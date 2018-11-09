import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import backButton from '../images/left-arrow.svg';
import './Page1.scss';

class Page1 extends Component {

  closePage =() => {
    this.props.closePage();
  }

  render() {
    return (
      <div className='geovation-page1'>
        <div className='headline'>
          <Button onClick={this.closePage}>
            <img className='buttonback' src={backButton} alt=''/>
          </Button>
          <div className='headtext'>Page 1</div>
        </div>
      </div>
    );
  }
}

export default Page1;
