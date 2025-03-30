export const keys = {
    left: false,
    right: false,
    up: false,
    down: false
};

export function readInput(keys) {
    document.onkeydown = function(e) {
        if (e.key === "ArrowLeft") keys.left = true;
        if (e.key === "ArrowRight") keys.right = true;
        if (e.key === "ArrowUp") keys.up = true;
        if (e.key === "ArrowDown") keys.down = true;
    };

    document.onkeyup = function(e) {
        if (e.key === "ArrowLeft") keys.left = false;
        if (e.key === "ArrowRight") keys.right = false;
        if (e.key === "ArrowUp") keys.up = false;
        if (e.key === "ArrowDown") keys.down = false;
    };
}