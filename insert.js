define([], function insert() {
    return (array, [index, value]) => {
        array.splice(+index, 0, value);
        return array;
    }
});