$(function(){


  // Примитивный запрос на сервер
  var $container = $('#output');
  var $textField = $('#toServerText');

  $.ajax({
    type: "GET", //Стоит по умолчанию
    url: "https://api.cognitive.microsoft.com/bing/v5.0/images/search",
    // В случае успешнной передачи
    success: function(getData) {
      console.log('success', getData);
      // Перебираем полученные данные из объекта методом "each"
      $.each(getData, function(key, value){
        $container.append('Изображение:' + value.name + ', Текст:' + value.text);
      });
    },
    // Если код выше не сработал
    error: function() {
      alert('error');
    }
  });

  // Обработчик вешает отправку данных на сервер (API) по клику кнопки
  $('#toServerButton').on('click', function() {
    var toServer = {
      name: $textField.val()
    };

    $.ajax({
      type: 'POST', // Устанавливаем метод
      url: "https://api.cognitive.microsoft.com/bing/v5.0/images/search",
      data: toServer, // Отправляет введенные данные на сервер
      // В случае успешнной передачи
      success: function(postData){
        console.log('success', postData);
        // Перебираем полученные данные из объекта методом "each"
        $.each(postData, function(key, value){
          $container.append('Изображение:' + value.name + ', Текст:' + value.text);
        });
      },
      // Если код выше не сработал
      error: function() {
        alert('error');
      }
    });

  });

});
