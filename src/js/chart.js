var ctx = document.getElementById('co2Chart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['2000', '2005', '2010', '2015', '2020'],
        datasets: [{
            label: 'Emissions de CO2',
            data: [30, 40, 45, 50, 55],
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 2
        }]
    }
});
 // Récupération des éléments DOM pour les filtres
 const gasTypeElement = document.getElementById('gasType');
 const yearRangeElement = document.getElementById('yearRange');
 const regionElement = document.getElementById('region');

 // Données d'exemple (remplacer par des données réelles)
 const exampleData = {
   co2: {
     "2000-2020": [30, 40, 50, 60, 70, 80, 90, 100, 110, 120],
     "1980-2000": [20, 25, 30, 35, 40, 45, 50, 55, 60, 65],
     "1960-1980": [10, 15, 20, 25, 30, 35, 40, 45, 50, 55]
   },
   ch4: {
     "2000-2020": [20, 25, 30, 35, 40, 45, 50, 55, 60, 65],
     "1980-2000": [10, 12, 14, 16, 18, 20, 22, 24, 26, 28],
     "1960-1980": [5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
   },
   n2o: {
     "2000-2020": [5, 7, 9, 11, 13, 15, 17, 19, 21, 23],
     "1980-2000": [3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
     "1960-1980": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
   }
 };

 // Configuration initiale du graphique
 const ctx = document.getElementById('gasEmissionChart').getContext('2d');
 let gasEmissionChart = new Chart(ctx, {
   type: 'line',
   data: {
     labels: ['2000', '2002', '2004', '2006', '2008', '2010', '2012', '2014', '2016', '2018'],
     datasets: [{
       label: 'Émissions de CO₂',
       data: exampleData.co2['2000-2020'],
       borderColor: 'rgba(75, 192, 192, 1)',
       borderWidth: 2
     }]
   },
   options: {
     responsive: true,
     scales: {
       y: {
         beginAtZero: true
       }
     }
   }
 });

 // Fonction pour mettre à jour le graphique en fonction des filtres
 function updateChart() {
   const selectedGas = gasTypeElement.value;
   const selectedYearRange = yearRangeElement.value;

   // Mettre à jour les données du graphique avec les données filtrées
   gasEmissionChart.data.datasets[0].data = exampleData[selectedGas][selectedYearRange];
   gasEmissionChart.data.datasets[0].label = `Émissions de ${selectedGas.toUpperCase()}`;
   
   gasEmissionChart.update();
 }

 // Écouteurs d'événements pour les filtres
 gasTypeElement.addEventListener('change', updateChart);
 yearRangeElement.addEventListener('change', updateChart);
 regionElement.addEventListener('change', updateChart);