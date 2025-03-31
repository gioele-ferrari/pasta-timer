import { check_collision } from "./utils.js";
import { CANVAS_WIDTH, CANVAS_HEIGHT } from "./utils.js";

export const player = {
    x: CANVAS_WIDTH / 2 - 16,
    y: CANVAS_HEIGHT / 2 - 16,
    size: 32,
    speed: 5,
    image: new Image(),
    
    update(keys, game_box) {
        if(keys.right) { player.x += player.speed; }
        if(keys.left) { player.x -= player.speed; }
        if(keys.up) { player.y -= player.speed; }
        if(keys.down) { player.y += player.speed; }

        check_collision(player, game_box);
    },
    draw(ctx) {
        ctx.drawImage(this.image, this.x, this.y, this.size, this.size);
    }
};
player.image.src = "src/images/heart.png";