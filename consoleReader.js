(function () {
    let commands = {
        reverse: function () {
            theArray.reverse();
            terminal.value += theArray.join(' ') + '\n';
        }
    };
    let theArray = [];
    let initialized = false;

    let terminal = document.getElementById('terminal');
    let input = document.getElementById('console');
    document.getElementById('submit').addEventListener('click', submit);
    input.addEventListener('keypress', (e) => e.code === 'Enter' ? submit(): '' );

    function submit() {
        let commandTokens = input.value.split(' ').filter(e => e !== '');
        console.log('Submitted:'+ commandTokens);
        if(!initialized){
            theArray = commandTokens.slice(0);
            input.value='';
            initialized=true;
            terminal.value += theArray.join(' ') + '\n';
            return;
        }

        try {
            commands[commandTokens[0]](commandTokens.slice(1));
        }catch (err){
            terminal.value+='Error: invalid command';
        } finally{
            input.value='';
        }

    }
})();