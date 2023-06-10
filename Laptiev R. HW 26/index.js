search_form.addEventListener('submit', onSubmit)

function onSubmit(event){
    event.preventDefault();
    cleaner();
    
    const src = `https://jsonplaceholder.typicode.com/posts/` + `${search_form.inputId.value}`;

    fetch(src)
        .then(response => {
            if (response.status == 404) {
             throw new Error(response.statusText);
            }
            return response;
        })
        
        .then((response) => response.json())
        .then((json) => { 
            post_wrapper.style.display = 'block';
            post_title.textContent = `Post #${search_form.inputId.value}:`
            const post = post_block.appendChild(document.createElement('p'));
            post.textContent = `" ${json.body} "`;
        })

        .catch(() => {
            error_wrapper.style.display = 'block';
            error_title.textContent = `post number#${search_form.inputId.value} does not exist!!! try again.`;
        });

        commentBtn.onclick = () =>{
            const commentsSrc = `https://jsonplaceholder.typicode.com/comments`;             
            
            fetch(commentsSrc)
                .then((response) => response.json())
                .then((json) => { 
                    comment_wrapper.style.display = 'block';
                    let currentPost = json.filter((category) => category.postId == search_form.inputId.value);
                    // console.log(currentPost)
                    currentPost.forEach((postId) => {  
                    const comment = comment_block.appendChild(document.createElement("li"));
                    comment.innerText = `" ${postId.body} "`;
            });
        });
    };
};
function cleaner(){
    post_block.textContent = '';
    comment_block.textContent = '';
    post_wrapper.style.display = 'none';
    comment_wrapper.style.display = 'none';
    error_wrapper.style.display = 'none';
}