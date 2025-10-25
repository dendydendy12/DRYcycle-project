
  const players = [
  { rank: 4, name: "Putri", xp: 810, level: 7, last: "3 jam lalu", avatar: "assets/image/userprofile/user4.png" },
  { rank: 5, name: "Farhan", xp: 790, level: 6, last: "6 jam lalu", avatar: "assets/image/userprofile/user5.png" },
  { rank: 6, name: "Budi Santoso", xp: 770, level: 6, last: "1 hari lalu", avatar: "assets/image/userprofile/user6.png" },
  { rank: 7, name: "Dewi", xp: 740, level: 5, last: "2 hari lalu", avatar: "assets/image/userprofile/user7.png" },
  { rank: 8, name: "Nanda", xp: 700, level: 5, last: "3 hari lalu", avatar: "assets/image/userprofile/user8.png" },
  { rank: 9, name: "Rafli", xp: 690, level: 4, last: "4 hari lalu", avatar: "assets/image/userprofile/user9.png" },
  { rank: 10, name: "Lina", xp: 660, level: 4, last: "5 hari lalu", avatar: "assets/image/userprofile/user10.png" },
  { rank: 11, name: "Dimas", xp: 640, level: 3, last: "1 minggu lalu", avatar: "assets/image/userprofile/user11.png" },
  { rank: 12, name: "Alya", xp: 620, level: 3, last: "1 minggu lalu", avatar: "assets/image/userprofile/user12.png" },
  { rank: 13, name: "Zaki", xp: 610, level: 3, last: "1 minggu lalu", avatar: "assets/image/userprofile/user13.png" },
  { rank: 14, name: "Bella", xp: 600, level: 3, last: "1 minggu lalu", avatar: "assets/image/userprofile/user14.png" },
  { rank: 15, name: "Kevin", xp: 580, level: 2, last: "2 minggu lalu", avatar: "assets/image/userprofile/user15.png" },
  { rank: 16, name: "Dara", xp: 560, level: 2, last: "2 minggu lalu", avatar: "assets/image/userprofile/user16.png" },
  { rank: 17, name: "Fadil", xp: 550, level: 2, last: "2 minggu lalu", avatar: "assets/image/userprofile/user17.png" },
  { rank: 18, name: "Rina", xp: 540, level: 2, last: "3 minggu lalu", avatar: "assets/image/userprofile/user18.png" },
  { rank: 19, name: "Salsa", xp: 530, level: 2, last: "3 minggu lalu", avatar: "assets/image/userprofile/user19.png" },
  { rank: 20, name: "Ikhsan", xp: 520, level: 2, last: "3 minggu lalu", avatar: "assets/image/userprofile/user20.png" },
  { rank: 21, name: "Tia", xp: 510, level: 2, last: "4 minggu lalu", avatar: "assets/image/userprofile/user21.png" },
  { rank: 22, name: "Yoga", xp: 500, level: 2, last: "4 minggu lalu", avatar: "assets/image/userprofile/user22.png" },
  { rank: 23, name: "Dandi", xp: 490, level: 2, last: "4 minggu lalu", avatar: "assets/image/userprofile/user23.png" },
  { rank: 24, name: "Elsa", xp: 480, level: 2, last: "1 bulan lalu", avatar: "assets/image/userprofile/user24.png" },
  { rank: 25, name: "Bagas", xp: 470, level: 1, last: "1 bulan lalu", avatar: "assets/image/userprofile/user25.png" },
  { rank: 26, name: "Lutfi", xp: 460, level: 1, last: "1 bulan lalu", avatar: "assets/image/userprofile/user26.png" },
  { rank: 27, name: "Novi", xp: 450, level: 1, last: "1 bulan lalu", avatar: "assets/image/userprofile/user27.png" },
  { rank: 28, name: "Adit", xp: 440, level: 1, last: "1 bulan lalu", avatar: "assets/image/userprofile/user28.png" },
  { rank: 29, name: "Maya", xp: 430, level: 1, last: "1 bulan lalu", avatar: "assets/image/userprofile/user29.png" },
  { rank: 30, name: "Rafi", xp: 420, level: 1, last: "1 bulan lalu", avatar: "assets/image/userprofile/user30.png" },
  { rank: 31, name: "Anisa", xp: 410, level: 1, last: "1 bulan lalu", avatar: "assets/image/userprofile/user31.png" },
  { rank: 32, name: "Fikri", xp: 400, level: 1, last: "1 bulan lalu", avatar: "assets/image/userprofile/user32.png" },
  { rank: 33, name: "Wulan", xp: 390, level: 1, last: "2 bulan lalu", avatar: "assets/image/userprofile/user33.png" },
  { rank: 34, name: "Tegar", xp: 380, level: 1, last: "2 bulan lalu", avatar: "assets/image/userprofile/user34.png" },
  { rank: 35, name: "Siti", xp: 370, level: 1, last: "2 bulan lalu", avatar: "assets/image/userprofile/user35.png" }
];


  const list = document.getElementById("leaderboardList");

  function renderList(data) {
    list.innerHTML = data.map(p => `
      <div class="flex items-center bg-white rounded-2xl shadow-md px-4 py-4 hover:shadow-lg transition transform hover:-translate-y-1">
        <div class="text-xl font-bold text-green-500 w-10 text-center">${p.rank}</div>
        <img src="${p.avatar}" class="w-12 h-12 rounded-full border mr-4">
        <div class="flex-1">
          <h4 class="font-semibold text-gray-800">${p.name}</h4>
          <p class="text-sm text-gray-500">Level ${p.level} • ${p.last}</p>
          <div class="w-full bg-gray-200 h-2 rounded-full mt-2">
            <div class="h-full bg-green-400 rounded-full" style="width: ${p.xp / 10}%"></div>
          </div>
        </div>
        <div class="text-right ml-4">
          <p class="font-bold text-gray-800">${p.xp} XP</p>
        </div>
      </div>
    `).join('');
  }

  renderList(players);

  // Search filter
  document.getElementById("searchInput").addEventListener("input", e => {
    const key = e.target.value.toLowerCase();
    const filtered = players.filter(p => p.name.toLowerCase().includes(key));
    renderList(filtered);
  });
