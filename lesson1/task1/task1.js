document.addEventListener('DOMContentLoaded',()=> {
    let form = document.getElementsByTagName('form')[0]


        let res = document.getElementById('res')
        let Tc = document.getElementById('Tc')
        Tc.oninput = function() {
            // document.getElementById('result').innerHTML = input.value;
            let Tf = (9 / 5) * Tc.value + 32
            res.innerText=Tf
          };

})

