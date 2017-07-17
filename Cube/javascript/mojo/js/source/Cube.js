(function () { 
    if (!mstrmojo.plugins.Cube) {
        mstrmojo.plugins.Cube = {};
    }

    mstrmojo.requiresCls(
        "mstrmojo.CustomVisBase",
        "mstrmojo.models.template.DataInterface",
        "mstrmojo.vi.models.editors.CustomVisEditorModel"
    );

    mstrmojo.plugins.Cube.Cube = mstrmojo.declare(
        mstrmojo.CustomVisBase,
        null,
        {
            scriptClass: "mstrmojo.plugins.Cube.Cube",
            cssClass: "cube",
            errorMessage: "Either there is not enough data to display the visualization or the visualization configuration is incomplete.",
            errorDetails: "This visualization requires one or more attributes and one metric.",
            externalLibraries: [{url:"https://threejs.org/build/three.min.js"}],
            useRichTooltip: false,
            reuseDOMNode: false,
            plot:function(){
//Pull data from MicroStrategy dataset
var csv = this.dataInterface.getRawData(mstrmojo.models.template.DataInterface.ENUM_RAW_DATA_FORMAT.ROWS_ADV,{hasTitleName:true});

//Set variables to keep track of what datapoint we are rendering
var currentPt = 0;
//Along with the total number of datapoints
var totalPts = csv.length;

//Keep track of the render request so that we can stop/start it as needed
var id;

//Create label to display current datapoint
var x = document.createElement("LABEL");
x.innerHTML = "DataPoint: ";
this.domNode.append(x);


//Create buttons to control playback
var button = document.createElement("button");
button.innerHTML = "play";
this.domNode.append(button);

var pauseButton = document.createElement("button");
pauseButton.innerHTML = "pause";
this.domNode.append(pauseButton);

var restartButton = document.createElement("button");
restartButton.innerHTML = "restart";
this.domNode.append(restartButton);

//Add event handlers for button interaction
button.addEventListener ("click", function() {
  renderer.render(scene, camera);
  render();
});

pauseButton.addEventListener ("click", function() {
  cancelAnimationFrame( id );
  
});

restartButton.addEventListener ("click", function() {
  currentPt = 0;
  renderer.render(scene, camera);
  render();
  
});



//Create 3d Scene, cube, and axis
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, this.width/this.height, 1, 10000);

var renderer = new THREE.WebGLRenderer();
renderer.setSize(this.width, this.height);
this.domNode.appendChild(renderer.domElement);

var geometry = new THREE.BoxGeometry(700, 700, 700, 10, 10, 10);
var material = new THREE.MeshBasicMaterial({color: 0xfffff, wireframe: true});
var cube = new THREE.Mesh(geometry, material);
scene.add(cube);

var axis = new THREE.AxisHelper( 2000 ) ;
scene.add( axis );
camera.position.z = 1000;			



//Render the visual
function render() {
  id = requestAnimationFrame(render);
  x.innerHTML = "DataPoint: " +  currentPt + " : " + totalPts;

 //Convert data to radians
  var toRad = 3.14159/180;
  var roll = csv[currentPt].values[2].rv * toRad ;
  var pitch = csv[currentPt].values[1].rv * toRad;
  var yaw = csv[currentPt].values[0].rv * toRad;

  //Iterate the datapoints
  currentPt++;

  //Rotate the cube and axis based on data
  cube.rotation.x = yaw;
  cube.rotation.y = pitch;
  cube.rotation.z = roll;

  axis.rotation.x = yaw;
  axis.rotation.y = pitch;
  axis.rotation.z = roll;

  if(currentPt <= totalPts){
      renderer.render(scene, camera);
  }
  else{
    cancelAnimationFrame( id );
  }
  
};


render();
            
      }})}());
//@ sourceURL=Cube.js