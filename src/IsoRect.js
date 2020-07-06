require('@danzen/createjs')

/**
 * Function that returns isometric rectangle shape for easeljs drawing
 * 
 * @param {{x:int, y:int}} center - Centerpoint of the iso rectangle
 * @param {int} scale - Scale of the rectangle (usually 25)     
 * @param {str} color - CSS color of the rectangle
 */
const IsoRect = (center, scale, color) => {
    const r = new createjs.Shape()
    r.graphics
        .beginFill(color)
        .moveTo(center.x, center.y + .5 * scale)
        .lineTo(center.x + 1 * scale, center.y)
        .lineTo(center.x, center.y - .5 * scale)
        .lineTo(center.x - 1 * scale, center.y)
        .lineTo(center.x, center.y + .5 * scale)
        .endStroke()
    return r
}

export default IsoRect