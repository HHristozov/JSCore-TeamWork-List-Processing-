
define([], function deleted(index) {
    return (arr) => {
        if(!Number.isNaN(index) && value !== '' && Number(index) >= 0 && Number(index) <= arr.length ) {
            arr.splice(index, 1);
        }
        return arr;
    }
});
