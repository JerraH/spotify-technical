function sortByStrings(s, t) {
    let newArr = s.split('')
    newArr.sort(function(a, b) {return t.indexOf(a) - t.indexOf(b)})
    console.log(newArr.join(''))
    return newArr.join('');
}

sortByStrings('weather', 'therapyw')
