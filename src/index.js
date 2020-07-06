import '../styles/index.scss';
require('@danzen/createjs')
import IsoRect from './IsoRect'
import Point from './Point'

const canvas = document.getElementById('app')
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const stage = new createjs.Stage(canvas)

const rect = IsoRect(Point(100, 100), 25, '#EEE')
stage.addChild(rect);
stage.update()