function hello() {
    console.log("Hello!!!" + this)
}


const oleg = {
    name: "Oleg",
    age: "25",
    sayHello: hello,
    sayHelloWindow: hello.bind(document),
    logInfo: function(job, phone) {
        console.group(`${this.name} info:`)
        console.log(`Name -> ${this.name}`)
        console.log(`Age -> ${this.age}`)
        console.log(`Job -> ${job}`)
        console.log(`Phone -> ${phone}`)
        console.groupEnd()
    }
}

const lena = {
    name: "Elena",
    age: "33"
}

oleg.logInfo.bind(lena, "Designer", "667788")()
oleg.logInfo.call(lena, "Designer", "667788")
oleg.logInfo.apply(lena, ["Designer", "667788"])

let arr = [22, 45, 56, 34, 78, 12]
Array.prototype.multBy = function (n) {
    return this.map(function (i) {
        return i * n
    })
}

console.log(arr.multBy(2))