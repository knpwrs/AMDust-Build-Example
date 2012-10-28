require(['dust', 'dustc!template.dust', 'domReady!'], function (dust, template) {
  var name = document.getElementById('name');
  var submit = document.getElementById('submit');
  var content = document.getElementById('content');

  var months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];

  submit.addEventListener('click', function (e) {
    var date = new Date();
    dust.render(template, {
      name: name.value,
      hours: date.getHours(),
      minutes: date.getMinutes(),
      seconds: date.getSeconds(),
      month: months[date.getMonth()],
      date: date.getDate(),
      year: date.getFullYear()
    }, function (err, text) {
      content.innerHTML = text;
    });
  });
});