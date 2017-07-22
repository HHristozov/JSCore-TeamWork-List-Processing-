define(['./reverse', './insert', './roll','./sort', './append', './prepend', './delete'], function (reverse, insert, roll, sort, append, prepend, deleted) {
    let commands = {
        reverse, insert, roll, sort,
    };
    let theArray = [];
    let initialized = false;

    let terminal = document.getElementById('terminal');
    let input = document.getElementById('console');
    document.getElementById('submit').addEventListener('click', submit);
    input.addEventListener('keypress', (e) => e.code === 'Enter' ? submit() : '');

    function submit() {
        let commandTokens = input.value.split(' ').filter(e => e !== '');
        if (!initialized) {
            theArray = commandTokens.slice(0);
            input.value = '';
            initialized = true;
            terminal.value += theArray.join(' ') + '\n';
            return;
        }

        try {
            theArray = commands[commandTokens[0]](theArray, commandTokens.slice(1));
            terminal.value += theArray.join(' ') + '\n';
        } catch (err) {
            terminal.value += 'Error: invalid command\n';
        } finally {
            input.value = '';
        }
    }
});
