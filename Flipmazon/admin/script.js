// === 1. GET ALL NECESSARY ELEMENTS ===

// Login Page
const loginPage = document.getElementById('login-page');
const loginForm = document.getElementById('login-form');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const loginError = document.getElementById('login-error');

// Admin Panel
const adminPanel = document.getElementById('admin-panel');
const logoutBtn = document.getElementById('logout-btn');

// Navigation & Content Switching
const navLinks = document.querySelectorAll('.nav-link');
const contentSections = document.querySelectorAll('.content-section');

// === 2. LOGIN LOGIC ===

loginForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent the form from reloading the page
    
    const email = emailInput.value;
    const password = passwordInput.value;
    
    // Check against the hardcoded values from your HTML
    if (email === 'admin@flipmazon.com' && password === '1136') {
        // Success: Hide login, show admin panel
        loginPage.style.display = 'none';
        adminPanel.style.display = 'flex'; // Use 'flex' as defined in your CSS
        loginError.style.display = 'none';
    } else {
        // Failure: Show error message
        loginError.style.display = 'block';
    }
});

// === 3. SIDEBAR NAVIGATION LOGIC ===

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent anchor link jump
        
        const targetId = link.dataset.target; // Get 'data-target' attribute value
        const targetContent = document.getElementById(targetId);

        // 1. Update active state for links
        navLinks.forEach(nav => nav.classList.remove('active'));
        link.classList.add('active');
        
        // 2. Show the correct content section
        contentSections.forEach(section => section.classList.remove('active'));
        if (targetContent) {
            targetContent.classList.add('active');
        }
    });
});

// === 4. LOGOUT LOGIC ===

logoutBtn.addEventListener('click', () => {
    // Hide admin panel, show login page
    adminPanel.style.display = 'none';
    loginPage.style.display = 'flex'; // Use 'flex' as defined in your CSS
    
    // Optional: Reset login form to its default state
    emailInput.value = 'admin@flipmazon.com';
    passwordInput.value = '1136';
    loginError.style.display = 'none';
});