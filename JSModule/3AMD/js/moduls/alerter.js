define(['dataService'],function (dataService) {
    let name = dataService.getName()
    return {
        name,
        age:10
    }
})