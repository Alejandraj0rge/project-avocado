import './App.css';
import {React, useState, useEffect} from 'react';
import laptopImage from "./laptop1.png";
import laptopImage1 from "./laptop2.png";
import laptopImage2 from "./laptop3.png";
import prettyLaptopImage from "./laptop.png";
import prettyDroneImage from "./drone.png";
import room from "./livingroom.jpg";
import MontserratRegular from './fonts/Montserrat/static/Montserrat-Regular.ttf';
import MontserratBold from './fonts/Montserrat/static/Montserrat-Bold.ttf';
// import { MutatingDots } from  'react-loader-spinner';

// function Loader() {
// 	return (
// 	<div style={{display: "flex", justifyContent: "center", alignItems: "center", height: "100vh"}}>
// 		<MutatingDots 
// 			height="100"
// 			width="100"
// 			color="#4fa94d"
// 			secondaryColor= '#4fa94d'
// 			radius='12.5'
// 			ariaLabel="mutating-dots-loading"
// 			wrapperStyle={{}}
// 			wrapperClass=""
// 			visible={true}
//  		/>
// 	</div>
// 	);
// }

// function Exports() {
// 	return (
// 		<div>
// 			<title>Quality app development CSS Template Live Demo</title>
// 			<meta name="Keywords" />
// 			<meta name="Description" />
// 			<meta name="viewport" content="initial-scale=1.0,maximum-scale=1.0,user-scalable=no,width=device-width" />
// 			<link href="//fonts.googleapis.com/css?family=Roboto|Open+Sans:200,300,400,700,800,900&amp;subset=latin" rel="preload" as="font" />
// 		</div>
// 	);
// }


function Opening() {
	const [imageLoaded, setImageLoaded] = useState(false);

	const handleImageLoad = () => {
	  setImageLoaded(true);
	};

	
	return (
		(<section className="font-bold whitespace-normal relative" style={{backgroundColor : "#4a4281"}}>
			<div className="bg-origin-content p-8">
				<div id="top-title" className={`absolute top-0 left-0 w-full text-center ${imageLoaded ? 'opacity-100 transition-opacity duration-500' : 'opacity-0'}`}>
					<h1 className="text-4xl md:text-6xl mb-4 text-purple-200">Hey, I'm Alejandra <br></br> a creative developer <br></br> + UX/UI designer.</h1>
					<div id="contact-me-btns" className="mb-4">
						<a href="https://t.me/atomPerson32" target="_blank" rel="noreferrer" class="bg-blue-500 hover:bg-blue-600 text-white py-2 px-2 rounded mr-4">Want to discuss?</a>
						<a href="https://t.me/atomPerson32" target="_blank" rel="noreferrer" class="bg-blue-500 hover:bg-blue-600 text-white py-2 px-2 rounded">Let's talk</a>
					</div>
				</div>

				<img 
					src={room} 
					id="main-picture-room" 
					alt="" 
					className={`max-xl md:max-xl lg:max-2xl z-0 mt-8 mr-auto mb-0`}
					onLoad={handleImageLoad}>
				</img>
				<div class="flex justify-center items-center gap-4 mt-[-50px] md:mt-[-100px] lg:mt-[-150px]">
					<div class="flex-1">
						<div class="item-box flex-1 bg-slate-100 shadow-md text-center sm:mr-2 sm:mb-0 mb-2 h-32 sm:h-64 md:h-80 lg:h-96 w-24 sm:w-60 md:w-60 lg:w-80" style={{ marginTop: "-50px" }}>
							<svg class="" width="max-content" height="max-content" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path fill-rule="evenodd" clip-rule="evenodd" d="M15.4597 24L32.5949 16.8223L44.6372 45.008L27.4267 52.2858L15.4597 24Z" fill="#2A2941" />
								<path fill-rule="evenodd" clip-rule="evenodd" d="M18.8717 23.2246C18.1692 23.3747 17.4668 23.6498 16.8396 24.0249L17.0904 25.3754C16.5636 25.7506 16.0869 26.2257 15.7357 26.776L14.3307 26.6509C14.0046 27.2761 13.7788 27.9514 13.6534 28.6517L14.9078 29.2519C14.8827 29.8771 14.983 30.5024 15.1837 31.1026L14.1551 32.103C14.4562 32.7282 14.8576 33.3034 15.3343 33.7786L16.6639 33.2034C17.1657 33.6036 17.7427 33.9037 18.3448 34.1037L18.4954 35.4543C19.1978 35.6043 19.9254 35.6293 20.653 35.5543L21.0293 34.2038C21.6816 34.0787 22.3088 33.8286 22.8607 33.4785L24.0399 34.1788C24.6169 33.7536 25.1437 33.2284 25.5452 32.6282L24.7172 31.5528C25.0183 31.0026 25.219 30.3773 25.3194 29.7271L26.6741 29.2519C26.6992 28.5516 26.5989 27.8514 26.3731 27.2011H24.9681C24.7172 26.6259 24.3409 26.1007 23.8642 25.6755L24.3409 24.375C23.789 23.9499 23.1367 23.5998 22.4844 23.3747L21.531 24.4501C20.8788 24.3 20.2265 24.25 19.5742 24.35L18.8717 23.2246ZM18.8717 26.0257C19.7749 25.6505 20.7784 25.6255 21.6816 26.0007C22.5848 26.3508 23.3123 27.0511 23.7137 27.9514C23.8893 28.4016 23.9646 28.8768 23.9395 29.3519C23.9144 29.8271 23.8141 30.3023 23.6134 30.7275C23.4127 31.1526 23.1367 31.5528 22.7855 31.8779C22.4342 32.203 22.0077 32.4531 21.5561 32.6282C20.653 33.0283 19.6494 33.0283 18.7212 32.6782C17.818 32.3281 17.0653 31.6278 16.689 30.7275C16.5134 30.2773 16.4381 29.8021 16.4381 29.3019C16.4632 28.8267 16.5636 28.3516 16.7643 27.9014C16.965 27.4512 17.2661 27.0511 17.6173 26.7259C17.9685 26.4008 18.395 26.1507 18.8466 25.9757L18.8717 26.0257Z" fill="#2A2941" />
								<path fill-rule="evenodd" clip-rule="evenodd" d="M41.5514 28.3516C40.8489 28.5266 40.1464 28.7767 39.5192 29.1519L39.7701 30.5024C39.2433 30.8775 38.7917 31.3777 38.4154 31.9029L36.9853 31.7779C36.6341 32.4031 36.4083 33.1034 36.2829 33.8036L37.5624 34.4039C37.5373 35.0291 37.6125 35.6543 37.8383 36.2546L36.8097 37.2549C37.1108 37.8802 37.5122 38.4554 37.9889 38.9306L39.3185 38.3554C39.8203 38.7555 40.3973 39.0806 41.0245 39.2557L41.1751 40.6062C41.8775 40.7563 42.6051 40.8063 43.3327 40.7063L43.709 39.3808C44.3613 39.2557 44.9885 39.0056 45.5404 38.6555L46.7196 39.3557C47.3217 38.9306 47.8485 38.4054 48.275 37.8052L47.422 36.7297C47.7231 36.1795 47.9238 35.5543 48.0241 34.9291L49.3789 34.4539C49.404 33.7536 49.3036 33.0784 49.0778 32.4031H47.6478C47.3969 31.8279 47.0206 31.3027 46.5439 30.8775L47.0206 29.577C46.4436 29.1519 45.8164 28.8017 45.1641 28.5766L44.2358 29.6521C43.5835 29.502 42.9312 29.452 42.2789 29.552L41.5263 28.3766V28.3516H41.5514ZM41.5514 31.1776C42.4546 30.8025 43.433 30.8025 44.3362 31.1526C45.2394 31.5028 45.9418 32.203 46.3432 33.0784C46.5189 33.5285 46.5941 34.0037 46.5941 34.5039C46.569 34.9791 46.4687 35.4793 46.268 35.9044C46.0673 36.3546 45.7662 36.7548 45.415 37.0799C45.0637 37.405 44.6372 37.6551 44.1857 37.8302C43.2825 38.2053 42.2789 38.2303 41.3758 37.8802C40.4726 37.5301 39.745 36.8298 39.3436 35.9294C39.168 35.4793 39.0927 35.0041 39.0927 34.5039C39.1178 34.0287 39.2182 33.5535 39.4189 33.1034C39.6196 32.6532 39.8956 32.2781 40.2719 31.9279C40.6231 31.6028 41.0496 31.3527 41.5012 31.1776H41.5514Z" fill="#2A2941" />
								<path fill-rule="evenodd" clip-rule="evenodd" d="M19.4236 21.4488C18.696 21.5989 18.0186 21.874 17.3914 22.2491L17.6423 23.5997C17.1155 23.9748 16.6388 24.45 16.2876 25.0002L14.8575 24.8751C14.5314 25.5004 14.3056 26.1756 14.2052 26.8759L15.4596 27.5011C15.4346 28.1264 15.5098 28.7516 15.7356 29.3518L14.707 30.3272C15.0081 30.9525 15.4095 31.5277 15.8861 32.0279L17.2158 31.4526C17.7176 31.8528 18.2946 32.1779 18.8967 32.353L19.0473 33.7035C19.7497 33.8536 20.4773 33.9036 21.2048 33.8035L21.6062 32.478C22.2585 32.353 22.8857 32.1029 23.4377 31.7528L24.6168 32.453C25.1939 32.0279 25.6956 31.5027 26.097 30.9024L25.244 29.827C25.5702 29.2768 25.7709 28.6516 25.8462 28.0013L27.2009 27.5261C27.226 26.8259 27.1257 26.1506 26.8999 25.4754H25.5702C25.3193 24.9002 24.943 24.375 24.4663 23.9498L24.943 22.6493C24.366 22.2241 23.7387 21.874 23.0614 21.6489L22.1331 22.6993C21.4808 22.5493 20.8285 22.5242 20.1762 22.5993L19.4236 21.4238V21.4488ZM19.4236 24.2499C20.3268 23.8748 21.3303 23.8498 22.2335 24.2249C23.1366 24.575 23.8642 25.2753 24.2656 26.1756C24.4412 26.6258 24.5165 27.101 24.5165 27.6012C24.4914 28.0764 24.391 28.5515 24.1903 29.0017C23.9896 29.4519 23.7137 29.852 23.3373 30.1772C22.961 30.5023 22.5596 30.7524 22.108 30.9274C21.2048 31.3026 20.2013 31.3026 19.2981 30.9274C18.395 30.5523 17.6674 29.852 17.2911 28.9517C17.1155 28.5015 17.0402 28.0263 17.0653 27.5512C17.0904 27.076 17.1907 26.6008 17.3914 26.1756C17.5921 25.7505 17.8681 25.3503 18.2193 25.0252C18.5706 24.7001 18.972 24.45 19.4236 24.2749V24.2499Z" fill="#32EDBB" />
								<path fill-rule="evenodd" clip-rule="evenodd" d="M19.9254 21.0989L19.6996 20.7488L19.2981 20.8488C18.5204 21.0239 17.7678 21.324 17.0904 21.7242L16.7391 21.9492L16.99 23.3248C16.6137 23.6249 16.2876 23.975 16.0116 24.3501L14.5314 24.2251L14.3307 24.5752C13.9794 25.2505 13.7286 26.0008 13.6282 26.7761L13.5529 27.2262L14.8826 27.8765C14.8826 28.3017 14.9579 28.7518 15.0833 29.177L14.0045 30.2024L14.2052 30.6025C14.5314 31.3028 14.983 31.928 15.5349 32.4532L15.8109 32.7283L17.1907 32.1281C17.5671 32.3782 17.9685 32.6033 18.3699 32.7784L18.5204 34.2039L18.9469 34.2789C19.7246 34.454 20.5275 34.479 21.3303 34.404H21.7317L22.1331 33.0284C22.6098 32.9034 23.0614 32.7283 23.4879 32.5032L24.7423 33.2285L25.0684 33.0034C25.6956 32.5283 26.2476 31.953 26.6992 31.3028L26.95 30.9276L26.072 29.8022C26.2727 29.4021 26.4232 28.9519 26.4985 28.5017L27.9034 28.0015V27.5764C27.9285 26.8011 27.803 26.0508 27.5522 25.3255L27.4267 24.9254H25.9214C25.7207 24.5252 25.4698 24.1751 25.1688 23.85L25.6705 22.4994L25.3193 22.2243C24.6921 21.7492 24.0147 21.374 23.2621 21.1239L22.8858 20.9989L21.9073 22.0993C21.4306 22.0243 20.954 21.9993 20.4773 22.0243L19.9254 21.1739V21.0989ZM19.4236 21.449C18.696 21.5991 18.0186 21.8742 17.3914 22.2493L17.6423 23.5999C17.1155 23.975 16.6388 24.4502 16.2876 25.0004L14.8575 24.8753C14.5314 25.5006 14.3056 26.1758 14.2052 26.8761L15.4597 27.5013C15.4346 28.1266 15.5098 28.7518 15.7356 29.3521L14.707 30.3274C15.0081 30.9527 15.4095 31.5279 15.8861 32.0281L17.2158 31.4529C17.7176 31.853 18.2946 32.1781 18.8967 32.3532L19.0473 33.7037C19.7497 33.8538 20.4773 33.9038 21.2048 33.8037L21.6063 32.4782C22.2586 32.3532 22.8858 32.1031 23.4377 31.753L24.6168 32.4532C25.1939 32.0281 25.6956 31.5029 26.097 30.9026L25.244 29.8272C25.5702 29.277 25.7709 28.6518 25.8462 28.0015L27.2009 27.5264C27.226 26.8261 27.1006 26.1258 26.8999 25.4756H25.5702C25.3193 24.9004 24.943 24.3752 24.4663 23.95L24.943 22.6495C24.366 22.2243 23.7388 21.8742 23.0614 21.6491L22.1331 22.6995C21.4808 22.5495 20.8285 22.5245 20.1762 22.5995L19.4236 21.424V21.449ZM19.4236 24.2501C20.3268 23.875 21.3303 23.85 22.2335 24.2251C23.1366 24.5752 23.8642 25.2755 24.2656 26.1758C24.4412 26.626 24.5165 27.1012 24.5165 27.6014C24.4914 28.0766 24.3911 28.5517 24.1903 29.0019C23.9896 29.4521 23.7137 29.8522 23.3373 30.1774C22.9861 30.5025 22.5596 30.7526 22.108 30.9276C21.2048 31.3028 20.2013 31.3028 19.2981 30.9276C18.395 30.5525 17.6674 29.8522 17.2911 28.9519C17.1155 28.5017 17.0402 28.0265 17.0653 27.5514C17.0904 27.0762 17.1907 26.601 17.3914 26.1758C17.5921 25.7507 17.8681 25.3505 18.2194 25.0254C18.5706 24.7003 18.972 24.4502 19.4236 24.2751V24.2501ZM19.6494 24.8003C20.402 24.4752 21.2299 24.4752 22.0077 24.7503C22.7603 25.0504 23.3875 25.6256 23.7137 26.3759C23.8642 26.7511 23.9144 27.1512 23.8893 27.5514C23.8642 27.9515 23.7889 28.3517 23.6133 28.7018C23.4377 29.0769 23.2119 29.4021 22.9108 29.6522C22.6098 29.9273 22.2586 30.1273 21.8822 30.2774C21.1296 30.6025 20.2766 30.6275 19.5239 30.3274C18.7713 30.0273 18.1441 29.4521 17.8179 28.7018C17.6674 28.3267 17.6172 27.9265 17.6423 27.5264C17.6674 27.1262 17.7427 26.7261 17.9183 26.3759C18.0939 26.0258 18.3197 25.7007 18.6208 25.4256C18.9469 25.1505 19.2731 24.9254 19.6494 24.8003Z" fill="#2A2941" />
								<path fill-rule="evenodd" clip-rule="evenodd" d="M42.0782 26.6008C41.3758 26.7509 40.6733 27.026 40.0461 27.4011L40.297 28.7516C39.7701 29.1268 39.2934 29.6019 38.9422 30.1522L37.5373 30.0271C37.2111 30.6523 36.9853 31.3276 36.8599 32.0279L38.1143 32.6281C38.0892 33.2533 38.1896 33.8786 38.3903 34.4788L37.3617 35.4792C37.6627 36.1044 38.0641 36.6796 38.5408 37.1548L39.8705 36.5796C40.3722 36.9797 40.9493 37.2799 41.5514 37.4799L41.7019 38.8305C42.4044 38.9805 43.1319 39.0055 43.8595 38.9305L44.2358 37.58C44.8881 37.4549 45.5153 37.2048 46.0673 36.8547L47.2464 37.555C47.8234 37.1298 48.3252 36.6046 48.7266 36.0044L47.8987 34.929C48.1998 34.3537 48.4005 33.7535 48.5008 33.1033L49.8556 32.6281C49.8807 31.9278 49.7803 31.2276 49.5545 30.5773H48.1998C47.9489 30.0021 47.5726 29.4769 47.0959 29.0517L47.5726 27.7512C47.0206 27.3261 46.3683 26.9759 45.716 26.7509L44.7627 27.8263C44.1104 27.6762 43.4581 27.6262 42.8058 27.7262L42.0532 26.5508L42.0782 26.6008ZM42.0782 29.4019C42.9814 29.0267 43.9849 29.0017 44.8881 29.3769C45.7913 29.727 46.5188 30.4273 46.9203 31.3276C47.0959 31.7778 47.1711 32.253 47.1461 32.7281C47.121 33.2033 47.0206 33.6785 46.8199 34.1037C46.6192 34.5288 46.3432 34.929 45.992 35.2541C45.6408 35.5792 45.2143 35.8293 44.7627 36.0044C44.3111 36.2045 43.8344 36.3045 43.3327 36.3045C42.856 36.3045 42.3542 36.2295 41.9026 36.0544C41.451 35.8793 41.0245 35.6042 40.6733 35.2791C40.3221 34.929 40.0461 34.5288 39.8454 34.0786C39.6698 33.6285 39.5945 33.1533 39.6196 32.6781C39.6447 32.2029 39.745 31.7277 39.9457 31.3026C40.1464 30.8774 40.4475 30.4773 40.7987 30.1522C41.15 29.827 41.5765 29.5769 42.0281 29.4269H42.0782V29.4019Z" fill="#4C5EFD" />
								<path fill-rule="evenodd" clip-rule="evenodd" d="M42.6051 26.2508L42.3793 25.9006L41.9528 25.9757C41.175 26.1507 40.4475 26.4508 39.745 26.851L39.3687 27.0761L39.6196 28.4516C39.2433 28.7517 38.9171 29.1269 38.6411 29.502L37.1609 29.377L36.9853 29.7271C36.6341 30.4023 36.3832 31.1276 36.2828 31.8779L36.2076 32.3281L37.5373 32.9783C37.5623 33.4035 37.6125 33.8537 37.738 34.2788L36.6592 35.3042L36.8348 35.7044C37.1609 36.4046 37.6125 37.0299 38.1645 37.5551L38.4655 37.8302L39.8203 37.2299C40.1966 37.48 40.598 37.7051 40.9994 37.8802L41.15 39.3057L41.5765 39.3808C42.3542 39.5558 43.157 39.5808 43.9598 39.5058H44.3612L44.7627 38.1303C45.2393 38.0052 45.6658 37.8302 46.1174 37.6051L47.2966 38.3304L47.6227 38.1053C48.275 37.6301 48.852 37.0549 49.3287 36.3796L49.5796 36.0045L48.7015 34.879C48.9022 34.4789 49.0277 34.0287 49.128 33.5786L50.5079 33.0784V32.6532C50.5329 31.8779 50.4075 31.1276 50.1817 30.4023L50.0312 30.0022H48.551C48.3252 29.602 48.0743 29.2519 47.7732 28.9268L48.275 27.5763L47.9238 27.3012C47.3217 26.826 46.6192 26.4508 45.8665 26.2008L45.4902 26.0757L44.562 27.1511C44.0853 27.0761 43.6086 27.0511 43.1319 27.0761L42.58 26.2258L42.6051 26.2508ZM42.1033 26.6009C41.4008 26.751 40.6984 27.0261 40.0712 27.4012L40.322 28.7517C39.7952 29.1269 39.3185 29.602 38.9673 30.1523L37.5623 30.0272C37.2362 30.6524 37.0104 31.3277 36.885 32.028L38.1394 32.6532C38.1143 33.2784 38.2146 33.9037 38.4153 34.5039L37.3867 35.5043C37.6878 36.1295 38.0892 36.7047 38.5659 37.1799L39.8955 36.6047C40.3973 37.0049 40.9743 37.305 41.5765 37.505L41.727 38.8556C42.4295 39.0056 43.157 39.0306 43.8846 38.9556L44.2609 37.6301C44.9132 37.505 45.5404 37.255 46.0923 36.9048L47.2715 37.6051C47.8485 37.1799 48.3503 36.6547 48.7517 36.0545L47.9238 34.9791C48.2248 34.4039 48.4255 33.8036 48.5259 33.1534L49.8806 32.6782C49.9057 31.9779 49.8054 31.2777 49.5796 30.6274H48.1997C47.9489 30.0522 47.5725 29.527 47.0959 29.1019L47.5725 27.8014C47.0206 27.3762 46.3683 27.0261 45.716 26.801L44.7627 27.8514C44.1104 27.7013 43.4581 27.6763 42.8058 27.7513L42.0531 26.5759L42.1033 26.6009ZM42.1033 29.402C43.0065 29.0268 44.01 29.0018 44.9132 29.377C45.8164 29.7271 46.5439 30.4274 46.9453 31.3277C47.1209 31.7779 47.1962 32.2531 47.1962 32.7532C47.1711 33.2284 47.0708 33.7036 46.8701 34.1538C46.6694 34.6039 46.3934 35.0041 46.0171 35.3292C45.6658 35.6543 45.2393 35.9044 44.7877 36.0795C44.3362 36.2796 43.8595 36.3796 43.3577 36.3796C42.856 36.3796 42.3793 36.3046 41.9277 36.1045C41.4761 35.9294 41.0496 35.6543 40.6984 35.3042C40.3471 34.9541 40.0712 34.5539 39.8705 34.1038C39.6948 33.6536 39.6196 33.1784 39.6447 32.7032C39.6698 32.228 39.7701 31.7529 39.9708 31.3277C40.1715 30.9025 40.4726 30.5024 40.8238 30.1773C41.175 29.8521 41.6015 29.602 42.0531 29.452H42.1033V29.402ZM42.3291 29.9522C43.0817 29.6271 43.9347 29.6271 44.6874 29.9022C45.44 30.2023 46.0672 30.7775 46.3934 31.5278C46.5439 31.9029 46.5941 32.3031 46.569 32.7032C46.5439 33.1034 46.4436 33.5035 46.268 33.8787C46.0923 34.2538 45.8414 34.5789 45.5404 34.829C45.2393 35.1041 44.8881 35.3042 44.5118 35.4293C43.7591 35.7544 42.9061 35.7794 42.1535 35.4793C41.4008 35.1792 40.7736 34.6039 40.4475 33.8537C40.297 33.4785 40.2468 33.0784 40.2468 32.6782C40.2719 32.2781 40.3471 31.8779 40.5228 31.5278C40.6984 31.1526 40.9242 30.8275 41.2252 30.5524C41.5263 30.2773 41.8775 30.0772 42.2538 29.9272H42.3291V29.9522Z" fill="#2A2941" />
								<path fill-rule="evenodd" clip-rule="evenodd" d="M17.6674 19.7983L34.8027 12.6206L46.8199 40.8063L29.6345 48.1091L17.6674 19.7983Z" fill="white" />
								<path fill-rule="evenodd" clip-rule="evenodd" d="M35.2542 11.5452L16.5886 19.3731L29.1578 49.2095L47.8485 41.2815L35.2542 11.5452ZM18.7713 20.2485L34.3762 13.721L45.716 40.3811L30.0861 47.0087L18.7713 20.2485Z" fill="#2A2941" />
								<path fill-rule="evenodd" clip-rule="evenodd" d="M26.1472 19.4233L28.6811 18.3729L28.3048 17.4475L25.7709 18.4979L26.1472 19.4233Z" fill="#2A2941" />
								<path fill-rule="evenodd" clip-rule="evenodd" d="M28.5808 29.377L25.8963 33.8286L31.0143 34.754L31.215 33.6536L27.6525 33.0033L29.509 29.9272L28.5808 29.377Z" fill="#2A2941" />
								<path fill-rule="evenodd" clip-rule="evenodd" d="M34.3762 28.3515L37.9387 28.8517L36.2076 31.9028L37.186 32.428L39.6949 27.8763L34.5518 27.176L34.3762 28.3515Z" fill="#2A2941" />
								<path fill-rule="evenodd" clip-rule="evenodd" d="M33.3726 33.9036L33.1719 27.6763H32.0681L32.2437 33.8786L33.3726 33.9036Z" fill="#2A2941" />
							</svg>
							<h4 class="text-xs md:text-base lg:text-lg">DEVELOMENT</h4>
						</div>
					</div>
					<div class="flex-1">
						<div class="item-box flex-1 bg-slate-100 shadow-md text-center sm:mr-2 sm:mb-0 mb-2 h-32 sm:h-64 md:h-80 lg:h-96 w-24 sm:w-60 md:w-60 lg:w-80" style={{ marginTop: "-50px" }}>
							<svg class="" width="max-content" height="max-content" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path fill-rule="evenodd" clip-rule="evenodd" d="M15.8118 23.9999L32.8467 16.7971L44.8639 45.1579L27.7538 52.4857L15.8118 23.9999Z" fill="#2A2941" />
								<path fill-rule="evenodd" clip-rule="evenodd" d="M18.0195 19.7982L35.0795 12.5955L47.0466 40.9312L29.9364 48.259L18.0195 19.7982Z" fill="white" />
								<path fill-rule="evenodd" clip-rule="evenodd" d="M22.9117 18.2478C22.9117 18.2478 24.2916 19.7484 25.1697 19.6733C27.0262 19.2982 28.7824 18.5479 30.3629 17.4975C31.0403 16.9473 30.9149 14.9465 30.9149 14.9465L22.9117 18.2478Z" fill="#4C5EFD" />
								<path fill-rule="evenodd" clip-rule="evenodd" d="M31.4166 14.0962L21.9333 18.0477L22.4852 18.6479C22.9368 19.1231 23.4386 19.5483 24.0156 19.8984C24.3668 20.1485 24.8184 20.2485 25.2449 20.2235C27.2018 19.8234 29.0834 19.0731 30.7392 17.9727C31.0654 17.6726 31.2661 17.2724 31.3414 16.8472C31.4668 16.222 31.517 15.5718 31.4919 14.9215L31.4166 14.0962ZM22.9117 18.2478C22.9117 18.2478 24.2916 19.7483 25.1697 19.6733C27.0262 19.2982 28.7824 18.5479 30.3629 17.4975C31.0403 16.9473 30.9149 14.9465 30.9149 14.9465L22.9117 18.2478Z" fill="#2A2941" />
								<path fill-rule="evenodd" clip-rule="evenodd" d="M35.506 11.5452L16.9909 19.4232L29.5099 49.3345L48.0752 41.3815L35.506 11.5452ZM19.0481 20.2235L34.6781 13.646L46.018 40.5312L30.388 47.2837L19.0983 20.2735L19.0481 20.2235Z" fill="#2A2941" />
								<path fill-rule="evenodd" clip-rule="evenodd" d="M39.3947 39.4559L33.2732 42.0068L32.1442 39.0807L41.6275 35.0042L41.201 34.0288L30.7643 38.5305L32.7212 43.3824L39.8212 40.4312L39.3947 39.4559Z" fill="#2A2941" />
								<path fill-rule="evenodd" clip-rule="evenodd" d="M40.7494 32.0281L43.6597 30.7776L46.1434 32.5032L44.1865 35.8795L40.348 35.0042L40.7494 32.0281Z" fill="#A694FE" />
								<path fill-rule="evenodd" clip-rule="evenodd" d="M43.735 30.0522L40.1724 31.5778L39.5954 35.4543L44.4876 36.5797L46.9713 32.3031L43.735 30.0522ZM41.3516 32.4782L43.6095 31.5278L45.2653 32.7033L43.8353 35.1292L41.0254 34.4789L41.3516 32.4782Z" fill="#2A2941" />
								<path fill-rule="evenodd" clip-rule="evenodd" d="M38.4162 38.3304L40.8247 37.28L42.907 38.7306L41.2763 41.5316L38.0399 40.7814L38.4162 38.3304Z" fill="#FEC34E" />
								<path fill-rule="evenodd" clip-rule="evenodd" d="M40.9 36.5547L37.8141 37.8802L37.3124 41.2565L41.5774 42.2569L43.735 38.5304L40.9 36.5547ZM38.9933 38.8055L40.7745 38.0302L42.054 38.9306L40.9251 40.8313L38.7424 40.3311L38.9933 38.8055Z" fill="#2A2941" />
								<path fill-rule="evenodd" clip-rule="evenodd" d="M32.1191 30.9776L34.076 30.2273L35.6566 31.4528L34.2767 33.6286L31.6926 32.9283L32.1191 30.9776Z" fill="#2A2941" />
								<path d="M26.5746 18.1477L28.1802 17.4724" stroke="#2A2941" stroke-width="1.8587" stroke-miterlimit="10" stroke-linecap="square" />
								<path d="M25.4707 26.4507L24.3417 23.6997C24.2414 23.5246 24.2414 23.2995 24.2916 23.0995C24.3167 23.0244 24.3668 22.9494 24.417 22.8994C24.4672 22.8494 24.5424 22.7993 24.6177 22.7743C24.693 22.7493 24.7682 22.7243 24.8686 22.7243C24.9439 22.7243 25.0442 22.7493 25.1195 22.7743C25.2951 22.8744 25.4205 23.0494 25.4958 23.2245L26.6248 26.0506C26.7251 26.3257 26.8757 26.5758 27.0764 26.8009C27.2269 26.9759 27.4276 27.101 27.6534 27.151C27.9544 27.176 28.2304 27.151 28.5064 27.0259C28.682 26.9759 28.8576 26.8759 29.0081 26.7258C29.1587 26.6008 29.259 26.4257 29.3343 26.2507C29.4096 25.8255 29.3594 25.4003 29.1587 25.0252L28.0297 22.1991C27.9294 22.024 27.9043 21.799 27.9544 21.5989C27.9795 21.5239 28.0297 21.4488 28.0799 21.3738C28.1301 21.3238 28.2053 21.2738 28.3057 21.2488C28.3809 21.2237 28.4562 21.1987 28.5566 21.1987C28.6318 21.1987 28.7322 21.2237 28.8074 21.2488C28.9831 21.3488 29.1336 21.5239 29.1838 21.6989L30.3127 24.45C30.4633 24.8001 30.5887 25.2003 30.6389 25.5754C30.664 25.9255 30.6138 26.2507 30.4633 26.5758C30.3378 26.8509 30.1371 27.101 29.9113 27.3011C29.6354 27.5261 29.3343 27.7012 29.0081 27.8513C28.6318 28.0013 28.2304 28.1264 27.8039 28.1764C27.4778 28.2014 27.1516 28.1764 26.8255 28.0513C26.5244 27.9263 26.2735 27.7262 26.0728 27.4761C25.8219 27.151 25.6212 26.8009 25.4707 26.4257V26.4507Z" fill="#2A2941" />
								<path d="M31.8933 25.3003L32.395 22.8994L30.5887 21.674C30.4382 21.5739 30.3127 21.4739 30.1873 21.3488C30.112 21.2488 30.0368 21.1488 29.9615 21.0487C29.9364 20.9987 29.9113 20.9237 29.9113 20.8737C29.9113 20.8236 29.9364 20.7486 29.9615 20.6986C30.0368 20.5735 30.1371 20.4735 30.2626 20.4235C30.3378 20.3985 30.4131 20.3735 30.4883 20.3735C30.5636 20.3735 30.6389 20.3985 30.7141 20.4235C30.9148 20.5235 31.1155 20.6486 31.3163 20.7986L32.7714 21.824L33.0975 20.0483C33.1226 19.9233 33.1477 19.7982 33.1728 19.6732C33.1728 19.5732 33.1979 19.4731 33.248 19.3981C33.2731 19.3231 33.3233 19.273 33.3735 19.198C33.4237 19.148 33.4989 19.098 33.5742 19.073C33.6495 19.048 33.6996 19.0229 33.7749 19.0229C33.8502 19.0229 33.9254 19.048 33.9756 19.073C34.0258 19.098 34.076 19.123 34.1261 19.173C34.1763 19.223 34.2014 19.273 34.2265 19.3231C34.3018 19.5982 34.3018 19.8733 34.2265 20.1484L33.7749 22.2992L35.782 23.6747C35.9325 23.7497 36.0579 23.8748 36.1834 23.9748C36.2837 24.0499 36.3339 24.1499 36.3841 24.2499C36.4092 24.35 36.4092 24.425 36.3841 24.525C36.359 24.6251 36.3088 24.7001 36.2586 24.8001C36.1834 24.8752 36.1081 24.9252 36.0328 24.9752C35.9325 25.0002 35.8321 25.0002 35.7067 24.9752C35.6063 24.9752 35.5311 24.9252 35.4558 24.8752L35.0293 24.5751L33.3484 23.4496L32.947 25.5254L32.8717 25.8756C32.8717 25.9506 32.8466 26.0256 32.7965 26.0756C32.7714 26.1507 32.7212 26.2257 32.671 26.2757C32.5958 26.3507 32.5205 26.3757 32.4452 26.4258C32.37 26.4508 32.3198 26.4758 32.2445 26.4758C32.1693 26.4758 32.094 26.4508 32.0438 26.4258C31.9936 26.4008 31.9184 26.3507 31.8682 26.3007C31.818 26.2507 31.7929 26.1757 31.7678 26.1257C31.7177 25.8756 31.7678 25.5754 31.8933 25.3003Z" fill="#2A2941" />
							</svg>
							<h4 class="text-xs md:text-base lg:text-lg">UX DESIGN</h4>
						</div>
					</div>
					<div class="flex-1">
						<div class="item-box flex-1 bg-slate-100 shadow-md text-center sm:mr-2 sm:mb-0 mb-2 h-32 sm:h-64 md:h-80 lg:h-96 w-24 sm:w-60 md:w-60 lg:w-80" style={{ marginTop: "-50px" }}>
							<svg class="" width="max-content" height="max-content" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path fill-rule="evenodd" clip-rule="evenodd" d="M44.7931 29.0514C42.6857 23.0491 37.9692 20.7732 33.955 20.3481C28.4858 19.7728 21.8124 22.699 19.9056 28.9763C18.0491 34.8536 20.4325 39.9555 23.8947 42.7316C26.5038 44.8324 31.3459 47.0332 36.6646 45.2075L44.7931 29.0514Z" fill="#2A2941" />
								<path fill-rule="evenodd" clip-rule="evenodd" d="M37.1162 45.7829L45.4956 29.1265L45.4204 28.8264C43.2126 22.499 38.2451 20.1231 34.0052 19.6979C28.2349 19.0727 21.2604 22.1989 19.2283 28.8014C17.3216 34.9537 19.8304 40.3308 23.4431 43.2319C26.1777 45.4577 31.2706 47.7836 36.8402 45.8329L37.1162 45.7829ZM44.0907 29.0015L36.1879 44.6824C31.2455 46.2831 26.7296 44.2073 24.271 42.2315C21.0095 39.5805 18.8018 34.7537 20.5078 29.1765C22.3141 23.2243 28.6614 20.4482 33.8798 21.0234C37.6179 21.3736 42.0585 23.4994 44.0907 29.0015Z" fill="#2A2941" />
								<path fill-rule="evenodd" clip-rule="evenodd" d="M44.9688 26.5756C42.9115 20.6984 38.2953 18.4475 34.3565 18.0473C28.9876 17.4721 22.4646 20.3482 20.583 26.5006C18.7767 32.2527 21.0848 37.2547 24.4968 39.9807C27.0558 42.0315 31.7975 44.2073 37.0158 42.4066L44.9688 26.5756Z" fill="#FEC34E" />
								<path fill-rule="evenodd" clip-rule="evenodd" d="M37.4172 42.9317L45.621 26.6255L45.5458 26.3504C43.3882 20.1481 38.5211 17.8222 34.3815 17.397C28.7367 16.7718 21.9127 19.848 19.9056 26.3254C18.0491 32.3527 20.4827 37.6047 24.0452 40.4558C26.7296 42.6316 31.7222 44.9325 37.1663 43.0068L37.4172 42.9317ZM44.2412 26.5255L36.4889 41.8813C31.6469 43.4319 27.2063 41.4062 24.8229 39.4804C21.6367 36.8794 19.4791 32.1526 21.1601 26.6755C22.9413 20.8483 29.1381 18.1223 34.2561 18.6725C37.919 19.0476 42.2592 21.1234 44.2412 26.5255Z" fill="#2A2941" />
								<path d="M27.2063 37.5046C28.7367 36.7043 29.3639 34.8536 28.5611 33.328C27.7833 31.8274 25.9017 31.2272 24.3714 32.0275C22.841 32.8278 22.2138 34.6785 23.0166 36.2041C23.7692 37.7047 25.6508 38.2799 27.2063 37.5046Z" fill="#F5F5F5" />
								<path d="M41.7073 30.5521C43.2377 29.7768 43.8398 27.901 43.0621 26.4005C42.2843 24.8999 40.4027 24.3247 38.8974 25.1C37.3921 25.8753 36.7649 27.751 37.5427 29.2516C38.2953 30.7771 40.1769 31.3524 41.7073 30.5521Z" fill="#F5F5F5" />
								<path fill-rule="evenodd" clip-rule="evenodd" d="M40.1267 28.1511C36.2381 30.9272 32.0483 33.203 27.5576 34.8287C28.8371 37.0045 32.5501 38.8802 35.8116 37.6547C40.5031 35.8541 41.3812 31.3273 40.1267 28.1511Z" fill="#F5F5F5" />
								<path fill-rule="evenodd" clip-rule="evenodd" d="M40.3525 27.9259L40.0515 27.1506L39.3741 27.6258C35.5356 30.3519 31.396 32.6277 26.9554 34.2283L26.2279 34.5034L26.6293 35.1787C28.0342 37.5546 32.0985 39.6304 35.6861 38.2549C40.7539 36.3291 41.7073 31.4023 40.3525 27.9259ZM39.3992 29.2014C40.1267 32.0275 39.0981 35.5788 35.2095 37.0544C32.5752 38.0548 29.6399 36.8293 28.1848 35.1537C32.1738 33.6531 35.9119 31.6023 39.3992 29.2014Z" fill="#2A2941" />
								<path fill-rule="evenodd" clip-rule="evenodd" d="M37.0158 42.2315C37.0158 42.2315 36.1879 38.8552 36.3133 37.1546C36.6896 30.9522 41.3811 27.9511 44.9437 26.5505L37.0158 42.2315Z" fill="#FEC34E" />
								<path fill-rule="evenodd" clip-rule="evenodd" d="M36.3886 42.3814C36.4388 42.6565 36.6646 42.8316 36.9405 42.8566C37.2165 42.8816 37.4674 42.7565 37.5928 42.5065L45.5207 26.8255C45.621 26.5754 45.596 26.3003 45.4203 26.1002C45.2196 25.9252 44.9437 25.8251 44.6928 25.9502C40.9546 27.4007 36.0624 30.6019 35.661 37.1044C35.5356 38.8801 36.3886 42.3814 36.3886 42.3814ZM37.2416 40.3306C37.066 39.3052 36.8653 38.0548 36.9405 37.1794C37.2416 32.2275 40.5031 29.4265 43.5387 27.8759L37.2416 40.3306Z" fill="#2A2941" />
								<path fill-rule="evenodd" clip-rule="evenodd" d="M24.9986 31.1523C24.8731 30.1269 25.5254 29.3266 26.3784 28.9264C27.2063 28.5263 28.26 28.5263 28.9374 29.2015L29.4141 29.6517L30.3173 28.7263L29.8406 28.2762C28.7618 27.2508 27.1561 27.1507 25.8265 27.776C24.5219 28.4012 23.5434 29.6767 23.7191 31.3023L23.7943 31.9276L25.0738 31.7775L24.9986 31.1523Z" fill="#2A2941" />
								<path fill-rule="evenodd" clip-rule="evenodd" d="M38.9727 23.7494C37.7935 22.5989 36.1879 22.5489 34.8833 23.1992C33.5787 23.8494 32.6504 25.1749 32.801 26.6505L32.8762 27.3007L34.1557 27.1757L34.0805 26.5254C33.9801 25.5751 34.6324 24.7748 35.4603 24.3496C36.2882 23.9495 37.3168 23.9245 38.0695 24.6497L38.5211 25.0999L39.4243 24.1996L38.9727 23.7494Z" fill="#2A2941" />
							</svg>
							<h4 class="text-xs md:text-base lg:text-lg">TESTING</h4>
						</div>
					</div>
				</div>
			</div>
		</section>)
	);
}


function Projects() {
	return (
		<section class="p-10">
			<div class="project">
				<div class="">	
					<h1 class="z-10 text-4xl md:text-2xl lg:text-5xl text-slate-800">Retail Web App</h1>
					<div class="">
						<img src={laptopImage} alt="" data-image-width="1200" data-image-height="1034"/>
					</div>
				</div>
				<div class="mb-5">
					<p class="w-full text-sm md:text-l lg:text-xl text-slate-800 pr-4 sm:pr-8 md:pr-12 lg:pr-16 pt-5 pb-5">
						I utilized a component-based architecture. I structured the application by breaking it down into modular and reusable components. This architecture offered several benefits, including improved code organization, easier maintainability, and enhanced reusability. By following this approach, I created a scalable and flexible e-commerce platform that met the project's requirements.
					</p>
					<a  href="https://puntolaptop.com/inicio" target="_blank" rel="noreferrer" class="bg-blue-500 hover:bg-blue-600 text-white py-2 px-2 rounded">READ MORE</a>
				</div>
			</div>
			<div class="project">
				<div class="pb-5">	
					<h1 class="z-10 text-4xl md:text-2xl lg:text-5xl text-slate-800">CRM Web App</h1>
					<div class="">
						<img src={laptopImage1} alt="" data-image-width="1200" data-image-height="1034"/>
					</div>
				</div>
				<div class="mb-5">
					<p class="w-full text-sm md:text-l lg:text-xl text-slate-800 pr-4 sm:pr-8 md:pr-12 lg:pr-16 pt-5 pb-5">
						I developed a SaaS CRM using React, Laravel, and PHP. The project includes features like user authentication, data management, and API integrations. With seamless frontend development in React, efficient backend with Laravel, and server-side processing in PHP, I created a scalable and user-friendly CRM.
					</p>
					<a  href="http://hytechgizmo.com/user/login" rel="noreferrer" target="_blank" class="bg-blue-500 hover:bg-blue-600 text-white py-2 px-2 rounded">READ MORE</a>
				</div>
			</div>
			<div class="project">
				<div class="pb-5">	
					<h1 class="z-10 text-4xl md:text-2xl lg:text-5xl text-slate-800">CRM Web App</h1>
					<div class="">
						<img src={laptopImage2} alt="" data-image-width="1200" data-image-height="1034"/>
					</div>
				</div>
				<div class="mb-5">
					<p class="w-full text-sm md:text-l lg:text-xl text-slate-800 pr-4 sm:pr-8 md:pr-12 lg:pr-16 pt-5 pb-5">
						With experience in PHP to Laravel migration, I seamlessly integrated these technologies for a robust platform. I also troubleshooted existing issues and utilized React for an intuitive frontend. Explore my portfolio for a successful demonstration of SaaS CRM development with PHP, Laravel, and React.
					</p>
					<a href="https://admin.cleansmarts.com/?view=login" target="_blank" rel="noreferrer" class="bg-blue-500 hover:bg-blue-600 text-white py-2 px-2 rounded">READ MORE</a>
				</div>
			</div>
		</section>
		
	);
}

function AboutMe() {
	const [profileInfo, setProfileInfo] = useState(null);

	useEffect(() => {
		fetch('https://api.linkedin.com/v2/me', {
			headers: {
				'Authorization': 'Bearer YOUR_ACCESS_TOKEN'
			}
		})
		.then(response => response.json())
		.then(data => {
			setProfileInfo(data);
		})
		.catch(error => {
			console.error('Error fetching profile info:', error);
		});
	}, []);
  
	// Render profileInfo in your component
  
	return (
	  <section>

	  </section>
	);
}

// function Ending() {
// 	return (
// 		<section>
// 			<div>
// 				<img class="u-image u-image-1" src="//images01.nicepage.com/c461c07a441a5d220e8feb1a/ced4341162de5d3f9494dc5c/rtt.jpg" data-image-width="1200" data-image-height="1018"/>
// 				<div>
// 					<h1>Best Android & iPhone App Development Services</h1>
// 					<p>Excepteur sint occaecat cupidatat non , sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
// 				</div>
// 				<div class="square">
// 				</div>
// 			</div>
// 		</section>
// 	);
// }

// function Features() {
// 	return (
// 		<section>
// 			<h4>FEATURES</h4>
// 			<h1>Using design to improve product development</h1>
// 			<div>
// 				<div>
// 					<img></img>
// 					<h4>Strategy</h4>
// 					<p>Strategic planning is an organization’s process for defining their strategy so that they can accomplish specific goals and objectives</p>
// 				</div>
// 				<div>
// 					<img></img>
// 					<h4>Strategy</h4>
// 					<p>Strategic planning is an organization’s process for defining their strategy so that they can accomplish specific goals and objectives</p>
// 				</div>
// 				<div>
// 					<img></img>
// 					<h4>Strategy</h4>
// 					<p>Strategic planning is an organization’s process for defining their strategy so that they can accomplish specific goals and objectives</p>
// 				</div>
// 			</div>
			
// 		</section>
// 	);
// }


function NavBar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<nav style={{backgroundColor : "#4a4281"}}>
		<div class="container mx-auto px-4 flex justify-between">
			<div className="flex md:hidden">
				<button onClick={toggleMenu} className="text-white z-20">
				<svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
					<path d="M3 12h18M3 6h18M3 18h18"></path>
				</svg>
				</button>
			</div>
			<ul className={`md:flex md:justify-between md:items-center ${isMenuOpen ? 'sm:absolute sm:p-4 sm:z-10' : 'hidden'}`}>
				<li><a href="/" class="text-white font-bold ml-4">Home</a></li>
				<li><a href="/" class="text-white font-bold ml-4">Services</a></li>
				<li><a href="/" class="text-white font-bold ml-4">Portfolios</a></li>
				<li><a href="/" class="text-white font-bold ml-4">About me</a></li>
			</ul>
			<ul class="flex justify-between items-center py-4">
				<li class=""><a href="https://t.me/atomPerson32" target="_blank" rel="noreferrer" class="bg-blue-500 hover:bg-blue-600 text-white py-2 px-2 rounded font-bold">Let's talk</a></li>
			</ul>
		</div>
		</nav>
	);
}


function App() {
	const styles = {
		fontFamily: 'Montserrat, sans-serif',
		fontWeight: 'normal',
		fontStyle: 'normal',
		src: `url(${MontserratRegular}) format('truetype')`
	};
   
	const [showModal, setShowModal] = useState(true);
	const closeModal = () => {
		setShowModal(false);
	};

	// For bold text
	// const boldStyles = {
	// fontFamily: 'Montserrat, sans-serif',
	// fontWeight: 'bold',
	// fontStyle: 'normal',
	// src: `url(${MontserratBold}) format('truetype')`
	// };

	return (
		<div className="App" style={styles}>
			<style>
				{`
					@font-face {
					font-family: 'Montserrat';
					font-weight: normal;
					font-style: normal;
					src: url(${MontserratRegular}) format('truetype');
					}

					@font-face {
					font-family: 'Montserrat';
					font-weight: bold;
					font-style: normal;
					src: url(${MontserratBold}) format('truetype');
					}

					.opacity-0 {
						opacity: 0;
					}
					
					.opacity-100 {
						opacity: 1;
					}
					
					.transition-opacity {
						transition-property: opacity;
					}
				`}
			</style>
			{/* {showModal && (
				<div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-90 z-50 flex-col">
					<div className="text-stone-50 p-8">
						<button onClick={closeModal} className="absolute top-0 right-0 p-8 text-2xl font-extrabold">X</button>
						<h1 className="text-2xl text-center">How can I help you?</h1>
					</div>
					<div className='flex'>
						<div>
							<div className="group m-2 relative">
								<img src={prettyLaptopImage} alt="" data-image-width="1200" data-image-height="1034" className="m-2 mr-16 shadow-md w-36 sm:w-44 md:w-52 lg:w-60 cursor-pointer"/>
								<div className="hidden group-hover:block absolute bottom-0 left-0 bg-white p-2 rounded-lg shadow-md overflow-visible ">I create interactive websites that provide efficient and innovative solutions to your ideas!</div>
							</div>
							<p className="mt-6 text-center text-stone-50 sm:text-md lg:text-xl md:text-lg font-extrabold cursor-pointer">Developer</p>
						</div>
						<div>
							<div className="group m-2 relative">
								<img src={prettyDroneImage} alt="" data-image-width="1200" data-image-height="1034" className="m-2 shadow shadow-md w-36 sm:w-44 md:w-52 lg:w-60 cursor-pointer"/>
								<div className="hidden group-hover:block absolute bottom-0 left-0 bg-white p-2 rounded-lg shadow-md overflow-visible">I design efficient and innovative solutions for your electronic proyects!</div>
							</div>
							<p className="mt-6 text-center text-stone-50 sm:text-md lg:text-xl md:text-lg font-extrabold cursor-pointer">Electronic Engineer</p>
						</div>
					</div>
				</div>
			)} */}
			{/* <Exports/> */}
			<NavBar/>
			<Opening/>
			<Projects/>
			{/* <Ending/> */}
			{/* <Features/> */}
		</div>
	);
}

export default App;
