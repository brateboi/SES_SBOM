

Java.perform(function(){
    var modules = Process.enumerateModules()
    modules.forEach(module => {
        console.log(module.name)
    });
});