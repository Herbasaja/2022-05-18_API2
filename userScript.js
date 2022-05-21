fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())
  .then(users => {
    let usersList = document.querySelector('#users-list');
    users.map(user => {
      let username = user.username;
      let name = user.name;
      let userId = user.id;
      let email = user.email;
      let address = `${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}`;
      let phone = user.phone;
      let website = user.website;
      let company = user.company.name;
      let postItem = document.createElement('div');
      let postHistory = document.createElement('ul')
      postItem.classList.add('post-item');
      usersList.append(postItem, postHistory);
      // fetch('https://jsonplaceholder.typicode.com/users/' + userId)
      //   .then(res => res.json())
      //   .then(user => {
          postItem.innerHTML = `<h2>${username}</h2>
                                <p> Name: ${name}</p>
                                <p> Email: ${email}</p>
                                <p> Address: ${address}</p>
                                <p> Phone: ${phone}</p>
                                <p> Website: ${website}</p>
                                <p> Company: ${company}</p>`;
      fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
        .then(res => res.json())
        .then(posts => {
          posts.map(post => {
            console.log(post)
            let postHead = post.title;
            postHistory.innerHTML += `<li><a href="#">${postHead}<a></li>`;
              // fetch('https://jsonplaceholder.typicode.com/posts?userId=' + userId)
              //   .then(res => res.json())
              //   .then(post => {
              //     postHistory.innerHTML = `<li><a href="#">${postHead}<a></li>`;
              //     })
              //  })
            })
        })
    })
  })
