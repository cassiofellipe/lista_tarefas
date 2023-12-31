const form = document.getElementById('container');

$(document).ready(function() {
    $('#task-form').submit(function(e) {
      e.preventDefault();

      const taskName = $('#task-name').val();
      if (taskName.trim() !== '') {
        
        const listItem = $('<li></li>').text(taskName);
        listItem.click(function() {
          $(this).toggleClass('completed');
        });
        $('#task-list').append(listItem);
        $('#task-name').val('');
      }
    });
  });