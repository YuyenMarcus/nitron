// Assessment Questions Data
const assessmentQuestions = [
    // Data Quality & Accessibility (3 questions)
    {
        question: "How would you rate the quality and accessibility of your organization's data?",
        category: "data",
        options: [
            { text: "Poor - Data is siloed, inconsistent, and difficult to access", score: 1 },
            { text: "Fair - Some data is accessible but quality issues exist", score: 2 },
            { text: "Good - Most data is accessible with reasonable quality", score: 3 },
            { text: "Excellent - Data is well-organized, high-quality, and easily accessible", score: 4 }
        ]
    },
    {
        question: "How well is your data integrated across different systems and departments?",
        category: "data",
        options: [
            { text: "Not integrated - Data exists in separate silos", score: 1 },
            { text: "Partially integrated - Some systems share data", score: 2 },
            { text: "Well integrated - Most systems are connected", score: 3 },
            { text: "Fully integrated - Seamless data flow across all systems", score: 4 }
        ]
    },
    {
        question: "What is the current state of your data governance and documentation?",
        category: "data",
        options: [
            { text: "No governance - No policies or documentation exist", score: 1 },
            { text: "Basic governance - Some policies but limited documentation", score: 2 },
            { text: "Good governance - Clear policies and documentation", score: 3 },
            { text: "Advanced governance - Comprehensive policies and documentation", score: 4 }
        ]
    },
    
    // Technology Infrastructure (3 questions)
    {
        question: "How would you describe your current technology infrastructure?",
        category: "tech",
        options: [
            { text: "Legacy systems - Outdated technology with limited capabilities", score: 1 },
            { text: "Mixed environment - Combination of legacy and modern systems", score: 2 },
            { text: "Modern infrastructure - Cloud-based and scalable systems", score: 3 },
            { text: "Advanced infrastructure - AI-ready with modern APIs and integrations", score: 4 }
        ]
    },
    {
        question: "What is your organization's approach to cloud adoption?",
        category: "tech",
        options: [
            { text: "No cloud adoption - Everything is on-premise", score: 1 },
            { text: "Limited cloud - Some applications in the cloud", score: 2 },
            { text: "Hybrid approach - Mix of cloud and on-premise", score: 3 },
            { text: "Cloud-first - Primarily cloud-based infrastructure", score: 4 }
        ]
    },
    {
        question: "How mature is your API and integration capabilities?",
        category: "tech",
        options: [
            { text: "No APIs - Manual data transfer between systems", score: 1 },
            { text: "Basic APIs - Some system integrations exist", score: 2 },
            { text: "Good APIs - Most systems have API access", score: 3 },
            { text: "Advanced APIs - Comprehensive API ecosystem", score: 4 }
        ]
    },
    
    // Organizational Culture & Skills (3 questions)
    {
        question: "How would you rate your team's technical skills and AI knowledge?",
        category: "culture",
        options: [
            { text: "Limited skills - Team lacks technical and AI knowledge", score: 1 },
            { text: "Basic skills - Some team members have relevant knowledge", score: 2 },
            { text: "Good skills - Most team members are technically proficient", score: 3 },
            { text: "Advanced skills - Team has strong AI and technical expertise", score: 4 }
        ]
    },
    {
        question: "What is your organization's attitude toward change and innovation?",
        category: "culture",
        options: [
            { text: "Resistant to change - Prefers traditional methods", score: 1 },
            { text: "Cautious - Slow to adopt new technologies", score: 2 },
            { text: "Open to change - Willing to try new approaches", score: 3 },
            { text: "Innovation-focused - Actively seeks new technologies", score: 4 }
        ]
    },
    {
        question: "How well does your organization support learning and development?",
        category: "culture",
        options: [
            { text: "No support - No training or development programs", score: 1 },
            { text: "Limited support - Occasional training opportunities", score: 2 },
            { text: "Good support - Regular training and development programs", score: 3 },
            { text: "Excellent support - Comprehensive learning and development culture", score: 4 }
        ]
    },
    
    // Process Automation Potential (3 questions)
    {
        question: "How many of your current processes are manual or repetitive?",
        category: "process",
        options: [
            { text: "Most processes - Heavily manual and repetitive", score: 1 },
            { text: "Many processes - Significant manual work", score: 2 },
            { text: "Some processes - Moderate automation exists", score: 3 },
            { text: "Few processes - Most work is already automated", score: 4 }
        ]
    },
    {
        question: "How well documented are your current business processes?",
        category: "process",
        options: [
            { text: "Not documented - Processes are informal and undocumented", score: 1 },
            { text: "Partially documented - Some processes are documented", score: 2 },
            { text: "Well documented - Most processes are clearly documented", score: 3 },
            { text: "Fully documented - All processes are thoroughly documented", score: 4 }
        ]
    },
    {
        question: "How would you rate the efficiency of your current workflows?",
        category: "process",
        options: [
            { text: "Inefficient - Many bottlenecks and delays", score: 1 },
            { text: "Somewhat efficient - Some areas for improvement", score: 2 },
            { text: "Efficient - Most workflows run smoothly", score: 3 },
            { text: "Highly efficient - Optimized workflows with minimal waste", score: 4 }
        ]
    },
    
    // Strategic Alignment (3 questions)
    {
        question: "How well does AI align with your organization's strategic goals?",
        category: "strategy",
        options: [
            { text: "No alignment - AI is not part of strategic planning", score: 1 },
            { text: "Limited alignment - AI mentioned but not prioritized", score: 2 },
            { text: "Good alignment - AI is part of strategic initiatives", score: 3 },
            { text: "Strong alignment - AI is central to strategic goals", score: 4 }
        ]
    },
    {
        question: "What is your leadership's commitment to AI initiatives?",
        category: "strategy",
        options: [
            { text: "No commitment - Leadership is not interested in AI", score: 1 },
            { text: "Limited commitment - Some interest but no action", score: 2 },
            { text: "Good commitment - Leadership supports AI initiatives", score: 3 },
            { text: "Strong commitment - Leadership actively drives AI adoption", score: 4 }
        ]
    },
    {
        question: "How well do you understand the potential ROI of AI implementation?",
        category: "strategy",
        options: [
            { text: "No understanding - Unclear about AI benefits", score: 1 },
            { text: "Basic understanding - Some awareness of potential benefits", score: 2 },
            { text: "Good understanding - Clear vision of AI benefits", score: 3 },
            { text: "Deep understanding - Comprehensive ROI analysis completed", score: 4 }
        ]
    }
];

// Assessment State
let currentQuestionIndex = 0;
let answers = {};
let scores = {
    data: 0,
    tech: 0,
    culture: 0,
    process: 0,
    strategy: 0
};

// Initialize Assessment
document.addEventListener('DOMContentLoaded', function() {
    console.log('Assessment initialized');
    initializeAssessment();
});

function initializeAssessment() {
    displayQuestion();
    updateProgress();
    
    // Event listeners
    document.getElementById('nextBtn').addEventListener('click', nextQuestion);
    document.getElementById('prevBtn').addEventListener('click', previousQuestion);
    document.getElementById('submitBtn').addEventListener('click', submitAssessment);
    document.getElementById('assessmentForm').addEventListener('submit', function(e) {
        e.preventDefault();
        submitAssessment();
    });
}

function displayQuestion() {
    const question = assessmentQuestions[currentQuestionIndex];
    const container = document.getElementById('questionContainer');
    
    container.innerHTML = `
        <div class="question">
            <h4>${question.question}</h4>
            <div class="options">
                ${question.options.map((option, index) => `
                    <label class="option">
                        <input type="radio" name="q${currentQuestionIndex}" value="${option.score}" ${answers[currentQuestionIndex] === option.score ? 'checked' : ''}>
                        <span class="option-text">${option.text}</span>
                    </label>
                `).join('')}
            </div>
        </div>
    `;
    
    // Add event listeners to radio buttons
    const radioButtons = container.querySelectorAll('input[type="radio"]');
    radioButtons.forEach(radio => {
        radio.addEventListener('change', function() {
            answers[currentQuestionIndex] = parseInt(this.value);
            updateNavigationButtons();
        });
    });
    
    updateNavigationButtons();
}

function updateProgress() {
    const progress = ((currentQuestionIndex + 1) / assessmentQuestions.length) * 100;
    document.getElementById('progressFill').style.width = progress + '%';
    document.getElementById('currentQuestion').textContent = currentQuestionIndex + 1;
    document.getElementById('totalQuestions').textContent = assessmentQuestions.length;
}

function updateNavigationButtons() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const submitBtn = document.getElementById('submitBtn');
    
    // Show/hide previous button
    if (currentQuestionIndex === 0) {
        prevBtn.style.display = 'none';
    } else {
        prevBtn.style.display = 'inline-block';
    }
    
    // Show/hide next/submit buttons
    if (currentQuestionIndex === assessmentQuestions.length - 1) {
        nextBtn.style.display = 'none';
        submitBtn.style.display = 'inline-block';
    } else {
        nextBtn.style.display = 'inline-block';
        submitBtn.style.display = 'none';
    }
    
    // Enable/disable next button based on answer
    if (answers[currentQuestionIndex]) {
        nextBtn.disabled = false;
        submitBtn.disabled = false;
    } else {
        nextBtn.disabled = true;
        submitBtn.disabled = true;
    }
}

function nextQuestion() {
    if (currentQuestionIndex < assessmentQuestions.length - 1) {
        currentQuestionIndex++;
        displayQuestion();
        updateProgress();
    }
}

function previousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        displayQuestion();
        updateProgress();
    }
}

function submitAssessment() {
    calculateScores();
    displayResults();
}

function calculateScores() {
    // Reset scores
    scores = {
        data: 0,
        tech: 0,
        culture: 0,
        process: 0,
        strategy: 0
    };
    
    // Calculate scores for each category
    assessmentQuestions.forEach((question, index) => {
        if (answers[index]) {
            scores[question.category] += answers[index];
        }
    });
    
    // Convert to percentages (max score per category is 12, so divide by 12 and multiply by 100)
    Object.keys(scores).forEach(category => {
        scores[category] = Math.round((scores[category] / 12) * 100);
    });
}

function displayResults() {
    // Hide assessment form and show results
    document.querySelector('.assessment-section').style.display = 'none';
    document.getElementById('resultsSection').style.display = 'block';
    
    // Calculate overall score
    const overallScore = Math.round(Object.values(scores).reduce((a, b) => a + b, 0) / 5);
    
    // Update overall score
    document.getElementById('overallScore').textContent = overallScore;
    
    // Update score description
    const scoreDescription = getScoreDescription(overallScore);
    document.getElementById('scoreDescription').textContent = scoreDescription;
    
    // Update area scores
    document.getElementById('dataScore').textContent = scores.data + '%';
    document.getElementById('techScore').textContent = scores.tech + '%';
    document.getElementById('cultureScore').textContent = scores.culture + '%';
    document.getElementById('processScore').textContent = scores.process + '%';
    document.getElementById('strategyScore').textContent = scores.strategy + '%';
    
    // Update progress bars
    document.getElementById('dataBar').style.width = scores.data + '%';
    document.getElementById('techBar').style.width = scores.tech + '%';
    document.getElementById('cultureBar').style.width = scores.culture + '%';
    document.getElementById('processBar').style.width = scores.process + '%';
    document.getElementById('strategyBar').style.width = scores.strategy + '%';
    
    // Generate recommendations
    generateRecommendations();
}

function getScoreDescription(score) {
    if (score >= 80) {
        return "Excellent! Your organization is well-positioned for AI implementation. Focus on advanced optimization and scaling.";
    } else if (score >= 60) {
        return "Good! Your organization shows strong potential for AI implementation with some areas for improvement.";
    } else if (score >= 40) {
        return "Fair. Your organization has potential but needs significant preparation before AI implementation.";
    } else {
        return "Your organization needs foundational work before implementing AI. Focus on building the basics first.";
    }
}

function generateRecommendations() {
    const recommendations = [];
    
    // Generate recommendations based on scores
    if (scores.data < 60) {
        recommendations.push({
            title: "Improve Data Quality & Accessibility",
            description: "Focus on data governance, integration, and quality improvement initiatives."
        });
    }
    
    if (scores.tech < 60) {
        recommendations.push({
            title: "Modernize Technology Infrastructure",
            description: "Consider cloud migration and API development to prepare for AI integration."
        });
    }
    
    if (scores.culture < 60) {
        recommendations.push({
            title: "Build AI-Ready Culture",
            description: "Invest in training programs and change management to prepare your team."
        });
    }
    
    if (scores.process < 60) {
        recommendations.push({
            title: "Optimize Business Processes",
            description: "Document and streamline processes to identify automation opportunities."
        });
    }
    
    if (scores.strategy < 60) {
        recommendations.push({
            title: "Align AI with Business Strategy",
            description: "Develop a clear AI strategy that aligns with your business objectives."
        });
    }
    
    // Add general recommendations
    recommendations.push({
        title: "Start with a Pilot Project",
        description: "Begin with a small, focused AI implementation to build confidence and demonstrate value."
    });
    
    recommendations.push({
        title: "Partner with AI Experts",
        description: "Consider working with experienced AI consultants to accelerate your journey."
    });
    
    // Display recommendations
    const container = document.getElementById('recommendationsList');
    container.innerHTML = recommendations.map(rec => `
        <div class="recommendation-item">
            <h4>${rec.title}</h4>
            <p>${rec.description}</p>
        </div>
    `).join('');
} 