const correctAnswers = [ 'B','B','B','B']
const form = document.querySelector('.quiz-form')
const result = document.querySelector('.result')

form.addEventListener('submit', event => {
    event.preventDefault()
    
    let score = 0; 
    const userAnswers=[form.q1.value, form.q2.value, form.q3.value, form.q4.value]
// check answers
userAnswers.forEach((answer,index)=> {
    if(answer === correctAnswers[index]){
        score += 25; 
    }
});
 // show the result on page. window??
 // scrollTo() takes us to the top of the page it takes a x and a y cordinate (0,0)
 scrollTo(0,0);
  
 
 result.classList.remove('d-none')
 // result.classlist.remove('d-none') will go in and remove the class list.
 // it is set to none so removing will make the divs appear.
 let output = 0; 
 const timer = setInterval(() => {
    result.querySelector('span').textContent =`${output}%`
    if (output === scrore){
        clearInterval(timer)
    } else {
        output++;
    }
 }, 10)
});




// setTimeout(()=> {

// },3000)