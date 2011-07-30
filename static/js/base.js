function $(str){ 
	var obj; 
	var classObj = new Array();
	var $all =  document.getElementsByTagName("*");
	if(!isNaN(str)) return;
	else if(str.indexOf("#") > -1){
		if(document.getElementById(str.substr(1))) 
		{obj = document.getElementById(str.substr(1));}
		else obj = ""; 
		obj.$ = function(str){
			$all = obj.getElementsByTagName("*"); 
			if(str.indexOf(".") > -1){ 
				for(var i = 0; i < $all.length; i++){ 
					if($all[i].className.split(" ").indexOf(str.substr(1)) > -1){ 
						classObj.push($all[i]);
					} 
				} 
				return classObj;
			} 
			else{ 
				obj = obj.getElementsByTagName(str);
				return obj; 
			} 
		}; 
	}
	else if(str.indexOf(".") > -1){
		for(var i = 0; i < $all.length; i++){ 
			if($all[i].className.split(" ").indexOf(str.substr(1)) > -1){ 
				classObj.push($all[i]); 
			} 
		} 
		classObj.$ = function(i,str){ 
			return classObj[i].getElementsByTagName(str);
		}; 
		return classObj;
	}
	else{ 
		obj = document.getElementsByTagName(str);
	} 
	return obj; 
}




window.onload = function(){
	var a = $("#menu");
	console.log(a.nodeName);
};
