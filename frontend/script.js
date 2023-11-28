document.addEventListener("DOMContentLoaded", () => {
  $(".carousel").slick({
    autoplay: true,
    autoplaySpeed: 2500,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true, // Делает центральный слайд более заметным
    variableWidth: true, // Позволяет различным ширинам слайдов
    responsive: [
      {
        breakpoint: 600,
        settings: {
          dots: false,
          centerMode: false,
          variableWidth: false
        }
      }
    ]
  });
  $(".carousel").on(
    "beforeChange",
    function (event, slick, currentSlide, nextSlide) {
      // Reset the scale for all images
      $(".carousel-item img").css("transform", "scale(1)");
    }
  );

  //pythonBlock - переменная с блоком из html c id Python
  const pythonBlock = document.getElementById("Python").getContext("2d");
  var gradientsPython = [];
  var gradientsPythonColors = [
    { coord: [0, 0, 0, 130], start: "#F60ADE", end: "#DB00FF" },
  ];
  gradientsPythonColors.forEach(function (item) {
    let gradient = pythonBlock.createLinearGradient(
      item.coord[0],
      item.coord[1],
      item.coord[2],
      item.coord[3]
    );
    gradient.addColorStop(0, item.start);
    gradient.addColorStop(1, item.end);
    gradientsPython.push(gradient);
  });
  gradientsPython.push("#D1A0E2");
  new Chart(pythonBlock, {
    type: "pie",
    data: {
      datasets: [
        {
          backgroundColor: gradientsPython,
          data: [60, 40],
        },
      ],
    },
    options: {
      plugins: {
        title: {
          display: true,
          text: "Python",
          position: "bottom",
          color: "white",
          font: {
            family: "Neue Machina",
            size: 35,
            style: "normal",
            weight: 700,
            lineHeight: "normal",
          },
        },
      },
    },
  });
  //конец чарта
  const nodejsBlock = document.getElementById("NodeJs").getContext("2d");
  var gradientsNodeJs = [];
  gradientsNodeJs.push("#B8A6E1");
  var gradientsNodeJsColors = [
    { coord: [0, 0, 0, 130], start: "#4109F1", end: "#AD95F6" },
  ];
  gradientsNodeJsColors.forEach(function (item) {
    let gradient = nodejsBlock.createLinearGradient(
      item.coord[0],
      item.coord[1],
      item.coord[2],
      item.coord[3]
    );
    gradient.addColorStop(0, item.start);
    gradient.addColorStop(1, item.end);
    gradientsNodeJs.push(gradient);
  });

  new Chart(nodejsBlock, {
    type: "pie",
    data: {
      datasets: [
        {
          backgroundColor: gradientsNodeJs,
          data: [20, 80],
        },
      ],
    },
    options: {
      plugins: {
        title: {
          display: true,
          text: "Node.Js",
          position: "bottom",
          color: "white",
          font: {
            family: "Neue Machina",
            size: 35,
            style: "normal",
            weight: 700,
            lineHeight: "normal",
          },
        },
      },
    },
  });
  const htmlBlock = document.getElementById("HtmlCss").getContext("2d");
  var gradients = [];
  var gradientColors = [
    { coord: [0, 0, 0, 170], start: "#B849CA", end: "#E599F1" },
  ];
  gradientColors.forEach(function (item) {
    var gradient = htmlBlock.createLinearGradient(
      item.coord[0],
      item.coord[1],
      item.coord[2],
      item.coord[3]
    );
    gradient.addColorStop(0, item.start);
    gradient.addColorStop(1, item.end);
    gradients.push(gradient);
  });
  gradients.push("#EBCBEB");

  new Chart(htmlBlock, {
    type: "pie",
    data: {
      datasets: [
        {
          backgroundColor: gradients,
          data: [70, 30],
        },
      ],
    },
    options: {
      plugins: {
        title: {
          display: true,
          text: "Html & Css",
          position: "bottom",
          color: "white",
          font: {
            family: "Neue Machina",
            size: 35,
            style: "normal",
            weight: 700,
            lineHeight: "normal",
          },
        },
      },
    },
  });
  let menuToggle = document.getElementById("hamburger-input")
  //контакты
  document.getElementById("Contacts").onclick = () => {
    menuToggle.checked = false
    document
      .getElementsByClassName("footer")[0]
      .scrollIntoView({ behavior: "smooth", block: "start" });
  };
  // обо мне
  document.getElementById("AboutMe").onclick = () => {
    menuToggle.checked = false
    document
      .getElementsByClassName("maintext")[0]
      .scrollIntoView({ behavior: "smooth", block: "start" });
  };
  document.getElementById("Skills").onclick = () => {
    menuToggle.checked = false
    document
      .getElementsByClassName("skills")[0]
      .scrollIntoView({ behavior: "smooth", block: "start" });
  };
  document.getElementsByClassName("back")[0].onclick = () => {
    menuToggle.checked = false
    document
      .getElementsByClassName("wrap")[0]
      .scrollIntoView({ behavior: "smooth", block: "start" });
  };
  document.getElementById("Portfolio").onclick = () => {
    menuToggle.checked = false
    document
      .getElementsByClassName("textportfolio")[0]
      .scrollIntoView({ behavior: "smooth", block: "end" });
  };
  
});
