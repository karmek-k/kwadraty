const appId = 'app';
const app = document.getElementById(appId);

if (!app) {
  throw new Error(`No elements that fulfill the #${appId} selector found`);
}

export {};
