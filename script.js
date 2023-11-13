const apiKey = '7ca1bf90-4aeb-4e7e-be3f-de31c1351db3'; // Replace with your actual API key

function searchDictionary() {
    const searchInput = document.getElementById("searchInput").value.trim();
    const resultDiv = document.getElementById("result");

    if (searchInput === "") {
        resultDiv.innerText = "Please enter a word.";
        return;
    }

    const apiUrl = `https://www.dictionaryapi.com/api/v3/references/learners/json/${searchInput}?key=${apiKey}`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            if (Array.isArray(data)) {
                resultDiv.innerHTML = data[0].shortdef.join('<br>');
            } else {
                resultDiv.innerText = "Word not found in the dictionary.";
            }
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
            resultDiv.innerText = "Failed to fetch data. Please try again later.";
        });
}
