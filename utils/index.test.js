const index = require("./index")
// @ponicode
describe("index.capitalize", () => {
    test("0", () => {
        let callFunction = () => {
            index.capitalize(["Hello, world!", "foo bar", "foo bar"])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            index.capitalize(["Hello, world!", "FOO BAR", "foo bar"])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            index.capitalize(["foo bar", "Hello, world!", "Foo bar"])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            index.capitalize(["foo bar", "This is a Text", "Hello, world!"])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            index.capitalize(["foo bar", "Hello, world!", "hello, world!"])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            index.capitalize(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("index.shuffle", () => {
    test("0", () => {
        let callFunction = () => {
            index.shuffle({ sort: () => ["George", "George", "Michael"] })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            index.shuffle({ sort: () => ["Edmond", "Pierre Edouard", "Edmond"] })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            index.shuffle({ sort: () => ["Pierre Edouard", "Anas", "Edmond"] })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            index.shuffle({ sort: () => ["George", "Pierre Edouard", "Anas"] })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            index.shuffle({ sort: () => ["George", "Jean-Philippe", "George"] })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            index.shuffle(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
