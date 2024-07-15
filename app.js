function addToBasket(){
    let arr = [];

    return (item) => {
        arr.push(item);
        return arr;
    }
}

const a = addToBasket();

a(1)
a(2)
a(3)
console.log(a(4))