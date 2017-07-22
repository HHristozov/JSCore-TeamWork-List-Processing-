define([], function append() {
	return (array, [value]) => {
		if (typeof value !== 'string' || value === '') {
			throw new Error("Invalid value.");
		}
		else {
			array.push(value);
			return array;
		}
	}
});





