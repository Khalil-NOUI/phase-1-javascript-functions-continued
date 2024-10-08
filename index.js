function saturdayFun(event = "roller-skate") {
    return `This Saturday, I want to ${event}!`
}

const mondayWork = function(event = "go to the office"){
    return `This Monday, I will ${event}.`
}

function wrapAdjective(flair = "*"){
    return function inner(adj = "special") {
        return `You are ${flair}${adj}${flair}!`
    }
}