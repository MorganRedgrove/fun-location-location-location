function updateLocation(array) {
    return array?.map(element => {
        console.log(element.location)
        if (element.location === undefined) {
            element.location = "remote"
        }
        return element
    }) ?? []
}

module.exports = updateLocation