const appRoot = document.getElementById('app');

let show = false;

const toggle = () => {
    show = !show;
    render();
};

const render = () => {
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={toggle}>
                {show ? 'Hide details' : 'Show details'}
            </button>
            {show && <p>Hey, here are the details!</p>}
        </div>
    );
    ReactDOM.render(template, appRoot);
};

render();
