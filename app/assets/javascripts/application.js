//= require rails-ujs
//= require jquery
//= require materialize
//= require turbolinks
//= require_tree .

$(document).on('turbolinks:load', function() {
  $('.sidenav').sidenav();
  $('.parallax').parallax();
  $('.component').hide().fadeIn(2000);
  $('.scrollspy').scrollSpy({scrollOffset: 50});
  $('#contactForm').submit(function(e){
      var backgroundColor = "orange"
      var toastHTML = '<span>Estamos enviando seu e-mail.</span>';
      M.toast({html: toastHTML, classes: backgroundColor});
      e.preventDefault();
      $.ajax({
          url:'/contacts',
          type:'post',
          data:$('#contactForm').serialize(),
          success:function(){
            var backgroundColor = "green"
            var toastHTML = '<span>E-mail enviado com successo !</span>';
            M.toast({html: toastHTML, classes: backgroundColor});
          },
          error:function() {
            var backgroundColor = "red"
            var toastHTML = '<span>Erro ao enviar e-mail, tente novamente mais tarde!</span>';
            M.toast({html: toastHTML, classes: backgroundColor});
          }
      });
  });
});

document.onreadystatechange = function() {
  if (document.readyState !== "complete") {
    document.querySelector(".page-wrapper").style.visibility = "hidden";
    document.querySelector(".loader").style.visibility = "visible";
  } else {
    document.querySelector(".loader").style.display = "none";
    document.querySelector(".page-wrapper").style.visibility = "visible";
  }
};
