# Swift | 7 SLOC, 292ms beats 100%  | 1656. Design an Ordered Stream

**Author:** iosdevzone
**Votes:** 1
**Link:** [https://leetcode.com/problems/design-an-ordered-stream/solutions/1584120/](https://leetcode.com/problems/design-an-ordered-stream/solutions/1584120/)

---

```swift
class OrderedStream {    
    var buffer: [String]
    var baseIndex: Int = 0

    init(_ n: Int) {
        buffer = [String](repeating: "", count: n)
    }
    
    func insert(_ idKey: Int, _ value: String) -> [String] {
        buffer[idKey - 1] = value
        let output = buffer[baseIndex...].prefix { !$0.isEmpty }
        baseIndex += output.count
        return Array(output)
    }
}
```