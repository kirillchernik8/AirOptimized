import React, {Component} from 'react'
import Slider from "react-slick";
import CarouselList from './CarouselList.jsx'

class Carousel extends Component {
  constructor(props) {
    super(props)
  }
  render() {

    if(window.innerWidth > 800){
    var settings = {
      dots: true,
      slidesToShow: 3,
      centerMode: true,
      centerPadding:0
    }
  } else {
    var settings = {
      dots: true,
      slidesToShow: 1,
      centerMode: true,
      centerPadding:0
    }
  }
    return (
         <div className="container">
          <Slider {...settings}>
            {this.props.recommendations.map(rec => {
              return <CarouselList openModal={this.props.openModal} recommendation={rec}/>
            })}
          </Slider>
        </div>
    )
  }
}

export default Carousel