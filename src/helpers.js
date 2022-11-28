function choice(items) {
    let i = Math.floor(Math.random() * items.length);
    return items[i]
}

function remove(items, item) {
    for (let i = 0; i < items.length; i++) {
        if (items[i] === item) {
            let arr = items;
            arr.splice(i, 1);
            return(arr)
        } 
    }
}


export {choice, remove};




