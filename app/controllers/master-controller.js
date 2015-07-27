(function( ng, app ) {

	"use strict";

	app.controller(
		"MasterController",
		function( $scope ) {


			// -- Define Controller Methods. ---------------- //
				$scope.levelFlag =false;
				
				$scope.userWin = 0;
				$scope.systemWin = 0;
				$scope.draw = 0;
				$scope.userArray = [];
				$scope.systemArray = [];
				$scope.clicked = [true,true,true,true,true,true,true,true,true,true];
				$scope.result ='';
				$scope.classFlag =[true,true,true,true,true,true,true,true,true,true];
				$scope.commonSymbol = ['','','','','','','','','',''];
				$scope.canClick = true;
				$scope.symbols = [
	        {
	            definition: 'X'
	        },
	        {
	            definition: 'O'
	        }
	    ];
		$scope.levels = [
	        {
	            definition: 'Beginner',
				value: 1
	        },
	        {
	            definition: 'Difficult',
				value: 2
	        }
	    ];
		/*
$scope.levelFixed = function(level){
			if($scope.levelFlag)
			{
				$scope.levelFlag =false;	
			}
			else{
				return;
			}
			
		};
*/
		$scope.remove = function(symbol) {
 		 if(symbol.definition == 'X' && this.symbols.length >1)
		 {
		 	this.symbols.splice(1);
			$scope.selectedSymbol = 'X';
			$scope.systemSymbol = 'O';
		 }
		 else if (symbol.definition == 'O' && this.symbols.length >1)
		 {
		 	this.symbols.splice(0,1);
			 $scope.selectedSymbol = 'O';
			 $scope.systemSymbol = 'X';
		 } 
  		
		};
		$scope.changeLevel= function(){
			$scope.levelFlag = true;
			
		};
		$scope.showGrid = function(){
			return $scope.selectedSymbol != '' && ($scope.selectedLevel.value ==1 || $scope.selectedLevel.value == 2);
		}
		$scope.playAgain = function(){
			if (!$scope.canClick) {
				$scope.levelFlag = false;
				$scope.userArray = [];
				$scope.systemArray = [];
				$scope.clicked = [true, true, true, true, true, true, true, true, true, true];
				$scope.result = '';
				$scope.classFlag = [true, true, true, true, true, true, true, true, true, true];
				$scope.commonSymbol = ['', '', '', '', '', '', '', '', '', ''];
				$scope.canClick = true;
			}
		};
		$scope.addToUserArray = function(number){
			$scope.levelFlag = true;
			if ($scope.commonSymbol[number] != '') {
					return;
				}
			if ($scope.selectedLevel.value == 2) {
			
				$scope.userArray.push(number);
				
				if ($scope.userArray.length == 1) {
					$scope.clicked[number] = false;
					$scope.commonSymbol[number] = $scope.selectedSymbol;
					if ($scope.userArray[0] == 1 || $scope.userArray[0] == 3 || $scope.userArray[0] == 7 || $scope.userArray[0] == 9) {
						$scope.systemArray.push(5);
						$scope.clicked[5] = false;
						$scope.commonSymbol[5] = $scope.systemSymbol;
					}
					else 
						if ($scope.userArray[0] == 2 || $scope.userArray[0] == 4 || $scope.userArray[0] == 6 || $scope.userArray[0] == 8) {
							$scope.systemArray.push(5);
							$scope.clicked[5] = false;
							$scope.commonSymbol[5] = $scope.systemSymbol;
						}
						else 
							if ($scope.userArray[0] == 5) {
								$scope.systemArray.push(1);
								$scope.clicked[1] = false;
								$scope.commonSymbol[1] = $scope.systemSymbol;
							}
					
				}
				if ($scope.userArray.length == 2) {
					$scope.clicked[number] = false;
					$scope.commonSymbol[number] = $scope.selectedSymbol;
					if ($scope.userArray[0] == 1 || $scope.userArray[0] == 3 || $scope.userArray[0] == 7 || $scope.userArray[0] == 9) {
						if ($scope.userArray[1] == 1 || $scope.userArray[1] == 3 || $scope.userArray[1] == 7 || $scope.userArray[1] == 9) {
							var sum = $scope.userArray[0] + $scope.userArray[1];
							if (sum == 4) {
								$scope.systemArray.push(2);
								$scope.clicked[2] = false;
								$scope.commonSymbol[2] = $scope.systemSymbol;
							}
							else 
								if (sum == 16) {
									$scope.systemArray.push(8);
									$scope.clicked[8] = false;
									$scope.commonSymbol[8] = $scope.systemSymbol;
								}
								else 
									if (sum == 8) {
										$scope.systemArray.push(4);
										$scope.clicked[4] = false;
										$scope.commonSymbol[4] = $scope.systemSymbol;
									}
									else 
										if (sum == 12) {
											$scope.systemArray.push(6);
											$scope.clicked[6] = false;
											$scope.commonSymbol[6] = $scope.systemSymbol;
										}
										else 
											if (sum == 3) {
												$scope.systemArray.push(3);
												$scope.clicked[3] = false;
												$scope.commonSymbol[3] = $scope.systemSymbol;
											}
											else 
												if (sum == 15) {
													$scope.systemArray.push(9);
													$scope.clicked[9] = false;
													$scope.commonSymbol[9] = $scope.systemSymbol;
												}
												else 
													if (sum == 5) {
														$scope.systemArray.push(7);
														$scope.clicked[7] = false;
														$scope.commonSymbol[7] = $scope.systemSymbol;
													}
													else 
														if (sum == 9) {
															$scope.systemArray.push(9);
															$scope.clicked[9] = false;
															$scope.commonSymbol[9] = $scope.systemSymbol;
														}
														else 
															if (sum == 10) {
															
																$scope.systemArray.push(2);
																$scope.clicked[2] = false;
																$scope.commonSymbol[2] = $scope.systemSymbol;
															}
						}
						if ($scope.userArray[1] == 2 || $scope.userArray[1] == 4 || $scope.userArray[1] == 6 || $scope.userArray[1] == 8) {
							var sum = $scope.userArray[0] + $scope.userArray[1];
							
							if (sum == 3) {
								$scope.systemArray.push(3);
								$scope.clicked[3] = false;
								$scope.commonSymbol[3] = $scope.systemSymbol;
							}
							else 
								if (sum == 7) {
									if ($scope.userArray.indexOf(1) > -1) {
										$scope.systemArray.push(3);
										$scope.clicked[3] = false;
										$scope.commonSymbol[3] = $scope.systemSymbol;
									}
									else {
										$scope.systemArray.push(1);
										$scope.clicked[1] = false;
										$scope.commonSymbol[1] = $scope.systemSymbol;
									}
								}
								else 
									if (sum == 5) {
										if ($scope.userArray.indexOf(1) > -1) {
											$scope.systemArray.push(7);
											$scope.clicked[7] = false;
											$scope.commonSymbol[7] = $scope.systemSymbol;
										}
										else 
											if ($scope.userArray.indexOf(3) > -1) {
												$scope.systemArray.push(1);
												$scope.clicked[1] = false;
												$scope.commonSymbol[1] = $scope.systemSymbol;
											}
									}
									else 
										if (sum == 9 && $scope.userArray.indexOf(3) > -1) {
											$scope.systemArray.push(9);
											$scope.clicked[9] = false;
											$scope.commonSymbol[9] = $scope.systemSymbol;
										}
										else 
											if (sum == 9 && $scope.userArray.indexOf(7) > -1) {
												$scope.systemArray.push(1);
												$scope.clicked[1] = false;
												$scope.commonSymbol[1] = $scope.systemSymbol;
											}
											else 
												if (sum == 15) {
													if ($scope.userArray.indexOf(7) > -1) {
														$scope.systemArray.push(9);
														$scope.clicked[9] = false;
														$scope.commonSymbol[9] = $scope.systemSymbol;
													}
													else 
														if ($scope.userArray.indexOf(9) > -1) {
															$scope.systemArray.push(3);
															$scope.clicked[3] = false;
															$scope.commonSymbol[3] = $scope.systemSymbol;
														}
													
												}
												else 
													if (sum == 11 && $scope.userArray.indexOf(4) > -1) {
														
														$scope.systemArray.push(1);
														$scope.clicked[1] = false;
														$scope.commonSymbol[1] = $scope.systemSymbol;
													}
													else 
														if (sum == 11 && $scope.userArray.indexOf(8) > -1) {
															$scope.systemArray.push(9);
															$scope.clicked[9] = false;
															$scope.commonSymbol[9] = $scope.systemSymbol;
														}
													else 
														if (sum == 11 && $scope.userArray.indexOf(9) > -1) {
															$scope.systemArray.push(3);
															$scope.clicked[3] = false;
															$scope.commonSymbol[3] = $scope.systemSymbol;
														}
														else 
															if (sum == 17) {
																$scope.systemArray.push(7);
																$scope.clicked[7] = false;
																$scope.commonSymbol[7] = $scope.systemSymbol;
															}
															else 
																if (sum == 13 && $scope.userArray.indexOf(7) > -1) {
																	$scope.systemArray.push(8);
																	$scope.clicked[8] = false;
																	$scope.commonSymbol[8] = $scope.systemSymbol;
																}
																else if(sum == 13)
																{
																	$scope.systemArray.push(7);
																	$scope.clicked[7] = false;
																	$scope.commonSymbol[7] = $scope.systemSymbol;
																}
																else if(sum == 9 && $scope.userArray.indexOf(8) > -1)
																{
																	$scope.systemArray.push(7);
																	$scope.clicked[7] = false;
																	$scope.commonSymbol[7] = $scope.systemSymbol;
																}
						}
					}
					if ($scope.userArray[0] == 2 || $scope.userArray[0] == 4 || $scope.userArray[0] == 6 || $scope.userArray[0] == 8) {
						if ($scope.userArray[1] == 1 || $scope.userArray[1] == 3 || $scope.userArray[1] == 7 || $scope.userArray[1] == 9) {
							var sum = $scope.userArray[0] + $scope.userArray[1];
							if (sum == 5) {
								if ($scope.userArray.indexOf(4) > -1) {
									$scope.systemArray.push(7);
									$scope.clicked[7] = false;
									$scope.commonSymbol[7] = $scope.systemSymbol;
								}
								else 
									if ($scope.userArray.indexOf(2) > -1) {
										$scope.systemArray.push(1);
										$scope.clicked[1] = false;
										$scope.commonSymbol[1] = $scope.systemSymbol;
									}
								
							}
							else 
								if (sum == 3) {
									$scope.systemArray.push(3);
									$scope.clicked[3] = false;
									$scope.commonSymbol[3] = $scope.systemSymbol;
								}
								else 
									if (sum == 15) {
										if ($scope.userArray.indexOf(6) > -1) {
											$scope.systemArray.push(3);
											$scope.clicked[3] = false;
											$scope.commonSymbol[3] = $scope.systemSymbol;
										}
										else 
											if ($scope.userArray.indexOf(8) > -1) {
												$scope.systemArray.push(9);
												$scope.clicked[9] = false;
												$scope.commonSymbol[9] = $scope.systemSymbol;
											}
									}
									else 
										if (sum == 11 && $scope.userArray.indexOf(7) > -1) {
											$scope.systemArray.push(1);
											$scope.clicked[1] = false;
											$scope.commonSymbol[1] = $scope.systemSymbol;
										}
									else 
										if (sum == 11 && $scope.userArray.indexOf(2) > -1) {
											$scope.systemArray.push(3);
											$scope.clicked[3] = false;
											$scope.commonSymbol[3] = $scope.systemSymbol;
										}
										else 
											if (sum == 11 && $scope.userArray.indexOf(8) > -1) {
												$scope.systemArray.push(9);
												$scope.clicked[9] = false;
												$scope.commonSymbol[9] = $scope.systemSymbol;
											}
											else 
												if (sum == 9 && $scope.userArray.indexOf(3) > -1) {
													$scope.systemArray.push(9);
													$scope.clicked[9] = false;
													$scope.commonSymbol[9] = $scope.systemSymbol;
												}
												else 
													if (sum == 9 && $scope.userArray.indexOf(7) > -1) {
														$scope.systemArray.push(1);
														$scope.clicked[1] = false;
														$scope.commonSymbol[1] = $scope.systemSymbol;
													}
													else 
														if (sum == 17) {
															$scope.systemArray.push(7);
															$scope.clicked[7] = false;
															$scope.commonSymbol[7] = $scope.systemSymbol;
														}
														else 
															if (sum == 13) {
																$scope.systemArray.push(8);
																$scope.clicked[8] = false;
																$scope.commonSymbol[8] = $scope.systemSymbol;
															}
															else 
																if (sum == 7 && $scope.userArray.indexOf(6) == -1) {
																	$scope.systemArray.push(7);
																	$scope.clicked[7] = false;
																	$scope.commonSymbol[7] = $scope.systemSymbol;
																}
																else 
																	if (sum == 7 && $scope.userArray.indexOf(6) > -1) {
																		$scope.systemArray.push(3);
																		$scope.clicked[3] = false;
																		$scope.commonSymbol[3] = $scope.systemSymbol;
																	}
																else if(sum == 9 && $scope.userArray.indexOf(8) > -1)
																{
																	$scope.systemArray.push(7);
																	$scope.clicked[7] = false;
																	$scope.commonSymbol[7] = $scope.systemSymbol;
																}
						}
						if ($scope.userArray[1] == 2 || $scope.userArray[1] == 4 || $scope.userArray[1] == 6 || $scope.userArray[1] == 8) {
							var sum = $scope.userArray[1] + $scope.userArray[0];
							
							if (sum == 6) {
								$scope.systemArray.push(1);
								$scope.clicked[1] = false;
								$scope.commonSymbol[1] = $scope.systemSymbol;
							}
							else if (sum == 13) {
								$scope.systemArray.push(7);
								$scope.clicked[7] = false;
								$scope.commonSymbol[7] = $scope.systemSymbol;
							}
							else {
								$scope.systemArray.push(9);
								$scope.clicked[9] = false;
								$scope.commonSymbol[9] = $scope.systemSymbol;
							}
						}
					}
					if ($scope.userArray[0] == 5) {
						if ($scope.userArray[1] == 2) {
							$scope.systemArray.push(8);
							$scope.clicked[8] = false;
							$scope.commonSymbol[8] = $scope.systemSymbol;
						}
						else 
							if ($scope.userArray[1] == 3) {
								$scope.systemArray.push(7);
								$scope.clicked[7] = false;
								$scope.commonSymbol[7] = $scope.systemSymbol;
							}
							else 
								if ($scope.userArray[1] == 4) {
									$scope.systemArray.push(6);
									$scope.clicked[6] = false;
									$scope.commonSymbol[6] = $scope.systemSymbol;
								}
								else 
									if ($scope.userArray[1] == 6) {
										$scope.systemArray.push(4);
										$scope.clicked[4] = false;
										$scope.commonSymbol[4] = $scope.systemSymbol;
									}
									else 
										if ($scope.userArray[1] == 7 || $scope.userArray[1] == 9) {
											$scope.systemArray.push(3);
											$scope.clicked[3] = false;
											$scope.commonSymbol[3] = $scope.systemSymbol;
										}
										else 
											if ($scope.userArray[1] == 8) {
												$scope.systemArray.push(2);
												$scope.clicked[2] = false;
												$scope.commonSymbol[2] = $scope.systemSymbol;
											}
						
						
					}
					
				}
				if ($scope.userArray.length >= 3 && $scope.canClick) {
					$scope.clicked[number] = false;
					var lengthUnchanged = $scope.systemArray.length + $scope.userArray.length;
					var set = true;
					$scope.commonSymbol[number] = $scope.selectedSymbol;
					
					var structArray = {
						'array1': [1, 2, 3],
						'array2': [1, 4, 7],
						'array3': [7, 8, 9],
						'array4': [3, 6, 9],
						'array5': [1, 5, 9],
						'array6': [4, 5, 6],
						'array7': [7, 5, 3],
						'array8': [2, 5, 8]
					};
					var tempArray = $scope.systemArray;
					for (var key in structArray) {
						for (var i = 0; i < $scope.commonSymbol.length; i++) {
						
							var arrayTemp = structArray[key];
							var tempArray = $scope.systemArray;
							
							if (arrayTemp.indexOf(i) > -1) {
								if ($scope.commonSymbol[i] == '') {
								
									var subsetArray = subsetSecond(tempArray, structArray[key]);
									
									if (subsetArray && set) {
									
										$scope.systemArray.push(i);
										$scope.clicked[i] = false;
										$scope.commonSymbol[i] = $scope.systemSymbol;
										set = false;
										break;
									}
								}
							}
						}
					}
					
					var tempArray = $scope.userArray;
					
					var newLength = $scope.systemArray.length + $scope.userArray.length;
					if (lengthUnchanged == newLength) {
						for (var key in structArray) {
							for (var i = 0; i < $scope.commonSymbol.length; i++) {
								var arrayTemp = structArray[key];
								var tempArray = $scope.userArray;
								
								if (arrayTemp.indexOf(i) > -1) {
									if ($scope.commonSymbol[i] == '') {
										var subsetArray = subsetSecond(tempArray, structArray[key]);
										
										if (subsetArray && set) {
										
											$scope.systemArray.push(i);
											$scope.clicked[i] = false;
											$scope.commonSymbol[i] = $scope.systemSymbol;
											set = false;
											break;
										}
									}
								}
							}
						}
					}
					
					
					
					var newLength = $scope.systemArray.length + $scope.userArray.length;
					
					if (lengthUnchanged == newLength) {
						for (var i = 1; i < $scope.clicked.length; i++) {
							if ($scope.clicked[i] == true) {
							
								$scope.systemArray.push(i);
								$scope.clicked[i] = false;
								$scope.commonSymbol[i] = $scope.systemSymbol;
								break;
							}
						}
					}
					
					for (var key in structArray) {
						if (structArray.hasOwnProperty(key)) {
							var subsetArray = subset($scope.systemArray, structArray[key]);
							
							if (subsetArray) {
								var arrayTemp = structArray[key];
								for (var j = 0; j < arrayTemp.length; j++) {
									$scope.classFlag[arrayTemp[j]] = false;
								}
								$scope.clicked = [false, false, false, false, false, false, false, false, false, false];
								$scope.result = 'system wins';
								$scope.systemWin = $scope.systemWin+1;
								$scope.canClick = false;
								break;
							}
						}
						
					}
					var draw = true;
					for (var i = 1; i < $scope.commonSymbol.length; i++) {
						if ($scope.commonSymbol[i] == '') {
							draw = false;
							break;
						}
					}
					if (draw) {
						$scope.result = 'It is a Draw';
						$scope.draw = $scope.draw+1;
						$scope.canClick = false;
					}
					
				}
				
			}
			else if ($scope.selectedLevel.value == 1) {
				
					if ($scope.canClick) {
						$scope.userArray.push(number);
						
						$scope.commonSymbol[number] = $scope.selectedSymbol;
						var n= 0;
						var i = Math.floor((Math.random() * 10));
					
						while (i <= 10) {
							if(($scope.userArray.length+$scope.systemArray.length)==9)
							{
								break;
							}
							if (i != 0 && $scope.commonSymbol[i] == '') {
								n=i;
								
								break;
							}
							i = Math.floor((Math.random() * 10) + 1);
							
						}
						
						if($scope.userArray.length <= 2 && $scope.canClick && n>0)
						{
							$scope.systemArray.push(i);
							$scope.clicked[i] = false;
							$scope.commonSymbol[i] = $scope.systemSymbol;	
						}
						
						if ($scope.userArray.length >= 3 && $scope.canClick) {
							var structArray = {
								'array1': [1, 2, 3],
								'array2': [1, 4, 7],
								'array3': [7, 8, 9],
								'array4': [3, 6, 9],
								'array5': [1, 5, 9],
								'array6': [4, 5, 6],
								'array7': [7, 5, 3],
								'array8': [2, 5, 8]
							};
							for (var key in structArray) {
								if (structArray.hasOwnProperty(key)) {
									var subsetArray = subset($scope.userArray, structArray[key]);
									
									if (subsetArray) {
									
										var arrayTemp = structArray[key];
										for (var j = 0; j < arrayTemp.length; j++) {
											$scope.classFlag[arrayTemp[j]] = false;
										}
										$scope.clicked = [false, false, false, false, false, false, false, false, false, false];
										$scope.result = 'User wins';
										$scope.userWin = $scope.userWin+1;
										$scope.canClick = false;
										return;
										
									}
								}
							}
							if(n>0 && $scope.canClick)
							{
								$scope.systemArray.push(i);
								$scope.clicked[i] = false;
								$scope.commonSymbol[i] = $scope.systemSymbol;
							}
							
							if ($scope.canClick) {
								for (var key in structArray) {
									if (structArray.hasOwnProperty(key)) {
										var subsetArray = subset($scope.systemArray, structArray[key]);
										
										if (subsetArray) {
											var arrayTemp = structArray[key];
											for (var j = 0; j < arrayTemp.length; j++) {
												$scope.classFlag[arrayTemp[j]] = false;
											}
											$scope.clicked = [false, false, false, false, false, false, false, false, false, false];
											$scope.result = 'System wins';
											$scope.systemWin = $scope.systemWin+1;
											$scope.canClick = false;
											return;
											
										}
									}
									
								}
							}
							var draw = true;
							for (var i = 1; i < $scope.commonSymbol.length; i++) {
								if ($scope.commonSymbol[i] == '') {
									draw = false;
									break;
								}
							}
							if (draw) {
								$scope.result = 'It is a Draw';
								$scope.draw = $scope.draw+1;
								$scope.canClick = false;
							}
						}
						if (!$scope.canClick) {
							return;
						}
						
						
					}
				}
		}
		
		}
	);

})( angular, demo );
function  subset(array1, array2){
	var returnVar=true;
	for(var i=0;i<array2.length;i++)
	{
		if(array1.indexOf(array2[i])>-1)
		{
			returnVar=true;
		}
		else{
			
			returnVar=false;
			break;
		}
	}
	
	return returnVar;
}
function  subsetSecond(array1, array2){
	var returnVar=true;
	var count =0;
	
	for(var i=0;i<array2.length;i++)
	{
		if(array1.indexOf(array2[i])>-1)
		{
			
			count=count+1;
			
			
		}		
	}
	if(count == 2 )
	{
		returnVar=true;
		
		console.log(array2[0]+' '+array2[1]+' '+array2[2]+'In subset True part');
		
		
	}
	else
	{
		returnVar=false;
	}
	
	return returnVar;
}