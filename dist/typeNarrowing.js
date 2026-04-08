"use strict";
// function getChai(Kind : Number | String){
//     if(typeof Kind === "string"){
//         return `Making ${Kind} chai ..`;
//     }
Object.defineProperty(exports, "__esModule", { value: true });
function redirectBasedOnRole(role) {
    if (role === "admin") {
        console.log("Redirect to admiin dashboard");
        return;
    }
    if (role === "user") {
        console.log("Redirect to user dashboard");
        return;
    }
    role;
}
//# sourceMappingURL=typeNarrowing.js.map