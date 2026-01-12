// Search and Recent Posts for 404 page
// Refactored by Rye (itsrye.dev)
// Copyright remains with original author raisingpixels and remains under MIT License (even if content has been changed)

function timeAgo(timestamp, locale = 'en') {
    let value;
    const diff = (new Date().getTime() - timestamp.getTime()) / 1000;
    const minutes = Math.floor(diff / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30);
    const years = Math.floor(months / 12);
    const rtf = new Intl.RelativeTimeFormat(locale, { numeric: "auto" });

    if (years > 0) {
        value = rtf.format(0 - years, "year");
    } else if (months > 0) {
        value = rtf.format(0 - months, "month");
    } else if (days > 0) {
        value = rtf.format(0 - days, "day");
    } else if (hours > 0) {
        value = rtf.format(0 - hours, "hour");
    } else if (minutes > 0) {
        value = rtf.format(0 - minutes, "minute");
    } else {
        value = rtf.format(0 - diff, "second");
    }
    return value;
}

let searchData = [];

// Load recent posts for git log
function loadRecentPosts() {
    const gitLogContent = document.getElementById('gitLogContent');

    if (searchData.length > 0) {
        const recentPosts = searchData.slice(0, 5);
        gitLogContent.innerHTML = recentPosts.map((post, index) => {
            const hash = Math.random().toString(36).substring(2, 9);
            return `
                        <div class="git-commit">
                            <span class="commit-hash">${hash}</span>
                            <div class="commit-message">
                                <a href="${post.url}">feat: ${post.title}</a>
                            </div>
                            <span class="commit-date">${timeAgo(new Date(post.date))}</span>
                        </div>
                    `;
        }).join('');
    }
}



async function loadSearchData() {
    const endpoints = ['/index.json', '/search/index.json'];

    for (const endpoint of endpoints) {
        try {
            const response = await fetch(endpoint);
            console.debug(`Trying to load search index from ${endpoint}`);
            if (!response.ok) continue;

            const data = await response.json();

            if (Array.isArray(data)) {
                console.debug(`Loaded search index from ${endpoint}`, data);
                searchData = data;
                return;
            }
        } catch {
            // try next endpoint
        }
    }

    throw new Error('No valid search index found');
}

function performSearch(query) {
    console.debug('Searching for:', query);

    const results = document.getElementById('searchResults');
    if (!results || !Array.isArray(searchData)) return;

    results.innerHTML = '';

    if (!query || !query.trim()) {
        results.classList.remove('show');
        return;
    }

    const searchLower = query.toLowerCase();

    const matches = searchData
        .filter(post => {
            const title = post.title?.toLowerCase() || '';
            const excerpt = post.excerpt?.toLowerCase() || '';
            const tags = Array.isArray(post.tags) ? post.tags : [];

            return (
                title.includes(searchLower) ||
                excerpt.includes(searchLower) ||
                tags.some(tag => tag.toLowerCase().includes(searchLower))
            );
        })
        .slice(0, 5);

    if (matches.length === 0) {
        results.innerHTML =
            '<div class="no-results">No posts found. Try different keywords!</div>';
    } else {
        matches.forEach(post => {
            const item = document.createElement('div');
            item.className = 'search-result';

            item.addEventListener('click', () => {
                window.location.href = post.url;
            });

            const title = document.createElement('div');
            title.className = 'result-title';
            title.textContent = post.title || '';

            const excerpt = document.createElement('div');
            excerpt.className = 'result-excerpt';
            const pEl = /<p>(.*?)<\/p>/
            const postExcerpt = post.excerpt.replace(pEl, '$1');
            excerpt.textContent =
                (postExcerpt || '').substring(0, 100) + '...';

            item.appendChild(title);
            item.appendChild(excerpt);
            results.appendChild(item);
        });
    }

    results.classList.add('show');
    console.debug('Search results:', matches);
}


// Random post functionality
function getRandomPost() {
    if (searchData.length > 0) {
        const randomPost = searchData[Math.floor(Math.random() * searchData.length)];
        window.location.href = randomPost.url;
    } else {
        window.location.href = '/';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    console.log('Loading search data and recent posts...');
    loadSearchData().then(() => {
        console.log('Search data loaded.');
        loadRecentPosts();
    });
    document.getElementById('searchInput').addEventListener('input', (e) => {
        console.debug('Performing search for:', e.target.value);
        performSearch(e.target.value);
    });

    document.getElementById('searchBtn').addEventListener('click', () => {
        const query = document.getElementById('searchInput').value;
        if (query.trim()) {
            performSearch(query);
        }
    });

    document.getElementById('randomPostBtn').addEventListener('click', getRandomPost);

    // Close search results when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.search-wrapper')) {
            document.getElementById('searchResults').classList.remove('show');
        }
    });

    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            document.getElementById('searchResults').classList.remove('show');
        }
        if (e.key === '/' && !e.target.matches('input')) {
            e.preventDefault();
            document.getElementById('searchInput').focus();
        }
    });
});
