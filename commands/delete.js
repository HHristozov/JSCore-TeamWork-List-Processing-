define([], function deleteItem() {
    return (array, [index]) => {
        if (index < 0 || index >= array.length) {
            throw new Error(`Invalid index.`);
        }
	else if (Number.isNaN(+index)) {
            throw new Error(`Invalid command parameters.`);
        }

        array.splice(Number(index), 1);
        return array;
    }
});
