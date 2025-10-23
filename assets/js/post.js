
  const postBtn = document.getElementById("postBtn");
  const postInput = document.getElementById("postInput");
  const imgInput = document.getElementById("imgInput");
  const imgPreview = document.getElementById("imgPreview");
  const previewImg = document.getElementById("previewImg");
  const alertBox = document.getElementById("alertBox");
  const feed = document.getElementById("feed");

  let selectedImage = "";
  imgInput.addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      selectedImage = reader.result;
      previewImg.src = selectedImage;
      imgPreview.classList.remove("hidden");
    };
    reader.readAsDataURL(file);
  });

  let posts = [
    {
      user: "Rina Wulandari",
      text: "Aku baru coba bikin pot bunga dari botol bekas minyak goreng ",
      img: "assets/image/userprofile/potbunga.jpg",
      time: "2 jam yang lalu",
      likes: 12,
      comments: ["Keren banget idenya! ", "Pengen coba juga nih! "]
    },
    {
      user: "Rehan",
      text: "Ada yang tau tempat daur ulang plastik di sekitar Bogor gak? ",
      img: "",
      time: "4 jam yang lalu",
      likes: 5,
      comments: ["Coba cek ke bank sampah deh bro "]
    }
  ];

  function renderPosts() {
    feed.innerHTML = "";
    posts.forEach((p, i) => {
      const post = document.createElement("div");
      post.className = "bg-white rounded-2xl shadow-sm p-6";

      let commentsHTML = "";
      if (p.comments && p.comments.length > 0) {
        commentsHTML = p.comments
          .map(c => `<p class="bg-gray-50 border border-gray-100 p-2 rounded-lg text-sm text-gray-700">${c}</p>`)
          .join("");
      }

      post.innerHTML = `
        <div class="flex items-center mb-3">
        <img src="assets/image/userprofile/user${i + 1}.png" 
        onerror="this.onerror=null;this.src='assets/image/userprofile/default.png';"
        class="w-10 h-10 rounded-full mr-3" alt="user">

          <div>
            <p class="text-sm font-semibold text-gray-800">${p.user}</p>
            <p class="text-xs text-gray-400">${p.time}</p>
          </div>
        </div>
        <p class="text-gray-700 text-sm leading-relaxed">${p.text}</p>
        ${p.img ? `<img src="${p.img}" class="rounded-xl mt-3 shadow border border-gray-100" alt="post image">` : ""}
        <div class="flex items-center justify-between mt-4 text-gray-500 text-sm">
          <div class="flex items-center gap-4">
            <button onclick="likePost(${i})" class="hover:text-emerald-600 transition flex items-center gap-1">
              ❤️ ${p.likes}
            </button>
            <button onclick="toggleComments(${i})" class="hover:text-emerald-600 transition flex items-center gap-1">
              💬 ${p.comments.length} Komentar
            </button>
          </div>
          <button onclick="deletePost(${i})" class="hover:text-red-600 transition text-xs">Hapus</button>
        </div>

        <div id="commentSection-${i}" class="hidden mt-4 border-t border-gray-100 pt-3">
          <div class="space-y-2 mb-3">${commentsHTML}</div>
          <div class="flex gap-2">
            <input id="commentInput-${i}" type="text" placeholder="Tulis komentar..." 
              class="flex-1 border border-gray-200 rounded-lg p-2 text-sm focus:ring-2 focus:ring-emerald-500">
            <button onclick="addComment(${i})" 
              class="px-3 py-1 bg-emerald-600 text-white text-sm rounded-lg hover:bg-emerald-700">Kirim</button>
          </div>
        </div>
      `;

      feed.prepend(post);
    });
  }

  function likePost(i) {
    posts[i].likes++;
    renderPosts();
  }

  function deletePost(i) {
    posts.splice(i, 1);
    renderPosts();
  }

  function toggleComments(i) {
    const section = document.getElementById(`commentSection-${i}`);
    section.classList.toggle("hidden");
  }

  function addComment(i) {
    const input = document.getElementById(`commentInput-${i}`);
    const comment = input.value.trim();
    if (!comment) return;
    posts[i].comments.push(comment);
    input.value = "";
    renderPosts();
    document.getElementById(`commentSection-${i}`).classList.remove("hidden");
  }

  postBtn.addEventListener("click", () => {
    const text = postInput.value.trim();
    if (!text) {
      alertBox.classList.remove("hidden");
      setTimeout(() => alertBox.classList.add("hidden"), 3000);
      return;
    }

    posts.push({
      user: "Kamu",
      text,
      img: selectedImage,
      time: "Baru saja",
      likes: 0,
      comments: []
    });

    postInput.value = "";
    imgPreview.classList.add("hidden");
    selectedImage = "";
    imgInput.value = "";
    renderPosts();
  });

  renderPosts();

