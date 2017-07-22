define([], function append() {
    return (arr, [value]) => {
        if(typeof value === string && value !== '' ) {
            arr.push(value);
        }
        return arr;
    }
});
