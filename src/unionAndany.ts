// union in TS

let subs: number | string = 10 

let apiRequiest:"Pending" | "Success" | "error" = "Pending"

apiRequiest = "done"  // type error because this is not one of the three types that we have defined

apiRequiest = "Success"  // this is valid because this is one of the three types that we have defined\


let airLineSeat: 'aisle' | 'window' | 'middle' = 'middle'

airLineSeat = "aisle"

// Any in TS

const orders = ['12','20','30','40']

// this is any means types not matters used where the type is not sured 
let currentorder;

for(let order of orders){
    if(order == "28"){
        currentorder = order
    }
currentorder = 11

}

console.log(currentorder)

