import ReactDOM from 'react-dom'
import App from './components/App';
import reduxThunk from 'redux-thunk';
import reducers from './reducers'
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import 'semantic-ui-css/semantic.min.css'
import 'react-toastify/dist/ReactToastify.min.css'
import 'react-toastify/dist/ReactToastify.min.css'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers,
    composeEnhancers(applyMiddleware(reduxThunk)))

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.querySelector('#root'));
