//objects literals


let user = {
    name: 'Youssef',
    age: 24,
    email: 'youssef@gmail.com',
    location: 'Egypt',
    blogs: [{ title: 'I learn JavaSript', likes: 20 },
    {title: 'I am a software engineer', likes: 22}],
    login: function () {
        console.log('Logged in');
    },
    logout: function () {
        console.log("logged out")
    },
    logBlogs() {
        console.log(`The user ${this.name} wrote this blogs:`);
        this.blogs.forEach(blog => {
            console.log(blog.title, blog.likes);
        })
    }
    
};

// console.log(user);

// user.age = 25;
// console.log(user.age)

// console.log(user['email'])

// console.log(typeof(user))

user.login();

user.logBlogs();