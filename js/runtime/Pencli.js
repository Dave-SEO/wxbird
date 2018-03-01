/*
* 铅笔基类
* **/
import {Sprite} from '../base/sprite.js';
export class Pencli extends Sprite{
    constructor(image, top) {
        super(image,0,0,image.width,image.height,window.innerWidth,0,image.width,image.height);
        this.top = top;
    }
    draw(){
        this.x = this.x -2;
        super.draw(this.img,0,0,this.img.width,this.img.height,this.x,this.y,
            this.img.width.this.img.height);
    }
}