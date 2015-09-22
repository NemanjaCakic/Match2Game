	var Game = {
		cards : '',
		gameWrap : document.getElementById('game-wrap'),
		openingCard : false,
		tilesScored : [],
		tiles : [],
		cardOpened : false,
		cardsLen : 0,
		timeLeft: 45,
		interval: null,
		won: false,

		renderGame: function() {
			cards = [
				{
					name: 'angular',
					icon: '<svg width="256px" height="270px" viewBox="0 0 256 270" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMinYMin meet">  <g transform="translate(0.000000, -1.000000)"><path d="M127.606036,1.34131737 L0.849245509,45.9497006 L20.8800958,212.021653 L127.740934,270.754491 L235.152096,211.22606 L255.175281,45.1602395 L127.606036,1.34131737 Z" fill="#B3B3B3"></path><path d="M242.531641,54.7579401 L127.31018,15.4657725 L127.31018,256.722012 L223.871234,203.280862 L242.531641,54.7579401 Z" fill="#A6120D"></path><path d="M15.0733413,55.4661557 L32.2376048,203.990611 L127.308647,256.722012 L127.308647,15.4611737 L15.0733413,55.4661557 Z" fill="#DD1B16"></path><path d="M159.026587,143.89806 L127.31018,158.729198 L93.881485,158.729198 L78.1673772,198.033629 L48.9389222,198.574754 L127.31018,24.226491 L159.026587,143.89806 L159.026587,143.89806 Z M155.960719,136.431138 L127.520192,80.128 L104.192,135.462323 L127.308647,135.462323 L155.960719,136.431138 L155.960719,136.431138 Z" fill="#F2F2F2"></path><path d="M127.308647,24.226491 L127.518659,80.128 L153.989365,135.505246 L127.368431,135.505246 L127.308647,158.69394 L164.118994,158.729198 L181.323114,198.580886 L209.289964,199.099018 L127.308647,24.226491 Z" fill="#B3B3B3"></path></g></svg>'
				},
				{
					name: 'bootstrap',
					icon: '<svg width="256px" height="256px" viewBox="0 0 256 256" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMinYMin meet">  <g><path d="M0,222.991225 C0,241.223474 14.7785318,256 33.0087747,256 L222.991225,256 C241.223474,256 256,241.221468 256,222.991225 L256,33.0087747 C256,14.7765263 241.221468,0 222.991225,0 L33.0087747,0 C14.7765263,0 0,14.7785318 0,33.0087747 L0,222.991225 Z" fill="#563D7C"></path><path d="M106.157563,113.238095 L106.157563,76.9845938 L138.069328,76.9845938 C141.108559,76.9845938 144.039202,77.2378593 146.861345,77.7443978 C149.683488,78.2509362 152.179961,79.1554557 154.35084,80.4579832 C156.52172,81.7605107 158.258397,83.5695496 159.560924,85.8851541 C160.863452,88.2007585 161.514706,91.1675823 161.514706,94.7857143 C161.514706,101.298352 159.560944,106.001853 155.653361,108.896359 C151.745779,111.790864 146.752832,113.238095 140.67437,113.238095 L106.157563,113.238095 L106.157563,113.238095 Z M72.07493,50.5 L72.07493,205.5 L147.186975,205.5 C154.133788,205.5 160.899594,204.631661 167.484594,202.894958 C174.069594,201.158255 179.93088,198.480877 185.068627,194.862745 C190.206375,191.244613 194.294803,186.577293 197.334034,180.860644 C200.373264,175.143996 201.892857,168.37819 201.892857,160.563025 C201.892857,150.866431 199.541107,142.581033 194.837535,135.706583 C190.133963,128.832132 183.00635,124.020088 173.454482,121.270308 C180.401295,117.941627 185.647508,113.672295 189.193277,108.462185 C192.739047,103.252075 194.511905,96.7395349 194.511905,88.9243697 C194.511905,81.6881057 193.317939,75.6097352 190.929972,70.6890756 C188.542005,65.7684161 185.177193,61.8247114 180.835434,58.8578431 C176.493676,55.8909749 171.283644,53.756309 165.205182,52.4537815 C159.12672,51.151254 152.397096,50.5 145.016106,50.5 L72.07493,50.5 L72.07493,50.5 Z M106.157563,179.015406 L106.157563,136.466387 L143.279412,136.466387 C150.660401,136.466387 156.594049,138.166883 161.080532,141.567927 C165.567016,144.968971 167.810224,150.649353 167.810224,158.609244 C167.810224,162.661552 167.122789,165.990183 165.747899,168.595238 C164.373009,171.200293 162.527789,173.262597 160.212185,174.782213 C157.89658,176.301828 155.219203,177.387252 152.179972,178.038515 C149.140741,178.689779 145.956833,179.015406 142.628151,179.015406 L106.157563,179.015406 L106.157563,179.015406 Z" fill="#FFFFFF"></path></g></svg>'
				},
				{
					name: 'bower',
					icon: '<svg width="256px" height="225px" viewBox="0 0 256 225" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMinYMin meet">  <g><path d="M250.862897,110.127448 C237.737379,97.5155862 172.104828,89.6424828 151.39531,87.3506207 C152.398345,84.9815172 153.252414,82.5313103 153.957517,80.0082759 C156.78069,78.7718621 159.828414,77.6215172 162.97931,76.6609655 C163.36331,77.7936552 165.171862,82.1335172 166.202483,84.1931034 C207.846069,85.3417931 209.984,53.2463448 211.677793,44.4535172 C213.334069,35.856 213.249655,27.5486897 227.533793,12.361931 C206.253241,6.16055172 175.650207,21.9735172 165.399724,45.5095172 C161.547586,44.0662069 157.687172,43.0002759 153.86869,42.3409655 C151.132138,31.3031724 136.88331,0.551724138 99.4918621,0.551724138 C52.150069,0.551724138 0.551724138,39.6077241 0.551724138,105.721931 C0.551724138,161.297103 38.4948966,210.001655 59.9326897,210.001655 C69.2948966,210.001655 77.3484138,202.990897 79.2391724,196.706207 C80.8242759,201.015172 85.6877241,214.411034 87.2849655,217.821241 C89.6457931,222.864 100.563862,227.227586 105.341793,221.994483 C111.485241,225.407448 122.757517,227.463172 128.901517,218.361379 C140.733241,220.864 151.193379,213.808552 151.421793,205.389793 C157.227586,205.079724 160.075586,196.928 158.807724,190.435862 C157.873103,185.656276 147.889655,168.505931 143.995586,162.585931 C151.704276,168.856276 171.230345,170.631172 173.601655,162.589793 C186.030345,172.345379 205.399172,167.224828 206.935172,159.291034 C222.036966,163.214897 239.358345,154.596966 236.514207,144.159448 C260.775172,142.481655 257.670069,116.66869 250.862897,110.127448 L250.862897,110.127448 Z" fill="#543729"></path><path d="M183.311448,55.0758621 C188.536828,44.7084138 195.102897,33.3881379 203.396414,26.3845517 C194.268138,30.0634483 185.255724,41.0609655 179.927172,52.8154483 C177.211034,51.0891034 174.453517,49.5492414 171.672828,48.2024828 C179.106207,32.336 196.378483,19.0852414 215.413517,18.0502069 C202.663724,29.6132414 207.189517,53.6463448 196.706759,66.3691034 C193.707034,63.3561379 186.81931,57.5415172 183.311448,55.0758621 L183.311448,55.0758621 Z M175.069793,71.958069 C175.07531,71.5613793 175.223724,68.5009655 175.502345,67.104 C174.77131,66.9318621 170.22731,66.0430345 167.858207,66.0987586 C167.685517,69.0742069 169.108414,74.1362759 170.514759,77.1834483 C180.200276,76.9804138 187.196138,74.08 191.313655,71.4135172 C187.808,69.7793103 181.826207,68.3266207 177.277793,67.4576552 C176.770207,68.5075862 175.521103,71.1828966 175.069793,71.958069 L175.069793,71.958069 Z" fill="#00ACEE"></path>        <path d="M139.080276,153.98069 L139.090207,154.027034 C137.862621,151.385379 136.558897,148.176552 135.001931,143.982345 C141.064276,152.806621 160.064552,148.255448 159.068138,140.348138 C168.368,147.345655 187.511172,139.182345 183.159172,129.370483 C192.475034,133.711448 203.107862,124.977103 200.72331,121.17131 C216.605793,124.234483 231.826207,127.287724 236.604138,128.510345 C233.430069,133.685517 226.201379,137.340138 215.304828,134.800552 C221.192828,142.821517 209.761103,152.444138 193.838345,147.144276 C197.343448,155.018483 183.166345,162.107586 167.053241,153.900138 C167.257931,161.777655 147.063724,162.68469 139.080276,153.98069 L139.080276,153.98069 Z M170.586483,114.164414 C189.020138,115.579586 219.504,118.328276 238.376276,120.969379 C237.184,114.827586 233.927172,113.073103 223.682207,110.321103 C212.663724,111.496276 184.709517,114.242207 170.586483,114.164414 L170.586483,114.164414 Z" fill="#2BAF2B"></path><path d="M159.068138,140.348138 C168.368,147.345655 187.511172,139.182345 183.159172,129.370483 C192.475034,133.711448 203.107862,124.977103 200.72331,121.17131 C181.945931,117.550897 162.242207,113.917241 157.77269,113.282207 C160.483862,113.426207 164.977655,113.734069 170.586483,114.164966 C184.710069,114.242759 212.664276,111.496828 223.682207,110.321655 C205.841655,105.798069 169.416828,99.1966897 144.261517,97.5702069 C143.095724,99.273931 140.952828,102.16331 137.220414,105.233655 C126.214621,128.520276 106.273655,143.998897 84.2102069,143.998897 C77.7804138,143.998897 70.5864828,142.914207 62.5230345,140.336552 C57.4946207,145.723586 36.0551724,149.805793 18.6593103,141.26731 C32.457931,173.577379 64.457931,195.145379 99.8791724,195.145379 C129.710897,195.145379 142.939034,164.682483 140.044138,156.622345 C139.341793,154.665379 136.558345,148.176552 135.000828,143.982897 C141.064276,152.806621 160.064,148.255448 159.068138,140.348138 L159.068138,140.348138 Z" fill="#FFCC2F"></path><path d="M140.989241,79.0388966 C143.623172,77.606069 152.725517,72.0888276 161.399172,70.0154483 C161.262345,69.0548966 161.159172,68.086069 161.095172,67.1117241 C155.40469,68.4744828 144.676414,73.0725517 138.528552,66.736 C151.499034,70.649931 157.975172,63.2485517 167.508414,63.2485517 C173.188966,63.2485517 181.294897,64.8353103 187.684414,67.344 C182.545103,62.5964138 165.692138,48.2681379 144.825931,48.2184828 C140.167172,53.8664828 135.131586,66.1009655 140.989241,79.0388966 L140.989241,79.0388966 Z" fill="#CECECE"></path><path d="M62.5230345,140.336552 C70.5864828,142.914207 77.7804138,143.998897 84.2102069,143.998897 C106.273655,143.998897 126.214069,128.519724 137.220414,105.233655 C129.080276,112.02869 114.932966,117.842759 92.8391724,117.842759 C112.518621,113.380414 129.459862,103.573517 138.077793,89.2386207 C132.019862,79.5966897 125.449379,58.265931 142.088276,41.4030345 C139.528828,33.1801379 127.070897,11.4731034 99.4918621,11.4731034 C51.3616552,11.4731034 11.4736552,51.7473103 11.4736552,105.721379 C11.4736552,118.498207 14.0529655,130.481103 18.6598621,141.266759 C36.0551724,149.805793 57.4946207,145.723586 62.5230345,140.336552 L62.5230345,140.336552 Z" fill="#EF5734"></path><path d="M76.9633103,58.1555862 C76.9633103,70.4325517 86.9158621,80.3862069 99.1933793,80.3862069 C111.470897,80.3862069 121.424552,70.4325517 121.424552,58.1555862 C121.424552,45.878069 111.470897,35.9249655 99.1933793,35.9249655 C86.9158621,35.9249655 76.9633103,45.878069 76.9633103,58.1555862 L76.9633103,58.1555862 Z" fill="#FFCC2F"></path><path d="M85.8835862,58.1555862 C85.8835862,65.5056552 91.8433103,71.4648276 99.1928276,71.4648276 C106.544,71.4648276 112.502621,65.5056552 112.502621,58.1555862 C112.502621,50.8049655 106.544552,44.8457931 99.1928276,44.8457931 C91.8433103,44.8457931 85.8835862,50.8049655 85.8835862,58.1555862 L85.8835862,58.1555862 Z" fill="#543729"></path><ellipse fill="#FFFFFF" cx="99.1928276" cy="52.249931" rx="7.75558621" ry="4.82206897"></ellipse></g></svg>'
				},
				{
					name: 'browserstack',
					icon: '<svg width="256px" height="256px" viewBox="0 0 256 256" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMinYMin meet">  <defs><radialGradient cx="50.1407407%" cy="50.0030864%" fx="50.1407407%" fy="50.0030864%" r="50.1188272%" id="radialGradient-1"><stop stop-color="#797979" offset="0%"></stop><stop stop-color="#4C4C4C" offset="100%"></stop></radialGradient></defs><g><circle fill="#F5BB60" cx="127.949264" cy="128.603432" r="127.396568"></circle><circle fill="#E86F32" cx="114.960894" cy="115.615062" r="114.684546"></circle><circle fill="#E53D42" cx="130.160051" cy="100.415906" r="99.485389"></circle><circle fill="#BFD141" cx="138.174151" cy="108.430006" r="91.4712882"></circle><circle fill="#6DB64C" cx="131.541792" cy="115.062366" r="84.8389289"></circle><circle fill="#AFDBE7" cx="118.000725" cy="101.797647" r="71.2978621"></circle><circle fill="#57BADF" cx="129.607354" cy="89.91467" r="59.6912334"></circle><circle fill="#02B2D6" cx="137.068758" cy="97.3760742" r="52.5061775"></circle><circle fill="url(#radialGradient-1)" cx="129.331006" cy="104.837478" r="44.768425"></circle><circle fill="#231F20" cx="129.331006" cy="104.837478" r="44.768425"></circle><path d="M141.088096,98.9711966 C145.526792,100.962869 151.64783,96.9551361 154.759818,90.0196748 C157.871806,83.0842136 156.796297,75.847342 152.357602,73.8556697 C147.918907,71.8639974 141.797868,75.8717302 138.68588,82.8071914 C135.573892,89.7426526 136.649401,96.9795243 141.088096,98.9711966 L141.088096,98.9711966 Z" fill="#FFFFFF"></path></g></svg>'
				},
				{
					name: 'codepen',
					icon: '<svg width="256px" height="256px" viewBox="0 0 256 256" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMinYMin meet"><g><path d="M255.806943,87.0866439 C255.748337,86.7763743 255.696625,86.4661047 255.613887,86.1627299 C255.562175,85.9800156 255.500121,85.8076436 255.441515,85.6283767 C255.355329,85.3594764 255.265695,85.0905761 255.158825,84.8285707 C255.082981,84.6458563 254.996795,84.4700369 254.914056,84.2942175 C254.796843,84.0460018 254.676183,83.8012335 254.538285,83.5633602 C254.441757,83.3875407 254.331439,83.2220636 254.224568,83.0531391 C254.076328,82.825608 253.924641,82.6015244 253.759164,82.3843357 C253.638504,82.222306 253.514396,82.0671712 253.383393,81.9120364 C253.211021,81.70519 253.024859,81.5086859 252.838698,81.3156293 C252.693905,81.1708368 252.549113,81.0260443 252.397425,80.8846993 C252.197474,80.701985 251.990627,80.529613 251.773439,80.3641359 C251.607961,80.2365806 251.445932,80.1055779 251.27356,79.9883649 C251.211506,79.9435482 251.156347,79.8918366 251.090845,79.8504673 L134.098521,1.8486897 C130.406313,-0.616229901 125.590239,-0.616229901 121.898031,1.8486897 L4.89881225,79.8470198 C4.83331089,79.8883891 4.78159929,79.9401007 4.71609793,79.9849174 C4.54372593,80.1055779 4.38169625,80.2331331 4.21621913,80.3606884 C4.00247785,80.529613 3.79218401,80.701985 3.59223249,80.8778044 C3.44054513,81.015702 3.29575265,81.1604945 3.15440761,81.3087344 C2.96135097,81.5017911 2.78208409,81.6982951 2.60626464,81.9051415 C2.47526192,82.0602763 2.35115408,82.2154111 2.23049368,82.3877831 C2.06501656,82.6049719 1.9133292,82.825608 1.76508928,83.0565865 C1.65821864,83.2255111 1.551348,83.3909882 1.45137224,83.5668076 C1.31347464,83.804681 1.19281424,84.0494492 1.07904872,84.29077 C0.996310162,84.4665895 0.906676722,84.6458563 0.834280482,84.8251232 C0.727409841,85.0871287 0.634328961,85.356029 0.548142961,85.6249293 C0.489536481,85.8041962 0.427482561,85.9800156 0.379218401,86.1420453 C0.299927281,86.44542 0.2413208,86.7522422 0.18616176,87.0659592 C0.1551348,87.2245415 0.11721296,87.3796763 0.0965283202,87.5417059 C0.0344744001,88.0174527 2.84217094e-14,88.4931994 2.84217094e-14,88.9792884 L2.84217094e-14,166.994856 C2.84217094e-14,167.477497 0.0344744001,167.960139 0.1034232,168.432438 C0.12755528,168.60481 0.172372,168.742708 0.2068464,168.908185 C0.26200544,169.218455 0.310269601,169.528724 0.413692801,169.838994 C0.461956961,170.011366 0.517116001,170.183738 0.586064801,170.373347 C0.672250801,170.649142 0.758436801,170.924937 0.861860002,171.176601 C0.934256242,171.348973 1.034232,171.521345 1.1031808,171.693717 C1.21694632,171.935037 1.3445016,172.176358 1.4823992,172.428021 C1.57892752,172.600393 1.6892456,172.772765 1.7926688,172.931347 C1.94090872,173.172668 2.1029384,173.379515 2.2753104,173.586361 C2.3959708,173.758733 2.5166312,173.896631 2.6545288,174.062108 C2.83034825,174.268954 2.99927281,174.475801 3.20611921,174.658515 C3.34746425,174.796413 3.48191441,174.968785 3.65428641,175.072208 C3.85423793,175.24458 4.06797921,175.416952 4.27482561,175.596219 C4.44030273,175.734116 4.61956961,175.837539 4.75746721,175.97199 C4.82296857,176.006464 4.86089041,176.075413 4.92983921,176.10644 L121.898031,254.146139 C123.745859,255.387218 125.862587,256.007757 128,255.997414 C130.137413,255.987072 132.254141,255.376875 134.101969,254.146139 L251.101188,176.147809 C251.166689,176.10644 251.221848,176.058176 251.283902,176.013359 C251.456274,175.892698 251.618304,175.765143 251.783781,175.637588 C251.997522,175.468663 252.207816,175.292844 252.407768,175.113577 C252.559455,174.979127 252.704247,174.830887 252.84904,174.686094 C253.038649,174.493038 253.221363,174.296534 253.393735,174.089687 C253.524738,173.934553 253.648846,173.779418 253.769506,173.613941 C253.934983,173.396752 254.086671,173.172668 254.234911,172.945137 C254.341781,172.77966 254.448652,172.610736 254.548628,172.441811 C254.686525,172.20049 254.807186,171.955722 254.924399,171.707506 C255.007137,171.531687 255.093323,171.355867 255.169167,171.176601 C255.276038,170.911148 255.365671,170.642247 255.451857,170.373347 C255.510464,170.19408 255.572517,170.018261 255.624229,169.838994 C255.70352,169.535619 255.758679,169.225349 255.817286,168.91508 C255.844865,168.756498 255.886234,168.601363 255.903472,168.439333 C255.965526,167.963586 256,167.48784 256,167.001751 L256,88.9999731 C256,88.513884 255.962078,88.0381373 255.903472,87.5623906 C255.875892,87.393466 255.824181,87.2555684 255.789706,87.0866439 L255.806943,87.0866439 Z M127.996553,154.022139 L89.0921921,128.000862 L127.996553,101.976137 L166.90436,128.000862 L127.996553,154.022139 L127.996553,154.022139 Z M116.999219,82.8669773 L69.3073339,114.76614 L30.8097713,89.0137628 L116.999219,31.5552802 L116.999219,82.8669773 L116.999219,82.8669773 Z M49.5224757,127.997414 L22.0050096,146.403297 L22.0050096,109.591532 L49.5224757,127.997414 L49.5224757,127.997414 Z M69.3073339,141.242479 L116.999219,173.138194 L116.999219,224.449891 L30.8097713,166.984513 L69.3073339,141.235584 L69.3073339,141.242479 Z M138.997334,173.131299 L186.689219,141.235584 L225.190229,166.984513 L138.997334,224.442996 L138.997334,173.131299 L138.997334,173.131299 Z M206.474077,128.004309 L233.99499,109.59498 L233.99499,146.410191 L206.474077,127.997414 L206.474077,128.004309 Z M186.689219,114.76614 L138.997334,82.8704247 L138.997334,31.5552802 L225.190229,89.0137628 L186.689219,114.76614 L186.689219,114.76614 Z" fill="#ccc"></path></g></svg>'
				},
				{
					name: 'wordpress',
					icon: '<svg width="256px" height="255px" viewBox="0 0 256 255" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMinYMin meet">  <g fill="#464342"><path d="M18.1239675,127.500488 C18.1239675,170.795707 43.284813,208.211252 79.7700163,225.941854 L27.5938862,82.985626 C21.524813,96.5890081 18.1239675,111.643057 18.1239675,127.500488 L18.1239675,127.500488 Z M201.345041,121.980878 C201.345041,108.462829 196.489366,99.1011382 192.324683,91.8145041 C186.780098,82.8045528 181.583089,75.1745041 181.583089,66.1645528 C181.583089,56.1097886 189.208976,46.7501789 199.950569,46.7501789 C200.435512,46.7501789 200.89548,46.8105366 201.367935,46.8375935 C181.907772,29.0091707 155.981008,18.1239675 127.50465,18.1239675 C89.2919675,18.1239675 55.6727154,37.7298211 36.1147317,67.4258211 C38.6809756,67.5028293 41.0994472,67.5569431 43.1536911,67.5569431 C54.5946016,67.5569431 72.3043902,66.1687154 72.3043902,66.1687154 C78.2007154,65.8211382 78.8958699,74.4814309 73.0057886,75.1786667 C73.0057886,75.1786667 67.0803252,75.8759024 60.4867642,76.2213984 L100.318699,194.699447 L124.25574,122.909138 L107.214049,76.2172358 C101.323967,75.8717398 95.744,75.1745041 95.744,75.1745041 C89.8497561,74.8290081 90.540748,65.8169756 96.4349919,66.1645528 C96.4349919,66.1645528 114.498602,67.5527805 125.246439,67.5527805 C136.685268,67.5527805 154.397138,66.1645528 154.397138,66.1645528 C160.297626,65.8169756 160.990699,74.4772683 155.098537,75.1745041 C155.098537,75.1745041 149.160585,75.8717398 142.579512,76.2172358 L182.107577,193.798244 L193.017756,157.340098 C197.746472,142.211122 201.345041,131.34465 201.345041,121.980878 L201.345041,121.980878 Z M129.42361,137.068228 L96.6056585,232.43135 C106.404423,235.31187 116.76722,236.887415 127.50465,236.887415 C140.242211,236.887415 152.457366,234.685398 163.827512,230.68722 C163.534049,230.218927 163.267642,229.721496 163.049106,229.180358 L129.42361,137.068228 L129.42361,137.068228 Z M223.481756,75.0225691 C223.95213,78.5066667 224.218537,82.2467642 224.218537,86.2699187 C224.218537,97.3694959 222.145561,109.846894 215.901659,125.448325 L182.490537,222.04774 C215.00878,203.085008 236.881171,167.854829 236.881171,127.502569 C236.883252,108.485724 232.025496,90.603187 223.481756,75.0225691 L223.481756,75.0225691 Z M127.50465,0 C57.2003902,0 0,57.1962276 0,127.500488 C0,197.813073 57.2003902,255.00722 127.50465,255.00722 C197.806829,255.00722 255.015545,197.813073 255.015545,127.500488 C255.013463,57.1962276 197.806829,0 127.50465,0 L127.50465,0 Z M127.50465,249.162927 C60.4243252,249.162927 5.84637398,194.584976 5.84637398,127.500488 C5.84637398,60.4201626 60.4222439,5.84637398 127.50465,5.84637398 C194.582894,5.84637398 249.156683,60.4201626 249.156683,127.500488 C249.156683,194.584976 194.582894,249.162927 127.50465,249.162927 L127.50465,249.162927 Z"></path></g></svg>'
				},
				{
					name: 'svg',
					icon: '<svg width="256px" height="256px" viewBox="0 0 256 256" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMinYMin meet">  <g><path d="M245.23538,153.523831 C259.246873,139.512338 259.246423,116.713014 245.23493,102.70107 C238.447775,95.9134648 229.422873,92.1757746 219.823775,92.1757746 C217.544563,92.1757746 215.300507,92.3835493 213.111887,92.7932394 C222.650141,86.2688451 228.831099,75.2978028 228.831099,63.0985915 C228.831099,43.2829296 212.709859,27.1616901 192.894197,27.1616901 C180.670648,27.1616901 169.680676,33.3674366 163.161239,42.9376901 C165.31831,31.5605634 161.934873,19.4010141 153.291718,10.7578592 C146.504563,3.97025352 137.479662,0.232112676 127.880563,0.232112676 C118.281465,0.232112676 109.256563,3.97025352 102.469408,10.7578592 C93.8258028,19.4010141 90.4428169,31.5610141 92.5998873,42.9381408 C86.0804507,33.3678873 75.0900282,27.1616901 62.8664789,27.1616901 C43.0508169,27.1616901 26.9295775,43.2829296 26.9295775,63.0985915 C26.9295775,75.2982535 33.1100845,86.2688451 42.648338,92.7927887 C40.4597183,92.3835493 38.2165634,92.1757746 35.9369014,92.1757746 C26.3378028,92.1757746 17.3133521,95.9139155 10.5257465,102.701521 C3.73814085,109.489127 0,118.514028 0,128.112676 C0,137.711775 3.73814085,146.736225 10.5257465,153.524282 C17.3133521,160.311437 26.3382535,164.049577 35.9369014,164.049577 C38.2161127,164.049577 40.4592676,163.841803 42.648338,163.432113 C33.1100845,169.956507 26.9295775,180.927549 26.9295775,193.126761 C26.9295775,212.942423 43.0508169,229.063211 62.8664789,229.063211 C75.0900282,229.063211 86.0809014,222.857465 92.5998873,213.287211 C90.4428169,224.664789 93.8262535,236.824789 102.469408,245.467944 C109.257014,252.255099 118.281915,255.993239 127.880563,255.993239 C137.479662,255.993239 146.504563,252.255099 153.291718,245.467493 C161.934873,236.824338 165.317859,224.663887 163.160789,213.286761 C169.680225,222.857014 180.670648,229.063211 192.894197,229.063211 C212.709859,229.063211 228.831099,212.942423 228.831099,193.126761 C228.831099,180.927549 222.650141,169.956507 213.112338,163.432113 C215.300958,163.841803 217.544563,164.049577 219.823775,164.049577 C229.422873,164.049577 238.447775,160.311437 245.23538,153.523831" fill="#000000"></path><path d="M234.391437,113.538254 C226.34231,105.489577 213.292169,105.489577 205.243042,113.538254 L163.05893,113.538254 L192.887887,83.7097465 C204.270873,83.7097465 213.498592,74.4820282 213.498592,63.0985915 C213.498592,51.7156056 204.270873,42.4874366 192.887887,42.4874366 C181.504451,42.4874366 172.276732,51.7156056 172.276732,63.0985915 L142.448225,92.9275493 L142.448225,50.7434366 C150.496901,42.6943099 150.496901,29.644169 142.447775,21.5950423 C134.398648,13.5459155 121.348507,13.5459155 113.29938,21.5950423 C105.250254,29.644169 105.250254,42.6943099 113.29938,50.7434366 L113.29938,92.9275493 L83.4708732,63.0985915 C83.4708732,51.7156056 74.2431549,42.4874366 62.8597183,42.4874366 C51.4767324,42.4874366 42.2485634,51.7156056 42.2485634,63.0985915 C42.2485634,74.4820282 51.4767324,83.7097465 62.8597183,83.7097465 L92.6882254,113.538254 L50.5045634,113.538254 C42.4549859,105.489127 29.4048451,105.489577 21.3557183,113.538704 C13.3065915,121.587831 13.3065915,134.637972 21.3557183,142.687099 C29.4048451,150.736225 42.4554366,150.736225 50.5045634,142.687099 L92.6882254,142.687099 L62.8597183,172.515606 C51.4767324,172.515606 42.2485634,181.743324 42.2485634,193.126761 C42.2485634,204.509746 51.4767324,213.737915 62.8597183,213.737915 C74.2431549,213.737915 83.4708732,204.509746 83.4708732,193.126761 L113.29938,163.298254 L113.29938,205.481915 C105.250254,213.531042 105.250254,226.581634 113.29938,234.630761 C121.348507,242.679887 134.399099,242.679887 142.448225,234.630761 C150.496901,226.581634 150.496901,213.531042 142.448225,205.481915 L142.448225,163.298254 L172.276732,193.126761 C172.276732,204.509746 181.504451,213.737915 192.887887,213.737915 C204.270873,213.737915 213.498592,204.509746 213.498592,193.126761 C213.498592,181.743324 204.270873,172.515606 192.887887,172.515606 L163.05893,142.687099 L205.243042,142.687099 C213.292169,150.736225 226.34231,150.736225 234.391437,142.687099 C242.440563,134.637972 242.440563,121.58738 234.391437,113.538254" fill="#FFB13B"></path></g></svg>'
				},
				{
					name: 'mdn',
					icon: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="256px" height="226px" viewBox="0 0 256 226" version="1.1" preserveAspectRatio="xMinYMin meet"><defs><linearGradient x1="50%" y1="100.019132%" x2="50%" y2="0%" id="linearGradient-1"><stop stop-color="#2075BC" offset="0%"/><stop stop-color="#29AAE1" offset="100%"/></linearGradient><linearGradient x1="50.0242991%" y1="100.019132%" x2="50.0242991%" y2="0%" id="linearGradient-2"><stop stop-color="#0A6AA8" offset="0%"/><stop stop-color="#1699C8" offset="100%"/></linearGradient><linearGradient x1="49.9807154%" y1="100.019132%" x2="49.9807154%" y2="0%" id="linearGradient-3"><stop stop-color="#2075BC" offset="0%"/><stop stop-color="#29AAE1" offset="100%"/></linearGradient><linearGradient x1="50.0192846%" y1="100.019132%" x2="50.0192846%" y2="0%" id="linearGradient-4"><stop stop-color="#0A6AA8" offset="0%"/><stop stop-color="#1699C8" offset="100%"/></linearGradient><linearGradient x1="49.9802181%" y1="100.019132%" x2="49.9802181%" y2="0%" id="linearGradient-5"><stop stop-color="#2075BC" offset="0%"/><stop stop-color="#29AAE1" offset="100%"/></linearGradient></defs><g><path d="M192.1 0.1L192.1 0 191.9 0.1 191.8 0 191.8 0.1 128 25.6 64.2 0.1 64.2 0 64.1 0.1 63.9 0 63.9 0.1 0 25.7 0 225.8 64.1 201.3 127.8 225.7 127.8 225.8 128 225.8 128.2 225.8 128.2 225.7 191.9 201.3 256 225.8 256 25.7 192.1 0.1Z" fill="url(#linearGradient-1)"/><g><path d="M0 25.7L0 225.8 64.2 201.3 64.2 0 0 25.7Z" fill="url(#linearGradient-2)"/><path d="M128.2 25.7L128.2 225.8 63.9 201.3 63.9 0 128.2 25.7Z" fill="url(#linearGradient-3)"/><path d="M127.8 25.7L127.8 225.8 192.1 201.3 192.1 0 127.8 25.7Z" fill="url(#linearGradient-4)"/><path d="M256 25.7L256 225.8 191.8 201.3 191.8 0 256 25.7Z" fill="url(#linearGradient-5)"/></g><path d="M219.8 117C217.5 110.3 218.2 98.8 217 97.1 209.5 86.8 182.2 85 169.9 71.5 172.1 64.8 167.7 59.3 163.2 55.1 156.5 50.2 147.1 52.4 139.9 54.3 131.7 52.6 124.1 49.6 116.2 47.3 98.4 45.4 80.8 57.9 80.8 57.9 68.1 65.9 48.2 82.6 38.7 92.4 41 92.7 43.5 91 46.1 90.7L64.4 86C56.8 92.3 40.8 103.3 36.2 112 41.9 110.1 53.8 103.5 59.8 103 54.6 107.6 43.8 116.3 40.3 121.8 40.7 122 40.4 122.5 40.5 122.8 45 120.3 55.8 113.9 60.7 113.5 55.6 118.8 46.3 128.9 44.2 135.7 48.6 132.8 59.7 127 64.5 125.2 63.4 127.9 60.9 129.9 59.3 132.6 57.1 136.3 51.9 140.5 51.7 145 55.6 141.4 60.4 138.3 65.2 135.7 63 140.2 59.1 143.9 58 149.2 61.2 146.1 67.1 144.6 71.2 143.2L70.7 143.7C70.4 144 65.8 147.2 62.7 150.8 65.5 150.6 63.4 150.3 66.9 151.1L68.8 151.2C67.9 151.7 66.8 152.2 65.7 152.8L65.7 152.8C64 153.7 62.2 154.7 60.3 155.7 67.9 165.4 77.3 173.1 88 178.4 102 185.3 117.4 187.5 132.7 185.7 132.5 184.8 132.3 183.9 132.1 183L132.1 183 132.1 183C131.8 181.9 131.5 180.8 131.1 179.8L131.1 179.8C131.1 179.7 131.1 179.7 131 179.6 136.2 169.9 133.5 153.2 146.9 146.5 155.9 141.9 157 139.4 167.3 141.3 172.9 142.4 185.2 146.6 191 145.3 196.3 142.3 199 141 203.6 137.5 209.4 138.5 211.2 138 213.4 134.9 211.5 137.6 217.1 124.5 219.5 119.5L219.8 117 219.8 117Z" fill="#FFFFFF"/><path d="M62.5 150.9C64.7 150.8 63.8 150.5 65.2 150.9L65.2 148.2C64.3 148.9 63.4 149.9 62.5 150.9ZM36.2 112C41.9 110.1 53.8 103.5 59.8 103 54.6 107.6 43.8 116.3 40.3 121.8 40.7 122 40.4 122.5 40.5 122.8 45 120.3 55.8 113.9 60.7 113.5 55.6 118.8 46.3 128.9 44.2 135.7 48.6 132.8 59.7 127 64.5 125.2 63.4 127.9 60.9 129.9 59.3 132.6 57.1 136.3 51.9 140.5 51.7 145 55.6 141.4 60.4 138.3 65.2 135.7 63 140.2 59.1 143.9 58 149.2 59.8 147.4 62.6 146.2 65.4 145.2L65.4 69.2C55.4 77 45 86.1 38.9 92.4 41.2 92.7 43.7 91 46.3 90.7L64.4 86C56.8 92.2 40.9 103.2 36.2 112ZM65.3 153.1C63.7 154 62 154.9 60.2 155.8 61.8 157.8 63.5 159.8 65.3 161.7L65.3 153.1Z" fill="#F2F2F2"/><path d="M191.8 84.3C183.6 81.2 175.3 77.5 170 71.6 172.2 64.9 167.8 59.4 163.3 55.2 156.6 50.3 147.2 52.5 140 54.4 136 53.5 132.1 52.4 128.3 51.2L128.3 186.2C129.8 186.1 131.2 186 132.7 185.8 132.5 184.9 132.3 184 132.1 183.1L132.1 183.1C131.8 182 131.5 180.9 131.1 179.9 131.1 179.8 131.1 179.8 131 179.7 136.2 170 133.5 153.3 146.9 146.6 155.9 142 157 139.5 167.3 141.4 172.9 142.5 185.2 146.7 191 145.4 191.3 145.3 191.5 145.1 191.8 145L191.8 84.3 191.8 84.3Z" fill="#F2F2F2"/></g></svg>'
				},
			];

			cards = cards.concat(cards.slice()).sort(function() {
			  	return 0.5 - Math.random();
			});

			var template = Handlebars.compile(document.getElementById('cards-template').innerHTML);
			var temp = template(cards);

			this.gameWrap.innerHTML = '';
			// we are appending string so we use insertAdjacentHTML
			// instead of insertChild whitch needs "real" element
			this.gameWrap.insertAdjacentHTML('beforeend', temp);

		},

		handleEvents : function() {
			var cards = [].slice.call(document.querySelectorAll('.card')),
				that = this;

			that.cardsLen = cards.length;

			for (var i = 0; i < that.cardsLen; i++) {
				cards[i].addEventListener('click', (function(i){
					return function(e){
						if (that.openingCard === false) {
							that.openCard(cards[i], e);
						}
					};
				}(i)) );
			}
		},


		finishedGame: function (lose) {
			var that = this,
				statusVal = 'You Win';

				if (that.interval) {
					clearInterval(that.interval);
					console.log('cleared');
				}

			var template = Handlebars.compile(document.getElementById('win-template').innerHTML);

			if (lose === true && that.won === false) {
				statusVal = 'You Lose';
				that.won = false;
			} else {
				that.won = true;
			}

			var temp = template({
				'status': statusVal,
			});

			// we are appending string so we use insertAdjacentHTML
			// instead of insertChild whitch needs "real" element
			this.gameWrap.insertAdjacentHTML('beforeend', temp);

			document.getElementById('btn-start-over').addEventListener('click', function(){
				that.startOver();
			});

		},

		openCard: function(card, e) {
				var	tile = card.querySelector('.front'),
					that = this;

				that.openingCard = true;

				// if the same tile is clicked or
				// if clicked on aleready scored tile we return
				if (tile === that.tiles[0] || that.tilesScored.indexOf(tile) > -1) {

					that.openingCard = false;

					return;
				}

				// parentNode used twice intentionally because we need element one level "higher" elemet
				tile.parentNode.parentNode.classList.add('active');
				that.tiles.push(tile);

		setTimeout(function(){
				if (that.cardOpened) {
						if (that.tiles[0].dataset.name === that.tiles[1].dataset.name ) {

							that.tilesScored.push(that.tiles[0]);
							that.tilesScored.push(that.tiles[1]);
							that.tiles = [];

							if (that.cardsLen === that.tilesScored.length) {

								that.finishedGame();
							}

						} else {
							that.tiles[0].parentNode.parentNode.classList.remove('active');
							that.tiles[1].parentNode.parentNode.classList.remove('active');
						}

						that.tiles = [];
						that.cardOpened = false;

				} else {
					that.cardOpened = true;

			}

			that.openingCard = false;
			}, that.cardOpened ? 1000 : 100);

		},

		startTimer: function() {
			var that = this,
				timer = document.getElementById('game-timer');

			timer.innerHTML = that.timeLeft;

		function startInterval() {
				that.interval = setInterval(updateTime, 1000);
			}

		function updateTime() {
			that.timeLeft -= 1;
			timer.innerHTML = that.timeLeft;

			if (that.timeLeft === 0) {
				clearInterval(that.interval);
				that.finishedGame(true);
			}
		}

		startInterval();
	},

	startOver: function() {
		this.gameWrap.innerHTML = '';
		this.timeLeft = 60;
		this.won = false;
		this.tilesScored = [];
		this.init();
	},
	init : function () {
		this.renderGame();
		this.handleEvents();
		this.startTimer();
	}
};

	window.onload = function(){
		var startGameBtn = document.getElementById('js-start-game');
		document.getElementById('game-timer').innerHTML = Game.timeLeft;

		startGameBtn.addEventListener('click', function(){
			Game.init();
		});



	};