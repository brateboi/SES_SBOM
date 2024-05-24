// Frida Script to find address of loaded class

var classOfInterest = "java.util.ArrayList";
var classObject;
var address;

Java.performNow(function() {
    var baseModule = Process.enumerateModules()[0];
    var baseImport = baseModule.enumerateImports()
    console.log(baseImport[0].name)
    console.log(baseImport.find(obj => {
        return obj.name.includes("chmod");
    }).name);

    // Java.choose(classOfInterest, {
    //     onMatch: function(instance) {
    //         address = instance.$l["handle"]
    //         console.log(instance.$l["handle"]);
    //         // console.log(instance.toString());
    //         classObject = instance
    //     }, onComplete: function(){
    //         // console.log(address)
    //         // console.log(Process.findModuleByAddress(address))
    //     }
    // });
});