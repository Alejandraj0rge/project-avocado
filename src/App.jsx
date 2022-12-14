import './App.css';
import { Stars, OrbitControls, Cloud} from '@react-three/drei'
import { Canvas} from '@react-three/fiber';

function Box() {
	return (
		<mesh>
			<boxBufferGeometry attach="geometry"/>
			<meshLambertMaterial attach="material" color="hotpink"/>
		</mesh>
	)
}

function TopMenu(){
	return (
		<div id='top-menu'>
			<div className='top-menu-2'>Logo</div>
			<div id="top-menu-1">
				<div>Services</div>
				<div>About</div>
				<div>Our Projects</div>
				<div>Insight</div>
			</div>
			<div className='top-menu-2'>Contact Us</div>
		</div>
	)
}

function App() {
	return (
		<div className="App">
		<TopMenu/>
			<div id='top-header'>
				<div>
					<div className='title'>MY PORTFOLIO</div>
					<div className='sub-title'>Best now than ever</div>
				</div>
				<svg version="1.1" className="shadow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" id="blobSvg" style={{opacity: "1",width: "50%",height:"max-content"}}>
					<path fill="url(#gradient)" style={{opacity: "1"}}>                            
						<animate attributeName="d" dur="10000ms" repeatCount="indefinite" values="M440.5,320.5Q418,391,355.5,442.5Q293,494,226,450.5Q159,407,99,367Q39,327,31.5,247.5Q24,168,89,125.5Q154,83,219.5,68Q285,53,335.5,94.5Q386,136,424.5,193Q463,250,440.5,320.5Z;M453.78747,319.98894Q416.97789,389.97789,353.96683,436.87838Q290.95577,483.77887,223.95577,447.43366Q156.95577,411.08845,105.64373,365.97789Q54.33169,320.86732,62.67444,252.61056Q71.01719,184.3538,113.01965,135.21007Q155.02211,86.06634,220.52211,66.46683Q286.02211,46.86732,335.5,91.94472Q384.97789,137.02211,437.78747,193.51106Q490.59704,250,453.78747,319.98894Z;M411.39826,313.90633Q402.59677,377.81265,342.92059,407.63957Q283.24442,437.46649,215.13648,432.5428Q147.02853,427.61911,82.23325,380.9572Q17.43796,334.29529,20.45223,250.83809Q23.46649,167.38089,82.5856,115.05707Q141.70471,62.73325,212.19045,63.73015Q282.67618,64.72705,352.67308,84.79839Q422.66998,104.86972,421.43486,177.43486Q420.19974,250,411.39826,313.90633Z;M440.5,320.5Q418,391,355.5,442.5Q293,494,226,450.5Q159,407,99,367Q39,327,31.5,247.5Q24,168,89,125.5Q154,83,219.5,68Q285,53,335.5,94.5Q386,136,424.5,193Q463,250,440.5,320.5Z;"></animate>                        
					</path>                        
					<defs>                         
						<linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">                            
							<stop offset="0%" style={{"stop-color": "rgb(238, 205, 163)", "--darkreader-inline-stopcolor": "#ebc594"}} data-darkreader-inline-stopcolor=""></stop>                            
							<stop offset="100%" style={{"stop-color": "rgb(239, 98, 159)", "--darkreader-inline-stopcolor": "#ef639f"}} data-darkreader-inline-stopcolor=""></stop>                        
						</linearGradient>                        
					</defs>                                            
				</svg>
			</div>
			<div id='header'>
				<div>
					<div className='content-1'>
						<div className='sub-title'>
							Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
						</div>
						<div className='title-1'>SERVICES</div>
					</div>
					<div>
						<div class='animation blue'>
							<Canvas>
								<OrbitControls/>
								<Cloud/>
								<ambientLight intensity={0.5}/>
								<spotLight position={[10, 15, 10]} angle={0.3}/> 
								<Box/> 
							</Canvas>
						</div>
						<div class='animation black'>
							<Canvas>
								<OrbitControls/>
								<Stars/>
								<ambientLight intensity={0.5}/>
								<spotLight position={[10, 15, 10]} angle={0.3}/> 
								<Box/> 
							</Canvas>
						</div>
					</div>
				</div>
				<div>
					<div className='content-1'>
						<div className='title-1'>PROJECTS</div>
						<div className='sub-title'>
							Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
						</div>
					</div>
						<div className='content-1'>
							<a className='medium'>example.com</a>
							<div>dsdfd</div>
						</div>
						<div className='content-1'>
							<a className='medium'>example.com</a>
							<div>fdsdf</div>
						</div>
						<div className='content-1'>
							<a className='medium'>example.com</a>
							<div>sdfdf</div>
						</div>
				</div>
			</div>
			<div id='footer'>
				<div className='title-1'>email@gmail.com</div>
				<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
			</div>
			<TopMenu/>
		</div>
	);
}

export default App;
