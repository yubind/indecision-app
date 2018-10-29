console.log('is it running?');

//JSX (javascript XML)

const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: ['One', 'Two']
}

const formSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;

    if(option) {
        app.options.push(option);
        e.target.elements.option.value = '';
    }
    render();
};

const removeAll = () => {
    app.options = [];
    render();
}

const appRoot = document.getElementById('app');

const render = () => {
    const template = (
        <div>
            <h1>{app.title}</h1> 
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Here are some options' : 'No options'}</p>
            <p>{app.options.length}</p>
            <ol>
                {
                    app.options.map((option) => <li key={option}>Option: {option}</li>)
                }
            </ol>
            <button onClick={removeAll}>Remove All</button>
            <form onSubmit={formSubmit}>
                <input type="text" name="option"/>
                <button>Add</button>
            </form>
        </div>
    );

    ReactDOM.render(template, appRoot);
}

render();












