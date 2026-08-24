const authView = document.getElementById("authView");
const dashboardView = document.getElementById("dashboardView");
const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");
const tabButtons = document.querySelectorAll(".tab-btn");

const navLinks = document.getElementById("navLinks");
const cardsGrid = document.getElementById("cardsGrid");
const sectionContent = document.getElementById("sectionContent");
const welcomeTitle = document.getElementById("welcomeTitle");
const rolePill = document.getElementById("rolePill");
const userMeta = document.getElementById("userMeta");
const logoutBtn = document.getElementById("logoutBtn");

const roleConfig = {
  student: {
    cards: [
      ["Student", "Name: Alex Carter"],
      ["Semester", "6th Semester"],
      ["Today's Schedule", "09:00 DBMS · 11:00 AI · 14:00 Lab"],
      ["Today's Assignments", "1 pending · 2 submitted"]
    ],
    sections: {
      dashboard: "Your learning flow is healthy and on track.",
      assignments:
        "- DSA Sheet 9\n- Cloud Quiz Reflection\n- DBMS ER Diagram",
      notes: "# Notes\n\n- Revise OS paging\n- Ask teacher about project rubric",
      reports:
        "Report concern, issue, or feedback to teachers/admin from here."
    }
  },
  teacher: {
    cards: [
      ["Teacher", "Name: Prof. Mira Sen"],
      ["Classes Today", "3 classes scheduled"],
      ["Schedule", "10:00 CN · 12:00 ML · 15:00 Viva"],
      ["Student Submissions", "24 assignments to review"]
    ],
    sections: {
      dashboard: "You have pending evaluations and rating updates.",
      assignments:
        "Review student submissions, add remarks, and approve work.",
      ratings: "Top students: Ayan (94), Kira (91), Rhea (88)",
      reports: "Review reports submitted by students and escalate when needed."
    }
  },
  admin: {
    cards: [
      ["Administrator", "Name: System Admin"],
      ["Active Students", "1,264 tracked activities"],
      ["Active Teachers", "84 teaching logs today"],
      ["Routing Changes", "3 semester schedules pending"]
    ],
    sections: {
      dashboard: "Monitor institution activity, reports, and records centrally.",
      records: "Check student/teacher records and update semester routing.",
      routing: "Change class routes and semester plans across departments.",
      reports:
        "Review reports against administration, teachers, and students."
    }
  }
};

let currentRole = "student";
let currentName = "User";
let currentSection = "dashboard";

function toggleAuth(tab) {
  tabButtons.forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.tab === tab);
  });
  loginForm.classList.toggle("active", tab === "login");
  registerForm.classList.toggle("active", tab === "register");
}

function renderCards(role) {
  cardsGrid.innerHTML = "";
  roleConfig[role].cards.forEach(([title, value]) => {
    const card = document.createElement("article");
    card.className = "card info-card fade-in";
    card.innerHTML = `<h4>${title}</h4><p>${value}</p>`;
    cardsGrid.appendChild(card);
  });
}

function renderSection(role, section) {
  const content = roleConfig[role].sections[section] || "No section data yet.";
  if (section === "notes") {
    sectionContent.innerHTML = `
      <h3>Notes</h3>
      <p class="subtitle">Markdown style note pad (Apple Notes inspired).</p>
      <textarea>${content}</textarea>
    `;
    return;
  }

  const isList = content.includes("- ");
  sectionContent.innerHTML = `
    <h3>${section[0].toUpperCase()}${section.slice(1)}</h3>
    ${isList ? `<pre>${content}</pre>` : `<p>${content}</p>`}
  `;
}

function renderNav(role) {
  const sections = Object.keys(roleConfig[role].sections);
  navLinks.innerHTML = "";
  sections.forEach((section) => {
    const btn = document.createElement("button");
    btn.textContent = section[0].toUpperCase() + section.slice(1);
    btn.className = section === currentSection ? "active" : "";
    btn.addEventListener("click", () => {
      currentSection = section;
      renderNav(role);
      renderSection(role, section);
    });
    navLinks.appendChild(btn);
  });
}

function openDashboard(role, name = "User") {
  currentRole = role;
  currentName = name;
  currentSection = "dashboard";

  authView.classList.remove("active");
  authView.classList.add("hidden");
  dashboardView.classList.add("active");

  welcomeTitle.textContent = `Welcome, ${name}`;
  rolePill.textContent = role;
  userMeta.textContent = `${name} · ${role}`;

  renderCards(role);
  renderNav(role);
  renderSection(role, currentSection);
}

function logout() {
  dashboardView.classList.remove("active");
  authView.classList.remove("hidden");
  authView.classList.add("active");
}

tabButtons.forEach((btn) => {
  btn.addEventListener("click", () => toggleAuth(btn.dataset.tab));
});

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const role = document.getElementById("loginRole").value;
  openDashboard(role, "Welcome Back");
});

registerForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const role = document.getElementById("registerRole").value;
  const name = document.getElementById("nameInput").value || "New User";
  openDashboard(role, name);
});

logoutBtn.addEventListener("click", logout);
