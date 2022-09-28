import React from 'react';
import { connect } from 'react-redux';
import 'antd/dist/antd.css';
import { Carousel } from 'antd'; 

const HomeComponent = ()=>{

    
const contentStyle = {
    height: '250px',
    color: '#fff',
    lineHeight: '250px',
    textAlign: 'center',
    background: '#364d79'          
  }; 

    return (
      <>
        <Carousel autoplay>
          <div>
          <img src='./yoga.ico' width='100%' height='250px'/>        
          </div>
          <div>
            <h3 style={contentStyle}>2</h3>
          </div>
          <div>
            <h3 style={contentStyle}>3</h3>
          </div>
          <div>
            <h3 style={contentStyle}>4</h3>
          </div>
        </Carousel>

        
      </>
    );
}

const mapStateToProps = state => ({
  
  });

  const mapDispatchToProps = {
  };
export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(HomeComponent);