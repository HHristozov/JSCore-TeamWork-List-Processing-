define([], function append(value) {
    return (arr) => {
        if(typeof value === string || value !== '' ) {
            arr.push(value);
        }
        return arr;
    }
});
