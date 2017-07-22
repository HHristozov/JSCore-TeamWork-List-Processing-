define([], function prepend() {
	return (array, [value]) => {
		if (typeof value !== 'string' || value === '') {
			throw new Error("Invalid value.");
		}
		else {
			array.unshift(value);
			return array;
		}
	}
});

