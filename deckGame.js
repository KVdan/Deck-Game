var deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    createCardPicker: function() {
        var _this = this;
        console.log(`this is ${this}`);
        console.log(`that is ${_this}`);
        console.log(`this.__proto__ is ${this.__proto__}`);
        console.log(`that.__proto__ is ${_this.__proto__}`);
        return function() {
            var pickedCard = Math.ceil(Math.random() * 52);
            var pickedSuit = Math.floor(pickedCard / 13);
            var specCard = "";
            console.log(`this is ${this}`);
            console.log(`that is ${_this}`);
            console.log(`this.__proto__ is ${this.__proto__}`);
            console.log(`that.__proto__ is ${_this.__proto__}`);
            console.log(`card:  ${pickedCard % 13}  of  ${_this.suits[pickedSuit]}`);
            switch (pickedCard) {
                case 1:
                    specCard = "Ace";
                    return { suit: _this.suits[pickedSuit], card: specCard };
                case 11:
                    specCard = "Jack";
                    return { suit: _this.suits[pickedSuit], card: specCard };
                case 12:
                    specCard = "Queen";
                    return { suit: _this.suits[pickedSuit], card: specCard };
                case 13:
                    specCard = "King";
                    return { suit: _this.suits[pickedSuit], card: specCard };
                default:
                    console.log("You have picked a pip card.");
                    return { suit: _this.suits[pickedSuit], card: pickedCard % 13 };
            }
        };
    },
};

// 在class deck上调用createCardPicker
// _this绑定到class deck
let picker = deck.createCardPicker();
picker();