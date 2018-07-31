import React from 'react';

class City extends React.Component {
  componentDidMount() {
    // Create the Cesium Viewer
    this.viewer = new Cesium.Viewer(this.refs.map);

    var tileset = this.viewer.scene.primitives.add(new Cesium.Cesium3DTileset({
      url : 'http://localhost:8003/tilesets/TilesetWithTreeBillboards/tileset.json'
    }));
    
    this.viewer.zoomTo(tileset, new Cesium.HeadingPitchRange(0, -0.5, 0));
  }

  componentWillUnmount() {
    this.viewer = null;
  }
  render() {
    return (
      <div className="pt-container">
        <div className="map-image" ref="map" />
      </div>
    );
  }
}

export default City;