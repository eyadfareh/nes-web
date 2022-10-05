import RAM from '../ram.js'
// https://www.nesdev.org/wiki/CPU_memory_map
class Memory{
	read(addr){
		if(addr >= 0x0000 && addr <= 0x1FFF){
			return this.ram.read(addr % 0x0800)
		} 
	}
	write(addr,val){
		if(addr >= 0x0000 && addr <= 0x1fff){
			return this.ram.write(addr % 0x800,val)
		}
	}

	constructor(ram = new RAM()){
		this.ram = ram;
	}
}
export default Memory
