// https://www.nesdev.org/wiki/INES
class ROM{
	constructor(romFile){
		var fileContent = new Uint8Array(romFile);
		let identifier = fileContent.slice(0,4);
		if( // check if file starts with "NES\x1a"
			identifier[0] !== 0x4e ||
			identifier[1] !== 0x45 ||
			identifier[2] !== 0x53 ||
			identifier[3] !== 0x1a
		){
			throw "Not an INES file";
		}else{
			this.fileType = "NES";
		}
		if(fileContent.length < 16){
			throw "File is too short";
		}else{
			var header = fileContent.slice(0,16);
		}
		this.prgRomSize = header[4] * 16384;
		this.chrRomSize = header[5] * 8192;
		// Flags 6
		this.mirroring = header[6] & 0x01 ? "v" : "h";
		// like a battary backed ram 
		this.persistentMemory = ((header[6] & 0x02) >>> 1) ? true : false; // TODO unimplemented
		this.trainer = ((header[6] & 0x04) >>> 2) ? true : false;
		this.ignoreMirroring = ((header[6] & 0x08) >>> 3) ? true : false;
		var lowerNibble = ((header[6] & 0xf0) >>> 4);
		// Flags 7
		var upperNibble = (header[7] & 0xf0);
		this.mapperId = (upperNibble | lowerNibble);
		// TODO 8,9,10 are rarely used and are not going to be implemented (for now) 
		// 11-15 is a padding
		

		var pointer = 16;
		if(this.trainer){
			pointer += 512;
		}
		this.prgRom = fileContent.slice(pointer,pointer + this.prgRomSize)
		pointer += this.prgRomSize;
		this.chrRom = fileContent.slice(pointer,pointer + this.chrRomSize);
	}
}
export default ROM
