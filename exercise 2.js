// !*! ============ alireza abbasi ================!*!


// ?? ========== exercise 1 : constructor function for food menu ========== ??

function Food(name, type, price, deliveryTime) {
    this.name = name;
    this.type = type;
    this.price = [price, '$'];
    this.deliveryTime = deliveryTime;
    this.totalRate = 0;
    this.comment = [];
    this.isReady = false;
    this.order = function premiumUser(boolean){
        if(boolean) console.log(0.8*this.price[0],this.totalRate)
        else console.log(this.price[0],this.totalRate)
    }
    this.setRate = function calcRate(rateVal){
        if (this.totalRate === 0) this.totalRate = rateVal;
        else this.totalRate = (this.totalRate+rateVal)/2
    }
}


let kabab = new Food('Kabab','traditional',4 ,'30 min')
console.log(kabab)

let chicken = new Food('chicken','traditional','4.5 $','40 min')
console.log(chicken)


// ?? ======= add another function to get comment and rate of customer ======= ??

let rate1 = kabab.setRate(4.5)
let rate2 = kabab.setRate(4)

console.log(kabab)

let rate3 = chicken.setRate(3)
let rate4 = chicken.setate(3.5)

console.log(chicken)


// ?? ======= for a Primary costumer ======= ??

console.log(kabab.order(true))
console.log(chicken.order(false))



// ?? ========== factory function for food menu ========== ??

function food(name, type, price, deliveryTime,order) {
    return {
        name,
        type,
        price,
        deliveryTime,
        totalFoodRate:0,
        comments: [],
        isReady: false,
        order:function premiumUser(True){
            if(True) console.log(0.8*this.price[0],this.totalFoodRate)
            else console.log(this.price[0],this.totalFoodRate)
        },
        setRate:function addRate(rateVal){
            if (this.totalFoodRate===0) this.totalFoodRate=rateVal;
            else this.totalFoodRate=(this.totalFoodRate+rateVal)/2
        }
    }
}


let pizza=food('pizza','fast-food',[45, '$'],`25 min`)
console.log(pizza)


// ?? ======= add another function to get rate of a customer ======= ??

let rateCustomer1=pizza.setRate(4)
let rateCustomer2=pizza.setRate(5)

console.log(pizza.totalFoodRate)

// ?? ======= for a Primary costumer ======= ??

console.log(pizza.order(true))
console.log(pizza.order(false))



// ?? ======= function to recieve a comment from a costumer ======= ??


function addComment(author, text) {
    return{
        author,
        date:new Date(),
        totalRate:0,
        text,
        rate:function SetRate(rateNum) {
            if (this.totalRate === 0) this.totalRate = rateNum;
            else this.totalRate = (this.totalRate + rateNum) / 2
        }
    }

}

// ?? ======= comment from a costumer for pizza & kabab ======= ??

let comment1=addComment('Reza','delicious!')
console.log(comment1)
kabab.comments.push(comment1)
console.log(kabab)

let comment2=addComment('Zahra','nice and yummi!')
pizza.comments.push(comment2)
console.log(pizza)


// ?? ======= add rate & comment from a costumer for pizza ======= ??

let rateComment1=comment2.rate(5)
console.log(comment2.totalRate)
console.log(comment2)
console.log(pizza)




// ?? ========== exercise 2 : copression between two objects ========== ??

function primitiveObj(object1,object2) {
    if((Object.keys(object1).length) !== (Object.keys(object2).length)) {
        return false
    }
    for (let key in object1)
    {if (object1[key]!==object2[key]) return false
    }
    return true

}


function IsEqual(object1,object2){

    if((Object.keys(object1).length) !== (Object.keys(object2).length)) {
        return false
    }

    for (let key in object1) {
        if (typeof(object1[key])=="object"){
            let para1=object1[key]
            let para2=object2[key]
            if (primitiveObj(para1,para2)===false) return false
        }
        else
        {
            if((object1[key]!==object2[key])) return false
        }

    }
    return true
}

const obj3 = {
    key0: false,
    key1: 'val1',
    key2: 20,
    key3: [0, 1, 2],
    key4: {name: 'mohammad'},
}
const obj4 = {
    key0: false,
    key1: 'val1',
    key2: 20,
    key3: [0, 1, 2],
    key4: {name: 'mohammad'},
}
console.log(IsEqual(obj3,obj4))


function isSame(object1,object2){
    if(object1===object2) return true
    else return false
}

let obj5 = {name: 'Ahmad'}
let obj6 = {name: 'Ahmad'}

console.log(isSame(obj5,obj6))

let obj7 = obj5

console.log(isSame(obj7,obj5))
