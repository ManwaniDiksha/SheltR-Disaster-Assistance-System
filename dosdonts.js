function showSection(disasterId) {
    // Hide all sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active');
    });
    
    // Show selected section
    const selectedSection = document.getElementById(disasterId);
    if (selectedSection) {
        selectedSection.classList.add('active');
    }
    
    // Update active button
    const buttons = document.querySelectorAll('.nav-btn');
    buttons.forEach(button => {
        button.classList.remove('active');
        if (button.getAttribute('onclick').includes(disasterId)) {
            button.classList.add('active');
        }
    });
}

// Function to change language
function changeLanguage() {
    const language = document.getElementById('language').value;
    const listItems = document.querySelectorAll('li[data-en]');
    
    listItems.forEach(item => {
        if (language === 'en') {
            item.textContent = item.getAttribute('data-en');
        } else if (language === 'hi') {
            item.textContent = item.getAttribute('data-hi');
        } else if (language === 'gu') {
            item.textContent = item.getAttribute('data-gu');
        }
    });
}

// Initialize the page with default language and first section
document.addEventListener('DOMContentLoaded', function() {
    // Set default language
    changeLanguage();
    
    // Show first section by default
    showSection('earthquake');
});