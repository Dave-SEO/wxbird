/**
 * Created by zn on 2018/2/22.
 */
// 初始化整个游戏的精灵，作为游戏开始的入口
import {ResourceLoader} from "./js/base/resourceLoader.js";
import {Director} from  './js/director.js';
import {BackGround} from './js/runtime/background.js';
import {DataStore} from './js/base/dataStore.js';
import {Land} from './js/runtime/land.js';
import {Pencli} from './js/runtime/Pencli.js';
export class Main {
    constructor () {
        this.canvas = document.getElementById('game_canvas');
        this.ctx = this.canvas.getContext('2d');
        this.dataStore = DataStore.getInstance();
        this.director = Director.getInstance();
        const  loader = ResourceLoader.create();
        loader.onLoaded(map => this.onResourceFirstLoaded(map));
    }
    onResourceFirstLoaded (map) {
        this.dataStore.ctx = this.ctx;
        this.dataStore.res = map;
        this.init();
    }
    init(){
        this.dataStore.put('background',BackGround).put('Land',Land);
        this.director.run();
    }
}

