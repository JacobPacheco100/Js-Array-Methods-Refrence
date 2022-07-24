const posts = [
  { title: "post one", body: "this is post one" },
  { title: "post two", body: "this is post two" },
]

function getPost() {
  setTimeout(() => {
    let output = ""
    posts.forEach((post) => {
      output += `<li>${post.title}</li>`
    })
    document.body.innerHTML = output
  }, 1000)
}

function createPost(post, callback) {
  setTimeout(() => {
    posts.push(post)
    callback()
  }, 2000)
}

getPost()

createPost({ title: "postThree", body: "this is post three" }, getPost)
