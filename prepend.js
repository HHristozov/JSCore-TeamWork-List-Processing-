define([], function prepend(value) {
    return (arr) => {
        if(typeof value === string || value !== '' ) {
            
            arr.unshift(value);
        }
        return arr;
    }
});
