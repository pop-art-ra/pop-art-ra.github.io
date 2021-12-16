//decalrar las variables de nuestra app. 
var scene, camera, renderer, clock, deltaTime, totalTime;

var arToolkitSource, arToolkitContext;

var mesh1;

var markerRoot1;
var markerRoot2;
var markerRoot3;
var markerRoot4;
var markerRoot5;

init(); // llamado de la funcion principal que se encarga de hacer casi  todo en la app
animate();

function init() {
    ////////////////////////////////////////////////////////
    //THREE Setup
    ///////////////////////////////////////////////////////
    // crear nuestra escena -  OBJETO.
    scene = new THREE.Scene(); //  crea un objeto escena.

    //creamos luces 
    let ambientLight = new THREE.AmbientLight(0xcccccc, 0.5); //creo las luz
    scene.add(ambientLight); //agrego la luz a mi escena. 

    camera = new THREE.Camera(); //creo objeto camara 
    scene.add(camera); // agrego camara a la escena

    //permite mostrar las cosas en 3d en la pantalla
    renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true
    });

    renderer.setClearColor(new THREE.Color('lightgrey'), 0);
    //renderer.setSize(640, 480); //esto es resolucion VGA
    renderer.setSize(1920,1080);
    renderer.domElement.style.position = 'absolute';
    renderer.domElement.style.top = '0px';
    renderer.domElement.style.left = '0px';
    document.body.appendChild(renderer.domElement);


    //tiempo
    clock = new THREE.Clock();
    deltaTime = 0;
    totalTime = 0;

    ////////////////////////////////////////////////////////
    //AR Setup
    ///////////////////////////////////////////////////////

    arToolkitSource = new THREEx.ArToolkitSource({
        sourceType: 'webcam',
    });

    function onResize()
	{
		arToolkitSource.onResize()	
		arToolkitSource.copySizeTo(renderer.domElement)	
		if ( arToolkitContext.arController !== null )
		{
			arToolkitSource.copySizeTo(arToolkitContext.arController.canvas)	
		}	
	}


    arToolkitSource.init(function onReady() {
        onResize();
    });

    //agregamos un event listener
    window.addEventListener('resize', function () { onResize() });

    //Setup ArKitContext
    arToolkitContext = new THREEx.ArToolkitContext({
        cameraParametersUrl: 'data/camera_para.dat',
        detectionMode: 'mono'
    });

    arToolkitContext.init(function onCompleted() {
        camera.projectionMatrix.copy(arToolkitContext.getProjectionMatrix());
    });

    /////////////////////////////////////////////////
    //Marker setup
    /////////////////////////////////////////////////

    //Magda
    markerRoot1 = new THREE.Group(); //creamos un grupo de objetos
    scene.add(markerRoot1); // agregamos el grupo a la escena. 

    let markerControl = new THREEx.ArMarkerControls(arToolkitContext, markerRoot1, {

        type: 'pattern', patternUrl: 'data/pattern-The kiss.patt',
    });

    //Balbontin
    markerRoot2 = new THREE.Group(); //creamos un grupo de objetos
    scene.add(markerRoot2); // agregamos el grupo a la escena. 

    let markerControl2 = new THREEx.ArMarkerControls(arToolkitContext, markerRoot2, {

        type: 'pattern', patternUrl: 'data/pattern-Oh Jeff.patt',
    });

    //Arbol
    markerRoot3 = new THREE.Group(); //creamos un grupo de objetos
    scene.add(markerRoot3); // agregamos el grupo a la escena.  

    let markerControl3 = new THREEx.ArMarkerControls(arToolkitContext, markerRoot3, {

        type: 'pattern', patternUrl: 'data/pattern-Thinking of him.patt',
    });

    //Silvana
    markerRoot4 = new THREE.Group(); //creamos un grupo de objetos
    scene.add(markerRoot4); // agregamos el grupo a la escena.  

    let markerControl4 = new THREEx.ArMarkerControls(arToolkitContext, markerRoot4, {

        type: 'pattern', patternUrl: 'data/pattern-Guau girl.patt',
    });

    //Ina
    markerRoot5 = new THREE.Group(); //creamos un grupo de objetos
    scene.add(markerRoot5); // agregamos el grupo a la escena.  

    let markerControl5 = new THREEx.ArMarkerControls(arToolkitContext, markerRoot5, {

        type: 'pattern', patternUrl: 'data/pattern-Girl in the mirror.patt',
    });

    // let geo1 = new THREE.CubeGeometry(1, 1, 1);
    // let material1 = new THREE.MeshNormalMaterial({
    //     transparent: true,
    //     opacity: 0.5,
    //     side: THREE.DoubleSide
    // });

    // mesh1 = new THREE.Mesh(geo1, material1);
    // mesh1.position.y = 0.75;
    //markerRoot1.add(mesh1); //esta linea agrega el cubo a mi grupo y finalmente se puede ver en la escena 

    //como crear una imagen asociada a un marcador 

   
    

    //Geometria
    let geometry = new THREE.PlaneGeometry( 3, 2); //creo la geometria plano 
    let geometry2 = new THREE.PlaneGeometry( 3, 2); //creo la geometria plano
    let geometry3 = new THREE.PlaneGeometry( 3, 2); //creo la geometria plano

    let geometry4 = new THREE.PlaneGeometry( 4, 3); //creo la geometria plano 
    let geometry5 = new THREE.PlaneGeometry( 4, 3); //creo la geometria plano
    let geometry6 = new THREE.PlaneGeometry( 4, 3); //creo la geometria plano

    let geometry7 = new THREE.PlaneGeometry( 3, 2); //creo la geometria plano 
    let geometry8 = new THREE.PlaneGeometry( 3, 2); //creo la geometria plano
    let geometry9 = new THREE.PlaneGeometry( 3, 2); //creo la geometria plano

    let geometry10 = new THREE.PlaneGeometry( 5, 5); //creo la geometria plano 
    let geometry11 = new THREE.PlaneGeometry( 5, 5); //creo la geometria plano
    let geometry12 = new THREE.PlaneGeometry( 5, 5); //creo la geometria plano
    let geometry13 = new THREE.PlaneGeometry( 5, 5); //creo la geometria plano 

    let geometry14 = new THREE.PlaneGeometry( 3, 2); //creo la geometria plano
    let geometry15 = new THREE.PlaneGeometry( 3, 2); //creo la geometria plano
    let geometry16 = new THREE.PlaneGeometry( 3, 2); //creo la geometria plano


    //Textura
    let loader =  new THREE.TextureLoader(); ///cargador de texturas

    let texture1 =  loader.load('./textures/popm1.png'); //cargo una textura
    let texture2 =  loader.load('./textures/popm2.png'); //cargo una textura
    let texture3 =  loader.load('./textures/popm3.png'); //cargo una textura

    let texture4 =  loader.load('./textures/jeff/1 D.png'); //cargo una textura
    let texture5 =  loader.load('./textures/jeff/2 D.png'); //cargo una textura
    let texture6 =  loader.load('./textures/jeff/3 D.png'); //cargo una textura

    let texture7 =  loader.load('./textures/Thinking of him/Fondo.png'); //cargo una textura
    let texture8 =  loader.load('./textures/Thinking of him/Hombre.png'); //cargo una textura
    let texture9 =  loader.load('./textures/Thinking of him/Mujer.png'); //cargo una textura

    let texture10 =  loader.load('./textures/arto/1.png'); //cargo una textura
    let texture11 =  loader.load('./textures/arto/2.png'); //cargo una textura
    let texture12 =  loader.load('./textures/arto/3.png'); //cargo una textura
    let texture13 =  loader.load('./textures/arto/4.png'); //cargo una textura

    let texture14 =  loader.load('./textures/mirror/1.png'); //cargo una textura
    let texture15 =  loader.load('./textures/mirror/2.png'); //cargo una textura
    let texture16 =  loader.load('./textures/mirror/3.png'); //cargo una textura
  
    let material1 =  new THREE.MeshBasicMaterial(
        {
           
            map: texture1,
            transparent:true 
          
        }
    ); //creo un material basico, y aplico la textura. 
    let material2 =  new THREE.MeshBasicMaterial(
        {
           
            map: texture2,
            transparent: true
        
      
        }
    ); //creo un material basico, y aplico la textura.
    let material3 =  new THREE.MeshBasicMaterial(
        {
           
            map: texture3,
            transparent: true,


        
      
        }
    ); //creo un material basico, y aplico la textura.
    let material4 =  new THREE.MeshBasicMaterial(
        {
           
            map: texture4,
            transparent: true,


        
      
        }
    ); //creo un material basico, y aplico la textura.
    let material5 =  new THREE.MeshBasicMaterial(
        {
           
            map: texture5,
            transparent: true,


        
      
        }
    ); //creo un material basico, y aplico la textura.
    let material6 =  new THREE.MeshBasicMaterial(
        {
           
            map: texture6,
            transparent: true,


        
      
        }
    ); //creo un material basico, y aplico la textura.
    let material7 =  new THREE.MeshBasicMaterial(
        {
           
            map: texture7,
            transparent: true,


        
      
        }
    ); //creo un material basico, y aplico la textura.
    let material8 =  new THREE.MeshBasicMaterial(
        {
           
            map: texture8,
            transparent: true,


        
      
        }
    ); //creo un material basico, y aplico la textura.
    let material9 =  new THREE.MeshBasicMaterial(
        {
           
            map: texture9,
            transparent: true,


        
      
        }
    ); //creo un material basico, y aplico la textura.
    let material10 =  new THREE.MeshBasicMaterial(
        {
           
            map: texture10,
            transparent: true,


        
      
        }
    ); //creo un material basico, y aplico la textura.
    let material11 =  new THREE.MeshBasicMaterial(
        {
           
            map: texture11,
            transparent: true,


        
      
        }
    ); //creo un material basico, y aplico la textura.
    let material12 =  new THREE.MeshBasicMaterial(
        {
           
            map: texture12,
            transparent: true,


        
      
        }
    ); //creo un material basico, y aplico la textura.
    let material13 =  new THREE.MeshBasicMaterial(
        {
           
            map: texture13,
            transparent: true,


        
      
        }
    ); //creo un material basico, y aplico la textura.
    let material14 =  new THREE.MeshBasicMaterial(
        {
           
            map: texture14,
            transparent: true,


        
      
        }
    ); //creo un material basico, y aplico la textura.
    let material15 =  new THREE.MeshBasicMaterial(
        {
           
            map: texture15,
            transparent: true,


        
      
        }
    ); //creo un material basico, y aplico la textura.
    let material16 =  new THREE.MeshBasicMaterial(
        {
           
            map: texture16,
            transparent: true,


        
      
        }
    );
//Magda
    let plane1 = new THREE.Mesh( geometry, material1 ); //a partir de la geometria creada y el material creado , genero un mesh 
    let plane2 = new THREE.Mesh( geometry2, material2 ); //a partir de la geometria creada y el material creado , genero un mesh 
    let plane3 = new THREE.Mesh( geometry3, material3 );
    plane1.rotation.x = -Math.PI/2;
    markerRoot1.add(plane1);
    plane2.rotation.x = -Math.PI/2;
    plane2.position.y = Math.PI/4;
    plane3.rotation.x = -Math.PI/2;
    plane3.position.y = Math.PI/2;
    markerRoot1.add(plane2);
    markerRoot1.add(plane3);


//Balbontin
    let plane4 = new THREE.Mesh( geometry4, material4 ); //a partir de la geometria creada y el material creado , genero un mesh 
    let plane5 = new THREE.Mesh( geometry5, material5 ); //a partir de la geometria creada y el material creado , genero un mesh 
    let plane6 = new THREE.Mesh( geometry6, material6 );
    plane4.rotation.x = -Math.PI/2;
    markerRoot2.add(plane4);
    plane5.rotation.x = -Math.PI/2;
    plane5.position.y = Math.PI/4;
    plane6.rotation.x = -Math.PI/2;
    plane6.position.y = Math.PI/2;
    markerRoot2.add(plane5);
    markerRoot2.add(plane6);


//Arbol
    let plane7 = new THREE.Mesh( geometry7, material7 ); //a partir de la geometria creada y el material creado , genero un mesh 
    let plane8 = new THREE.Mesh( geometry8, material8 ); //a partir de la geometria creada y el material creado , genero un mesh 
    let plane9 = new THREE.Mesh( geometry9, material9 );
    plane7.rotation.x = -Math.PI/2;
    markerRoot3.add(plane7);
    plane8.rotation.x = -Math.PI/2;
    plane8.position.y = Math.PI/4;
    plane9.rotation.x = -Math.PI/2;
    plane9.position.y = Math.PI/2;
    markerRoot3.add(plane8);
    markerRoot3.add(plane9);


//Silvana
    let plane10 = new THREE.Mesh( geometry10, material10 ); //a partir de la geometria creada y el material creado , genero un mesh 
    let plane11 = new THREE.Mesh( geometry11, material11 ); //a partir de la geometria creada y el material creado , genero un mesh 
    let plane12 = new THREE.Mesh( geometry12, material12 );
    let plane13 = new THREE.Mesh( geometry13, material13 );
    plane10.rotation.x = -Math.PI/2;
    markerRoot4.add(plane10);
    plane11.rotation.x = -Math.PI/2;
    plane11.position.y = Math.PI/4;
    plane12.rotation.x = -Math.PI/2;
    plane12.position.y = Math.PI/2;
    plane13.rotation.x = -Math.PI/2;
    plane13.position.y = Math.PI;
    markerRoot4.add(plane11);
    markerRoot4.add(plane12);
    markerRoot4.add(plane13);


 //Ina
    let plane14 = new THREE.Mesh( geometry14, material14 ); //a partir de la geometria creada y el material creado , genero un mesh 
    let plane15 = new THREE.Mesh( geometry15, material15 ); //a partir de la geometria creada y el material creado , genero un mesh 
    let plane16 = new THREE.Mesh( geometry16, material16 );
    plane14.rotation.x = -Math.PI/2;
    markerRoot5.add(plane14);
    plane15.rotation.x = -Math.PI/2;
    plane15.position.y = Math.PI/4;
    plane16.rotation.x = -Math.PI/2;
    plane16.position.y = Math.PI/2;
    markerRoot5.add(plane15);
    markerRoot5.add(plane16);

}

function update() {
    //actualiza contenido de nuestra app AR
    if (arToolkitSource.ready !== false) {
        arToolkitContext.update(arToolkitSource.domElement);
    }
}

function render() {
    renderer.render(scene, camera);
}

function animate() {
    requestAnimationFrame(animate);
    deltaTime = clock.getDelta();
    totalTime += deltaTime; // totalTime =  totalTime + deltaTime 
    update();
    render();
}