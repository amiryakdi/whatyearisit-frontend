fetch('https://whatyearisit-backend-e3c6gm0yr-amir-yakdis-projects.vercel.app/')
 .then(response => response.json())
 .then(data => {
   document.querySelector('#year').textContent = data.year;
 });
