export function getUtomLogoUrl() {
    return "https://www.utom.dev/images/utom-workspace.svg";
}

export async function getHeaderData() {
    await new Promise(resolve => setTimeout(resolve, 300));
    return {
        loginButtonText: "Login"
    };
}

export async function getLoadingPageContent() {
    await new Promise(resolve => setTimeout(resolve, 300));
    return {
        title: "Building Your Product Blueprint",
        description: "I'm analyzing your idea and structuring it into a complete product definition. This will just take a moment."
    };
}

export async function getAnalysisStages() {
    await new Promise(resolve => setTimeout(resolve, 300));
    return [
        {
            id: "goals",
            text: "Defining Goals",
            iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>`
        },
        {
            id: "personas",
            text: "User Personas",
            iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle></svg>`
        },
        {
            id: "features",
            text: "Core Features",
            iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>`
        },
        {
            id: "metrics",
            text: "Success Metrics",
            iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>`
        },
        {
            id: "flows",
            text: "User Flows",
            iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 10v4c0 .55.45 1 1 1h3l7-7-7-7H4c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h3"></path><path d="M14 17l7-7-7-7"></path></svg>`
        },
        {
            id: "context",
            text: "Finalizing Context",
            iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>`
        }
    ];
}