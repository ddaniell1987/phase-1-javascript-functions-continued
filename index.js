function saturdayFun(funActivity = 'roller-skate') { 
    return `This Saturday, I want to ${funActivity}!`
}
saturdayFun();

function mondayWork(workActivity= 'go to the office') {
    return `This Monday, I will ${workActivity}.`
}
mondayWork();

wrapAdjective('soo beautiful')('to me, cant you see')
function wrapAdjective(sweetSong= '*') {
    return function(adjective= 'special') {
        return `You are ${sweetSong}${adjective}${sweetSong}!`
    }
}