document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("game-canvas");
    const ctx = canvas.getContext("2d");
    let player_size = 32;

    const box = {
        x: 0,
        y: 0,
        width: canvas.width,
        height: canvas.height
    };
    
    const player = {
        x: box.width / 2 - player_size,
        y: box.height / 2 - player_size,
        size: player_size,
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
        if (player.x + player.size > box.width) {
            player.x = box.width - player.size;
        }
        
        if (player.y < 0) {
            player.y = 0;
        }
        if (player.y + player.size > box.height) {
            player.y = box.height - player.size;
        }
    }
    
    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    
        ctx.strokeStyle = "black";
        ctx.strokeRect(box.x, box.y, box.width, box.height);
    
        ctx.drawImage(player.image, player.x, player.y, player.size, player.size);
    }
    
    function gameLoop() {
        update();
        draw();
        requestAnimationFrame(gameLoop);
    }
    
    gameLoop();
});
