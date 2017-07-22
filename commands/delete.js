define([], function deleteItem() {
    return (array, [index]) => {
        if (index < 0 || index >= array.length || Number.isNaN(+index)) {
            throw new Error(`Invalid index.`);
        }
        array.splice(Number(index), 1);
        return array;
    }
});
