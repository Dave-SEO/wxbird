/**
 * Created by zn on 2018/2/22.
 */
// 背景类
import {Sprite} from '../base/sprite.js';
export class BackGround extends Sprite{
    constructor () {
        const image = Sprite.getImage('background');
        super (image,0,0,image.width,image.height,0,0,window.innerWidth,window.innerHeight)
    }
}