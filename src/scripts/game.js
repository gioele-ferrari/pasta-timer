import { player } from "./player.js";
import { createProjectile } from "./projectile.js";
import { readInput, keys } from "./input.js";
import { is_colliding } from "./utils.js";
import { sub_countdown } from "./timer.js";

document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("game-canvas");
    const ctx = canvas.getContext("2d");

    const game_box = {
        x: 0,
        y: 0,
        width: canvas.width,
        height: canvas.height
    };

    const projectiles = [];

    readInput(keys);

    function update() {
        player.update(keys, game_box);

        for (let i = projectiles.length - 1; i >= 0; i--) {
            projectiles[i].update();
            if (is_colliding(projectiles[i], game_box) || is_colliding(player, projectiles[i])) {
                projectiles.splice(i, 1);

                sub_countdown(5000);
            }
        }
    }

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.strokeStyle = "black";
        ctx.strokeRect(game_box.x, game_box.y, game_box.width, game_box.height);

        player.draw(ctx);

        for (let p of projectiles) {
            p.draw(ctx);
        }
    }

    function gameLoop() {
        update();
        draw();
        requestAnimationFrame(gameLoop);
    }

    setInterval(() => {
        const x = Math.random() * (game_box.width - 32) + 32;
        const p = createProjectile(x - 32, 0, 0, 3);
        projectiles.push(p);
    }, 600);

    gameLoop();
});
