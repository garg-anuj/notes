$(function(){
  var btn = $('#btn');
  var inpbox = $('#inpbox');
  var list = $('#list');

  function refresh(notes){
      inpbox.val("");
      let listdata = "";
      notes.forEach(function(note){
        listdata += "<li>" + note.task + "</li>";
      });
      list.html(listdata);
  }

  btn.click(function(){
    $.post("/notes",{task: inpbox.val(), done: false}, refresh);
  })

  $.get('/notes', refresh);
})
