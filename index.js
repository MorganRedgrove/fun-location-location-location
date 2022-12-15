function updateLocation(array) {
    return array?.map(({...element}) => {
        if (element.location === undefined) {
            element.location = "remote"
        }
        return element
    }) ?? []
}

module.exports = updateLocation