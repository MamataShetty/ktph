$(document).ready(function () {
  $(".clickable-row").click(function () {
    window.location = $(this).data("href");
  });

  // $.getJSON("/js/topics.json",
  //   function (data) {
  //     var student = '';

  //     // ITERATING THROUGH OBJECTS
  //     $.each(data, function (key, value) {

  //       //CONSTRUCTION OF ROWS HAVING
  //       // DATA FROM JSON OBJECT
  //       student += '<tr>';
  //       student += '<td>' +
  //         value.Participants + '</td>';

  //       student += '<td>' +
  //         value.Contact + '</td>';

  //       student += '<td>' +
  //         value.Email + '</td>';

  //       student += '<td>' +
  //         value.Staff + '</td>';

  //       student += '<td>' +
  //         value.Group + '</td>';
  //       student += '<td>' +
  //         <div classname="dota" + '</td>';

  //       student += '</tr>';
  //     });

  //     console.log(student, "ii")

  //     //INSERTING ROWS INTO TABLE 
  //     $('#table').append(student);
  //   });
});