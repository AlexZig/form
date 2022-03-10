let submitBclock = document.querySelector('#submitBclock');
let submitWrapper = document.querySelector('#submitWrapper');
submitBclock.onload= function(){
  submitWrapper.classList.add('submit-erapper_active');
  setTimeout(() => {
    document.forms.one.reset();
    submitWrapper.classList.remove('submit-erapper_active');
  }, 3000);
}
