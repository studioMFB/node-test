import * as shell from 'shelljs';

// copy all the views
shell.cp('-R', './src/client/views', './dist');