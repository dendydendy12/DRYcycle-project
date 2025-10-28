// ========================================
// DRYcycle Sidebar Navigation System
// File: assets/js/sidebar.js
// ========================================

// === SIDEBAR TOGGLE FUNCTIONALITY ===
const sidebar = document.getElementById('sidebar');
const sidebarOverlay = document.getElementById('sidebarOverlay');
const openSidebarBtn = document.getElementById('openSidebar');
const closeSidebarBtn = document.getElementById('closeSidebar');

// Open sidebar (mobile)
if (openSidebarBtn) {
    openSidebarBtn.addEventListener('click', () => {
        sidebar.classList.remove('-translate-x-full');
        sidebarOverlay.classList.remove('hidden');
        document.body.style.overflow = 'hidden'; // Prevent body scroll
    });
}

// Close sidebar (mobile)
if (closeSidebarBtn) {
    closeSidebarBtn.addEventListener('click', () => {
        sidebar.classList.add('-translate-x-full');
        sidebarOverlay.classList.add('hidden');
        document.body.style.overflow = ''; // Restore body scroll
    });
}

// Close sidebar when clicking overlay
if (sidebarOverlay) {
    sidebarOverlay.addEventListener('click', () => {
        sidebar.classList.add('-translate-x-full');
        sidebarOverlay.classList.add('hidden');
        document.body.style.overflow = '';
    });
}

// === PROFILE DROPDOWN FUNCTIONALITY ===
const profileBtn = document.getElementById('profileBtn');
const profileDropdown = document.getElementById('profileDropdown');

// Toggle dropdown
if (profileBtn && profileDropdown) {
    profileBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        profileDropdown.classList.toggle('show');
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (!profileBtn.contains(e.target) && !profileDropdown.contains(e.target)) {
            profileDropdown.classList.remove('show');
        }
    });

    // Prevent dropdown from closing when clicking inside it
    profileDropdown.addEventListener('click', (e) => {
        e.stopPropagation();
    });
}

// === ACTIVE NAVIGATION STATE ===
function setActiveNav() {
    // Ambil nama file saat ini, ubah ke huruf kecil agar cocok dengan data-page
    const currentPage = window.location.pathname.split('/').pop().replace('.html', '').toLowerCase() || 'dashboard';
    const navItems = document.querySelectorAll('.nav-item');

    navItems.forEach(item => {
        const itemPage = item.getAttribute('data-page')?.toLowerCase();

        // Cek kecocokan halaman
        if (itemPage === currentPage) {
            item.classList.remove('text-gray-600', 'hover:bg-gray-50', 'hover:text-gray-900');
            item.classList.add('bg-green-50', 'text-green-600');

            // Efek hover saat aktif
            item.addEventListener('mouseenter', () => {
                item.classList.add('bg-green-100');
            });
            item.addEventListener('mouseleave', () => {
                item.classList.remove('bg-green-100');
            });

        } else {
            item.classList.remove('bg-green-50', 'text-green-600', 'bg-green-100');
            item.classList.add('text-gray-600', 'hover:bg-gray-50', 'hover:text-gray-900');
        }
    });
}

// Set active navigation on page load
document.addEventListener('DOMContentLoaded', setActiveNav);

// === LOGOUT FUNCTIONALITY ===
const logoutBtnSidebar = document.getElementById('logoutBtnSidebar');
const logoutBtnDropdown = document.getElementById('logoutBtnDropdown');
const logoutModal = document.getElementById('logoutModal');
const confirmLogout = document.getElementById('confirmLogout');
const cancelLogout = document.getElementById('cancelLogout');

// Show logout modal from sidebar button
if (logoutBtnSidebar) {
    logoutBtnSidebar.addEventListener('click', () => {
        logoutModal.classList.remove('hidden');
        // Close sidebar on mobile if open
        if (sidebar) {
            sidebar.classList.add('-translate-x-full');
        }
        if (sidebarOverlay) {
            sidebarOverlay.classList.add('hidden');
        }
    });
}

// Show logout modal from dropdown button
if (logoutBtnDropdown) {
    logoutBtnDropdown.addEventListener('click', () => {
        logoutModal.classList.remove('hidden');
        // Close dropdown
        if (profileDropdown) {
            profileDropdown.classList.remove('show');
        }
    });
}

// Confirm logout
if (confirmLogout) {
    confirmLogout.addEventListener('click', () => {
        // Clear any stored user data
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        sessionStorage.clear();

        // Redirect to login page
        window.location.href = 'login.html';
    });
}

// Cancel logout
if (cancelLogout) {
    cancelLogout.addEventListener('click', () => {
        logoutModal.classList.add('hidden');
    });
}

// Close modal when clicking outside
if (logoutModal) {
    logoutModal.addEventListener('click', (e) => {
        if (e.target === logoutModal) {
            logoutModal.classList.add('hidden');
        }
    });
}

// === PAGE TITLE UPDATE (Optional) ===
const pageTitles = {
    'dashboard': 'Dashboard',
    'sampahtersedia': 'Item Tersedia',
    'upload': 'Upload Item',
    'booking': 'Booking Saya',
     'statusupload': 'Status Upload',
    'leaderboard': 'Leaderboard',
    'komunitas': 'Komunitas',
    'edukasi': 'Edukasi',
    'profile': 'Profil Saya',
    'settings': 'Pengaturan',
    'help': 'Bantuan',
    'blog': 'Blog',
    'notifikasi': 'Notifikasi',
   
};

function updatePageTitle() {
    const currentPage = window.location.pathname.split('/').pop().replace('.html', '').toLowerCase() || 'dashboard';
    const pageTitle = document.getElementById('pageTitle');

    if (pageTitle && pageTitles[currentPage]) {
        pageTitle.textContent = pageTitles[currentPage];
    }
}

// Update page title on load
document.addEventListener('DOMContentLoaded', updatePageTitle);

// === CLOSE SIDEBAR ON NAVIGATION (Mobile) ===
const navLinks = document.querySelectorAll('.nav-item');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Only close on mobile
        if (window.innerWidth < 1024) {
            if (sidebar) {
                sidebar.classList.add('-translate-x-full');
            }
            if (sidebarOverlay) {
                sidebarOverlay.classList.add('hidden');
            }
            document.body.style.overflow = '';
        }
    });
});

// === RESPONSIVE HANDLER ===
function handleResize() {
    // If screen becomes desktop size, ensure sidebar is visible and overlay is hidden
    if (window.innerWidth >= 1024) {
        if (sidebar) {
            sidebar.classList.remove('-translate-x-full');
        }
        if (sidebarOverlay) {
            sidebarOverlay.classList.add('hidden');
        }
        document.body.style.overflow = '';
    } else {
        // On mobile, ensure sidebar is hidden by default
        if (sidebar && !sidebar.classList.contains('-translate-x-full')) {
            sidebar.classList.add('-translate-x-full');
        }
    }
}

// Listen for window resize
window.addEventListener('resize', handleResize);

// Run on initial load
handleResize();

// === SEARCH FUNCTIONALITY (Optional Enhancement) ===
const searchInput = document.querySelector('input[placeholder="Cari..."]');
if (searchInput) {
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const searchQuery = e.target.value.trim();
            if (searchQuery) {
                // Implement your search functionality here
                console.log('Searching for:', searchQuery);
                // Example: window.location.href = `search.html?q=${encodeURIComponent(searchQuery)}`;
            }
        }
    });
}

// === NOTIFICATION BADGE (Optional Enhancement) ===
// You can dynamically update notification count
function updateNotificationBadge(count) {
    const notificationBadge = document.querySelector('.bg-red-500.rounded-full');
    if (notificationBadge && count > 0) {
        notificationBadge.style.display = 'block';
    } else if (notificationBadge && count === 0) {
        notificationBadge.style.display = 'none';
    }
}

// === USER INFO UPDATE (Optional) ===
function updateUserInfo() {
    const user = JSON.parse(localStorage.getItem('user') || '{}');

    if (user.name) {
        const userNameElements = document.querySelectorAll('.text-sm.font-semibold.text-gray-900');
        userNameElements.forEach(el => {
            if (el.textContent.includes('Budi Santoso')) {
                el.textContent = user.name;
            }
        });
    }

    if (user.email) {
        const emailElement = document.querySelector('.text-xs.text-gray-500');
        if (emailElement && emailElement.textContent.includes('@')) {
            emailElement.textContent = user.email;
        }
    }

    if (user.level) {
        const levelBadges = document.querySelectorAll('.bg-green-100.text-green-700');
        levelBadges.forEach(badge => {
            if (badge.textContent.includes('Level')) {
                badge.textContent = `Level ${user.level}`;
            }
        });
    }

    if (user.points) {
        const pointBadges = document.querySelectorAll('.bg-yellow-100.text-yellow-700');
        pointBadges.forEach(badge => {
            if (badge.textContent.includes('Poin')) {
                badge.textContent = `${user.points} Poin`;
            }
        });
    }
}

document.addEventListener('DOMContentLoaded', updateUserInfo);

// === CONSOLE INFO ===
console.log('✅ DRYcycle Sidebar System Loaded');
console.log('📱 Responsive sidebar ready');
console.log('👤 Profile dropdown ready');
console.log('🔐 Logout functionality ready');
