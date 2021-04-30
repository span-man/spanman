(function (global, factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        module.exports = factory(global, true)
    } else {
        factory(global)
    }
})(typeof window !== "undefined" ? window : this, function (window, noGlobal) {
    let spanman = {
        // 深拷贝
        /**
         * 深拷贝 返回深拷贝对象
         * @param {深拷贝对象} _obj 
         * @returns 
         */
        deepCopy(_obj) {
            return JSON.parse(JSON.stringify(_obj))
        },
        /**
         * 删除数组中某项 返回值是被删的对象数组
         * @param {数组} _arr 
         * @param {将被删除的项} _item 
         */
        remove(_arr, _item) {
            if (_arr.length) {
                let index = _arr.indexOf(_item)
                if (index > -1) {
                    return _arr.splice(index, 1)
                }
            }
        }
    }
    if (typeof noGlobal === "undefined") {
        window.spanman = spanman
    }
    return spanman
})