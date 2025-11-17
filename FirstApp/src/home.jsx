import King from './king.jsx';
import Last from './last.jsx';
import Todo from './component/todo.jsx';


function Home() {
    let fname = "Sharat";
    let vage = 24; 
    return (
        <div>
            <h1>hello, this is home page.</h1>
            <h1><King fnames={fname} /></h1>
            <h1><Last fnamess={fname} /></h1>
            <Todo name={fname} />
            <Todo age = {vage} />
        </div>
    );
}

export default Home;