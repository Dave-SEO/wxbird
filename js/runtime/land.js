/**
 * Created by zn on 2018/2/22.
 */
// 不断移动的陆地
import {Sprite} from '../base/sprite.js';
import {Director} from '../director.js';
export class Land extends Sprite{
    constructor () {
        const image = Sprite.getImage('land');
        super(image,0,0,image.width,image.height,0,window.innerHeight - image.height,image.width,image.height);
        this.landX = 0;
        this.landSpeed = Director.getInstance().moveSpeed;
    }
    draw() {
        this.landX = this.landX + this.landSpeed;
        if(this.landX > (this.img.width - window.innerWidth)){
            this.landX = 0;
        }
        super.draw(this.img,this.srcX,this.srcY,this.srcW,this.srcH,-this.landX,this.y,this.width,this.height)
    }
}