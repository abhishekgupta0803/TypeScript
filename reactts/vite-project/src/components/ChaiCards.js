import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export function ChaiCard({ name, price, isSpecial = false }) {
    return (_jsxs("article", { children: [name, isSpecial && _jsx("span", { children: "star" }), _jsx("h1", { children: price })] }));
}
//# sourceMappingURL=ChaiCards.js.map