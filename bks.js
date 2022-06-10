const selectElement = (element) => document.querySelector(element);

selectElement( element= ".icn-cont").addEventListener( type= 'click', listener=() =>{
	selectElement( element= 'nav').classList.toggle(token= 'active');
})