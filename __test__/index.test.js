const updateLocation = require("../index.js")

describe("updateLocation", function() {
    test("function returns an array", function() {
        expect(updateLocation() instanceof Array).toBe(true)
    })
    test("function returns a new array", function() {
        let inputArray = [
            { name: 'Hypatia', age: 31, location: 'leeds' },
            { name: 'Ramanujan', age: 22 },
            { name: 'Tao', age: 47, location: 'manchester' }
            ]
        expect(updateLocation(inputArray)).not.toBe(inputArray)
    })
    test("function does not mutate the input array", function() {
        let inputArray = [
            { name: 'Hypatia', age: 31, location: 'leeds' },
            { name: 'Ramanujan', age: 22 },
            { name: 'Tao', age: 47, location: 'manchester' }
            ]
        let copyInputArray = [
            { name: 'Hypatia', age: 31, location: 'leeds' },
            { name: 'Ramanujan', age: 22 },
            { name: 'Tao', age: 47, location: 'manchester' }
            ]
        updateLocation(inputArray)
        expect(inputArray).toEqual(copyInputArray)
    })
    test("function inserts 'remote' for each element which does not have a location property", function() {
        let inputArray = [
            { name: 'Hypatia', age: 31, location: 'leeds' },
            { name: 'Ramanujan', age: 22 },
            { name: 'Tao', age: 47, location: 'manchester' }
            ]
        let output = [
            { name: 'Hypatia', age: 31, location: 'leeds' },
            { name: 'Ramanujan', age: 22, location: "remote" },
            { name: 'Tao', age: 47, location: 'manchester' }
            ]
        
        expect(updateLocation(inputArray)).toEqual(output)
    })
})