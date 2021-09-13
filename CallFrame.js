/*
    Повторно передаать функцию для запуска нужно в тойже переменной. 
    Некоторые запуски будут пропускаться "схлопываться". С Timeout и в animationFrame
*/

let CallFrame = (callback, t = 200) => {
    const counter = (CallFrame.store.get(callback) || 0) + 1
    CallFrame.store.set(callback, counter)
    if (counter > 1) return
    requestAnimationFrame(callback) //Запускаем сразу в следующем animationframe
    setTimeout(() => requestAnimationFrame(() => {
        const counter = CallFrame.store.get(callback)
        if (counter > 1) callback()
        CallFrame.store.delete(callback)
    }), t) //А повторно можно будет как минимум через t + animationframe
}
CallFrame.store = new Map()

export default CallFrame
export {CallFrame}