/**
 * Created by zn on 2018/2/22.
 */
import {Pencli} from './Pencli.js';
import {Sprite} from '../base/sprite.js';
// 上铅笔
export class UpPencil extends Pencli{
    constructor(top){
        const image = Sprite.getImage('pencliUp');
        console.log(image)
        super(image,top);
    }
    draw () {
        this.x = this.top - this.height;
        super.draw();
    }
}