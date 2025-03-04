const API_KEY = 'AIzaSyB2CSaU-1T6i6EcJylA7u3Dkfd_flrsRKc';
const API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent';

function handleKeyPress(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        searchQuery();
    }
}

async function searchQuery() {
    const query = document.getElementById('queryInput').value;
    if (!query) return;

    // Clear previous results
    document.querySelectorAll('.content').forEach(element => {
        element.innerHTML = '<p>Loading...</p>';
    });

    // Search for each source
    await Promise.all([
        searchGoogle(query),
        searchYoutube(query),
        searchLinkedin(query)
    ]);
}

async function searchGoogle(query) {
    try {
        const response = await fetch(`${API_URL}?key=${API_KEY}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                contents: [{
                    parts: [{
                        text: `Provide factual information about: ${query}. Include 1-2 relevant website links if applicable. Format links as [title](url).`
                    }]
                }],
                generationConfig: {
                    temperature: 0.3,
                    maxOutputTokens: 200,
                    topP: 0.8
                }
            })
        });

        const data = await response.json();
        if (data.error) {
            throw new Error(data.error.message);
        }

        const text = data.candidates?.[0]?.content?.parts?.[0]?.text || 'No results found';
        // Remove asterisks and format text with bold tags and links
        const formattedText = text
            .replace(/\*\*/g, '') // Remove all asterisks
            .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank">$1</a>') // Convert markdown links to HTML
            .replace(/^([^:]+:)/gm, '<b>$1</b>');
        document.querySelector('#google-result .content').innerHTML = `<p>${formattedText}</p>`;
    } catch (error) {
        document.querySelector('#google-result .content').innerHTML = 
            `<p class="error">Error: ${error.message}</p>`;
    }
}

async function searchYoutube(query) {
    try {
        const response = await fetch(`${API_URL}?key=${API_KEY}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                contents: [{
                    parts: [{
                        text: `List 3-4 relevant topics about "${query}" that would make good educational video content. Include YouTube video links if applicable. Format as bullet points and links as [title](url).`
                    }]
                }],
                generationConfig: {
                    temperature: 0.3,
                    maxOutputTokens: 200,
                    topP: 0.8
                }
            })
        });

        const data = await response.json();
        if (data.error) {
            throw new Error(data.error.message);
        }

        const text = data.candidates?.[0]?.content?.parts?.[0]?.text || 'No results found';
        // Remove asterisks and format bullet points with bold titles and links
        const formattedText = text
            .replace(/\*\*/g, '') // Remove all asterisks
            .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank">$1</a>') // Convert markdown links to HTML
            .replace(/^•\s*([^:]+:)/gm, '• <b>$1</b>');
        document.querySelector('#youtube-result .content').innerHTML = `<p>${formattedText}</p>`;
    } catch (error) {
        document.querySelector('#youtube-result .content').innerHTML = 
            `<p class="error">Error: ${error.message}</p>`;
    }
}

async function searchLinkedin(query) {
    try {
        const response = await fetch(`${API_URL}?key=${API_KEY}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                contents: [{
                    parts: [{
                        text: `Provide 2-3 professional insights about "${query}" that would be relevant for a business audience. Include relevant LinkedIn or professional links if applicable. Format as bullet points and links as [title](url).`
                    }]
                }],
                generationConfig: {
                    temperature: 0.3,
                    maxOutputTokens: 200,
                    topP: 0.8
                }
            })
        });

        const data = await response.json();
        if (data.error) {
            throw new Error(data.error.message);
        }

        const text = data.candidates?.[0]?.content?.parts?.[0]?.text || 'No results found';
        // Remove asterisks and format bullet points with bold titles and links
        const formattedText = text
            .replace(/\*\*/g, '') // Remove all asterisks
            .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank">$1</a>') // Convert markdown links to HTML
            .replace(/^•\s*([^:]+:)/gm, '• <b>$1</b>');
        document.querySelector('#linkedin-result .content').innerHTML = `<p>${formattedText}</p>`;
    } catch (error) {
        document.querySelector('#linkedin-result .content').innerHTML = 
            `<p class="error">Error: ${error.message}</p>`;
    }
} 