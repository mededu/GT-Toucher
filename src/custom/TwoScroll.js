
	Toucher.TwoScroll=Toucher.Listener.extend({

		delay : 800 ,
		limit : 5,

		lag : 100,

		x : 0,
		y : 0,

		move : function(wrapperList,event,touchController){
			if (wrapperList.length==2){
				this.onScroll(wrapperList,event,touchController);
				event.preventDefault();
			}

		},

		/* Implement by user */
		isTrigger : function(touchWrapper,wrapperList,touchController){
			return false;
		},
		/* Implement by user */
		onScroll : function(wrapperList,event,touchController){

		}


	});


