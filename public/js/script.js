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

function generatePrediction(event) {
    event.preventDefault();
    
    // Store user data
    const userData = {
        name: document.getElementById('name').value,
        dob: document.getElementById('dob').value,
        readingDate: new Date().toISOString(),
        feedback: null  // Will be updated when user gives feedback
    };
    localStorage.setItem('userData', JSON.stringify(userData));

    // Check if user already has a reading
    if (localStorage.getItem('hasReading') === 'true') {
        alert('You have already received your reading! For another reading, please connect with us on Instagram @knowmore807 for a personalized consultation. ✨🔮');
        window.location.href = 'https://www.instagram.com/knowmore807/';
        return;
    }

    // Show loading overlay
    const loadingOverlay = document.querySelector('.loading-overlay');
    loadingOverlay.style.display = 'flex';

    const name = document.getElementById('name').value;
    const dob = new Date(document.getElementById('dob').value);
    const photo = document.getElementById('photo').files[0];

    // Validate inputs
    if (!name || !dob || !photo) {
        alert('Please fill in all fields correctly!');
        loadingOverlay.style.display = 'none';
        return;
    }

    // Calculate marriage age (random between 25-35)
    const marriageAge = Math.floor(Math.random() * 11) + 25;

    // Generate lucky numbers (including 3 and 7)
    const luckyNumbers = [3, 7, Math.floor(Math.random() * 10)];

    // Random favorite color
    const colors = ['Blue', 'Black', 'Red', 'Purple', 'Gold', 'Silver', 'Green'];
    let favColors = [];
    // Ensure we get exactly 3 unique colors
    while (favColors.length < 3) {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        if (!favColors.includes(randomColor)) {
            favColors.push(randomColor);
        }
    }

    // Enhanced Barnum statements for personality
    const personalityStatements = [
        [
            "You have a great need for others to like and admire you",
            "You tend to be critical of yourself",
            "You have a great deal of unused capacity which you haven't turned to your advantage"
        ],
        [
            "While you are disciplined and self-controlled outside, you tend to be worrisome inside",
            "You prefer a certain amount of change and variety",
            "You pride yourself as an independent thinker"
        ],
        [
            "You have found it unwise to be too frank in revealing yourself to others",
            "At times you are extroverted, affable, sociable, while at other times you are introverted, wary, reserved",
            "You have a tendency to be critical of yourself"
        ],
        [
            "You have a deep need for approval and recognition",
            "You have serious doubts about whether you have made the right decision",
            "You work best when you receive recognition for your efforts"
        ]
    ];

    // Barnum statements for life partner
    const partnerBarnumStatements = [
        "Your ideal partner will be someone who appears very strong on the outside but has a gentle, understanding nature. They may sometimes struggle with expressing their emotions directly, but their actions will consistently show their deep care for you.",
        "You will find someone who balances their practical approach to life with a deep appreciation for your unique perspective. While they may occasionally seem distant when focused on their goals, their loyalty and dedication to your relationship will be unwavering.",
        "Your future partner will be highly intuitive about your needs, though they might sometimes appear reserved in public. They will have overcome past challenges that have made them stronger, and this strength will complement your own journey.",
        "The person destined for you will have a complex personality that few people truly understand. While they may struggle with vulnerability, their commitment to personal growth and your happiness will be remarkable."
    ];

    // Select random sets of statements
    const selectedPersonalitySet = personalityStatements[Math.floor(Math.random() * personalityStatements.length)];
    const selectedPartnerStatement = partnerBarnumStatements[Math.floor(Math.random() * partnerBarnumStatements.length)];

    // Career predictions with Barnum-style statements
    const careerPredictions = [
        {
            fields: ["Technology", "Digital Media", "Innovation"],
            description: "Your analytical mind and creative problem-solving abilities make you well-suited for the technology sector. You have an innate ability to understand complex systems, whether they're digital or organizational. Your future career will likely involve innovation, either in technology development, digital media, or creative problem-solving roles. Your ability to adapt to changing circumstances will be your greatest professional asset."
        },
        {
            fields: ["Business", "Leadership", "Entrepreneurship"],
            description: "You possess natural leadership qualities and an entrepreneurial spirit. Your ability to see the bigger picture while managing details suggests success in business leadership or running your own venture. You could excel in roles involving strategic planning, team management, or business development. Your diplomatic nature combined with decision-making skills makes you particularly suitable for leadership positions."
        },
        {
            fields: ["Creative Arts", "Communication", "Design"],
            description: "Your creative energy and ability to think outside conventional boundaries suggest a promising future in creative fields. Whether through visual arts, communication, or innovative design, you have the potential to make a significant impact. Your unique perspective and ability to understand others' viewpoints make you especially valuable in roles requiring creative problem-solving and artistic expression."
        },
        {
            fields: ["Healthcare", "Wellness", "Social Services"],
            description: "Your natural empathy and desire to make a positive impact on others' lives point toward a fulfilling career in healthcare or social services. You have the patience and emotional intelligence needed for roles involving personal care and support. Your ability to remain calm under pressure while showing compassion makes you well-suited for positions in healthcare, counseling, or community service."
        },
        {
            fields: ["Education", "Research", "Analysis"],
            description: "Your intellectual curiosity and ability to process complex information suggest success in academic or research-oriented fields. You have a natural talent for understanding and explaining complicated concepts to others. Your methodical approach combined with creative thinking makes you ideal for roles in education, research, or analytical positions."
        }
    ];

    // Select random career prediction
    const selectedCareer = careerPredictions[Math.floor(Math.random() * careerPredictions.length)];

    // Store prediction data
    const prediction = {
        name: name,
        luckyNumbers: luckyNumbers,
        marriageAge: marriageAge,
        personality: selectedPersonalitySet.join(". ") + ".",
        favoriteColors: {
            primary: favColors[0],
            secondary: favColors[1],
            accent: favColors[2]
        },
        partnerDescription: selectedPartnerStatement,
        career: {
            fields: selectedCareer.fields,
            description: selectedCareer.description
        }
    };

    // Store prediction in localStorage
    localStorage.setItem('prediction', JSON.stringify(prediction));
    localStorage.setItem('hasReading', 'true');
    
    // Wait for 5 seconds before redirecting
    setTimeout(() => {
        window.location.href = '/mystic-destiny-reader/index.html';
    }, 5000);
}

// Add check at the start of index.html page load
window.onload = function() {
    if (localStorage.getItem('hasReading') === 'true') {
        alert('You have already received your reading! For another reading, please connect with us on Instagram @knowmore807 for a personalized consultation. ✨🔮');
        window.location.href = 'https://www.instagram.com/knowmore807/';
    }
} 