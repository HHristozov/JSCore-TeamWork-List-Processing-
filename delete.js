
define([], function deleted() {
    return (array, [index]) => {
            array.splice(Number(index), 1);
        return array;
    }
});
