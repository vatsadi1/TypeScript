let drink = "chai"

let cup = Math.random() > 0.5 ? 10 : "5"  // this is inference the ts compliler automatically understand the the types

/**
 * majorly two types of error shown
 * 1. --> syntex error example -- let let chai = "namem"
 * 2. --> type error example -- let channelname = "chaiorcode"  -- let channelname = 1234 
 * 
 */


// these are annotations that is needed to mannully tells the compailer about the types
let chaiFlavour:string = "masala chai"

let age:number
let win:boolean

chaiFlavour = "Giner tea"

chaiFlavour = 32  // type error because this expect for a string by you 