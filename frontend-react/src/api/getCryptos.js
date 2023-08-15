const API = "http://localhost:3000/api"

export const getCryptos= ()=>  fetch(`${API}/crypto`);