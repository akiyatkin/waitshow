import CallFrame from "/vendor/akiyatkin/waitshow/CallFrame.js"
const cls = cls => document.getElementsByClassName(cls)
const check = () => {
    const height = window.innerHeight
    for (const el of cls('waitshow')) {
        const utop = el.getBoundingClientRect().top; //расстояние от верхней границы браузера до верхней границы блока
        const ubot = el.getBoundingClientRect().bottom; //расстояние от нижней границы браузера до нижней границы блока
        const dtop = utop - height
        const dbot = ubot - height
        if (ubot < -100) continue //!Низ el выше верхней границы
        if (dtop < 100) {   //!Верх el выше нижней границы
            el.classList.add('show')
        }
    }
}
const Waitshow = () => CallFrame(check, 400)
window.Waitshow = Waitshow
export { Waitshow }