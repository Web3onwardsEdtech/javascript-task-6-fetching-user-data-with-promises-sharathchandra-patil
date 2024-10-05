function fetchUserData() {
    return new Promise((resolve, reject) => {
        fetch('https://jsonplaceholder.typicode.com/users/100')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                resolve({ name: data.name, email: data.email });
            })
            .catch(error => {
                reject('Error fetching user data');
            });
    });
}
fetchUserData()
    .then(data => console.log(data))       
    .catch(error => console.log(error));  