	const submit = document.querySelector('#submit');
	const color = document.querySelector('#colorPicker');
	const width = document.querySelector('#inputWidth');
	const height = document.querySelector('#inputHeight');
	const canvas = document.querySelector('#pixelCanvas');

	//this function is needed to refresh grid every time user push submit bottom
	function getRidOfGrid(){
		canvas.innerHTML = '';
	}

	function makeGrid(){
		let tr,td;
		for(let i=1; i<=height.value; i++){
			tr = document.createElement('tr')
			canvas.appendChild(tr);
			for(let x=1; x<=width.value; x++){
				td = document.createElement('td');
				tr.appendChild(td);
			}
		}
	}

	function changeColor(){
		canvas.addEventListener('click', function(e){
			e.preventDefault();
			if(e.target.nodeName === 'TD'){
				e.target.style.backgroundColor = color.value;

			}
		});
		
	}




	submit.addEventListener('submit', function(e){
		e.preventDefault();
		getRidOfGrid();
		makeGrid();
		changeColor();
	})