	const sizePicker = document.querySelector('#sizePicker');
	const color = document.querySelector('#colorPicker');
	const width = document.querySelector('#inputWidth');
	const height = document.querySelector('#inputHeight');
	const canvas = document.querySelector('#pixelCanvas');

	//this function is needed to refresh grid every time user push submit bottom
	function getRidOfGrid(){
		canvas.innerHTML = '';
	}

	