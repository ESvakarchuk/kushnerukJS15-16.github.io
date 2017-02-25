$(function() {


    // Мой API ключ
    var apiKey = '4646647-303d49dba3b53bd20249dbced';
    // Переменные полей ввода и вывода информации
    var $container = $('#output');
    var $textField = $('#toServerText');


    // Отправка асинхронного ajax на сервер
    function toSeverFunc() {
        $.ajax({
            type: "GET", //Стоит по умолчанию
            url: "https://pixabay.com/api/?key=" + apiKey + "&q=" + encodeURIComponent($textField.val()), // Адрес API куда отправляем запрос
            // В случае успешнной передачи выводим в консоль сообщение
            // "getData" (название может быть любое) это объект с результатом который нам возвращает сервер
            success: function(getData) {
                console.log('success', getData);
                // Перебираем полученные данные из объекта методом "each":
                // ".hits" это ключ объекта в котором есть свои ключи и свойства.
                // Указывая "key" и "val" (название может быть любое) мы перебираем каждый ключ или индекс (key) внутри ".hits" -
                // и соответсвенно у каждого ключа (индекса) перебираем свойства (val) c ключем ".previewURL".
                $.each(getData.hits, function(key, val) {
                    // console.log('key = ', key);
                    // console.log('val = ', val);
                    // Выводим результат в тег img, указываем src, вставляем в разметку
                    $container.append('<img class="result-img" src="' + val.previewURL + '">');
                });
            },
            // Если код выше не сработал
            error: function() {
                alert('error');
            }
        });
    }


    // Обработчик вешает отправку данных на сервер (API) по клику кнопки или enter
    $('#toServerButton').on('click', function() {
        $container.empty();
        toSeverFunc();
    });

    $('#toServerText').keypress(function(e) {
        if (e.which == 13) {
            $container.empty();
            toSeverFunc();
        }
    });

    // Задание №2

    // Создаем конструктор "Human"
    function Human() {
        this.name = 'Adam';
        this.age = 20;
        this.gender = "male";
        this.height = '1.80';
        this.weight = '75kg';
    }
    // Создаем конструктором "Human" объект "HumanObj"
    var HumanObj = new Human();
    console.log('Внимание! Класс "Human" был создан.');
    console.log(HumanObj);

    // Создаем конструктор "Worker"
    function Worker() {
        this.job = 'broker';
        this.salary = 1000;
        this.goToWork = function() {
            var payment = this.salary / 20;
            setTimeout(function() {
                alert('Worker: Success, today i got ' + payment + '$');
            }, 2000);
        };
    }
    // Указываем прототип "HumanObj" для конструктора "Worker"
    Worker.prototype = HumanObj;
    // Создаем конструктором "Worker" объект "WorkerObj"
    var WorkerObj = new Worker();
    console.log('Внимание! Класс "Worker" был создан.');
    console.log(WorkerObj);

    // Создаем конструктор "Student"
    function Student() {
        this.university = 'KUBG';
        this.scholarship = 800;
        this.watchTvShow = function() {
            var payment = this.salary / 20;
            alert('Today I watched 6 episodes!');
        };
    }
    // Указываем прототип "HumanObj" для конструктора "Student"
    Student.prototype = HumanObj;
    // Создаем конструктором "Student" объект "StudentObj"
    var StudentObj = new Student();
    console.log('Внимание! Класс "Student" был создан.');
    console.log(StudentObj);

    // Создаем несколько экземпляров классов Worker и Student
    var LazyStudentObj = new Student();
    var GoodStudentObj = new Student();
    var BadWorkerObj = new Worker();
    var SlowWorkerObj = new Worker();
    console.log('Создаем несколько экземпляров классов Worker и Student -');
    console.log('"LazyStudentObj"', '"GoodStudentObj"', '"BadWorkerObj"', '"SlowWorkerObj"');
    console.log('Проверяем есть ли у них поля родительского класса Human:');
    console.log('LazyStudentObj.name -', LazyStudentObj.name);
    console.log('GoodStudentObj.age -', GoodStudentObj.age);
    console.log('BadWorkerObj.gender -', BadWorkerObj.gender);
    console.log('SlowWorkerObj.height -', SlowWorkerObj.height);
    console.log('Успех!');
});
