

// Wikipedia and Rest Countres
 
export async function getCountry() {
  const targetUrl = 'https://restcountries.com/v3.1/alpha/CG?fields=name,capital,population,flags,languages,currencies,region';

  // Proxy that adds CORS headers
  const proxyUrl = 'https://api.allorigins.win/raw?url=' + encodeURIComponent(targetUrl);

  try {
    const res = await fetch(proxyUrl);
    const data = await res.json();
    return Array.isArray(data)? data[0] : data;
  } catch (error) {
    console.error('Country API failed, using local fallback', error);
    return {
      name: { common: "Congo-Brazzaville", official: "Republic of the Congo" },
      capital: ["Brazzaville"],
      population: 5970424,
      region: "Africa",
      flags: { png: "https://flagcdn.com/w320/cg.png" },
      languages: { fra: "French" },
      currencies: { XAF: { name: "Central African CFA franc" } }
    };
  }
}

export async function getHistory() {
    const res = await fetch('https://en.wikipedia.org/api/rest_v1/page/summary/History_of_the_Republic_of_the_Congo');
    const data = await res.json();
    console.log(data);
    return data;
}