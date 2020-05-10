/*
    Повторно передаать функцию для запуска нужно в тойже переменной. 
    Некоторые запуски будут пропускаться "схлопываться". С Timeout и в animationFrame
*/
let CallFrame = (callback) => {
    if (CallFrame.store.has(callback)) return;
    CallFrame.store.add(callback)
    setTimeout(() => requestAnimationFrame(() => {
        callback()
        CallFrame.store.delete(callback)
    }), 200)
}
CallFrame.store = new Set()

export default CallFrame
export {CallFrame}