const output = document.getElementById("content");

const projects = [
   {
      name: "Temu Expert",
      src: "assets/img/temu.png",
      url: "https://www.temuexpert.com/",
      alt: "temuexpert",
      description:
         "is a website for users to meet experts in their respective expertises. I developed the website with my team using Vue JS and Quasar. I mainly developed the header and footer,front page, login and register (including OAuth), and booking functionality.",
   },
   {
      name: "Bima KPK",
      src: "assets/img/bima.png",
      url: "https://bima.kpk.go.id/pelayanan-publik/pendidikan",
      alt: "bimakpk",
      description:
         "is a website for users to know about news and informationabout corruption. This website is created in the vision of public policy openness. My team and I developed the website using Vue JS and Quasar. I mainly developed Pelayanan Publik pages, such as Pendidikan, Desa, Fasilitas Kesehatan and Perizinan",
   },
];

output.innerHTML = projects.map((project) => {
   return `    <article class="project-container">
               <h2 href="${project.url}" class="project-link"
                  >${project.name}</h2
               >
               <section class="project-detail">
                  <img
                     src="${project.src}"
                     class="project-img"
                     alt="${project.alt}"
                  />
                  <p class="project-desc">
                     <a href="${project.url}" class="links"> ${project.name} </a>${project.description}
                  </p>
               </section>
            </article>`;
});
