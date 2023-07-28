import './article.css';

function Article() {
  return (
    <div className="container_article">
        <h1>Getting Started</h1>
        <p className='article_description'>Create React App is an officially supported way to create single-page React applications. It offers a modern build setup with no configuration.</p>
        <h2>Quick Start</h2>
        <div className='link_box'>
            <p>npx create-react-app my-app</p>
            <p>cd my-app</p>
            <p>npm start</p>
        </div>
        <p className='article_description'>If you've previously installed <u>create-react-app</u> globally via <u>npm install -g create-react-app</u>, we recommend you uninstall the package using <u>npm uninstall -g create-react-app</u> or <u>yarn global remove create-react-app</u> to ensure that <u>npx</u> always uses the latest version.</p>
        <p className='article_description'>(npx comes with npm 5.2+ and higher, see instructions for older npm versions)</p>
        <p className='article_description'>Then open http://localhost:3000/ to see your app.</p>
        <p className='article_description'>When you’re ready to deploy to production, create a minified bundle with <u>npm run build</u>.</p>
        <h2>Get Started Immediately</h2>
        <p className='article_description'>You don’t need to install or configure tools like webpack or Babel. They are preconfigured and hidden so that you can focus on the code.</p>
        <p className='article_description'>Create a project, and you’re good to go.</p>
        <h2>Creating an App</h2>
        <p className='article_description'>You’ll need to have Node = 14 on your local development machine (but it’s not required on the server). You can use nvm (macOS/Linux) or nvm-windows to switch Node versions between different projects.</p>
        <p className='article_description'>To create a new app, you may choose one of the following methods:</p>
        <h3>npx</h3>
        <div className='link_box'>
            <p>npx create-react-app my-app</p>
        </div>
        <h3>npm</h3>
        <div className='link_box'>
            <p>npm init react-app my-app</p>
        </div>
        <h3>Yarn</h3>
        <div className='link_box'>
            <p>yarn create react-app my-app</p>
        </div>
        <h2>Selecting a template</h2>
        <p className='article_description'>You can now optionally start a new app from a template by appending <u>--template [template-name]</u> to the creation command.</p>
        <p className='article_description'>If you don't select a template, we'll create your project with our base template.</p>
        <p className='article_description'>Templates are always named in the format <u>cra-template-[template-name]</u>, however you only need to provide the <u>[template-name]</u> to the creation command.</p>
    </div>
  );
}

export default Article;