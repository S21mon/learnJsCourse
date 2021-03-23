// Напишите "if", аналогичный "switch"

'use strict';

// с использованием 'switch'
switch (browser) {
    case 'Edge':
        alert( "You've got the Edge!" );
        break;

    case 'Chrome':
    case 'Firefox':
    case 'Safari':
    case 'Opera':
        alert( 'Okay we support these browsers too' );
        break;

    default:
        alert( 'We hope that this page looks ok!' );
}

// с использованием 'if'
if (browser === 'Edge') {
    alert( "You've got the Edge!" );
} else if (browser === 'Chrome' ||
           browser === 'Firefox' ||
           browser === 'Safari' ||
           browser === 'Opera') {
    alert( 'Okay we support these browsers too' );
} else {
    alert( 'We hope that this page looks ok!' );
}