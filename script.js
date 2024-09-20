fetch('https://whatyearisit-backend-e3c6gm0yr-amir-yakdis-projects.vercel.app/')
.then((Response) => Response.json())
.then((data) => {
    document.getElementById('year').textContent = data.year;
});



