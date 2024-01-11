document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search');
    const suggestionsList = document.getElementById('suggestions');
    
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.trim().toLowerCase();
        
        if (searchTerm.length > 0) {
            fetchData(searchTerm).then(data => {
            suggestionsList.innerHTML = data.map(item => `<li>${item}</li>`).join('');
        });
        } else {
        suggestionsList.innerHTML = '';
        }
    });
    
    function fetchData(searchTerm) {
        const endpoint = `https://jsonplaceholder.typicode.com/posts?title_like=${searchTerm}`;
        
        return fetch(endpoint)
            .then(response => response.json())
            .then(data => data.map(item => item.title));
    }
    });
    