import ReactDOM from 'react-dom';
import App from './app'

import './styles/global.css'

// toda função deve começar com letra maiuscula

ReactDOM.render(
    <App/>, // pra usar as funções no react basta concatenar ela em tags..
    document.getElementById('root'),
);