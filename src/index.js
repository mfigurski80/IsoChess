import '../styles/index.scss';
require('@danzen/createjs')
import IsoRect from './IsoRect'
import Point from './Point'

const canvas = document.getElementById('app')
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const stage = new createjs.Stage(canvas)

const rect1 = IsoRect(Point(100, 100), 60, '#555', '#EEE')
const rect2 = IsoRect(Point(160, 130), 60, '#EEE', '#555')
const rect3 = IsoRect(Point(220, 160), 60, '#555', '#EEE')

stage.addChild(rect1)
stage.addChild(rect2)
stage.addChild(rect3)

stage.update()