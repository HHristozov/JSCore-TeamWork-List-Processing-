define([], function prepend() {
    return (array, [value]) => {
        if(typeof value === string && value !== '' ) {
           
            array.unshift(value);
        }
        return array;
    }
});
