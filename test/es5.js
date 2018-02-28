(function () {
    "use strict";
    var Animal = function (name,age) {
        this.name = name;
        this.age = age;
        this.say = function () {
            console.log(this.name + '--' + this.age)
        }
    }
    Animal.prototype.say = function () {
        console.log(this.name + '--' + this.age)
    }
    var cat =new Animal('小花','5');
    cat.say()
    // cat.sex()

    // 寄生组合继承
    // call apply 调用一个对象的一个方法，用另一个对象替换当前对象
    Animal.prototype.say.apply(cat);
    var prames = {
        name: '小黄',
        age: 12
    }
    Animal.prototype.say.apply(prames);

})();