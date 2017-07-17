(function () { 
    if (!mstrmojo.plugins.Cube) {
        mstrmojo.plugins.Cube = {};
    }

    mstrmojo.requiresCls(
        "mstrmojo.vi.models.CustomVisDropZones",
        "mstrmojo.array"
    );

    mstrmojo.plugins.Cube.CubeDropZones = mstrmojo.declare(
        mstrmojo.vi.models.CustomVisDropZones,
        null,
        {
            scriptClass: "mstrmojo.plugins.Cube.CubeDropZones",
            cssClass: "cubedropzones",
            getCustomDropZones: function getCustomDropZones(){
 },
            shouldAllowObjectsInDropZone: function shouldAllowObjectsInDropZone(zone, dragObjects, idx, edge, context) {
 
 
 
 
 
  
 
 








},
            getActionsForObjectsDropped: function getActionsForObjectsDropped(zone, droppedObjects, idx, replaceObject, extras) {
 
 
 
 
 
  
 
 








},
            getActionsForObjectsRemoved: function getActionsForObjectsRemoved(zone, objects) { 
  
  
  
  
  
   
  
 








},
            getDropZoneContextMenuItems: function getDropZoneContextMenuItems(cfg, zone, object, el) {
 
 
 
 
 
  
 
 








}
})}());
//@ sourceURL=CubeDropZones.js