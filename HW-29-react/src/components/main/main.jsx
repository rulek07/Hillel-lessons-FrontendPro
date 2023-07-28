import './../../reset.css';
import './aside/aside.css';
import './article/article.css';
import './main.css';
import './../../index.css';
import Aside from './aside/aside';
import Article from './article/article'

function Main(){
    return (
    <div className='container_main'>
        <Aside />
        <Article />
    </div>
    );
}

export default Main;