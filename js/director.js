/**
 * Created by zn on 2018/2/22.
 */
// 导演类，控制游戏的逻辑
import {DataStore} from './base/dataStore.js';
export class Director {
    static getInstance () {
        if (!this.instance) {
            this.instance = new Director();
        }
        return this.instance;
    }
    constructor () {
        this.dataStore = DataStore.getInstance();
        this.moveSpeed = 2;
    }

    run () {
        this.dataStore.get('background').draw();
        this.dataStore.get('Land').draw();
       requestAnimationFrame(() => this.run());
    }
}