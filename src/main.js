const visor = document.getElementById('visor')

let num = '';

let result;



const onClick = (id) => {
  num += id;
  visor.innerHTML = num;
};

const equalSym = () => {
  if (num !== '') {
    result = eval(num)
    num = result
    visor.innerHTML = result
  }
}

const clearVisor = () => {
  visor.innerHTML = '';
  num = '';
  result = '';
}

const convert = () => {
  if (num[0] === '-') {
    num = num.slice(1)
  } else {
    num = '-' + num;
  }
  visor.innerHTML = num
}
