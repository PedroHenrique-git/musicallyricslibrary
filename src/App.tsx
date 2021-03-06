import { HashRouter } from 'react-router-dom';
import Routes from './routes/Routes';

export default function App(): JSX.Element {
    return (
        <HashRouter>
            <Routes />
        </HashRouter>
    );
}
