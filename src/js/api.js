async function fetchData() {
    const response = await fetch('https://api.usghgcenter.org/data'); // exemple API, adapte selon les endpoints disponibles
    const data = await response.json();
    // Process data and use Chart.js or D3.js to visualize
  }
  fetchData();
  