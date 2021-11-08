import store from "@/packages/store";
import {throttle} from 'lodash'

function resize() {
    store.commit("app/updateBrowser");
}

window.onload = function () {
    window.addEventListener("resize", throttle(resize, 1000));
    resize();
};