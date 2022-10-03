// https://www.nesdev.org/obelisk-6502-guide/reference.html
import memory from './memory.js'
class CPU {
	constructor(){
		// setting registers
		this._8bregs = new Uint8Array(5); // 0:x, 1:y, 2:a, 3:s, 4:p
		this._16bregs = new Uint16Array(1); // 0: pc
		this.regs = {
			x: this._8bregs[0],
			y: this._8bregs[1],
			a: this._8bregs[2],
			s: this._8bregs[3],
			p: this._8bregs[4],
			pc: this._16bregs[0]
		};
		
	}
}


export default CPU
