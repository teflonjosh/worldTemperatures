    // SCRIPT FOR HEADER OBSERVER
    const header = document.querySelector('.nav-header');
    const content = document.querySelector('.content');

    const observerOptions = {
      root: null,
      threshold: 0,
      rootMargin: `15px`, // Adjust to fit your header's height ##
    };
//
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          header.classList.remove('nav-header-scrolled');
        } else {
          header.classList.add('nav-header-scrolled');
        }
      });
    }, observerOptions);

    observer.observe(content);
// EOP
// ## //
// SCRIPT FOR BODY OBSERVER
const fadeIns = document.querySelectorAll('.fade-in');
const appearOptions = {
  threshold: 0.7,
};
//
const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.intersectionRatio >= appearOptions.threshold) {
      entry.target.style.opacity = .9;
      appearOnScroll.unobserve(entry.target);
    }
  });
}, appearOptions);
//
fadeIns.forEach((fadein) => {
  appearOnScroll.observe(fadein);
});
//
// Script for TIME >>>>
function callTime() { // name function
      let NowDate = new Date().toDateString();
      let NowTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });
      // insert to DOM
      document.getElementById('time').innerHTML = `${NowDate}-${NowTime}`;
    }
//
    setInterval(function() {
      callTime(); }, 1000); // setInterval to CALL FUNCTION in MS
// EOP
//
//
// #### //
//
//
// GLOBAL SCOPE for WEATHER->
let showWeather = {}; 
// MATCH to text in Weather ID -> LOCATION name for wttr.in && element ID name for HTML
function toggleWeather(location, elementId) {
    const preElement = document.getElementById(elementId);
//
    if (showWeather[elementId]) {
        preElement.innerHTML = '';
        showWeather[elementId] = false;
// CHAMGE URL FOR EACH LOCATION USING
    } else {
        const url = `https://v2.wttr.in/${encodeURIComponent(location)}`;
// Fetch URL to text -> 
        fetch(url)
            .then(response => response.text())
            .then(urlData => {
                const details = /<pre>([\s\S]+?)<\/pre>/;
                const same = details.exec(urlData);
                const weatherInfoAPI = same ? same[1] : 'Nada Mas Aqui Amigo';
                preElement.innerHTML = weatherInfoAPI;
                showWeather[elementId] = true;
            })
    }
}
// EOP //
