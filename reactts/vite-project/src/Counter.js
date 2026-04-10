import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { useState } from "react";
export function Counter() {
    const [count, setCount] = useState(0);
    return (_jsxs("div", { children: [_jsxs("p", { children: ["Cups Order :", count] }), _jsx("button", { onClick: () => setCount((c) => c + 1), children: "order one more" })] }));
}
//# sourceMappingURL=Counter.js.map