function toggleDropdown() {
  document.getElementById("dropdownContent").classList.toggle("show");
}

function showSection(sectionId) {
  const sections = document.getElementsByClassName("command-section");
  for (let i = 0; i < sections.length; i++) {
    sections[i].style.display = "none";
  }

  const selected = document.getElementById(sectionId);
  if (selected) {
    selected.style.display = "block";
  }

  document.getElementById("dropdownContent").classList.remove("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    const dropdowns = document.getElementsByClassName("dropdown-content");
    for (let i = 0; i < dropdowns.length; i++) {
      dropdowns[i].classList.remove("show");
    }
  }
};
