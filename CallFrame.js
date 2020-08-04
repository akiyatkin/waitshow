/*
    Повторно передаать функцию для запуска нужно в тойже переменной. 
    Некоторые запуски будут пропускаться "схлопываться". С Timeout и в animationFrame
*/
// let CallFrame = (callback, t = 200) => {
//     if (CallFrame.store.has(callback)) return;
//     CallFrame.store.add(callback)
//     setTimeout(() => requestAnimationFrame(() => {
//         callback()
//         CallFrame.store.delete(callback)
//     }), t)
// }

let CallFrame = (callback, t = 200) => {
    if (CallFrame.store.has(callback)) return;
    CallFrame.store.add(callback)
    requestAnimationFrame(callback) //Запускаем сразу в следующем animationframe
    setTimeout(() => requestAnimationFrame(() => {
        CallFrame.store.delete(callback)
    }), t) //А повторно можно будет как минимум через t + animationframe
}

CallFrame.store = new Set()




export default CallFrame
export {CallFrame}