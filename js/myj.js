var c1;
function c1(){
	alert('c1');
}

function c2(){
	for (var i=1;i<10;i++){
		var s=document.getElementById(i);
		s.style.backgroundColor='blue';
	}
}

function o1(){
	var s= document.getElementById('s1');
	s.style.color="white";
	s.style.borderColor="orange";
	s.style.backgroundColor='orange';
	cl = setInterval(change,500);
	
}

function l1(){
	var s= document.getElementById('s1')
	s.style.backgroundColor="white";
	s.style.color="orange";
	clearInterval(cl);
}

function o2(){
	var s= document.getElementById('s2');
	s.style.backgroundColor='orange';
	s.style.color='white';
	
	clearInterval(cl);
	reChange();
}

function l2(){
	var s= document.getElementById('s2')
	s.style.backgroundColor="white";
	s.style.color="orange";
}

function getranN(a){
	return parseInt(Math.random()*a);
}

function getranZ(k,g){
	var N = new Array(k);
	var temp = -1;
	for(var h in N){
		N[h]="-1";
	}
	
	for (var i=0;i<k;i++){
		temp = getranN(g);
		while(true){
		if(check(N,temp)!=0){
		temp = getranN(g);
		}
		else{
			break;
		}
		}
		
		N[i] = temp;
	}
	return N;
}

function check(a,b){
	for(var j=0;j<a.length;j++){
			if(a[j]==b){
				return -1;
			}
		}
	return 0;
}

function getC(a){
	var b=new Array("red","black","green","blue","gray","purple");
	var c=new Array(a.length);
	for (var i = 0;i<a.length;i++){
		c[i]=b[a[i]];
	}
	return c;
}

function changeC(c,b){
	for(var i=0;i<b.length;i++){
    document.getElementById(b[i]).style.backgroundColor = c[i].valueOf().toString();
	}
}

function change(){
	var cC = new Array(3);
    var cN = new Array(3);
    var bN = new Array(3);
    
    cN = getranZ(3,6);
	cC = getC(cN);
	bN = getranZ(3,9);
	
	changeC(cC,bN);
}

function reChange(){
	for (var i=1;i<10;i++){
		var s=document.getElementById(i);
		s.style.backgroundColor='orange';
	}
}
