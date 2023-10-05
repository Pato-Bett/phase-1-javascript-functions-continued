function saturdayFun(activity = 'roller-skate'){
    let activityStatement = 'This Saturday, I want to ' + activity + '!'
    return activityStatement
}
function mondayWork(activity = 'go to the office'){
    let activityStatement = 'This Monday, I will ' + activity + '.'
    return activityStatement
}
function wrapAdjective(wrapper){
    let result = function(adjective){
        return ('You are ' + wrapper + adjective + wrapper + '!')
    }
    return result
}