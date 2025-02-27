document.getElementById('signupForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const age = document.getElementById('age').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;
    const phone = document.getElementById('phone').value;

    try {
        const response = await fetch('http://localhost:3000/v1/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password, age, email, address, phone }),
        });

        if (response.ok) {
            const data = await response.json();
            console.log('Signup successful:', data);
            alert('Signup successful! Please log in.');
            window.location.href = '/index.html';
            //set jwt in the cookie
            // document.cookie = `jwt=${data.token}`;
            //redirect

            cookie.set('jwt', data.token);
        } else {
            const errorData = await response.json();
            console.error('Signup failed:', errorData);
            alert('Signup failed: ' + errorData.message);
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred. Please try again.');
    }
});
