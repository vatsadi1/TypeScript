function greet(name:string): string {
return `hello ${name}`
}
console.log(greet("Aditya"))
console.log(greet(10))

/**
 * ts p process hota hai (data type checker as well as code consistency means jo data type bola gaya hai wo hi pure code me use ho )---> process k baat v atlast ye js hi milta hai isliyea 
 * output --> hello Aditya 
 *            hello 42 but error 
 */