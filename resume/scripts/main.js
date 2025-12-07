// ============================================
// DATA ARRAYS (Arrays con Objetos)
// ============================================

// Skills Array with SVG Icons
const skills = [
{ 
    name: 'HTML5',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="256" height="256" fill="none" viewBox="0 0 256 256">
            <rect width="256" height="256" fill="#E14E1D" rx="60"/><path fill="#fff" d="M48 38L56.6098 134.593H167.32L163.605 176.023L127.959 185.661L92.38 176.037L90.0012 149.435H57.9389L62.5236 200.716L127.951 218.888L193.461 200.716L202.244 102.655H85.8241L82.901 69.9448H205.041H205.139L208 38H48Z"/>
            <path fill="#EBEBEB" d="M128 38H48L56.6098 134.593H128V102.655H85.8241L82.901 69.9448H128V38Z"/>
            <path fill="#EBEBEB" d="M128 185.647L127.959 185.661L92.38 176.037L90.0012 149.435H57.9388L62.5236 200.716L127.951 218.888L128 218.874V185.647Z"/>
    </svg>`
},
{ 
    name: 'C#',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="256" height="256" fill="none" viewBox="0 0 256 256">
            <rect width="256" height="256" fill="#953CAD" rx="60"/>
            <path fill="#fff" d="M195.436 100.668V114.142H208.91V100.668H215.647V114.142H229.12V120.879H215.647V134.352H229.12V141.089H215.647V154.563H208.91V141.089H195.436V154.563H188.699V141.089H175.226V134.352H188.699V120.879H175.226V114.142H188.699V100.668H195.436ZM208.91 120.879H195.436V134.352H208.91V120.879Z"/>
            <path fill="#fff" d="M122.001 33C157.144 33 187.828 52.0863 204.262 80.4561L204.102 80.183L162.753 103.991C154.607 90.1977 139.672 80.8892 122.54 80.6975L122.001 80.6945C95.875 80.6945 74.6945 101.874 74.6945 127.999C74.6945 136.543 76.9723 144.552 80.9335 151.469C89.0876 165.704 104.416 175.306 122.001 175.306C139.693 175.306 155.109 165.582 163.222 151.195L163.025 151.54L204.311 175.458C188.057 203.588 157.794 222.615 123.059 222.994L122.001 223C86.746 223 55.9753 203.796 39.582 175.276C31.5791 161.353 27 145.212 27 127.999C27 75.5334 69.5323 33 122.001 33Z"/>
        </svg>`
},
{ 
    name: 'JavaScript',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="256" height="256" fill="none" viewBox="0 0 256 256">
            <rect width="256" height="256" rx="60" fill="#F0DB4F"/>
            <path d="M67.3117 213.932L86.9027 202.076C90.6821 208.777 94.1202 214.447 102.367 214.447C110.272 214.447 115.256 211.355 115.256 199.327V117.529H139.314V199.667C139.314 224.584 124.708 235.926 103.398 235.926C84.1533 235.926 72.9819 225.959 67.3113 213.93" fill="#323330"/>
            <path d="M152.381 211.354L171.969 200.013C177.126 208.434 183.828 214.62 195.684 214.62C205.653 214.62 212.009 209.636 212.009 202.762C212.009 194.514 205.479 191.592 194.481 186.782L188.468 184.203C171.111 176.815 159.597 167.535 159.597 147.945C159.597 129.901 173.345 116.153 194.826 116.153C210.12 116.153 221.118 121.481 229.022 135.4L210.291 147.429C206.166 140.04 201.7 137.119 194.826 137.119C187.78 137.119 183.312 141.587 183.312 147.429C183.312 154.646 187.78 157.568 198.09 162.037L204.104 164.614C224.553 173.379 236.067 182.313 236.067 202.418C236.067 224.072 219.055 235.928 196.2 235.928C173.861 235.928 159.426 225.274 152.381 211.354" fill="#323330"/>
    </svg>`
},
{ 
    name: 'CSS',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="256" height="256" fill="none" viewBox="0 0 256 256">
            <svg width="256" height="256" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="256" height="256" rx="60" fill="#0277BD"/>
            <path d="M53.7527 102.651L56.6155 134.593H128.096V102.651H53.7527Z" fill="#EBEBEB"/>
            <path d="M128.095 38H127.985H48L50.9036 69.9423H128.095V38Z" fill="#EBEBEB"/>
            <path d="M128.095 218.841V185.608L127.955 185.645L92.3813 176.04L90.1072 150.564H72.821H58.0425L62.5175 200.718L127.948 218.882L128.095 218.841Z" fill="#EBEBEB"/>
            <path d="M167.318 134.593L163.61 176.019L127.985 185.635V218.866L193.468 200.718L193.948 195.321L201.454 111.229L202.233 102.651L208 38H127.985V69.9423H172.994L170.088 102.651H127.985V134.593H167.318Z" fill="white"/>
        </svg>`
},
{
    name: 'MySQL',
    svg: `
        <svg xmlns="http://www.w3.org/2000/svg" width="256" height="256" fill="none" viewBox="0 0 256 256">
            <rect width="256" height="256" fill="#242938" rx="60"/>
            <g clip-path="url(#clip0_7_147)">
                <path fill="#fff" fill-rule="evenodd" d="M203.801 178.21C194.011 177.938 186.416 178.941 180.051 181.619C178.218 182.355 175.277 182.355 175.035 184.662C176.015 185.63 176.133 187.214 176.992 188.556C178.459 190.991 181.033 194.271 183.357 195.973L191.191 201.571C195.965 204.488 201.351 206.193 206.002 209.113C208.696 210.817 211.388 213.007 214.082 214.834C215.454 215.807 216.285 217.392 218 217.997V217.629C217.144 216.538 216.897 214.957 216.044 213.735L212.367 210.209C208.82 205.465 204.41 201.325 199.636 197.922C195.718 195.245 187.152 191.596 185.56 187.097L185.319 186.824C188.008 186.552 191.191 185.605 193.764 184.875C197.929 183.784 201.721 184.024 206.002 182.93L211.882 181.226V180.135C209.678 177.946 208.087 175.025 205.763 172.959C199.521 167.606 192.661 162.373 185.56 157.994C181.766 155.562 176.868 153.977 172.829 151.913C171.356 151.182 168.911 150.817 168.055 149.601C165.846 146.929 164.625 143.397 163.034 140.232L152.997 119.064C150.794 114.319 149.444 109.574 146.755 105.195C134.144 84.5124 120.431 71.9828 99.375 59.6932C94.8477 57.1382 89.4616 56.0393 83.7353 54.7032L74.5546 54.2124C72.5928 53.3616 70.6364 51.0493 68.9216 49.9531C61.9441 45.5739 43.9475 36.0847 38.8029 48.5897C35.4966 56.4974 43.7006 64.2824 46.4855 68.299C48.5708 71.0966 51.2597 74.2597 52.7332 77.4228C53.5563 79.4897 53.8307 81.682 54.6895 83.8717C56.6458 89.2243 58.4842 95.1878 61.0551 100.178C62.427 102.733 63.8675 105.413 65.5824 107.723C66.5619 109.086 68.2768 109.67 68.6417 111.859C66.9268 114.294 66.8089 117.94 65.8293 120.986C61.42 134.734 63.1349 151.766 69.377 161.888C71.3389 164.928 75.9622 171.622 82.2345 169.065C87.744 166.875 86.5148 159.941 88.1062 153.857C88.4766 152.399 88.2297 151.425 88.9623 150.449V150.722L93.9834 160.819C97.7781 166.78 104.391 172.986 109.897 177.125C112.833 179.315 115.16 183.089 118.831 184.425V184.057H118.59C117.854 182.966 116.751 182.475 115.772 181.624C113.569 179.435 111.121 176.757 109.406 174.325C104.267 167.513 99.7399 159.968 95.6983 152.183C93.7365 148.412 92.0216 144.275 90.4357 140.504C89.6949 139.043 89.6949 136.85 88.4739 136.125C86.6355 138.797 83.9466 141.115 82.5939 144.398C80.2672 149.628 80.0257 156.077 79.1697 162.769C78.6758 162.891 78.8953 162.769 78.6758 163.041C74.7631 162.071 73.4132 158.051 71.9453 154.648C68.274 146.01 67.6594 132.141 70.8422 122.164C71.6983 119.609 75.375 111.579 73.9071 109.146C73.1662 106.834 70.7242 105.498 69.3743 103.671C67.7829 101.359 66.0735 98.4409 64.9705 95.8859C62.0346 89.0689 60.5667 81.5293 57.3812 74.7151C55.9077 71.552 53.3396 68.2662 51.257 65.3486C48.9303 62.0628 46.3648 59.7505 44.5265 55.8593C43.9146 54.4959 43.0585 52.3309 44.0381 50.8693C44.2795 49.8959 44.7734 49.5059 45.7475 49.2878C47.3389 47.9244 51.8716 49.6532 53.463 50.3785C57.9903 52.2054 61.7849 53.907 65.5796 56.4592C67.2945 57.6754 69.1329 59.9877 71.3361 60.5985H73.9098C77.8279 61.4493 82.2317 60.8712 85.9002 61.9619C92.3893 64.0343 98.2637 67.0719 103.532 70.3604C119.567 80.4577 132.792 94.8143 141.725 111.971C143.193 114.769 143.805 117.324 145.155 120.244C147.729 126.208 150.912 132.289 153.477 138.132C156.051 143.85 158.498 149.694 162.17 154.438C164.008 156.993 171.35 158.329 174.654 159.668C177.104 160.759 180.896 161.741 183.105 163.077C187.264 165.632 191.427 168.552 195.342 171.35C197.298 172.806 203.423 175.849 203.787 178.276L203.801 178.21ZM78.9584 72.4873C77.267 72.4724 75.5809 72.6769 73.9427 73.0954V73.3681H74.1842C75.1637 75.315 76.8786 76.6538 78.1023 78.3581L80.9202 84.1989L81.1616 83.9262C82.8765 82.71 83.7353 80.7631 83.7353 77.8454C83 76.9947 82.8793 76.1412 82.2674 75.2904C81.5321 74.0743 79.9407 73.4635 78.9584 72.4928V72.4873Z" clip-rule="evenodd"/>
            </g>
            <defs>
                <clipPath id="clip0_7_147">
                    <rect width="180" height="180" fill="#fff" transform="translate(38 38)"/>
                </clipPath>
            </defs>
        </svg>`
},
{ 
    name: 'Python',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="256" height="256" fill="none" viewBox="0 0 256 256">
            <rect width="256" height="256" fill="#242938" rx="60"/><path fill="url(#paint0_linear_2_47)" d="M127.279 29C76.5066 29 79.6772 51.018 79.6772 51.018L79.7338 73.8284H128.185V80.6772H60.4893C60.4893 80.6772 28 76.9926 28 128.222C28 179.452 56.3573 177.636 56.3573 177.636H73.2812V153.863C73.2812 153.863 72.369 125.506 101.186 125.506H149.24C149.24 125.506 176.239 125.942 176.239 99.4123V55.5461C176.239 55.5461 180.338 29 127.279 29ZM100.563 44.339C105.384 44.339 109.28 48.2351 109.28 53.0556C109.28 57.8761 105.384 61.7723 100.563 61.7723C95.7426 61.7723 91.8465 57.8761 91.8465 53.0556C91.8465 48.2351 95.7426 44.339 100.563 44.339Z"/><path fill="url(#paint1_linear_2_47)" d="M128.721 227.958C179.493 227.958 176.323 205.941 176.323 205.941L176.266 183.13H127.815V176.281H195.511C195.511 176.281 228 179.966 228 128.736C228 77.5062 199.643 79.323 199.643 79.323H182.719V103.096C182.719 103.096 183.631 131.453 154.814 131.453H106.76C106.76 131.453 79.7607 131.016 79.7607 157.546V201.412C79.7607 201.412 75.6615 227.958 128.721 227.958ZM155.437 212.619C150.616 212.619 146.72 208.723 146.72 203.903C146.72 199.082 150.616 195.186 155.437 195.186C160.257 195.186 164.154 199.082 164.154 203.903C164.154 208.723 160.257 212.619 155.437 212.619Z"/><defs><linearGradient id="paint0_linear_2_47" x1="47.22" x2="146.333" y1="46.896" y2="145.02" gradientUnits="userSpaceOnUse"><stop stop-color="#387EB8"/><stop offset="1" stop-color="#366994"/></linearGradient><linearGradient id="paint1_linear_2_47" x1="108.056" x2="214.492" y1="109.905" y2="210.522" gradientUnits="userSpaceOnUse"><stop stop-color="#FFE052"/><stop offset="1" stop-color="#FFC331"/></linearGradient></defs>
    </svg>`
},
];

// Experience Array
const experiences = [
  {
    date: '2023 - Present',
    title: 'Junior Web Developer',
    company: 'Tech Solutions Inc.',
    description: 'Developing responsive web applications using React and Node.js. Collaborating with design team to implement user-friendly interfaces.'
  },
  {
    date: '2022 - 2023',
    title: 'Web Development Intern',
    company: 'Digital Agency Co.',
    description: 'Assisted in creating and maintaining client websites. Learned modern web development practices and version control with Git.'
  },
  {
    date: '2021 - 2022',
    title: 'Freelance Developer',
    company: 'Self-Employed',
    description: 'Built custom websites for small businesses. Managed full project lifecycle from client consultation to deployment.'
  }
];

// Education Array
const education = [
  {
    degree: 'Web Development Certificate',
    school: 'BYU-Idaho',
    date: '2024',
    description: 'Comprehensive web development program focusing on HTML, CSS, JavaScript, and modern frameworks.'
  },
  {
    degree: 'Computer Science Basics',
    school: 'Online Learning Platform',
    date: '2023',
    description: 'Self-paced courses covering programming fundamentals, algorithms, and data structures.'
  }
];

// Future Projects Array
const projects = [
  {
    title: 'AI Voice Assistant for PC',
    description: 'An intelligent virtual assistant with voice commands and natural language processing for desktop computers. Will include task automation, voice recognition, and integration with popular apps.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop',
    tags: ['Python', 'Speech Recognition', 'AI', 'Desktop App'],
    category: 'ai',
    status: 'planned',
    github: '#',
    live: '#'
  },
  {
    title: 'Real Estate Sales Platform',
    description: 'Modern web application for apartment sales with advanced search filters, virtual tours, mortgage calculator, and real-time availability updates.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=400&fit=crop',
    tags: ['React', 'Node.js', 'MongoDB', '3D Tours'],
    category: 'web',
    status: 'planned',
    github: '#',
    live: '#'
  },
  {
    title: 'Real Estate Investment Platform',
    description: 'Investment platform for real estate properties with portfolio management, ROI calculators, property analytics, and market trends visualization.',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=400&fit=crop',
    tags: ['React', 'TypeScript', 'Charts', 'Finance'],
    category: 'web',
    status: 'planned',
    github: '#',
    live: '#'
  },
  {
    title: 'Gym Management System',
    description: 'Complete gym management solution with member registration, class scheduling, payment tracking, workout plans, and progress monitoring for both staff and members.',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=400&fit=crop',
    tags: ['Full Stack', 'Database', 'Dashboard', 'QR Codes'],
    category: 'web',
    status: 'planned',
    github: '#',
    live: '#'
  }
];

// ============================================
// FUNCTION: Display Skills
// ============================================
function displaySkills() {
  const skillsGrid = document.getElementById('skillsGrid');
  
  if (!skillsGrid) return;
  
  // Usar template literals y forEach (método de array)
  skills.forEach(skill => {
    const skillCard = document.createElement('div');
    skillCard.className = 'skill-card';
    
    // Ahora usamos skill.svg en lugar de skill.icon
    skillCard.innerHTML = `
      <div class="skill-icon">${skill.svg}</div>
      <div class="skill-name">${skill.name}</div>
    `;
    
    skillsGrid.appendChild(skillCard);
  });
}

// ============================================
// FUNCTION: Display Experience Timeline
// ============================================
function displayExperience() {
  const timeline = document.getElementById('timeline');
  
  if (!timeline) return;
  
  experiences.forEach(exp => {
    const timelineItem = document.createElement('div');
    timelineItem.className = 'timeline-item';
    
    timelineItem.innerHTML = `
      <div class="timeline-content">
        <div class="timeline-date">${exp.date}</div>
        <h3 class="timeline-title">${exp.title}</h3>
        <div class="timeline-company">${exp.company}</div>
        <p class="timeline-description">${exp.description}</p>
      </div>
    `;
    
    timeline.appendChild(timelineItem);
  });
}

// ============================================
// FUNCTION: Display Education
// ============================================
function displayEducation() {
  const educationGrid = document.getElementById('educationGrid');
  
  if (!educationGrid) return;
  
  education.forEach(edu => {
    const eduCard = document.createElement('div');
    eduCard.className = 'education-card';
    
    eduCard.innerHTML = `
      <h3 class="education-degree">${edu.degree}</h3>
      <div class="education-school">${edu.school}</div>
      <div class="education-date">${edu.date}</div>
      <p class="education-description">${edu.description}</p>
    `;
    
    educationGrid.appendChild(eduCard);
  });
}

// ============================================
// FUNCTION: Display Projects
// ============================================
function displayProjects() {
  const projectsGrid = document.getElementById('projectsGrid');
  
  if (!projectsGrid) return;
  
  projects.forEach(project => {
    const projectCard = document.createElement('div');
    projectCard.className = 'project-card';
    projectCard.dataset.category = project.category;
    
    const tagsHTML = project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('');
    
    // Badge de "Planned" para proyectos futuros
    const statusBadge = project.status === 'planned' 
      ? '<span class="status-badge">Coming Soon</span>' 
      : '';
    
    projectCard.innerHTML = `
      <div class="project-image-wrapper">
        <img src="${project.image}" alt="${project.title}" class="project-image" loading="lazy">
        ${statusBadge}
      </div>
      <div class="project-content">
        <div class="project-tags">${tagsHTML}</div>
        <h3 class="project-title">${project.title}</h3>
        <p class="project-description">${project.description}</p>
        <div class="project-info">
          <span class="project-status">📅 Planned for 2026</span>
        </div>
      </div>
    `;
    
    projectsGrid.appendChild(projectCard);
  });
}

// ============================================
// FUNCTION: Filter Projects (Ramificación Condicional)
// ============================================
function filterProjects(category) {
  const projectCards = document.querySelectorAll('.project-card');
  
  projectCards.forEach(card => {
    // Ramificación condicional (if/else)
    if (category === 'all') {
      card.classList.remove('hidden');
    } else if (card.dataset.category === category) {
      card.classList.remove('hidden');
    } else {
      card.classList.add('hidden');
    }
  });
}

// ============================================
// FUNCTION: Handle Filter Buttons
// ============================================
function setupProjectFilters() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  
  if (filterButtons.length === 0) return;
  
  filterButtons.forEach(button => {
    button.addEventListener('click', function() {
      // Remove active class from all buttons
      filterButtons.forEach(btn => btn.classList.remove('active'));
      
      // Add active class to clicked button
      this.classList.add('active');
      
      // Filter projects
      const category = this.dataset.filter;
      filterProjects(category);
    });
  });
}

// ============================================
// FUNCTION: Handle Contact Form (localStorage)
// ============================================
function setupContactForm() {
  const form = document.getElementById('contactForm');
  const formMessage = document.getElementById('formMessage');
  
  if (!form) return;
  
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      subject: document.getElementById('subject').value,
      message: document.getElementById('message').value,
      timestamp: new Date().toISOString()
    };
    
    // Get existing messages from localStorage or create empty array
    let messages = JSON.parse(localStorage.getItem('contactMessages')) || [];
    
    // Add new message to array
    messages.push(formData);
    
    // Save to localStorage
    localStorage.setItem('contactMessages', JSON.stringify(messages));
    
    // Update message count
    let messageCount = parseInt(localStorage.getItem('messageCount')) || 0;
    messageCount++;
    localStorage.setItem('messageCount', messageCount.toString());
    
    // Show success message
    formMessage.textContent = `Thank you! Your message has been sent. Total messages: ${messageCount}`;
    formMessage.className = 'form-message success';
    
    // Reset form
    form.reset();
    
    // Hide message after 5 seconds
    setTimeout(() => {
      formMessage.style.display = 'none';
    }, 5000);
  });
}

// ============================================
// FUNCTION: Mobile Menu Toggle
// ============================================
function setupMobileMenu() {
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('navMenu');
  
  if (!hamburger) return;
  
  hamburger.addEventListener('click', function() {
    navMenu.classList.toggle('active');
    
    // Animate hamburger
    const spans = this.querySelectorAll('span');
    spans[0].style.transform = navMenu.classList.contains('active') 
      ? 'rotate(45deg) translate(7px, 7px)' 
      : 'none';
    spans[1].style.opacity = navMenu.classList.contains('active') ? '0' : '1';
    spans[2].style.transform = navMenu.classList.contains('active') 
      ? 'rotate(-45deg) translate(7px, -7px)' 
      : 'none';
  });
  
  // Close menu when clicking on a link
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
      const spans = hamburger.querySelectorAll('span');
      spans[0].style.transform = 'none';
      spans[1].style.opacity = '1';
      spans[2].style.transform = 'none';
    });
  });
}

// ============================================
// FUNCTION: Get Message Statistics (localStorage)
// ============================================
function getMessageStats() {
  const messageCount = localStorage.getItem('messageCount');
  const messages = JSON.parse(localStorage.getItem('contactMessages')) || [];
  
  return {
    count: parseInt(messageCount) || 0,
    messages: messages
  };
}

// ============================================
// FUNCTION: Initialize Page
// ============================================
function initializePage() {
  // Display content based on current page
  displaySkills();
  displayExperience();
  displayEducation();
  displayProjects();
  
  // Setup interactive features
  setupProjectFilters();
  setupContactForm();
  setupMobileMenu();
  
  // Log message stats (for debugging)
  const stats = getMessageStats();
  console.log('Total messages received:', stats.count);
  console.log('Messages:', stats.messages);
}

// ============================================
// PAGE LOAD EVENT (Callback Function)
// ============================================
document.addEventListener('DOMContentLoaded', function() {
  console.log('Page loaded - Initializing...');
  initializePage();
  console.log('Initialization complete!');
});

// ============================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});