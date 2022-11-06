import './App.css';
import React from 'react';
import FunctionCard from './FunctionCard';
import vacuum from './statesData/tom_sim_vacuum.json';
import coherent from './statesData/tom_sim_coherent.json';
import thermal from './statesData/tom_sim_thermal.json';
import squeezed from './statesData/tom_sim_squeezed.json';

function App() {
	return (
		<div className="App">
			<h1 className="Title">Wigner Functions gallery</h1>

			<p>
				Lorem ipsum dolor sit amen, consectetur adipiscing elit,
				sed do eiusmod tempor incididunt ut labore et dolore magna
				aliqua. Ut enim ad minim veniam, quis nostrud exercitation
				ullamco laboris nisi ut aliquip ex ea commodo consequat.
				Duis aute irure dolor in reprehenderit in voluptate velit
				esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
				occaecat cupidatat non proident, sunt in culpa qui officia
				deserunt mollit anim id est laborum.
			</p>

			<div className="Gallery">
				<FunctionCard
					title="Vacuum"
					description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
					q={vacuum.Q}
					p={vacuum.P}
					w={vacuum.W}
				/>
				<FunctionCard
					title="Coherent"
					description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
					q={coherent.Q}
					p={coherent.P}
					w={coherent.W}
				/>
				<FunctionCard
					title="Thermal"
					description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
					q={thermal.Q}
					p={thermal.P}
					w={thermal.W}
				/>
				<FunctionCard
					title="Squeezed"
					description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
					q={squeezed.Q}
					p={squeezed.P}
					w={squeezed.W}
				/>
			</div>
		</div>
	);
}

export default App;
