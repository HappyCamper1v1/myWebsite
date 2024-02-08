
let starting_the_blog = `
<div class="blog-container">
<div class="intro">
<h2 id="s1" >Starting The Blog</h2>

<p class="home-blog">Hello, welcome to my first blog post on my website. I want to share thoughts that wouldn't typically make it to my other social media platforms. This space will likely host the floating thoughts that linger in my mind.</p>

<h3 >How the Page Is Set Up</h3>

<p class="home-blog">The page doesn't rely on React or Next.js for creating single-page applications (SPAs), which might simplify maintenance. Instead, it utilizes vanilla JavaScript along with straightforward HTML and CSS to achieve the SPA design. One challenge I face is figuring out how to efficiently manage the blog page as it's prone to becoming cluttered quickly.</p>

<h3 >What I'm Currently Working On</h3>

<p class="home-blog"> Currently, I'm working on a Valentine's Day project with just a week left to wrap it up. I'm hoping I complete it on time, fingers crossed. That's all I have to say about this blog. Till next time, have a great one.</p>
</div>
</div>   
`

function showPage(pageName) {
    var content = document.getElementById('content');
    content.innerHTML = '<h1>Loading...</h1>';
        switch(pageName) {
            case 'blog1':
                content.innerHTML = starting_the_blog;
                break;
            default:
                content.innerHTML = '<h1>404 Not Found</h1><p>Page not found.</p>';
                break;
        }
   
}
