
// document.addEventListener('DOMContentLoaded', () => {
//     const searchInput = document.getElementById('search-input');
//     const searchButton = document.getElementById('search-button');
//     const clearButton = document.getElementById('clear-button');
//     const loadMoreButton = document.getElementById('load-more-button');
//     const searchResults = document.getElementById('search-results');
//     const form = document.getElementById('search-form');
//     const orientationFilter = document.getElementById('orientation-filter');
//     const colorFilter = document.getElementById('color-filter');

//     let query = '';
//     let page = 1;
//     let currentResults = [];

//     form.addEventListener('submit', async (e) => {
//         e.preventDefault();
//         query = searchInput.value.trim();
//         page = 1;
//         searchResults.innerHTML = '';
//         currentResults = [];
//         loadMoreButton.style.display = 'none';
//         if (query) {
//             await performSearch(query, page);
//         }
//     });

//     searchInput.addEventListener('input', () => {
//         if (searchInput.value.trim() === '') {
//             clearButton.style.display = 'none';
//             searchResults.innerHTML = ''; // Clear the search results
//             loadMoreButton.style.display = 'none'; // Hide the load more button
//             currentResults = [];
//             query = '';
//             page = 1;
//         } else {
//             clearButton.style.display = 'inline-block';
//         }
//     });

//     clearButton.addEventListener('click', () => {
//         searchInput.value = '';
//         clearButton.style.display = 'none';
//         searchResults.innerHTML = '';
//         currentResults = [];
//         query = '';
//         page = 1;
//         loadMoreButton.style.display = 'none';
//     });

//     orientationFilter.addEventListener('change', async () => {
//         page = 1;
//         searchResults.innerHTML = '';
//         currentResults = [];
//         loadMoreButton.style.display = 'none';
//         if (query) {
//             await performSearch(query, page);
//         }
//     });

//     colorFilter.addEventListener('change', async () => {
//         page = 1;
//         searchResults.innerHTML = '';
//         currentResults = [];
//         loadMoreButton.style.display = 'none';
//         if (query) {
//             await performSearch(query, page);
//         }
//     });

//     loadMoreButton.addEventListener('click', async () => {
//         page++;
//         await performSearch(query, page);
//     });

//     async function performSearch(query, page) {
//         const orientation = orientationFilter.value;
//         const color = colorFilter.value;
//         const accessKey = "cIbmBgafc_l2ZfZfgOPKQ9fpArqxiuMWVzi_hUNAhjg";
//         let url = `https://api.unsplash.com/search/photos?page=${page}&query=${query}&client_id=${accessKey}`;

//         if (orientation) {
//             url += `&orientation=${orientation}`;
//         }
//         if (color) {
//             url += `&color=${color}`;
//         }

//         try {
//             const response = await fetch(url);
//             const data = await response.json();

//             if (response.ok) {
//                 if (data.results.length === 0 && page === 1) {
//                     searchResults.innerHTML = '<p>No results found. Try a different query.</p>';
//                 } else {
//                     currentResults.push(...data.results);
//                     displayResults(data.results);

//                     if (data.total_pages > page) {
//                         loadMoreButton.style.display = 'block';
//                     } else {
//                         loadMoreButton.style.display = 'none';
//                     }
//                 }
//             } else {
//                 searchResults.innerHTML = `<p>Error: ${data.errors.join(', ')}</p>`;
//             }
//         } catch (error) {
//             console.error('Error fetching data:', error);
//             searchResults.innerHTML = '<p>Error fetching data. Please try again later.</p>';
//         }
//     }

//     function displayResults(results) {
//         results.forEach(result => {
//             const resultDiv = document.createElement('div');
//             resultDiv.classList.add('search-result');

//             const img = document.createElement('img');
//             img.src = result.urls.small;
//             img.alt = result.alt_description;
//             img.dataset.fullSize = result.urls.full;
//             img.dataset.description = result.description || result.alt_description || 'No description available';
//             img.addEventListener('click', () => openModal(result));

//             const link = document.createElement('a');
//             link.href = result.links.html;
//             link.target = '_blank';
//             link.textContent = result.description || result.alt_description || 'View Image';

//             resultDiv.appendChild(img);
//             resultDiv.appendChild(link);
//             searchResults.appendChild(resultDiv);
//         });
//     }

//     const modal = document.getElementById('image-modal');
//     const modalImg = document.getElementById('modal-img');
//     const modalCaption = document.getElementById('modal-caption');
//     const downloadButton = document.getElementById('download-button');
//     const closeButton = document.getElementsByClassName('close')[0];
//     let downloadUrl = '';

//     function openModal(result) {
//         modal.style.display = 'block';
//         modalImg.src = result.urls.full;
//         modalCaption.textContent = result.description || result.alt_description || 'No description available';
//         downloadUrl = result.urls.full; // Store the full image URL for downloading
//     }

//     closeButton.onclick = function() {
//         modal.style.display = 'none';
//     }

//     window.onclick = function(event) {
//         if (event.target === modal) {
//             modal.style.display = 'none';
//         }
//     }

//     downloadButton.addEventListener('click', async (e) => {
//         e.stopPropagation();
//         try {
//             const response = await fetch(downloadUrl, {
//                 mode: 'cors',
//             });

//             if (!response.ok) {
//                 throw new Error('Failed to download image');
//             }

//             const blob = await response.blob();
//             const url = URL.createObjectURL(blob);
//             const link = document.createElement('a');
//             link.href = url;
//             link.download = 'image.jpg'; // You can change the filename here
//             document.body.appendChild(link);
//             link.click();
//             document.body.removeChild(link);
//             URL.revokeObjectURL(url); // Clean up the URL object after download
//         } catch (error) {
//             console.error('Error downloading image:', error);
//         }
//     });
// });







document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');
    const clearButton = document.getElementById('clear-button');
    const loadMoreButton = document.getElementById('load-more-button');
    const searchResults = document.getElementById('search-results');
    const form = document.getElementById('search-form');
    const orientationFilter = document.getElementById('orientation-filter');
    const colorFilter = document.getElementById('color-filter');

    let query = '';
    let page = 1;
    let currentResults = [];

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        query = searchInput.value.trim();
        page = 1;
        searchResults.innerHTML = '';
        currentResults = [];
        loadMoreButton.style.display = 'none';
        if (query) {
            await performSearch(query, page);
        }
    });

    searchInput.addEventListener('input', () => {
        if (searchInput.value.trim() === '') {
            clearButton.style.display = 'none';
            searchResults.innerHTML = ''; // Clear the search results
            loadMoreButton.style.display = 'none'; // Hide the load more button
            currentResults = [];
            query = '';
            page = 1;
        } else {
            clearButton.style.display = 'inline-block';
        }
    });

    clearButton.addEventListener('click', () => {
        searchInput.value = '';
        clearButton.style.display = 'none';
        searchResults.innerHTML = '';
        currentResults = [];
        query = '';
        page = 1;
        loadMoreButton.style.display = 'none';
    });

    orientationFilter.addEventListener('change', async () => {
        page = 1;
        searchResults.innerHTML = '';
        currentResults = [];
        loadMoreButton.style.display = 'none';
        if (query) {
            await performSearch(query, page);
        }
    });

    colorFilter.addEventListener('change', async () => {
        page = 1;
        searchResults.innerHTML = '';
        currentResults = [];
        loadMoreButton.style.display = 'none';
        if (query) {
            await performSearch(query, page);
        }
    });

    loadMoreButton.addEventListener('click', async () => {
        page++;
        await performSearch(query, page);
    });

    async function performSearch(query, page) {
        const orientation = orientationFilter.value;
        const color = colorFilter.value;
        const accessKey = "cIbmBgafc_l2ZfZfgOPKQ9fpArqxiuMWVzi_hUNAhjg";
        let url = `https://api.unsplash.com/search/photos?page=${page}&query=${query}&client_id=${accessKey}`;

        if (orientation) {
            url += `&orientation=${orientation}`;
        }
        if (color) {
            url += `&color=${color}`;
        }

        try {
            const response = await fetch(url);
            const data = await response.json();

            if (response.ok) {
                if (data.results.length === 0 && page === 1) {
                    searchResults.innerHTML = '<p>No results found. Try a different query.</p>';
                } else {
                    currentResults.push(...data.results);
                    displayResults(data.results);

                    if (data.total_pages > page) {
                        loadMoreButton.style.display = 'block';
                    } else {
                        loadMoreButton.style.display = 'none';
                    }
                }
            } else {
                searchResults.innerHTML = `<p>Error: ${data.errors.join(', ')}</p>`;
            }
        } catch (error) {
            console.error('Error fetching data:', error);
            searchResults.innerHTML = '<p>Error fetching data. Please try again later.</p>';
        }
    }

    function displayResults(results) {
        results.forEach(result => {
            const resultDiv = document.createElement('div');
            resultDiv.classList.add('search-result');

            const img = document.createElement('img');
            img.src = result.urls.small;
            img.alt = result.alt_description;
            img.dataset.fullSize = result.urls.full;
            img.dataset.description = result.description || result.alt_description || 'No description available';
            img.addEventListener('click', () => openModal(result));

            const link = document.createElement('a');
            link.href = result.links.html;
            link.target = '_blank';
            link.textContent = result.description || result.alt_description || 'View Image';

            resultDiv.appendChild(img);
            resultDiv.appendChild(link);
            searchResults.appendChild(resultDiv);
        });
    }

    const modal = document.getElementById('image-modal');
    const modalImg = document.getElementById('modal-img');
    const modalCaption = document.getElementById('modal-caption');
    const downloadButton = document.getElementById('download-button');
    const closeButton = document.getElementsByClassName('close')[0];
    let downloadUrl = '';

    function openModal(result) {
        modal.style.display = 'block';
        modalImg.src = result.urls.full;
        modalCaption.textContent = result.description || result.alt_description || 'No description available';
        downloadUrl = result.urls.full; // Store the full image URL for downloading
    }

    closeButton.onclick = function() {
        modal.style.display = 'none';
    }

    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    }

    downloadButton.addEventListener('click', async (e) => {
        e.stopPropagation();

        // Prompt the user to enter the image name
        const imageName = prompt("Enter the image name", "image");

        if (!imageName) {
            alert("Download canceled. Please enter a valid name.");
            return; // Exit if the user cancels or doesn't enter a name
        }

        try {
            const response = await fetch(downloadUrl, {
                mode: 'cors',
            });

            if (!response.ok) {
                throw new Error('Failed to download image');
            }

            const blob = await response.blob();
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = `${imageName}.jpeg`; // Use the entered name with .jpeg extension
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(url); // Clean up the URL object after download
        } catch (error) {
            console.error('Error downloading image:', error);
        }
    });
});

