function startup() {
    const viewer = new Cesium.Viewer('earthContainer');

    viewer.imageryLayers.removeAll();
    var googleLayerProvider = new Cesium.UrlTemplateImageryProvider({
        url: "http://www.google.cn/maps/vt?lyrs=s@800&x={x}&y={y}&z={z}",
        tilingScheme: new Cesium.WebMercatorTilingScheme,
        minimumLevel: 1,
        maximumLevel: 20,
        credit: "谷歌影像地图"
    });
    viewer.imageryLayers.addImageryProvider(googleLayerProvider);

    //仅为调试方便 only for Debug
    window.viewer = viewer;
}

startup();