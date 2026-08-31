# Swift. Straightforward

**Author:** arabianprince23
**Votes:** 0
**Link:** [https://leetcode.com/problems/design-file-system/solutions/5772426/](https://leetcode.com/problems/design-file-system/solutions/5772426/)

---

# Code
```swift []

class FileSystem {

    private var system = [String: Int]()

    init() {
        system["/"] = 0
    }
    
    func createPath(_ path: String, _ value: Int) -> Bool {
        let folders = path.split(separator: "/").map { String($0) }
        guard
            path != "",
            path != "/",
            system[path] == nil,
            system["/" + folders.dropLast().joined(separator: "/")] != nil
        else {
            return false
        }
        system[path] = value
        return true
    }
    
    func get(_ path: String) -> Int {
        return system[path] ?? -1    
    }

}