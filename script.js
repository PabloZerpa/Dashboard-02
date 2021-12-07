const dataStorage = {
    labels: [
      'Documents',
      'SpreedSheet',
      'Presentations',
      'Notes',
      'PDFs',
    ],
    datasets: [{
      label: 'Support',
      data: [300, 50, 100, 120, 80],
      backgroundColor: [
        "rgb(0, 114, 242)",
        "rgb(24, 136, 57)",
        "rgb(255, 188, 1)",
        "rgb(113, 43, 146)",
        "rgb(244, 42, 38)",
      ],
      hoverOffset: 4
    }]
  };

  let ctxDonut = document.getElementById("chartDonut").getContext("2d");
  let chartDonut = new Chart(ctxDonut, {
    type: 'doughnut',
    data: dataStorage,
  });