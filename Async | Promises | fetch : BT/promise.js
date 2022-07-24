const posts = [
  { title: "item1", info: "info1" },
  { title: "item2", info: "info2" },
]

function displayPost() {
  setTimeout(() => {
    let list = ""
    posts.forEach((post) => {
      list += `<li>${post.title} || ${post.info}</li>`
      document.body.innerHTML = list
    })
  }, 1000)
}

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post)
      const err = false
      console.log("resovled!!!!!!")

      if (!err) {
        resolve()
      } else {
        reject("error: something is wrong")
      }
    }, 10000)
  })
}

// createPost({ title: "bastard", info: "not a bastard" }).then(displayPost)

//async / await

// async function init() {
//   await createPost({ title: "bastard", info: "not a bastard" })
//   displayPost()
// }
// init()

//async await with fetch
async function getUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users")
  const data = await res.json()
  console.log(data)
}

getUsers()
//promise.all
// const promise1 = Promise.resolve("hello World")
// const promise2 = 10
// const promise3 = new Promise((resolve, reject) =>
//   setTimeout(resolve, 2000, "goodbye")
// )

// const promise4 = fetch("https://jsonplaceholder.typicode.com/users").then(
//   (res) => res.json()
// )

// Promise.all([promise1, promise2, promise3, promise4]).then((values) =>
//   console.log(values)
// )
