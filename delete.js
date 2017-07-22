
define([], function deleted() {
    return (array, [index]) => {
            array.splice(index, 1);
        return array;
    }
});
