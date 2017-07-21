define([], function roll() {
    return (array, [direction]) => {
        if (direction === "right") {
            array.unshift(array[array.length - 1])
            return array.slice(0, array.length - 1);
        }
        else if (direction === "left") {
            array.push(array[0]);
            return array.slice(1);
        }

        throw new Error("Invalid value.");
    }
});