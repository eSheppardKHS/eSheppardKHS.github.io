$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid

    //toggleGrid();

    // TODO 2 - Create Platforms

    createPlatform (200,640,240,40);

    createPlatform (400,510,380,40);

    createPlatform (700,560,300,40);

    createPlatform (700,697,300,20);
    
    createPlatform (400,160,300,40);

    createPlatform (1000,560,40,157);

    createPlatform (1040,677,320,40);
    
    createPlatform (1100,550,190,40);

    createPlatform (1360,0 ,40,717);

    createPlatform (1100,450,40,100);

    createPlatform (1100,410,270,40);

    createPlatform (850,410,270,40);

    createPlatform (1200,280,270,40);

    createPlatform (0,710,1400,30);

    createPlatform (0,0,40,740);

    createPlatform (0,0,1400,40);

    createPlatform (800,160,300,40);

    createPlatform (700,0,40,420);

    createPlatform (400,380,250,40);

    createPlatform (200,250,110,40);

    createPlatform (700,520,80,40);

    // TODO 3 - Create Collectables

    createCollectable("grace", 960, 620, 0.5, 0.7);

    createCollectable("grace", 1145, 500, 0.5, 0.7);

    createCollectable("grace", 1320, 350, 0.5, 0.7);

    createCollectable("grace", 900, 100, 0.5, 0.7);

    createCollectable("grace", 200, 170, 0.5, 0.7);

    createCollectable("grace", 650, 100, 0.5, 0.7);

    // TODO 4 - Create Cannons

    createCannon("right", 670, 2700);

    createCannon("right", 490, 3000);

    createCannon("right", 200, 2500);

    createCannon("top", 850, 3000);
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
