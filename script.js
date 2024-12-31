const translations = {
    en: {
        title: "Mystic Destiny Reader",
        name: "Your Full Name",
        namePlaceholder: "Enter your full name",
        dob: "Date of Birth",
        kundali: "First Page Of Janam Kundali",
        submit: "Reveal Your Destiny",
        share: "Share this mystical experience"
    },
    hi: {
        title: "भविष्य दर्शक",
        name: "आपका पूरा नाम",
        namePlaceholder: "अपना नाम दर्ज करें",
        dob: "जन्म तिथि",
        kundali: "जन्म कुंडली का पहला पृष्ठ",
        submit: "अपना भविष्य जानें",
        share: "इस अनुभव को शेयर करें"
    }
};

let currentLang = 'en';

function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'hi' : 'en';
    updateLanguage();
    
    // Update button text
    const langText = document.getElementById('langText');
    langText.textContent = currentLang === 'en' ? 'हिंदी में देखें' : 'View in English';
}

function updateLanguage() {
    document.querySelector('h1').innerHTML = `<i class="fas fa-moon magical-icon"></i>${translations[currentLang].title}`;
    document.querySelector('label[for="name"]').innerHTML = `<i class="fas fa-user magical-icon"></i>${translations[currentLang].name}`;
    document.querySelector('#name').placeholder = translations[currentLang].namePlaceholder;
    document.querySelector('label[for="dob"]').innerHTML = `<i class="fas fa-calendar magical-icon"></i>${translations[currentLang].dob}`;
    document.querySelector('label[for="photo"]').innerHTML = `<i class="fas fa-image magical-icon"></i>${translations[currentLang].kundali}`;
    document.querySelector('button[type="submit"]').innerHTML = `<i class="fas fa-crystal-ball magical-icon"></i>${translations[currentLang].submit}`;
    document.querySelector('.share-container p').textContent = translations[currentLang].share;
}

async function generatePrediction(event) {
    event.preventDefault();
    
    // Show loading overlay
    const loadingOverlay = document.querySelector('.loading-overlay');
    loadingOverlay.style.display = 'flex';
    
    const name = document.getElementById('name').value;
    const dob = document.getElementById('dob').value;
    const photo = document.getElementById('photo').files[0];

    // Store user data
    const userData = {
        name: name,
        dob: dob,
        readingDate: new Date().toISOString(),
        feedback: null
    };
    
    // Store in localStorage
    localStorage.setItem('userData', JSON.stringify(userData));
    localStorage.setItem('hasReading', 'true');
    
    // Wait for 5 seconds before redirecting
    setTimeout(() => {
        window.location.href = 'results.html';
    }, 5000);
}

// Add check at the start of index.html page load
window.onload = function() {
    if (localStorage.getItem('hasReading') === 'true') {
        alert('You have already received your reading! For another reading, please connect with us on Instagram @knowmore807 for a personalized consultation. ✨🔮');
        window.location.href = 'https://www.instagram.com/knowmore807/';
    }
} 
