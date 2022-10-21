/**
 * Callback Hell
 */

// setTimeout(function() {
//     console.log('Chamando callback...')
//     setTimeout(function() {
//         console.log('Chamando callback...')
//         setTimeout(function() {
//             console.log('Chamando callback...')
//         }, 2000);
//     }, 2000);
// }, 2000);

function waitFor(time = 2000) {
  return new Promise(function (resolve) {
    setTimeout(() => {
      console.log("Executando promise...");
      resolve();
    }, time);
  });
}

waitFor(3000)
    .then(waitFor)
    .then(waitFor)
    .then(waitFor);
