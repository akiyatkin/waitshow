import CallFrame from "/vendor/akiyatkin/waitshow/CallFrame.js"

let cls = cls => document.getElementsByClassName(cls)

let check = () => {
    let height = window.innerHeight
    for (let el of cls('waitshow')) {
        let utop = el.getBoundingClientRect().top; //расстояние от верхней границы браузера до верхней границы блока
        let ubot = el.getBoundingClientRect().bottom; //расстояние от нижней границы браузера до нижней границы блока
        let dtop = utop - height
        let dbot = ubot - height

        //начинаем с плюса, когда проехали минус значения
        //u,d - граница браузера
        //top, bot - граница блока
        //console.log('Недоехали на',{utop, ubot, dtop, dbot})
        // if (utop < 0) { //Верх скрылся сверху
        // }
        // if (ubot < 0) { //!Низ выше верхней границы
        // }
        // if (dtop < 0) { //Верх выше нижней границы
        // }
        // if (dbot < 0) { //!Низ показался снизу
        // }

        if (ubot < -100) {//!Низ el выше верхней границы
            if (!document.body.classList.contains('modal-open')) {
                //el.classList.remove('show')
                continue
            }
        }
        if (dtop < 100) {//!Верх el выше нижней границы
            el.classList.add('show')
            //el.classList.remove('waitshow')
            continue
        }
        // if (el.offsetHeight) {
        //     el.classList.remove('show')
        // } else {
        //     el.classList.add('show')
        // }
    }
}
let Waitshow = () => CallFrame(check, 200)
window.Waitshow = Waitshow
export { Waitshow }