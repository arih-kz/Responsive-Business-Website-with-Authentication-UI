 // DOM Elements
        const menuToggle = document.getElementById('menuToggle');
        const navMenu = document.getElementById('navMenu');
        const pages = document.querySelectorAll('.page');
        const navLinks = document.querySelectorAll('.nav-link');
        
        // Mobile menu toggle
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });
        
        // Show specific page and hide others
        function showPage(pageId) {
            pages.forEach(page => {
                page.classList.remove('active');
            });
            
            document.getElementById(pageId).classList.add('active');
            
            // Update active nav link
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            
            // Find and activate the corresponding nav link
            const activeLink = Array.from(navLinks).find(link => 
                link.getAttribute('onclick').includes(pageId)
            );
            
            if (activeLink) {
                activeLink.classList.add('active');
            }
            
            // Close mobile menu if open
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                menuToggle.classList.remove('active');
            }
            
            // Scroll to top
            window.scrollTo(0, 0);
        }
        
        // Form submissions
        document.getElementById('contactForm')?.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! We will get back to you soon.');
            this.reset();
        });
        
        document.getElementById('loginForm')?.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Login successful!');
            this.reset();
            showPage('home');
        });
        
        document.getElementById('registerForm')?.addEventListener('submit', function(e) {
            e.preventDefault();
            const password = document.getElementById('register-password').value;
            const confirm = document.getElementById('register-confirm').value;
            
            if (password !== confirm) {
                alert('Passwords do not match!');
                return;
            }
            
            alert('Registration successful! You can now login.');
            this.reset();
            showPage('login');
        });
        
        // Initialize page - show home section
        window.addEventListener('load', () => {
            document.getElementById('home').classList.add('active');
        });