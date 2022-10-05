import CPU from "./cpu/cpu.js"
import RAM from "./ram.js"
import Memory from "./cpu/memory.js"

class Device{

	constructor(){
		this.ram = new RAM();
		this.memory = new Memory(this.ram)
		this.cpu = new CPU(this.memory);
	}
}
export default Device
