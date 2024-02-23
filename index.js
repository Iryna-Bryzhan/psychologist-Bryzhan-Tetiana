$(document).ready(function () {
  $(".guarantee__title").click(function (event) {
    $(this).toggleClass("active").next().slideToggle(300);
  });
});

var input = document.querySelector("#phone");
var iti = window.intlTelInput(input, {
  initialCountry: "auto",
  geoIpLookup: function (success, failure) {
    $.get("https://ipinfo.io", function () {}, "jsonp").always(function (resp) {
      var countryCode = resp && resp.country ? resp.country : "us";
      success(countryCode);
    });
  },
  autoPlaceholder: "aggressive",
  customPlaceholder: true,
  separateDialCode: true,
  utilsScript: "build/utils.js",
});

var input = document.querySelector("#phone-back-call");
var iti = window.intlTelInput(input, {
  initialCountry: "auto",
  geoIpLookup: function (success, failure) {
    $.get("https://ipinfo.io", function () {}, "jsonp").always(function (resp) {
      var countryCode = resp && resp.country ? resp.country : "us";
      success(countryCode);
    });
  },
  autoPlaceholder: "aggressive",
  customPlaceholder: true,
  separateDialCode: true,
  utilsScript: "build/utils.js",
});

//*Плавный преход меню*//

$(".menu a").click(function (e) {
  e.preventDefault();
  const id = $(this).attr("href");

  const element = $(id);
  if (element.length) {
    $("html, body").animate(
      {
        scrollTop: element.offset().top,
      },
      800,
      function () {
        window.location.hash = id;
      }
    );
  }
});

// //*меню*//

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
    document.getElementById("header").style.height = "11%";
    document.getElementById("header").style.boxShadow =
      "0px 0px 15px rgb(0 0 0 / 20%)";
    document.getElementById("header").style.background =
      "linear-gradient(360deg, #B2D9FB 0%, rgba(235, 238, 246, 1))";
    document.getElementById("header").style.transition = "0.1s";
    document.getElementById("logo").style.lineHeight = "1.2";
    document.getElementById("logo").style.transition = "0.3s";
  } else {
    document.getElementById("header").style.height = "";
    document.getElementById("header").style.boxShadow = "";
    document.getElementById("header").style.background = "";
    document.getElementById("header").style.transition = "0.1s";
    document.getElementById("logo").style.transition = "0.3s";
  }
}

(function () {
  var Util,
    __bind = function (fn, me) {
      return function () {
        return fn.apply(me, arguments);
      };
    };

  Util = (function () {
    function Util() {}

    Util.prototype.extend = function (custom, defaults) {
      var key, value;
      for (key in custom) {
        value = custom[key];
        if (value != null) {
          defaults[key] = value;
        }
      }
      return defaults;
    };

    Util.prototype.isMobile = function (agent) {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        agent
      );
    };

    return Util;
  })();

  this.WOW = (function () {
    WOW.prototype.defaults = {
      boxClass: "wow",
      animateClass: "animated",
      offset: 0,
      mobile: true,
    };

    function WOW(options) {
      if (options == null) {
        options = {};
      }
      this.scrollCallback = __bind(this.scrollCallback, this);
      this.scrollHandler = __bind(this.scrollHandler, this);
      this.start = __bind(this.start, this);
      this.scrolled = true;
      this.config = this.util().extend(options, this.defaults);
    }

    WOW.prototype.init = function () {
      var _ref;
      this.element = window.document.documentElement;
      if (
        (_ref = document.readyState) === "interactive" ||
        _ref === "complete"
      ) {
        return this.start();
      } else {
        return document.addEventListener("DOMContentLoaded", this.start);
      }
    };

    WOW.prototype.start = function () {
      var box, _i, _len, _ref;
      this.boxes = this.element.getElementsByClassName(this.config.boxClass);
      if (this.boxes.length) {
        if (this.disabled()) {
          return this.resetStyle();
        } else {
          _ref = this.boxes;
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            box = _ref[_i];
            this.applyStyle(box, true);
          }
          window.addEventListener("scroll", this.scrollHandler, false);
          window.addEventListener("resize", this.scrollHandler, false);
          return (this.interval = setInterval(this.scrollCallback, 50));
        }
      }
    };

    WOW.prototype.stop = function () {
      window.removeEventListener("scroll", this.scrollHandler, false);
      window.removeEventListener("resize", this.scrollHandler, false);
      if (this.interval != null) {
        return clearInterval(this.interval);
      }
    };

    WOW.prototype.show = function (box) {
      this.applyStyle(box);
      return (box.className =
        "" + box.className + " " + this.config.animateClass);
    };

    WOW.prototype.applyStyle = function (box, hidden) {
      var delay, duration, iteration;
      duration = box.getAttribute("data-wow-duration");
      delay = box.getAttribute("data-wow-delay");
      iteration = box.getAttribute("data-wow-iteration");
      return box.setAttribute(
        "style",
        this.customStyle(hidden, duration, delay, iteration)
      );
    };

    WOW.prototype.resetStyle = function () {
      var box, _i, _len, _ref, _results;
      _ref = this.boxes;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        box = _ref[_i];
        _results.push(box.setAttribute("style", "visibility: visible;"));
      }
      return _results;
    };

    WOW.prototype.customStyle = function (hidden, duration, delay, iteration) {
      var style;
      style = hidden
        ? "visibility: hidden; -webkit-animation-name: none; -moz-animation-name: none; animation-name: none;"
        : "visibility: visible;";
      if (duration) {
        style +=
          "-webkit-animation-duration: " +
          duration +
          "; -moz-animation-duration: " +
          duration +
          "; animation-duration: " +
          duration +
          ";";
      }
      if (delay) {
        style +=
          "-webkit-animation-delay: " +
          delay +
          "; -moz-animation-delay: " +
          delay +
          "; animation-delay: " +
          delay +
          ";";
      }
      if (iteration) {
        style +=
          "-webkit-animation-iteration-count: " +
          iteration +
          "; -moz-animation-iteration-count: " +
          iteration +
          "; animation-iteration-count: " +
          iteration +
          ";";
      }
      return style;
    };

    WOW.prototype.scrollHandler = function () {
      return (this.scrolled = true);
    };

    WOW.prototype.scrollCallback = function () {
      var box;
      if (this.scrolled) {
        this.scrolled = false;
        this.boxes = function () {
          var _i, _len, _ref, _results;
          _ref = this.boxes;
          _results = [];
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            box = _ref[_i];
            if (!box) {
              continue;
            }
            if (this.isVisible(box)) {
              this.show(box);
              continue;
            }
            _results.push(box);
          }
          return _results;
        }.call(this);
        if (!this.boxes.length) {
          return this.stop();
        }
      }
    };

    WOW.prototype.offsetTop = function (element) {
      var top;
      top = element.offsetTop;
      while ((element = element.offsetParent)) {
        top += element.offsetTop;
      }
      return top;
    };

    WOW.prototype.isVisible = function (box) {
      var bottom, offset, top, viewBottom, viewTop;
      offset = box.getAttribute("data-wow-offset") || this.config.offset;
      viewTop = window.pageYOffset;
      viewBottom = viewTop + this.element.clientHeight - offset;
      top = this.offsetTop(box);
      bottom = top + box.clientHeight;
      return top <= viewBottom && bottom >= viewTop;
    };

    WOW.prototype.util = function () {
      return this._util || (this._util = new Util());
    };

    WOW.prototype.disabled = function () {
      return !this.config.mobile && this.util().isMobile(navigator.userAgent);
    };

    return WOW;
  })();
}).call(this);

wow = new WOW({
  animateClass: "animated",
  offset: 100,
});
wow.init();

function myFunction() {
  let menuBurger = document.querySelector(".menu-burger");
  let containerBurger = document.querySelector(".container-burger");

  if (containerBurger.classList.contains("change")) {
    containerBurger.classList.remove("change");
    menuBurger.style.display = "none";
  } else {
    containerBurger.classList.add("change");
    menuBurger.style.display = "block";
  }
}

function handleMenuClick(event, targetSection) {
  event.preventDefault();
  myFunction(); // Close the menu

  // Scroll to the target section
  let targetElement = document.querySelector(targetSection);
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: "smooth" });
  }
}

// Функция для проверки валидности email
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Функция для проверки валидности телефонного номера
function isValidPhone(phone) {
  return /^\d+$/.test(phone);
  // return /^\\d{2}\\s\d{3}\s\d{2}\s\d{2}$/.test(phone);
}

// Функция для валидации имени
function validateName() {
  const nameInput = document.getElementById("name-call");
  const nameError = document.getElementById("name-error");
  const name = nameInput.value.trim();

  if (name === "") {
    nameError.textContent = "Пожалуйста, введите ваше имя";
    return false;
  } else {
    nameError.textContent = "";
    return true;
  }
}

// Функция для валидации email
function validateEmail() {
  const emailInput = document.getElementById("email-call");
  const emailError = document.getElementById("email-error");
  const email = emailInput.value.trim();

  if (email === "") {
    emailError.textContent = "Пожалуйста, введите ваш email";
    return false;
  } else if (!isValidEmail(email)) {
    emailError.textContent = "Пожалуйста, введите корректный email";
    return false;
  } else {
    emailError.textContent = "";
    return true;
  }
}

// Функция для валидации телефонного номера
function validatePhone() {
  const phoneInput = document.getElementById("phone");
  const phoneError = document.getElementById("phone-error");
  const phone = phoneInput.value.trim();

  if (phone === "") {
    phoneError.textContent = "Пожалуйста, введите ваш номер телефона";
    return false;
  } else if (!isValidPhone(phone)) {
    phoneError.textContent = "Пожалуйста, введите корректный номер телефона";
    return false;
  } else {
    phoneError.textContent = "";
    return true;
  }
}

// Функция для сброса значений полей формы
function resetFormFields() {
  document.getElementById("name-call").value = "";
  document.getElementById("email-call").value = "";
  document.getElementById("phone").value = "";
}
// Функция для скрытия модального окна с сообщением об ошибке
function hideModalError() {
  document.querySelector(".modal-error").style.display = "none";
}

// Функция для показа модального окна с сообщением об ошибке при неудачной отправке данных
function showModalError() {
  const modalError = document.querySelector(".modal-error");
  modalError.style.display = "block";

  // Скрыть модальное окно через 3 секунды
  setTimeout(function () {
    hideModalError();
  }, 3000);
}

// Функция для скрытия модального окна с сообщением об успешной отправке
function hideModalSuccess() {
  document.querySelector(".modal-success").style.display = "none";
}

// Функция для показа модального окна с сообщением об успешной отправке данных
function showModalSuccess() {
  const modalSuccess = document.querySelector(".modal-success");
  modalSuccess.style.display = "block";

  // Скрыть модальное окно через 3 секунды
  setTimeout(function () {
    hideModalSuccess();
  }, 3000);
}

// Функция для сбора данных формы и их вывода в консоль
function collectFormData() {
  const nameInput = document.getElementById("name-call");
  const emailInput = document.getElementById("email-call");
  const phoneInput = document.getElementById("phone");
  const cod = document.querySelector(".iti__selected-dial-code").innerHTML;
  const formData = {
    name: nameInput.value.trim(),
    email: emailInput.value.trim(),
    phone: cod + phoneInput.value.trim(),
  };

  console.log(formData);
  resetFormFields(); // Очищаем поля формы после отправки

  // Эмуляция неудачной отправки данных (замените эту часть на реальный код отправки данных на сервер)
  const isSuccess = true;

  if (isSuccess) {
    showModalSuccess(); // Показываем модальное окно с сообщением об успешной отправке
  } else {
    showModalError(); // Показываем модальное окно с сообщением об ошибке
  }
}

// Добавляем обработчики событий для валидации при потере фокуса
document.getElementById("name-call").addEventListener("blur", validateName);
document.getElementById("email-call").addEventListener("blur", validateEmail);
document.getElementById("phone").addEventListener("blur", validatePhone);

// Добавляем обработчик события отправки формы для сбора данных
document.querySelector(".form").addEventListener("submit", function (event) {
  event.preventDefault(); // Предотвращаем отправку формы
  if (validateName() && validateEmail() && validatePhone()) {
    collectFormData(); // Если все данные валидны, собираем их
    // Здесь можно добавить код для отправки данных на сервер
  }
});

// Получаем ссылку на элемент с классом "call-phone"
const callPhone = document.querySelector(".call-phone");
// Получаем ссылку на модальное окно с классом "modal-form-call"
const modalFormCall = document.querySelector(".modal-form-call");

// Добавляем обработчик события "click" на элемент "callPhone"
callPhone.addEventListener("click", function () {
  // При клике на "callPhone" отображаем модальное окно
  modalFormCall.style.display = "block";
});

const btnCloseCall = document.querySelector(".close-call");

// При клике на "btnCloseCall" отображаем модальное окно

btnCloseCall.addEventListener("click", () => {
  modalFormCall.style.display = "none";
});

const formCall = document.querySelector(".form-call");
const modalCall = document.querySelector(".modal-form-call");
const errorContent = document.querySelector(".error-content");
const successContent = document.querySelector(".success-content");

// Функция для валидации имени
function validateNameCall() {
  const nameInput = document.getElementById("name-back-call");
  const nameError = document.getElementById("name-error-call");
  const name = nameInput.value.trim();

  if (name === "") {
    nameError.textContent = "Пожалуйста, введите ваше имя";
    return false;
  } else {
    nameError.textContent = "";
    return true;
  }
}

// Функция для валидации телефонного номера
function validatePhoneCall() {
  const phoneInput = document.getElementById("phone-back-call");
  const phoneError = document.getElementById("phone-error-call");
  const phone = phoneInput.value.trim();

  if (phone === "") {
    phoneError.textContent = "Пожалуйста, введите ваш номер телефона";
    return false;
  } else if (!isValidPhone(phone)) {
    phoneError.textContent = "Пожалуйста, введите корректный номер телефона";
    return false;
  } else {
    phoneError.textContent = "";
    return true;
  }
}

// Функция для сброса значений полей формы
function resetFormFieldsCall() {
  document.getElementById("name-back-call").value = "";
  document.getElementById("phone-back-call").value = "";
}

// Функция для скрытия модального окна
function hideModal() {
  document.querySelector(".modal-form-call").style.display = "none";
}

// Функция для сбора данных формы и их вывода в консоль
function collectFormDataCall() {
  const nameInput = document.getElementById("name-back-call");
  const phoneInput = document.getElementById("phone-back-call");
  const cod = document.querySelector(".iti__selected-dial-code").innerHTML;

  const formData = {
    name: nameInput.value.trim(),
    phone: cod + phoneInput.value.trim(),
  };

  console.log(formData);

  resetFormFieldsCall(); // Очищаем поля формы после отправки

  // Здесь можно добавить реальный код отправки данных на сервер

  // Эмуляция неудачной отправки данных (замените эту часть на реальный код отправки данных на сервер)
  const isSuccess = true;

  if (isSuccess) {
    showModalSuccess(); // Показываем модальное окно с сообщением об успешной отправке
    hideModal();
  } else {
    showModalError(); // Показываем модальное окно с сообщением об ошибке
    hideModal();
  }
}

// Добавляем обработчики событий для валидации и отправки формы
document
  .getElementById("name-back-call")
  .addEventListener("blur", validateNameCall);
document
  .getElementById("phone-back-call")
  .addEventListener("blur", validatePhoneCall);

document
  .querySelector(".form-call")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Предотвращаем отправку формы

    if (validateNameCall() && validatePhoneCall()) {
      collectFormDataCall(); // Если все данные валидны, собираем их и отправляем форму
    }
  });

// Получаем ссылки на иконку и текст
const icon = document.getElementById("call-icon");
const text = document.getElementById("call-text");

// Функция для переключения между иконкой и текстом
function toggleIconAndText() {
  if (icon.style.display === "none") {
    icon.style.display = "inline";
    text.style.display = "none";
  } else {
    icon.style.display = "none";
    text.style.display = "inline";
  }
}

// Запускаем функцию toggleIconAndText каждые 2 секунды
setInterval(toggleIconAndText, 3500);
