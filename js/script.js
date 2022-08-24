let newPath = window.location.search.slice(1, -5);


setTimeout(() => {
  document.querySelector('.loading').style.display = 'none';
  document.querySelector('.wrapper .buy_btn').style.display = 'block';
}, 3000);

let goBack = document.querySelector('.buy_btn a');
let link = window.location.protocol + "//" + window.location.host + "/demo/nike-ar/" + newPath +'.html' + window.location.search
goBack.setAttribute('href',  link);