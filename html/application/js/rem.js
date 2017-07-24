(function(win,doc){
		win.onresize=function(){
			change();	
		};
		change();
		function change(){
			var oFs;
				oFs=doc.documentElement.clientWidth/(320/12);
				doc.documentElement.style.fontSize=oFs+'px';
		}	
	})(window,document);