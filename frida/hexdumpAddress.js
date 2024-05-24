// Frida script to hexdump a memory address

// Define the target memory address you want to hexdump
var targetAddress = ptr('0x754d65e12a40'); // Change this to your desired memory address

// console.log(targetAddress.toInt32())
// console.log(targetAddress.readPointer())

console.log(hexdump(targetAddress, {
    offset: 0,
    length: 4096,
    header: true,
    ansi: true
}));