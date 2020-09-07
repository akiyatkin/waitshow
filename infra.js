import { CDN } from '/vendor/akiyatkin/load/CDN.js'
import { Waitshow } from '/vendor/akiyatkin/waitshow/Waitshow.js'
import { DOM } from '/vendor/akiyatkin/load/DOM.js'

let tag = tag => document.getElementsByTagName(tag)

window.addEventListener('scroll', Waitshow)

DOM.done('load', () => {
    for (let img of tag('img')) {
        let path = [], el = img
        while (el && el.parentElement) path.push(el = el.parentElement)
        let ar = path.filter(el => ~['HEADER','FOOTER'].indexOf(el.tagName))
        if (ar.length) continue //Для картинок в шапке подвале ничего не добавляем
        img.classList.add('waitshow')
    }
    Waitshow()
})

//CDN.css('waitshow', '/vendor/akiyatkin/waitshow/style.css')