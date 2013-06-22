(function(){
	OOPJS.SubscribeChild=function(){
		this.name="SubscribeChild";
	}
	OOPJS.SubscribeChild.prototype={
		/**
		 * override testPublic
		 */
		testPublic:function(){
			console.log('action public in subChild');
		},
		/** public: extendable
		* call parent and say bar
		*/
		sayFoo:function(){
			console.log(this.uber.sayFoo()+' '+'bar');
		}
	};
	OOPJS.Extend(OOPJS.SubscribeChild, OOPJS.Subscribe);
})();
