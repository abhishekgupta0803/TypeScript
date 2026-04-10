import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import './App.css';
import { ChaiCard } from './components/ChaiCards';
import { Counter } from './Counter';
import ChaiList from './components/ChaiList';
import { OrderForm } from './components/OrderForm.tsx';
import { Card } from './components/Card.tsx';
const menu = [
    { id: 1, name: "Message", price: 25 },
    { id: 2, name: "ginger", price: 50 },
    { id: 3, name: "Lemon", price: 60 },
];
function App() {
    return (_jsxs(_Fragment, { children: [_jsx(ChaiCard, { name: "Hello", price: 1000, isSpecial: true }), _jsx(ChaiCard, { name: "ChaiorCode", price: 3000, isSpecial: true }), _jsx("div", { children: _jsx(Counter, {}) }), _jsx("div", { children: _jsx(ChaiList, { items: menu }) }), _jsx("div", { children: _jsx(OrderForm, { onSubmit: (order) => {
                        console.log("Placed ", order.name, order.cups);
                    } }) }), _jsx("div", { children: _jsx(Card, { tittle: "chai aur code", footer: _jsx("button", { children: "order Now" }) }) })] }));
}
export default App;
//# sourceMappingURL=App.js.map