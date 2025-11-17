
export const fetchArticles = async () => {
    fetch("api/devto-articles").then((res) => {
    let response = res.json();
    return response; 
});
 
}