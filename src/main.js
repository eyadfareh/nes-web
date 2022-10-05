import ROM from "./romParser.js"

function fileUploadHandlar(e){
	var romFile =	e.target.files[0];
	if(romFile){
		var reader = new FileReader();
		reader.readAsArrayBuffer(romFile);
		reader.onloadend = function(e){
			var rom = new ROM(e.target.result);
			console.log(rom);
		}
	}
}

document.getElementById("rom").addEventListener('change', fileUploadHandlar)
