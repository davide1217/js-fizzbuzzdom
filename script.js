

const btn = document.querySelector('button')
const container = document.getElementById('container')

btn.addEventListener('click', function() {
  btn.classList.add('d-none')

  for(let i = 1; i < 101; i++){

    if(i % 3 === 0 && i % 5 === 0){
      const boxEl = document.createElement('div');
      boxEl.className = 'box yellow';
      boxEl.append('FizzBuzz');
      container.append(boxEl);
    } else if(i % 5 === 0){
      const boxEl = document.createElement('div');
      boxEl.className = 'box green';
      boxEl.append('Buzz');
      container.append(boxEl);
    } else if(i % 3 === 0){
      const boxEl = document.createElement('div');
      boxEl.className = 'box red';
      boxEl.append('Fizz');
      container.append(boxEl);
    } else{
      const boxEl = document.createElement('div');
      boxEl.className = 'box';
      boxEl.append(i);
      container.append(boxEl);
    }
  }

})