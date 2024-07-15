// About tablink Begins here
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

// Navbar side menu open & close toggler begins here
var sideMenu = document.getElementById("sidemenu");

function openMenu() {
  sideMenu.style.right = "0";
}

function closeMenu() {
  sideMenu.style.right = "-200px";
}

// contact form submitting to google sheet begin here

const scriptURL =
  "https://script.google.com/macros/s/AKfycbyhyGAxGn0ptcdxpi1ubUWqsA6Bda5MRIhVDJfE5Wci1trCo14MZj8FoImAajjVhDj1Sg/exec";
const form = document.forms["submit-to-google-sheet"];

const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = "Message sent successfully";
      setTimeout(function () {
        msg.innerHTML = "";
      }, 5000);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});

// Additional of project list start here

const moreProjects = [
  {
    title: "Digiplus Connect",
    description:
      "Digiplus Connect is a digital transformation company that offers various services.<br/><br/> Tools used: HTML, CSS, Sass, Bootstrap",
    imgSrc: "assets/img/project2.png",
    link: "https://project5-link.com",
  },
  {
    title: "Hotel Viatours",
    description:
      "Hotel Viatours is located in Nigeria, Lagos. It is close to the most important monuments of Ogudu city.<br/><br/>Tools used: HTML, CSS, Sass, Bootstrap",
    imgSrc: "assets/img/project3.png",
    link: "https://viatours-services-page.vercel.app/",
  },
];

let isExpanded = false;

document.getElementById("see-more").addEventListener("click", function (event) {
  event.preventDefault(); // Prevent default anchor click behavior
  const projectList = document.getElementById("project-list");

  if (!isExpanded) {
    moreProjects.forEach((project) => {
      const projectDiv = document.createElement("div");
      projectDiv.className = "project";
      projectDiv.innerHTML = `
          <img src="${project.imgSrc}" alt="project" />
          <div class="layer">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <a href="${project.link}"><i class="fas fa-external-link-alt"></i></a>
          </div>
        `;
      projectList.appendChild(projectDiv);
    });
    this.textContent = "See less"; // Change button text
  } else {
    // Remove added projects (optional: adjust as needed)
    const projectsToRemove = projectList.querySelectorAll(
      ".project:nth-child(n+4)"
    );
    projectsToRemove.forEach((project) => project.remove());
    this.textContent = "See more"; // Change button text back
  }

  isExpanded = !isExpanded; // Toggle the state
});
