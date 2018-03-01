/**
 * Created by zn on 2018/2/22.
 */
import {Pencli} from './Pencli.js';
import {Sprite} from '../base/sprite.js';
// 下铅笔
export class DownPencil extends Pencli{
    constructor (top) {
        const image = Sprite.getImage('pencilDown');
        super(image,top);
    }
    draw () {
        let gep = window.innerHeight/5;
        this.y = gep + this.top;
        super.draw();
    }
}