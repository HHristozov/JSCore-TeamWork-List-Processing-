define([], function prepend(value) {
    return (arr) => {
        if(typeof value === string || value !== '' ) {
            
            arr.shift(value);
        }
        return arr;
    }
});
