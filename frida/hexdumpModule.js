// Frida Script to hexdump entire module

// const moduleName = "libc.so";
// const moduleName = "libopencv_java4.so";
const moduleName = "libvlc.so";
// const moduleName = "libvlcjni.so";


Java.performNow(function() {
    const module = Process.findModuleByName(moduleName);
    console.log(module)
    const address = module.base;
    const size = 1000*1000*4;

    // const size = module.size;
    // console.log(size)
    // const size = 300*300*4
    // console.log("size", size/1024)


    // const filename = "/data/local/tmp/dump.bin";

    // const file = new File(filename, "wb")
    // file.write();
    // file.close();
    send({event: '+write'}, Memory.readByteArray(address, size));
    // console.log("sent message")
    // console.log(Memory.readByteArray(address, size))


    // console.log("file saved to:", filename)
    // console.log("message", message)
});