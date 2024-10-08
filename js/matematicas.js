// Función para abrir el sidebar
document.getElementById("openSidebar").onclick = function() {
    document.getElementById("sidebar").style.width = "250px";
    document.body.style.marginLeft = "250px";
  };
  
  // Función para cerrar el sidebar
  document.getElementById("closeSidebar").onclick = function() {
    document.getElementById("sidebar").style.width = "0";
    document.body.style.marginLeft = "0";
  };
  
  // Inicializar la escena 3D con Three.js
  function init3DScene(canvasId, color) {
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(75, window.innerWidth / 400, 0.1, 1000);
    
    // Enlaza el renderer al canvas
    var renderer = new THREE.WebGLRenderer({ canvas: document.getElementById(canvasId) });
    renderer.setSize(window.innerWidth, 400);
    
    // Crear un cubo 3D que rota
    var geometry = new THREE.BoxGeometry(1, 1, 1);
    var material = new THREE.MeshBasicMaterial({ color: color });
    var cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
  
    // Posicionar la cámara
    camera.position.z = 5;
  
    // Animar el cubo
    var animate = function () {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    };
  
    animate();
  }
  
  // Función para iniciar todas las escenas 3D al cargar la página
  window.onload = function () {
    init3DScene('aritmetica3d', 0x00ff00); // Verde para aritmética
    init3DScene('geometria3d', 0xff0000);  // Rojo para geometría
    init3DScene('fracciones3d', 0x0000ff); // Azul para fracciones
    init3DScene('multiplicacion3d', 0xffff00); // Amarillo para multiplicación
  };
  