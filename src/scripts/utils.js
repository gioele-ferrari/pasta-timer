export const CANVAS_WIDTH = 200;
export const CANVAS_HEIGHT = 200;

export function check_collision(source, destination) {
    if (source.x < 0) source.x = 0;
    if (source.x + source.size > destination.width)
        source.x = destination.width - source.size;

    if (source.y < 0) source.y = 0;
    if (source.y + source.size > destination.height)
        source.y = destination.height - source.size;

    return false;
}

export function is_colliding(source, destination) {
    return (
        source.x < destination.x + destination.size &&
        source.x + source.size > destination.x &&
        source.y < destination.y + destination.size &&
        source.y + source.size > destination.y
    );
}