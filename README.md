# deck-game

## key points

1. `this`

   `this` will points to who calls it.

2. `var`

   `var` is function scoped.

```js
// 在class deck上调用creteCardPicker方法
// 谁调用，this指向谁
let picker = deck.createCardPicker();
VM1092:6 this is [object Object]
VM1092:7 that is [object Object]
VM1092:8 this.__proto__ is [object Object]
VM1092:9 that.__proto__ is [object Object]

// _this绑定的是class deck
// picker内部都可以访问到deck的cards和suits field
// 因为var是function scoped
picker();
VM1092:14 this is [object Window]
VM1092:15 that is [object Object]
VM1092:16 this.__proto__ is [object Window]
VM1092:17 that.__proto__ is [object Object]
VM1092:18 card:  8  of  hearts
VM1092:33 You have picked a pip card.
{suit: "hearts", card: 8}

// 创建一个新的函数picker
// 该函数与deck的createCardPicker方法长得一样
// 但_this绑定的是window
let picker = deck.createCardPicker;

picker();
VM1092:6 this is [object Window]
VM1092:7 that is [object Window]
VM1092:8 this.__proto__ is [object Window]
VM1092:9 that.__proto__ is [object Window]
ƒ () {
                var pickedCard = Math.ceil(Math.random() * 52);
                var pickedSuit = Math.floor(pickedCard / 13);
                var specCard = "";
                console.log(`this…`)
    // ...
}
// 执行picker函数两次
picker()();
VM1092:6 this is [object Window]
VM1092:7 that is [object Window]
VM1092:8 this.__proto__ is [object Window]
VM1092:9 that.__proto__ is [object Window]
VM1092:14 this is [object Window]
VM1092:15 that is [object Window]
VM1092:16 this.__proto__ is [object Window]
VM1092:17 that.__proto__ is [object Window]
// Uncaught TypeError: Cannot read property '1' of undefined
// _this.suits is undefined
// 因为_this绑定的是window
```
