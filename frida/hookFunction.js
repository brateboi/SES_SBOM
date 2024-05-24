

function hookReadFile() {
    console.log("hooked Read")
    Java.use('java.io.FileReader')['read'].overload().implementation = function(b) {
        var retval = this.read(b);
        console.log(b);
        console.log(retval);
        console.log("read some file now");
    };
}

function hookWriteFile() {
    console.log("hooked Write")
    Java.use('java.io.FileWriter')['write'].overload('[C', 'int', 'int').implementation = function(c, i1, i2) {
        var retval = this.write(c, i1, i2);
        console.log("wrote " + i2 + " characters");
        console.log(c);
        console.log("wrote some file now");
    };
}

Java.perform(hookReadFile)
Java.perform(hookWriteFile)