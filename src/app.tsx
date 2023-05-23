import * as ReactDOM from 'react-dom/client';
import {Test} from './Test';

function render() {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<Test />);
}

render();