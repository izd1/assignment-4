let jobs = [
  {
    id: 1,
    company: "PixelForge Labs",
    position: "Mobile App Developer",
    location: "Remote",
    type: "Full-time",
    salary: "$125,000 - $165,000",
    description:
      "Develop high-performance mobile applications using modern frameworks. Collaborate with product and design teams to ship scalable apps.",
    status: "not-applied",
  },
  {
    id: 2,
    company: "BrightPath Digital",
    position: "Frontend Engineer",
    location: "Chicago, IL",
    type: "Part-time",
    salary: "$85,000 - $115,000",
    description:
      "Build responsive and accessible web interfaces. Strong knowledge of modern CSS frameworks and JavaScript required.",
    status: "not-applied",
  },
  {
    id: 3,
    company: "Insight Analytics",
    position: "Business Intelligence Developer",
    location: "Denver, CO",
    type: "Full-time",
    salary: "$120,000 - $155,000",
    description:
      "Create dashboards and reports that drive strategic decisions. Experience with data modeling and visualization tools preferred.",
    status: "not-applied",
  },
  {
    id: 4,
    company: "SkyNet Systems",
    position: "Software Engineer (Backend)",
    location: "Dallas, TX",
    type: "Full-time",
    salary: "$135,000 - $175,000",
    description:
      "Develop secure APIs and scalable server-side applications. Experience with Node.js, databases, and cloud platforms required.",
    status: "not-applied",
  },
  {
    id: 5,
    company: "EcoWave Technologies",
    position: "Full Stack Engineer",
    location: "Portland, OR",
    type: "Full-time",
    salary: "$115,000 - $150,000",
    description:
      "Work across frontend and backend systems to build sustainable digital products. Experience with React and Python preferred.",
    status: "not-applied",
  },
  {
    id: 6,
    company: "FinEdge Corp",
    position: "JavaScript Developer",
    location: "Atlanta, GA",
    type: "Hybrid",
    salary: "$105,000 - $140,000",
    description:
      "Develop interactive financial web applications. Strong understanding of modern JavaScript frameworks required.",
    status: "not-applied",
  },
  {
    id: 7,
    company: "MedNova AI",
    position: "AI Software Engineer",
    location: "San Diego, CA",
    type: "Full-time",
    salary: "$150,000 - $200,000",
    description:
      "Design and deploy intelligent systems for healthcare applications. Experience with machine learning frameworks preferred.",
    status: "not-applied",
  },
  {
    id: 8,
    company: "Learn Tech",
    position: "Product Designer (UI/UX)",
    location: "Remote",
    type: "Contract",
    salary: "$95,000 - $125,000",
    description:
      "Design intuitive and engaging user experiences for educational platforms. Strong portfolio and Figma expertise required.",
    status: "not-applied",
  },
];

let activeTab = "all";

const jobsList = document.getElementById("jobs-list");
const jobsCountEl = document.getElementById("jobs-count");
const statTotal = document.getElementById("stat-total");
const statInterview = document.getElementById("stat-interview");
const statRejected = document.getElementById("stat-rejected");

function badgeHTML(status) {
  if (status === "interview") {
    return `<span class="badge badge-sm font-semibold uppercase tracking-wide bg-green-100 text-green-700 border-0 py-3 px-3">Interview</span>`;
  }
  if (status === "rejected") {
    return `<span class="badge badge-sm font-semibold uppercase tracking-wide bg-red-100 text-red-700 border-0 py-3 px-3">Rejected</span>`;
  }
  return `<span class="badge badge-sm font-semibold uppercase tracking-wide bg-slate-100 text-slate-500 border-0 py-3 px-3">Not Applied</span>`;
}

function renderCard(job) {
  const iActive = job.status === "interview";
  const rActive = job.status === "rejected";

  return `
  <div class="job-card card bg-base-100 border border-slate-200 shadow-sm hover:shadow-md transition-shadow mb-4" data-id="${job.id}">
    <div class="card-body p-5 sm:p-6 gap-0">

      <!-- card infos -->
      <div class="flex items-start justify-between gap-3">
        <div>
          <h3 class="font-bold text-slate-800 text-base">${job.company}</h3>
          <p class="text-sm text-slate-500 mt-0.5">${job.position}</p>
        </div>
        <button
          class="btn btn-ghost btn-sm btn-square hover:bg-red-400 shrink-0"
          data-action="delete" data-id="${job.id}" title="Remove">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M262.2 48C248.9 48 236.9 56.3 232.2 68.8L216 112L120 112C106.7 112 96 122.7 96 136C96 149.3 106.7 160 120 160L520 160C533.3 160 544 149.3 544 136C544 122.7 533.3 112 520 112L424 112L407.8 68.8C403.1 56.3 391.2 48 377.8 48L262.2 48zM128 208L128 512C128 547.3 156.7 576 192 576L448 576C483.3 576 512 547.3 512 512L512 208L464 208L464 512C464 520.8 456.8 528 448 528L192 528C183.2 528 176 520.8 176 512L176 208L128 208zM288 280C288 266.7 277.3 256 264 256C250.7 256 240 266.7 240 280L240 456C240 469.3 250.7 480 264 480C277.3 480 288 469.3 288 456L288 280zM400 280C400 266.7 389.3 256 376 256C362.7 256 352 266.7 352 280L352 456C352 469.3 362.7 480 376 480C389.3 480 400 469.3 400 456L400 280z"/></svg>
        </button>
      </div>

      <div class="flex flex-wrap text-xs text-slate-400 mt-2 gap-x-1">
        <span>${job.location}</span>
        <span>•</span>
        <span>${job.type}</span>
        <span>•</span>
        <span>${job.salary}</span>
      </div>

      <div class="mt-3">${badgeHTML(job.status)}</div>
      <p class="text-sm text-slate-500 leading-relaxed mt-3">${job.description}</p>

      <div class="flex flex-wrap gap-2 mt-4">
        <button
          class="btn btn-sm rounded-lg ${iActive ? "btn-success text-white" : "btn-outline btn-success"}"
          data-action="interview" data-id="${job.id}">
          INTERVIEW
        </button>
        <button
          class="btn btn-sm rounded-lg ${rActive ? "btn-error text-white" : "btn-outline btn-error"}"
          data-action="rejected" data-id="${job.id}">
          REJECTED
        </button>
      </div>

    </div>
  </div>`;
}

function emptyState() {
  return `
  <div class="card bg-base-100 border border-slate-200 shadow-sm">
    <div class="card-body items-center text-center py-20 gap-0">
      <img src="assets/jobs.png" alt="pdf logo" class="w-16 h-16 mb-4 rounded-2xl">
      <h3 class="font-bold text-slate-700 text-lg">No jobs available</h3>
      <p class="text-sm text-slate-400 mt-1">Check back soon for new job opportunities</p>
    </div>
  </div>`;
}
