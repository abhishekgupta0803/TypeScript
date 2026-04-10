// let apirequest :"Pending" | "error" | "success" = "success";
// apirequest = "error";
// console.log(apirequest)
// let a : Number | String;
// a = "Abhishek"
// console.log(a);
let orders = ['10', '20', '30', '40'];
let currOrder;
for (let order of orders) {
    if (order === '30') {
        currOrder = order;
        break;
    }
}
console.log(currOrder);
export {};
//# sourceMappingURL=unionAndany.js.map