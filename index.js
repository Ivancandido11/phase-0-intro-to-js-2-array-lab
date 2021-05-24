const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name){
    return cats.push(name)
}

function destructivelyPrependCat(name){
    return cats.unshift(name)
}

function destructivelyRemoveLastCat(){
    return cats.splice(-1, 1)
}

function destructivelyRemoveFirstCat(){
    return cats.splice(0, 1)
}

function appendCat(name){
    const newCats = [...cats, name]
    return newCats
}

function prependCat(name){
    const newCats = [name, ...cats]
    return newCats
}
function removeLastCat(){
    const newCats = cats.slice(0, 2)
    return newCats
}

function removeFirstCat(){
    const newCats = cats.slice(1)
    return newCats
}