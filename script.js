const dataStorage = {
    labels: [
      'Documents',
      'SpreedSheet',
      'Presentations',
    ],
    datasets: [{
      label: 'Support',
      data: [300, 50, 100],
      backgroundColor: [
        "rgb(0, 114, 242)",
        "rgb(244, 42, 38)",
        "rgb(255, 188, 1)",
      ],
      hoverOffset: 4
    }]
  };

  let ctxDonut = document.getElementById("chartDonut").getContext("2d");
  let chartDonut = new Chart(ctxDonut, {
    type: 'doughnut',
    data: dataStorage,
  });