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
    else{
        
    }
})
 // show the result on page. window?? 
 result.querySelector('span').textContent =`${score}%`
 result.classList.remove('d-none')
 // result.classlist.remove('d-none') will go in and remove the class list.
 // it is set to none so removing will make the divs appear.
})