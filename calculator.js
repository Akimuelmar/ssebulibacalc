
const screen = document.getElementById('screen');
const buttons = document.querySelectorAll('button');
let expression = '';
let result = 0;
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const value = button.textContent;
        switch (value) {
            case 'C':
                expression = '';
                screen.value = '';
                break;
                case 'DEL':
                    expression = expression.slice(0, -1);
                    screen.value = expression;
                    break;
                    case '=':
                        try {
                            result = eval(expression);
                            screen.value = result;
                            expression = result.toString();
                        } catch (error) {
                            screen.value = 'Error';
                            expression = '';
                        }
                        break;
                        default:
                            expression += value;
                            screen.value = expression;
                            break;
                        }
                    })
                });