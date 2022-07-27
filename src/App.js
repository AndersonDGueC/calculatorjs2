
import ContainerCal from './components/ContainerCal'
import 'bootstrap/dist/css/bootstrap.min.css'
import './style/app.css'

function App() {
  return (
    <div className="container-fluid">
      <div className="d-flex justify-content-center align-items-center">
		<div className='col-xs-6 p-5 rounded box'>
		<div className='mb-4'>
		<ContainerCal/>
		</div>
		</div>
      </div>
    </div>
  );
}

export default App;
