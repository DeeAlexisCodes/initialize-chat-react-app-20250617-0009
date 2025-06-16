export async function getUtomLogoUrl() {
  await new Promise(resolve => setTimeout(resolve, 300));
  return "https://www.utom.dev/images/utom-workspace.svg";
}

export async function getLoginUrl() {
  await new Promise(resolve => setTimeout(resolve, 300));
  return "#"; // Or the actual login page URL if known
}

export async function getProducts() {
  await new Promise(resolve => setTimeout(resolve, 300));
  return [
    {
      "productId": "nutriplan-ai",
      "productName": "NutriPlan AI",
      "version": 2,
      "status": "In Progress",
      "description": "Adds pantry tracking and direct grocery delivery integration for a seamless end-to-end user experience.",
      "category": "Health & Wellness",
      "progress": 25,
      "lastModified": "2 hours ago",
      "isLatestVersion": true
    },
    {
      "productId": "nutriplan-ai",
      "productName": "NutriPlan AI",
      "version": 1,
      "status": "Complete",
      "description": "MVP for AI-powered meal planning that creates personalized weekly meal plans and automated grocery lists.",
      "category": "Health & Wellness",
      "progress": 100,
      "lastModified": "1 month ago",
      "isLatestVersion": false
    },
    {
      "productId": "fittracker-pro",
      "productName": "FitTracker Pro",
      "version": 1,
      "status": "Complete",
      "description": "Smart fitness companion that adapts workout plans based on real-time performance data and user fitness goals with AI coaching.",
      "category": "Fitness",
      "progress": 100,
      "lastModified": "1 week ago",
      "isLatestVersion": true
    },
    {
      "productId": "smarthome-hub",
      "productName": "SmartHome Hub",
      "version": 1,
      "status": "Draft",
      "description": "Intelligent home automation system that learns user behavior patterns to optimize energy usage and enhance comfort levels.",
      "category": "Home Automation",
      "progress": 10,
      "lastModified": "1 day ago",
      "isLatestVersion": true
    }
  ];
}

export async function getCategoryIcons() {
  await new Promise(resolve => setTimeout(resolve, 300));
  return {
    "Health & Wellness": {
      class: "icon-meal",
      svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3z"/></svg>`
    },
    "Fitness": {
      class: "icon-fitness",
      svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18"><path d="M6.5 6.5h11"/><path d="M6.5 17.5h11"/><path d="M4 12H2a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2"/><path d="M20 12h2a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-2"/><path d="M8 12h8"/></svg>`
    },
    "Home Automation": {
      class: "icon-home",
      svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9,22 9,12 15,12 15,22"/></svg>`
    },
  };
}

export async function getProductStatusClasses() {
  await new Promise(resolve => setTimeout(resolve, 300));
  return {
    "In Progress": "status-in-progress",
    "Complete": "status-complete",
    "Draft": "status-draft"
  };
}

export async function createNewProduct() {
  await new Promise(resolve => setTimeout(resolve, 300));
  // In a real API, this would return a new product ID or a success status
  console.log('API: Creating new product...');
  return { success: true, message: "New product creation initiated.", redirect: 'initialize_chat.html' };
}

export async function createNewVersion(productId) {
  await new Promise(resolve => setTimeout(resolve, 300));
  // In a real API, this would return a new version ID or a success status
  console.log(`API: Creating new version for product: ${productId}`);
  return { success: true, message: `New version for ${productId} initiated.` };
}