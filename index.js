function findMatching(array, name){
    return array.filter(function(driver){
        return  driver.toLowerCase() === name.toLowerCase();
    })
}

function fuzzyMatch(array, lett){
    return array.filter(function(driver){
        const letterLength = lett.length;
        return driver.slice(0,letterLength).toLowerCase() === lett.toLowerCase();
    })
}

function matchName(array, name) {
   return array.filter((driver) => name === driver.name);
    
    }