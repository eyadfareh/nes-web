import CPU from "./cpu"
test('initializing the cpu with empty registers', () => {
	let cpu = new CPU();
	expect(cpu.regs).toEqual({
		x:0,
		y:0,
		a:0,
		s:0,
		p:0,
		pc:0
	});
});
