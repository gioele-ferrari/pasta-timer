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


    const projectile = {
        x: game_box.width - 64,
        y: game_box.height - 64,
        size: 32,
        speed: 5,
        image: new Image() 
    }

    projectile.image.src = "src/images/annoying-dog-1.gif";

    const keys = {
        left: false,
        right: false,
        up: false,
        down: false
    };
    
    const projectiles = [];

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

        check_collision(player, game_box);
    }
    
    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    
        ctx.strokeStyle = "black";

        ctx.strokeRect(game_box.x, game_box.y, game_box.width, game_box.height);
        ctx.drawImage(player.image, player.x, player.y, player.size, player.size);
        
        for (let p of projectiles) {
            ctx.drawImage(p.image, p.x, p.y, p.size, p.size);
        }
    }
    
    function gameLoop() {
        update();
        draw();
        requestAnimationFrame(gameLoop);
    }

    function check_collision(source, destination) {
        if (source.x < 0) source.x = 0;
        if (source.x + source.size > destination.width)
            source.x = destination.width - source.size;
    
        if (source.y < 0) source.y = 0;
        if (source.y + source.size > destination.height)
            source.y = destination.height - source.size;

        return false;
    }

    function is_colliding(source, destination) {
        return (
            source.x < destination.x + destination.size &&
            source.x + source.size > destination.x &&
            source.y < destination.y + destination.size &&
            source.y + source.size > destination.y
        );
    }
    
    gameLoop();
});
