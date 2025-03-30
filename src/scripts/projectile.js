const image = new Image();
image.src = "src/images/annoying-dog-1.gif";

export function createProjectile(x, y, vx, vy, size = 32) {
    return {
        x, y, vx, vy, size, image,
        update() {
            this.x += this.vx;
            this.y += this.vy;
        },
        draw(ctx) {
            ctx.drawImage(this.image, this.x, this.y, this.size, this.size);
        }
    };
}