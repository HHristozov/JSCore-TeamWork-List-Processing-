define(['./commands/reverse', './commands/insert', './commands/roll',
    './commands/sort', './commands/append', './commands/prepend',
    './commands/delete'],
    function (reverse, insert, roll, sort, append, prepend, deleteItem) {
        let commands = {
            reverse, insert, roll, sort, append, prepend, delete: deleteItem
        };
        let theArray = [];
        let initialized = false;

        let terminal = document.getElementById('terminal');
        let input = document.getElementById('console');
        document.getElementById('submit').addEventListener('click', submit);
        input.addEventListener('keypress', (e) => e.code === 'Enter' ? submit() : '');

        function submit() {
            let commandTokens = input.value.split(' ').filter(e => e);
            if (!initialized) {
                theArray = commandTokens.slice(0);
                input.value = '';
                initialized = true;
                terminal.value += `${theArray.join(' ')}\n`;
                return;
            }

            let output;
            try {
                theArray = commands[commandTokens.shift()](theArray, commandTokens);
                output = theArray.join(' ');
            } catch (err) {
                if( output = err instanceof TypeError){
			        output = 'Invalid command.'
			        output = `Error: ${output}`;
		        }
		        else if(output = err instanceof RangeError){
			        output = err.message;
		        }
		        else{
			        output = err.message;
      			    output = `Error: ${output}`;
		        }
            } finally {
                terminal.value += `${output}\n`;
                input.value = '';
            }
        }
    });
