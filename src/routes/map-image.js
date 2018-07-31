import React from 'react';

class MapImage extends React.Component {
  componentDidMount() {
    // Create the Cesium Viewer
    this.viewer = new Cesium.Viewer(this.refs.map, {
      animation: false,
      baseLayerPicker: false,
      // fullscreenButton: false,
      geocoder: false,
      homeButton: false,
      infoBox: false,
      sceneModePicker: false,
      selectionIndicator: false,
      timeline: false,
      navigationHelpButton: false,
      navigationInstructionsInitiallyVisible: false,
      automaticallyTrackDataSourceClocks: false,
      imageryProvider: new Cesium.WebMapTileServiceImageryProvider({
        url: "http://t0.tianditu.com/img_w/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=img&tileMatrixSet=w&TileMatrix={TileMatrix}&TileRow={TileRow}&TileCol={TileCol}&style=default&format=tiles",
        layer: "tdtBasicLayer",
        style: "default",
        format: "image/jpeg",
        tileMatrixSetID: "GoogleMapsCompatible",
        show: false
      })
    });
    this.viewer.imageryLayers.addImageryProvider(
      new Cesium.WebMapTileServiceImageryProvider({
        url: "http://t0.tianditu.com/cia_w/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=cia&tileMatrixSet=w&TileMatrix={TileMatrix}&TileRow={TileRow}&TileCol={TileCol}&style=default.jpg",
        layer: "tdtAnnoLayer",
        style: "default",
        format: "image/jpeg",
        tileMatrixSetID: "GoogleMapsCompatible",
        show: false
      })
    );
    this.viewer.scene.debugShowFramesPerSecond = true;
    this.viewer.camera.setView({
      destination : Cesium.Cartesian3.fromDegrees(120.433650,31.361800, 1500.0), // 设置位置
      orientation: {
        heading : Cesium.Math.toRadians(0), // 方向
        pitch : Cesium.Math.toRadians(-90.0),// 倾斜角度
        roll : 0
      }
    });
  }

  componentWillUnmount() {
    this.viewer = null;
  }
  render() {
    return (
      <div className="map-image" ref="map" />
    );
  }
}

export default MapImage;