$('.images > img:nth-child(1)').addClass('current')
$('.images > img:nth-child(2)').addClass('leave')
$('.images > img:nth-child(3)').addClass('leave')
let n = 1
setInterval(()=>{
  $(`.images > img:nth-child(${x(n)})`).removeClass('current').addClass('enter')
    .one('transitionend', (e)=>{
      $(e.currentTarget).removeClass('enter').addClass('leave')
    })
  $(`.images > img:nth-child(${x(n+1)})`).removeClass('leave').addClass('current')
  n += 1
},3000)


function x(n){
  if(n>3){
    n = n%3
    if (n===0){
      n =3
    }
  } // n = 1 2 3
  return n
}