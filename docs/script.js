// Simulating an XML data structure with user information
const users = [
    { username: 'admin', password: 'password123', authority: 5 },
    { username: 'user1', password: 'password123', authority: 3 },
    { username: 'user2', password: 'password123', authority: 1 }
];

// Login form handler
if (document.getElementById('loginForm')) {
    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        const user = users.find(user => user.username === username && user.password === password);
        if (user) {
            sessionStorage.setItem('currentUser', JSON.stringify(user));
            window.location.href = 'home.html'; // Redirect to home page
        } else {
            alert('Invalid login credentials.');
        }
    });
}

// Logout button handler
if (document.getElementById('logoutButton')) {
    document.getElementById('logoutButton').addEventListener('click', function() {
        sessionStorage.removeItem('currentUser');
        window.location.href = 'index.html'; // Redirect to login page
    });
}

// On the home page, display options based on authority level
if (window.location.pathname.includes('home.html')) {
    const currentUser = JSON.parse(sessionStorage.getItem('currentUser'));

    if (!currentUser) {
        window.location.href = 'index.html'; // Redirect to login if not logged in
    } else {
        // Show or hide buttons based on authority level
        if (currentUser.authority === 5) {
            document.getElementById('streamButton').style.display = 'inline-block';
        }

        // Button event listeners for navigation
        document.getElementById('notificationButton').addEventListener('click', function() {
            alert('Navigating to Notifications...');
            // window.location.href = 'notification.html'; // Uncomment for actual page
        });

        document.getElementById('timelineButton').addEventListener('click', function() {
            alert('Navigating to Timeline...');
            // window.location.href = 'timeline.html'; // Uncomment for actual page
        });

        document.getElementById('streamButton').addEventListener('click', function() {
            alert('Navigating to Stream...');
            // window.location.href = 'stream.html'; // Uncomment for actual page
        });
    }
}
