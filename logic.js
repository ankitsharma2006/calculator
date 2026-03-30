function display(x){
        document.querySelector('.result').textContent += x;
        if(x === 'Clear')        {
          document.querySelector('.result').textContent = '';
        }
        if(x === '='){
          try{
            document.querySelector('.result').textContent = eval(document.querySelector('.result').textContent.slice(0, -1));
          } catch(e){
            document.querySelector('.result').textContent = 'Error';
          }
        }
      }