define([], function prepend() {
    return (array, [value]) => {    
            array.unshift(value);
        return array;
    }
});
