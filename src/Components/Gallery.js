import React, { Component } from 'react'
console.log('heeey');

import bar1 from '../pics/IMG_3097.JPG';
import bar2 from '../pics/IMG_7257.JPG';

import bar4 from '../pics/IMG_5029.JPG';
import bar5 from '../pics/IMG_1746 (2).JPG';
import bar6 from '../pics/IMG_1747 (2).JPG';
import bar7 from '../pics/IMG_4903 2.JPG';
import bar8 from '../pics/IMG_5040.JPG';
import bar9 from '../pics/IMG_5679.JPG';
import bar10 from '../pics/IMG_6051.JPG';
import bar11 from '../pics/IMG_3526.JPG';
import bar12 from '../pics/IMG_3502.JPG';
import bar13 from '../pics/IMG_5956.JPG';
import bar14 from '../pics/IMG_6562.JPG';





import './Gallery.css';

class Gallery extends Component {
    state = {
        index: 0,
        picList: [bar1, bar4, bar5, bar6, bar7,bar8,bar10,bar11,bar14,bar2 ,bar9, bar12, bar13]
        }
        onClickNext= () => {
            if (this.state.index + 1 === this.state.picList.length) {
              this.setState({
                index: 0
              })
            } else {
              this.setState({
                index: this.state.index + 1
              })
            }
          }

          onClickPrevious= () => {
            if (this.state.index - 1 === -1 ){
              this.setState({
                index: this.state.picList.length - 1
              })
            } else {
              this.setState({
                index: this.state.index - 1
              })
            }
          } 
  
    render(){
    return (
        <section id="Gallery">
        <div className= 'style'>
        <h1 className="h1">My Photography</h1>
        <img className='images'  src={this.state.picList[this.state.index]}/>
        <br />
        <button className= 'button' onClick={this.onClickPrevious}> Previous </button>
        <button className= 'button' onClick={this.onClickNext}> Next </button>
      </div>
      </section>
    );
    
}
}


export default Gallery
