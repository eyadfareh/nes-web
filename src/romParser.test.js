import ROM from "./romParser.js"

test("Gives an error when Not NES\\x1a", () => {
	expect(() => { 
		new ROM("PNG\x1afkdsa...")
	}).toThrow("Not an INES file");
});
test("Does not give the error when the file starts with NES\\x1a", () => {
	expect(() => { 
		new ROM("NES\x1afkdsa445sd6a4d56sa...")
	}).not.toThrow("Not an INES file");
})
test("gives an error when files are less than 16 bytes", () => {
	expect(() => {
		new ROM("NES\x1a56789012345")
	}).toThrow("File is too short")
})
test("Calculates values of prg rom correctly", () => {
	var rom = new ROM("NES\x1a\x03jfdojfeoijopajioapwjgiaowp");
	expect(rom.prgRomSize).toBe(16384 * 3);
})
