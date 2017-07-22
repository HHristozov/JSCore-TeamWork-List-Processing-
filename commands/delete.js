define([], function deleteItem() {
    return (array, [index]) => {
        if (index < 0 || index >= array.length) {
            throw new Error("Out of range index.");
        }
        array.splice(Number(index), 1);
        return array;
    }
});
