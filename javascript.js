function login() {

// ... code to build the URL ...

const nextUrl = `${baseUrl}index.html?lang=${currentLanguage}`;

window.location.href = nextUrl;

}