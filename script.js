// ==========================================
// 1. DEFAULT STUDENT DATA (DEMO + FALLBACK)
// ==========================================
let studentsData = [
  {
    id: "STU01",
    name: "Arjun Nair",
    rfid: "A4-92-11-08",
    className: "Class XII - Science",
    roll: "14",
    totalDays: 150,
    presentDays: 138,
    lateDays: 3,
    todayTime: "08:14 AM",
    todayStatus: "Present",
    results: [
      { subject: "Physics", marks: 91, max: 100, grade: "A1" },
      { subject: "Mathematics", marks: 94, max: 100, grade: "A1" },
      { subject: "Chemistry", marks: 85, max: 100, grade: "A2" },
      { subject: "Computer Science (Python)", marks: 96, max: 100, grade: "A1" },
      { subject: "English Core", marks: 82, max: 100, grade: "A2" }
    ],
    funds: [
      { category: "Annual Tuition & Lab Fee", total: "₹18,000", paid: "₹18,000", due: "₹0", status: "Paid" },
      { category: "IT & Robotics Exhibition Fund", total: "₹1,500", paid: "₹1,500", due: "₹0", status: "Paid" },
      { category: "PTA & Student Welfare Fund", total: "₹1,000", paid: "₹1,000", due: "₹0", status: "Paid" }
    ],
    logs: [
      { date: "Today", time: "08:14 AM", gate: "Main Gate Reader #01", status: "Present" },
      { date: "Yesterday", time: "08:19 AM", gate: "Main Gate Reader #01", status: "Present" },
      { date: "11 Nov 2026", time: "08:36 AM", gate: "Science Block #02", status: "Late" },
      { date: "10 Nov 2026", time: "08:11 AM", gate: "Main Gate Reader #01", status: "Present" }
    ]
  },
  {
    id: "STU02",
    name: "Meera Krishnan",
    rfid: "B7-41-89-2C",
    className: "Class XII - Science",
    roll: "22",
    totalDays: 150,
    presentDays: 144,
    lateDays: 1,
    todayTime: "08:09 AM",
    todayStatus: "Present",
    results: [
      { subject: "Physics", marks: 89, max: 100, grade: "A2" },
      { subject: "Mathematics", marks: 92, max: 100, grade: "A1" },
      { subject: "Chemistry", marks: 94, max: 100, grade: "A1" },
      { subject: "Computer Science (Python)", marks: 95, max: 100, grade: "A1" },
      { subject: "English Core", marks: 90, max: 100, grade: "A1" }
    ],
    funds: [
      { category: "Annual Tuition & Lab Fee", total: "₹18,000", paid: "₹18,000", due: "₹0", status: "Paid" },
      { category: "IT & Robotics Exhibition Fund", total: "₹1,500", paid: "₹1,000", due: "₹500", status: "Pending" },
      { category: "PTA & Student Welfare Fund", total: "₹1,000", paid: "₹1,000", due: "₹0", status: "Paid" }
    ],
    logs: [
      { date: "Today", time: "08:09 AM", gate: "Main Gate Reader #01", status: "Present" },
      { date: "Yesterday", time: "08:12 AM", gate: "Main Gate Reader #01", status: "Present" },
      { date: "11 Nov 2026", time: "08:15 AM", gate: "Main Gate Reader #01", status: "Present" }
    ]
  }
];

const weeklyTimetable = {
  Monday: [
    { time: "08:30 - 09:20", subject: "Physics", room: "Lab 2", teacher: "Dr. R. Menon" },
    { time: "09:20 - 10:10", subject: "Mathematics", room: "Room 304", teacher: "Prof. S. Varma" },
    { time: "10:30 - 11:20", subject: "Computer Science", room: "IT Lab", teacher: "Ms. Anjali K." },
    { time: "11:20 - 12:10", subject: "Chemistry", room: "Room 304", teacher: "Mr. P. George" }
  ],
  Tuesday: [
    { time: "08:30 - 09:20", subject: "Mathematics", room: "Room 304", teacher: "Prof. S. Varma" },
    { time: "09:20 - 10:10", subject: "English Core", room: "Room 304", teacher: "Mrs. L. Thomas" },
    { time: "10:30 - 11:20", subject: "Physics Practical", room: "Physics Lab", teacher: "Dr. R. Menon" },
    { time: "11:20 - 12:10", subject: "Computer Science", room: "IT Lab", teacher: "Ms. Anjali K." }
  ],
  Wednesday: [
    { time: "08:30 - 09:20", subject: "Chemistry", room: "Chem Lab", teacher: "Mr. P. George" },
    { time: "09:20 - 10:10", subject: "Physics", room: "Room 304", teacher: "Dr. R. Menon" },
    { time: "10:30 - 11:20", subject: "Mathematics", room: "Room 304", teacher: "Prof. S. Varma" },
    { time: "11:20 - 12:10", subject: "Library / Project Work", room: "Innovation Hub", teacher: "Ms. Anjali K." }
  ],
  Thursday: [
    { time: "08:30 - 09:20", subject: "Computer Science", room: "IT Lab", teacher: "Ms. Anjali K." },
    { time: "09:20 - 10:10", subject: "Chemistry", room: "Room 304", teacher: "Mr. P. George" },
    { time: "10:30 - 11:20", subject: "English Core", room: "Room 304", teacher: "Mrs. L. Thomas" },
    { time: "11:20 - 12:10", subject: "Physics", room: "Room 304", teacher: "Dr. R. Menon" }
  ],
  Friday: [
    { time: "08:30 - 09:20", subject: "Mathematics", room: "Room 304", teacher: "Prof. S. Varma" },
    { time: "09:20 - 10:10", subject: "Computer Practical", room: "IT Lab", teacher: "Ms. Anjali K." },
    { time: "10:30 - 11:20", subject: "Physics", room: "Room 304", teacher: "Dr. R. Menon" },
    { time: "11:20 - 12:10", subject: "Club & Smart Campus Meet", room: "Auditorium", teacher: "All Faculty" }
  ]
};

const announcementsData = [
  {
    title: "IT Project Submission & Live Demo — 16 November",
    date: "13 Nov 2026",
    tag: "IMPORTANT",
    body: "All Class XII Computer Science teams must finalize their hardware-software integration (RFID, IoT, and Google Sheets dashboards) before 9:00 AM on 16 November."
  },
  {
    title: "CBSE Board Exam Registration Verification",
    date: "10 Nov 2026",
    tag: "ACADEMIC",
    body: "Students are requested to verify their subject codes, spelling of names, and photograph specifications at the administrative office."
  },
  {
    title: "Smart Campus RFID Gate Upgrade Complete",
    date: "05 Nov 2026",
    tag: "SYSTEM",
    body: "High-speed UHF RFID readers are now active at Gate 1 and the Science Block. Attendance syncs automatically to student portals."
  }
];

let currentStudentIndex = 0;

// ==========================================
// 2. INITIALIZATION & NAVIGATION
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  populateStudentDropdown();
  renderAll();
  renderTimetable("Monday");
  renderAnnouncements();
  startLiveClock();
  setupNavigation();
  setupRfidSimulator();
  setupGoogleSheetModal();
});

function populateStudentDropdown() {
  const select = document.getElementById("studentSelect");
  select.innerHTML = "";
  studentsData.forEach((stu, idx) => {
    const opt = document.createElement("option");
    opt.value = idx;
    opt.textContent = `${stu.name} (${stu.rfid})`;
    select.appendChild(opt);
  });

  select.addEventListener("change", (e) => {
    currentStudentIndex = parseInt(e.target.value, 10);
    renderAll();
  });
}

function setupNavigation() {
  const navBtns = document.querySelectorAll(".nav-btn");
  const sections = document.querySelectorAll(".tab-section");

  navBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      navBtns.forEach((b) => b.classList.remove("active"));
      sections.forEach((s) => s.classList.remove("active"));

      btn.classList.add("active");
      const targetId = btn.getAttribute("data-tab");
      document.getElementById(targetId).classList.add("active");
    });
  });
}

// ==========================================
// 3. RENDER STUDENT DATA ACROSS TABS
// ==========================================
function renderAll() {
  const s = studentsData[currentStudentIndex];
  const percentage = Math.round((s.presentDays / s.totalDays) * 100);
  const absentDays = Math.max(0, s.totalDays - s.presentDays);

  // Welcome Banner
  document.getElementById("studentRfidTag").textContent = `RFID UID: #${s.rfid}`;
  document.getElementById("welcomeName").textContent = `Welcome back, ${s.name}`;
  document.getElementById("studentMeta").textContent = `${s.className} • Roll No: ${s.roll}`;
  document.getElementById("todayStatusBadge").innerHTML = `<i class="fa-solid fa-check-circle"></i> ${s.todayStatus} Today (${s.todayTime})`;

  // Dashboard KPIs
  document.getElementById("dashPercent").textContent = `${percentage}%`;
  document.getElementById("dashPresent").textContent = s.presentDays;
  document.getElementById("dashTotal").textContent = s.totalDays;

  // Progress Ring Math
  const circle = document.getElementById("attendanceCircle");
  const radius = circle.r.baseVal.value;
  const circumference = radius * 2 * Math.PI;
  circle.style.strokeDasharray = `${circumference} ${circumference}`;
  const offset = circumference - (percentage / 100) * circumference;
  circle.style.strokeDashoffset = offset;

  // Average Exam Score
  const avgMarks = (s.results.reduce((sum, r) => sum + r.marks, 0) / s.results.length).toFixed(1);
  document.getElementById("dashGrade").textContent = `${avgMarks}%`;

  // Funds Summary
  const pendingFund = s.funds.find((f) => f.status !== "Paid");
  if (pendingFund) {
    document.getElementById("dashFunds").textContent = pendingFund.due;
    document.getElementById("dashFundSub").textContent = "Pending Balance";
    document.getElementById("dashFundSub").className = "stat-sub text-amber";
  } else {
    document.getElementById("dashFunds").textContent = "₹0 Due";
    document.getElementById("dashFundSub").textContent = "All Term Fees Cleared";
    document.getElementById("dashFundSub").className = "stat-sub good";
  }

  // Recent Logs on Dashboard
  const recentLogsList = document.getElementById("recentLogsList");
  recentLogsList.innerHTML = s.logs
    .slice(0, 4)
    .map(
      (log) => `
      <div class="log-item">
        <div>
          <strong>${log.date}</strong> • <span style="color:var(--text-muted); font-size:0.85rem;">${log.gate}</span>
        </div>
        <div>
          <span style="margin-right:10px; font-weight:600;">${log.time}</span>
          <span class="pill-badge ${log.status === "Late" ? "pill-late" : "pill-present"}">${log.status}</span>
        </div>
      </div>
    `
    )
    .join("");

  // Attendance Tab
  document.getElementById("attTabPresent").textContent = s.presentDays;
  document.getElementById("attTabAbsent").textContent = absentDays;
  document.getElementById("attTabLate").textContent = s.lateDays;
  document.getElementById("attTabPercent").textContent = `${((s.presentDays / s.totalDays) * 100).toFixed(1)}%`;

  const attTable = document.getElementById("attendanceTableBody");
  attTable.innerHTML = s.logs
    .map(
      (log) => `
      <tr>
        <td>${log.date}</td>
        <td><code>#${s.rfid}</code></td>
        <td>${log.time}</td>
        <td>${log.gate}</td>
        <td><span class="pill-badge ${log.status === "Late" ? "pill-late" : "pill-present"}">${log.status}</span></td>
      </tr>
    `
    )
    .join("");

  // Results Tab
  const resultsGrid = document.getElementById("resultsGrid");
  resultsGrid.innerHTML = s.results
    .map(
      (res) => `
      <div class="subject-card">
        <div class="subject-top">
          <h4>${res.subject}</h4>
          <span class="pill-badge pill-present">${res.grade}</span>
        </div>
        <div style="font-size:1.5rem; font-weight:800; margin-bottom:10px;">
          ${res.marks} <span style="font-size:0.9rem; color:var(--text-muted);">/ ${res.max}</span>
        </div>
        <div class="bar-track">
          <div class="bar-fill" style="width:${(res.marks / res.max) * 100}%"></div>
        </div>
      </div>
    `
    )
    .join("");

  // Funds Tab
  const fundsBody = document.getElementById("fundsTableBody");
  fundsBody.innerHTML = s.funds
    .map(
      (f) => `
      <tr>
        <td><strong>${f.category}</strong></td>
        <td>${f.total}</td>
        <td>${f.paid}</td>
        <td>${f.due}</td>
        <td><span class="pill-badge ${f.status === "Paid" ? "pill-present" : "pill-late"}">${f.status}</span></td>
      </tr>
    `
    )
    .join("");
}

function renderTimetable(day) {
  const container = document.getElementById("timetableContainer");
  const periods = weeklyTimetable[day] || [];
  container.innerHTML = periods
    .map(
      (p) => `
      <div class="period-card">
        <span class="period-time"><i class="fa-regular fa-clock"></i> ${p.time}</span>
        <h3 style="margin: 8px 0 4px;">${p.subject}</h3>
        <p style="color:var(--text-muted); font-size:0.85rem;">${p.teacher} • <strong>${p.room}</strong></p>
      </div>
    `
    )
    .join("");

  document.querySelectorAll(".day-pill").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.day === day);
    btn.onclick = () => renderTimetable(btn.dataset.day);
  });
}

function renderAnnouncements() {
  const miniList = document.getElementById("dashNoticeList");
  miniList.innerHTML = announcementsData
    .map(
      (a) => `
      <div class="notice-mini-item">
        <div>
          <div style="font-weight:700; font-size:0.88rem;">${a.title}</div>
          <small style="color:var(--text-muted);">${a.date}</small>
        </div>
        <span class="badge-tag">${a.tag}</span>
      </div>
    `
    )
    .join("");

  const fullList = document.getElementById("fullAnnouncementsList");
  fullList.innerHTML = announcementsData
    .map(
      (a) => `
      <div class="announcement-card">
        <div style="display:flex; justify-content:space-between; margin-bottom:6px;">
          <span class="badge-tag">${a.tag}</span>
          <small style="color:var(--text-muted);">${a.date}</small>
        </div>
        <h4>${a.title}</h4>
        <p>${a.body}</p>
      </div>
    `
    )
    .join("");
}

// ==========================================
// 4. SIMULATE RFID CARD TAP (FOR PRESENTATION)
// ==========================================
function setupRfidSimulator() {
  const simBtn = document.getElementById("simulateScanBtn");
  simBtn.addEventListener("click", () => {
    const s = studentsData[currentStudentIndex];
    const now = new Date();
    const timeString = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" });

    s.presentDays += 1;
    s.totalDays += 1;
    s.todayTime = timeString;
    s.todayStatus = "Present";
    s.logs.unshift({
      date: "Just Now (Live Scan)",
      time: timeString,
      gate: "RFID Reader #01",
      status: "Present"
    });

    renderAll();
    showToast(`RFID Scanned: ${s.name} (#${s.rfid}) marked Present at ${timeString}`);
  });
}

function showToast(message) {
  const toast = document.getElementById("rfidToast");
  document.getElementById("rfidToastMsg").textContent = message;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 3500);
}

// ==========================================
// 5. CONNECT TO GOOGLE SHEET (CSV FETCH)
// ==========================================
function setupGoogleSheetModal() {
  const modal = document.getElementById("sheetModal");
  const openBtn = document.getElementById("openSheetModalBtn");
  const closeBtn = document.getElementById("closeModalBtn");
  const saveBtn = document.getElementById("saveSheetUrlBtn");
  const demoBtn = document.getElementById("loadDemoBtn");
  const input = document.getElementById("sheetUrlInput");

  const savedUrl = localStorage.getItem("rfid_google_sheet_csv");
  if (savedUrl) {
    input.value = savedUrl;
    fetchGoogleSheetData(savedUrl);
  }

  openBtn.onclick = () => modal.classList.add("open");
  closeBtn.onclick = () => modal.classList.remove("open");

  saveBtn.onclick = () => {
    const url = input.value.trim();
    if (!url) return alert("Please paste a valid Published Google Sheet CSV link.");
    localStorage.setItem("rfid_google_sheet_csv", url);
    fetchGoogleSheetData(url);
    modal.classList.remove("open");
  };

  demoBtn.onclick = () => {
    localStorage.removeItem("rfid_google_sheet_csv");
    location.reload();
  };
}

async function fetchGoogleSheetData(csvUrl) {
  try {
    const proxyUrl = `https://api.allorigins.win/raw?url=${encodeURIComponent(csvUrl)}`;
    const response = await fetch(proxyUrl);
    const csvText = await response.text();
    
    const rows = csvText
      .split("\n")
      .map((row) => row.split(",").map((cell) => cell.trim().replace(/^"|"$/g, "")));

    // Skip header row: RFID UID, Student Name, Date and Time
    const rawLogs = rows.slice(1).filter((r) => r.length >= 3 && r[0] !== "");

    if (rawLogs.length === 0) {
      showToast("Sheet is empty or CSV format is invalid.");
      return;
    }

    const studentMap = {};
    const totalSchoolDays = 150;

    rawLogs.forEach((row) => {
      const rfid = row[0];
      const name = row[1];
      const dateTime = row[2];
      const parts = dateTime ? dateTime.split(" ") : ["Recent", "00:00:00"];
      const datePart = parts[0];
      const timePart = parts[1] || "";

      if (!studentMap[rfid]) {
        studentMap[rfid] = {
          id: `STU_${rfid}`,
          name: name || "Unknown Student",
          rfid: rfid,
          className: "Class XII - Science",
          roll: `${Object.keys(studentMap).length + 1}`,
          totalDays: totalSchoolDays,
          uniqueDates: new Set(),
          lateDays: 0,
          todayTime: timePart,
          todayStatus: "Present",
          results: [
            { subject: "Physics", marks: 91, max: 100, grade: "A1" },
            { subject: "Mathematics", marks: 94, max: 100, grade: "A1" },
            { subject: "Chemistry", marks: 85, max: 100, grade: "A2" },
            { subject: "Computer Science", marks: 96, max: 100, grade: "A1" }
          ],
          funds: [
            { category: "Annual Lab & Tuition Fee", total: "₹18,000", paid: "₹18,000", due: "₹0", status: "Paid" }
          ],
          logs: []
        };
      }

      if (datePart) {
        studentMap[rfid].uniqueDates.add(datePart);
      }

      studentMap[rfid].logs.unshift({
        date: datePart,
        time: timePart,
        gate: "Main Gate RFID #01",
        status: "Present"
      });
      studentMap[rfid].todayTime = timePart;
    });

    studentsData = Object.values(studentMap).map((stu) => ({
      ...stu,
      presentDays: Math.max(1, stu.uniqueDates.size)
    }));

    currentStudentIndex = 0;
    populateStudentDropdown();
    renderAll();

    document.getElementById("syncDot").classList.add("connected");
    document.getElementById("syncStatusText").textContent = "Google Sheet Synced";
    showToast(`Successfully loaded ${studentsData.length} students from sheet!`);
  } catch (err) {
    console.error("Sheet fetch error:", err);
    showToast("Sync failed. Check console or CSV link.");
  }
}

function startLiveClock() {
  const clockEl = document.getElementById("liveClock");
  setInterval(() => {
    clockEl.textContent = new Date().toLocaleTimeString();
  }, 1000);
}
