class RAM {
	read(addr){
		return this.ram[addr];
	}
	write(addr,val){
		this.ram[addr] = val;
	}
	constructor(){
		this.ram = new Uint8Array(2048);
	}
}
export default RAM; 
