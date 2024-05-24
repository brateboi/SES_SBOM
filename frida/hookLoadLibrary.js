

function hookLoadLibrary() {
    console.log("hooked load Library")
    Java.use('java.lang.System')['loadLibrary'].overload('java.lang.String').implementation = function(lib) {
        var retval = this.loadLibrary(lib);
        console.log(lib);
        console.log(retval);
        console.log("loaded library");
    };
}

// function hookWriteFile() {
//     console.log("hooked Write")
//     Java.use('java.io.FileWriter')['write'].overload('[C', 'int', 'int').implementation = function(c, i1, i2) {
//         var retval = this.write(c, i1, i2);
//         console.log("wrote " + i2 + " characters");
//         console.log(c);
//         console.log("wrote some file now");
//     };
// }
console.log("hallo")
Java.perform(hookLoadLibrary)
console.log("stuk")
// Java.perform(hookWriteFile)