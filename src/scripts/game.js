document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("game-canvas");
    const ctx = canvas.getContext("2d");

    const game_box = {
        x: 0,
        y: 0,
        width: canvas.width,
        height: canvas.height
    };
    
    const player = {
        x: game_box.width / 2 - 32,
        y: game_box.height / 2 - 32,
        size: 32,
        speed: 5,
        image: new Image()
    };
    
    player.image.src = "src/images/heart.png";

    const keys = {
        left: false,
        right: false,
        up: false,
        down: false
    };
    
    document.onkeydown = function(e) {
        switch(e.key) {
            case "ArrowLeft":
                keys.left = true;
                break;
            case "ArrowRight":
                keys.right = true;
                break;
            case "ArrowUp":
                keys.up = true;
                break;
            case "ArrowDown":
                keys.down = true;
                break;
        }
    };
    
    document.onkeyup = function(e) {
        switch(e.key) {
            case "ArrowLeft":
                keys.left = false;
                break;
            case "ArrowRight":
                keys.right = false;
                break;
            case "ArrowUp":
                keys.up = false;
                break;
            case "ArrowDown":
                keys.down = false;
                break;
        }
    };    
    

    function update() {
        if(keys.right) { player.x += player.speed; }
        if(keys.left) { player.x -= player.speed; }
        if(keys.up) { player.y -= player.speed; }
        if(keys.down) { player.y += player.speed; }
        
        if (player.x < 0) {
            player.x = 0;
        }
        if (player.x + player.size > game_box.width) {
            player.x = game_box.width - player.size;
        }
        
        if (player.y < 0) {
            player.y = 0;
        }
        if (player.y + player.size > game_box.height) {
            player.y = game_box.height - player.size;
        }
    }
    
    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    
        ctx.strokeStyle = "black";
        ctx.strokeRect(game_box.x, game_box.y, game_box.width, game_box.height);
    
        ctx.drawImage(player.image, player.x, player.y, player.size, player.size);
    }
    
    function gameLoop() {
        update();
        draw();
        requestAnimationFrame(gameLoop);
    }
    
    gameLoop();
});
