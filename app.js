// traversing the dom

//  const btns = document.querySelectorAll('.question-btn');

//  btns.forEach( function(btn) {
//      btn.addEventListener('click', function(e) {
//          const question = e.currentTarget.parentElement.parentElement
//          question.classList.toggle('show-text');
//     })
//  }); 



// using selectors inside the element

const questions = document.querySelectorAll('.question');
// console.log(questions)

questions.forEach(function(orange){
    // console.log(orange);
    const btn = orange.querySelector('.question-btn');
    // console.log(btn);
    btn.addEventListener('click', function() {

        questions.forEach(function(bananas){
            if(bananas !== orange){
                bananas.classList.remove('show-text')
            }
        });
        orange.classList.toggle('show-text');
    })
});