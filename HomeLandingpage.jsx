import React from 'react';
import { connect } from 'react-redux';
import { Tabs } from 'antd';
import 'antd/dist/antd.css';

import { setIncrement } from "../../store";
import HomeComponent from '../HomeComponent/HomeComponent';

function HomeLandingpage ({
    setIncrement
}) {
  const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}
    return (
      <div>
        <button onClick={setIncrement}>Click</button>
        <h1><a id="logo" href="/">
          <img alt="logo" src="./yoga.ico" height={40}width={40} />Yoga by Nayana Murthy</a></h1>
        <Tabs defaultActiveKey="1" onChange={callback}>
          <TabPane tab="Home" key="1">
            <HomeComponent />
          </TabPane>
          <TabPane tab="Book your classes" key="2">
            Content of Book your classes
          </TabPane>
          <TabPane tab="Customised classes" key="3">
            Content of Customised classes
          </TabPane>
          <TabPane tab="DIY Videos" key="4">
            Content of DIY Videos
          </TabPane>
        </Tabs>
      </div>
    );
};

const mapStateToProps = state => ({
    increment: state.increment,
  
  });
  const mapDispatchToProps = {
    setIncrement
  };
export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(HomeLandingpage);