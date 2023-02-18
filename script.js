

$(document).ready(function() {
    $('.header_burger').click(function (event) {
        $('.header_burger,.header_menu').toggleClass('active');
        $('body').toggleClass('lock');/*при открытом меню блокируется прокрутка*/
    });
});

    /*при клике на бургер,этому бургеру и меню будет добавляться класс
    и при повторном нажати удаляться, то есть меню будет всплывать под бургером
    toggle как раз отвечает за добавление иудаление класса при нажатии*/
//Валидация данных
$(function() {

  $("form").each(function() {
      //вызываем функию валидации
    $(this).validate({
        //задаем условия провеки полей формы
        //required Определяет, что для отправки формы данное
        //поле предварительно должно быть заполнено
      rules: {
        FirstName: {
          required: true,
          minlength: 2 //имя не меньше 2 буквы
        },
        LastName: {
          required: true,
          minlength: 2 //фамилия не меньше 2 буквы
        },
        email: {
          required: true,
          email: true
        },
        Phone: {
          required: true
        }
      },
      //выводим сообшение об ошибке
      messages: {
        FirstName: {
          required: "Имя не может быть пустым",
          minlength: jQuery.validator.format("Введите не менее {0} символов.")
        },
        LastName: {
          required: "Фамилия не может быть пустым",
          minlength: jQuery.validator.format("Введите не менее {0} символов.")
        },
        email: {
          required: "Email не может быть пустым",
          email: "Неверный формат Email"
        },
        Phone: {
          required: "Телефон не может быть пустым"
        }
      }
    });
  });
  /*  validate form  */
});


/*Темная тема*/
let changeThemeButtons = document.querySelectorAll('.changeTheme');

changeThemeButtons.forEach(button => {
    button.addEventListener('click', function () {
        let theme = this.dataset.theme;
        applyTheme(theme);
    });
});

function applyTheme(themeName) {
    document.querySelector('[title="theme"]').setAttribute('href', `css/theme-${themeName}.css`);
    changeThemeButtons.forEach(button => {
        button.style.display = 'block';
    });
    document.querySelector(`[data-theme="${themeName}"]`).style.display = 'none';
    localStorage.setItem('theme', themeName);
}

let activeTheme = localStorage.getItem('theme'); // Проверяем есть ли в LocalStorage записано значение для 'theme' и присваиваем его переменной.

if(activeTheme === null || activeTheme === 'light') { // Если значение не записано, или оно равно 'light' - применяем светлую тему
    applyTheme('light');
} else if (activeTheme === 'dark') { // Если значение равно 'dark' - применяем темную
    applyTheme('dark');
}