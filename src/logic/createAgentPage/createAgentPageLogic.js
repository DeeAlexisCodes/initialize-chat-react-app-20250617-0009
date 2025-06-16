export function getLogoUrl() {
    return "https://www.utom.dev/images/utom-workspace.svg";
}

export async function getPageHeaderContent() {
    await new Promise(resolve => setTimeout(resolve, 300));
    return {
        title: "Let's scope your new AI agent",
        description: "Start with the big picture. Describe your core idea, and our AI will create a comprehensive development brief to get you started."
    };
}

export async function getInputFormPlaceholders() {
    await new Promise(resolve => setTimeout(resolve, 300));
    return {
        initialInput: "e.g., An AI agent that helps busy families plan their weekly meals, taking into account allergies and picky eaters...",
        subsequentInput: "Now, describe your target user or any key features you have in mind..."
    };
}

export async function getButtonLabels() {
    await new Promise(resolve => setTimeout(resolve, 300));
    return {
        addParagraphButton: "Add another paragraph",
        submitButton: "Build My Agent Brief",
        loginButton: "Login"
    };
}

export async function getShowcaseCards() {
    await new Promise(resolve => setTimeout(resolve, 300));
    return [
        {
            id: 'card-focus-why',
            iconSvg: '<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="24" cy="24" r="22" fill="#fff" stroke="#D8F0F1" stroke-width="4"></circle><circle cx="24" cy="24" r="10" stroke="#00A9B2" stroke-width="2.5"></circle><line x1="24" y1="28" x2="24" y2="22" stroke="#00A9B2" stroke-width="2.5" stroke-linecap="round"></line><line x1="24" y1="18" x2="24.01" y2="18" stroke="#00A9B2" stroke-width="3.5" stroke-linecap="round"></line></svg>',
            title: 'Focus on the "Why"',
            description: 'Start with the core problem. A clear problem statement leads to a clear solution.'
        },
        {
            id: 'card-target-user',
            iconSvg: '<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="24" cy="24" r="22" fill="#fff" stroke="#FFE9A9" stroke-width="4"></circle><path d="M31 32V30C31 27.2386 28.7614 25 26 25H22C19.2386 25 17 27.2386 17 30V32" stroke="#F2C94C" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path><circle cx="24" cy="20" r="4" stroke="#F2C94C" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></circle></svg>',
            title: 'Describe Your Target User',
            description: 'Who is this for? Be specific. This helps tailor every feature to their needs.'
        },
        {
            id: 'card-key-features',
            iconSvg: '<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="24" cy="24" r="22" fill="#fff" stroke="#D5E9D9" stroke-width="4"></circle><path d="M20 20H32" stroke="#27AE60" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M20 26H32" stroke="#27AE60" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M20 32H32" stroke="#27AE60" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M16 20H16.01" stroke="#27AE60" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path><path d="M16 26H16.01" stroke="#27AE60" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path><path d="M16 32H16.01" stroke="#27AE60" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
            title: 'List Key Features',
            description: 'What are the must-have functions? Prioritize the 1-3 most important things the product must do.'
        }
    ];
}