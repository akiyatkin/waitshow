import { CDN } from '/vendor/akiyatkin/load/CDN.js'
import { Waitshow } from '/vendor/akiyatkin/waitshow/Waitshow.js'
import { Event } from "/vendor/infrajs/event/Event.js"
import { DOM } from '/vendor/akiyatkin/load/DOM.js'

let tag = tag => document.getElementsByTagName(tag)

DOM().then(() => {
    window.addEventListener('scroll', Waitshow)
    Event.handler('Controller.onshow', () => {
        for (let img of tag('img')) {
            let path = [], el = img
            while (el && el.parentElement) path.push(el = el.parentElement)
            let ar = path.filter(el => el.tagName == 'HEADER')
            if (ar.length) continue //Для картинок в шапке ничего не добавляем
            img.classList.add('waitshow')
        }
        Waitshow()
    })
    CDN.css('waitshow', '/vendor/akiyatkin/waitshow/style.css')
})