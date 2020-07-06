require('@danzen/createjs')

/**
 * Function that returns isometric rectangle shape for easeljs drawing
 * 
 * @param {{x:int, y:int}} center - Centerpoint of the iso rectangle
 * @param {int} scale - Scale of the rectangle (usually 25)     
 * @param {str} color - CSS color of the rectangle
 */
const IsoRect = (center, scale, fillColor, strokeColor) => {
    const r = new createjs.Shape()
    r.graphics
        .beginFill(fillColor)
        .beginStroke(strokeColor)
        .moveTo(center.x + 1 * scale, center.y)     // right
        .lineTo(center.x + 1 * scale, center.y + .2 * scale)    // bottom right
        .lineTo(center.x, center.y + .7 * scale)                // bottom bottom
        .lineTo(center.x - 1 * scale, center.y + .2 * scale)    // bottom left
        .lineTo(center.x - 1 * scale, center.y)    // left
        .lineTo(center.x, center.y - .5 * scale)    // top
        .lineTo(center.x + 1 * scale, center.y)     // right
        .lineTo(center.x, center.y + .5 * scale)    // bottom
        .lineTo(center.x - 1 * scale, center.y)     // left
        .endStroke()

    // r.graphics
    //     .beginFill(color)
    //     .moveTo(center.x, center.y)
    return r
}

export default IsoRect