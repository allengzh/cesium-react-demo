import  React, { Component } from 'react';
import { Tabs } from 'antd';
import City from '../routes/city';
import Floor from '../routes/floor';
import Spheremap from '../routes/spheremap';
import Heatmap from '../routes/heatmap';
import Car from '../routes/car';
import MapImage from '../routes/map-image';
import MapVector from '../routes/map-vector';
import BuildModuleUrl from 'cesium/Core/buildModuleUrl';
import './App.less';
import 'cesium/Widgets/widgets.css';

BuildModuleUrl.setBaseUrl('./');

const TabPane = Tabs.TabPane;

function callback(key) {
  console.log(key);
}

class App extends Component {
  render() {
    return (
      <Tabs defaultActiveKey="1" onChange={callback} className="tab">
        <TabPane tab="天地图全球影像" key="1">
          <MapImage />
        </TabPane>
        <TabPane tab="天地图全球矢量" key="2">
          <MapVector />
        </TabPane>
        <TabPane tab="城市" key="3">
          <City />
        </TabPane>
        <TabPane tab="楼宇" key="4">
          <Floor />
        </TabPane>
        <TabPane tab="球形图" key="5">
          <Spheremap />
        </TabPane>
        <TabPane tab="热力图" key="6">
          <Heatmap />
        </TabPane>
        <TabPane tab="车流量" key="7">
          <Car />
        </TabPane>
      </Tabs>
    );
  }
}

export default App;
