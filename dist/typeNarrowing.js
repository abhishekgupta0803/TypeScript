// function getChai(Kind : Number | String){
//     if(typeof Kind === "string"){
//         return `Making ${Kind} chai ..`;
//     }
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
export {};
//# sourceMappingURL=typeNarrowing.js.map