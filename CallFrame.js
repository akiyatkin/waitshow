/*
    Повторно передаать функцию для запуска нужно в тойже переменной. 
    Некоторые запуски будут пропускаться "схлопываться". С Timeout и в animationFrame
*/
let CallFrame = (callback, t = 200) => {
    if (CallFrame.store.has(callback)) return;
    CallFrame.store.add(callback)
    setTimeout(() => requestAnimationFrame(() => {
        callback()
        CallFrame.store.delete(callback)
    }), t)
}
CallFrame.store = new Set()

export default CallFrame
export {CallFrame}