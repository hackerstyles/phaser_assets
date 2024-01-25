var ctrack;

var oldLeftEye = new Array(2);
var oldRightEye = new Array(2);
var oldNose = new Array(2);
var leftMode = 0;
var leftInterval = 1;
var closeFlag = false;
var blinkCount = 0;

//window.count=blinkCount;
var blinkdetector;

function recordBlinks()
{
	console.log('Recording Blinks');
	blinkCount = 0;
	leftInterval = 1;
	
	ctrack = new clm.tracker();
	ctrack.init(pModel);
	// ctrack.start(videoElement);
	//ctrack.start(video);

	//addBlinkSprite();
	loop();	

  //if(blinkCount=3)
	//{
		//game.add.sprite(810,510,'face_detect_success');
       
	//}
	
	/* blink = 0;
	blinkdetector = setInterval(function(){
        DetectBlinks();
    }, 10); */
}

/* var blink = 0;
async function DetectBlinks()
{

	const options = new faceapi.TinyFaceDetectorOptions({ inputSize: 128, scoreThreshold : 0.3 })
	var result = await faceapi.detectSingleFace(bmd.canvas, options).withFaceLandmarks(true).withFaceExpressions();
	
	var l_p0,l_p1,l_p2,l_p3,l_p4,l_p5;
	var r_p0,r_p1,r_p2,r_p3,r_p4,r_p5;
	
	var l_p0_x,l_p0_y;
	var l_p1_x,l_p1_y;
	var l_p2_x,l_p2_y;
	var l_p3_x,l_p3_y;
	var l_p4_x,l_p4_y;
	var l_p5_x,l_p5_y;
	
	var r_p0_x,r_p0_y;
	var r_p1_x,r_p1_y;
	var r_p2_x,r_p2_y;
	var r_p3_x,r_p3_y;
	var r_p4_x,r_p4_y;
	var r_p5_x,r_p5_y;
	
	if(result!=null)
	{
		if(result.landmarks!=null)
		{
			//console.log('LEFT EYE = ',result.landmarks.getLeftEye());
			//console.log('RIGHT EYE = ',result.landmarks.getRightEye());
			
			var lefteye = result.landmarks.getLeftEye();
			var righteye = result.landmarks.getRightEye();
			
			l_p0 =  lefteye[0];
			l_p1 =  lefteye[1];
			l_p2 =  lefteye[2];
			l_p3 =  lefteye[3];
			l_p4 =  lefteye[4];
			l_p5 =  lefteye[5];
			
			r_p0 =  righteye[0];
			r_p1 =  righteye[1];
			r_p2 =  righteye[2];
			r_p3 =  righteye[3];
			r_p4 =  righteye[4];
			r_p5 =  righteye[5];
			
			
			var l_p5_p1 = getAbsDist(l_p5,l_p1);
			var l_p4_p2 = getAbsDist(l_p4,l_p2);
			var l_p0_p3 = getAbsDist(l_p0,l_p3);
			
			var left_ear = (l_p5_p1 + l_p4_p2) / (2 * (l_p0_p3));
			
			var r_p5_p1=getAbsDist(r_p5,r_p1);
			var r_p4_p2 = getAbsDist(r_p4,r_p2);
			var r_p0_p3 = getAbsDist(r_p0,r_p3);
			
			var right_ear = (r_p5_p1 + r_p4_p2) / (2 * (r_p0_p3));
			
			//console.log('LEFT EAR = ',left_ear);
			//console.log('RIGHT EAR = ',right_ear);
			
			if(left_ear < 0.3 && right_ear < 0.3)
			{
				blink +=1 ;
				console.log('BLINK = ',blink);
			}
			
			
	
			
		}
	}	
}
 */
function getAbsDist(point1,point2)
{
	var dxn = point1._x-point2._x;
	var dyn = point1._y-point2._y;
	
	return Math.sqrt(dxn*dxn+dyn*dyn);
}

var reqanim;
function loop()
{
	reqanim=requestAnimationFrame(loop);
	
	if (ctrack.getCurrentPosition()) {	
		
		var p1,p2,p3,p4,p5,p6;
		var p1x,p1y;
		var p2x,p2y;
		var p3x,p3y;
		var p4x,p4y;
		var p5x,p5y;
		var p6x,p6y;
		
		var p2p6;
		var p3p5;
		var p1p4;
		
		var ear;
		
		var list = ctrack.getCurrentPosition();
		
		if (list.length > 50) {
        
			var leftEye = list[27];
			var rightEye = list[32];
			var nose = list[37];
        
			var dxLE = leftEye[0] - oldLeftEye[0];
			var dyLE = leftEye[1] - oldLeftEye[1];
			var dLE = Math.sqrt(dxLE*dxLE+dyLE*dyLE);
        
			var dxRE = rightEye[0] - oldRightEye[0];
			var dyRE = rightEye[1] - oldRightEye[1];
			var dRE = Math.sqrt(dxRE*dxRE+dyRE*dyRE);
        
			var dxN = nose[0] - oldNose[0];
			var dyN = nose[1] - oldNose[1];
			var dN = Math.sqrt(dxN*dxN+dyN*dyN);
        
			var dyLE = leftEye[1] - oldLeftEye[1];
			var dyRE = rightEye[1] - oldRightEye[1];
			var dyN = nose[1] - oldNose[1];
			
			p1=list[23];
			p2=list[63];
			p3=list[64];
			p4=list[25];
			p5=list[65];
			p6=list[66];
			
			p1x=p1[0];
			p1y=p1[1];
			
			p2x=p2[0];
			p2y=p2[1];
			
			p3x=p3[0];
			p3y=p3[1];
			
			p4x=p4[0];
			p4y=p4[1];
			
			p5x=p5[0];
			p5y=p5[1];
			
			p6x=p6[0];
			p6y=p6[1];
			
			
			p2p6=Math.sqrt(((p2x-p6x)*(p2x-p6x))+((p2y-p6y)*(p2y-p6y)));
			p3p5=Math.sqrt(((p3x-p5x)*(p3x-p5x))+((p3y-p5y)*(p3y-p5y)));
			p1p4=Math.sqrt(((p1x-p4x)*(p1x-p4x))+((p1y-p4y)*(p1y-p4y)));
			
			
			ear = (p2p6 + p3p5) / (2 * p1p4);
			
			//console.log('EAR = ',ear);			
        
        
			if(ear < 0.25 && dN < 0.5)
			{
				//console.log('EAR = ',ear);
				
				if (leftInterval < 0) {
					blinkCount += 1;
					
					console.log('BLINK = ',blinkCount);	
                                        if(blinkCount==3)
					{
						game.add.sprite(810,510,'face_detect_success');
                                            StopBlinkDetection();
						

					}
				 					
					leftInterval = 10;
				}
			}

			oldLeftEye[0] = leftEye[0];
			oldLeftEye[1] = leftEye[1];
			oldRightEye[0] = rightEye[0];
			oldRightEye[1] = rightEye[1];
			oldNose[0] = nose[0];
			oldNose[1] = nose[1];
			
			leftInterval--;
        
      }
    }
	
}

function StopBlinkDetection()
{
	cancelAnimationFrame(reqanim);    
    ctrack.stop();
}

var blinker;
function addBlinkSprite()
{	
	blinker=game.add.sprite(100,600,'blinker');
	blinker.animations.add('default');
	blinker.scale.setTo(2,2);
	//blinker.play('default', 30, false);
	groupToTop(blinker,3);
}

function play_blink()
{
	blinker.play('default', 50, false);
}
