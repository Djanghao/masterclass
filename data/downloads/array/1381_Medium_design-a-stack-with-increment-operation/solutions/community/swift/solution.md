# Swift | O(k) and O(1) per operation

**Author:** pagafan7as
**Votes:** 1
**Link:** [https://leetcode.com/problems/design-a-stack-with-increment-operation/solutions/5850204/](https://leetcode.com/problems/design-a-stack-with-increment-operation/solutions/5850204/)

---


# O(k) per operation solution
```swift []
class CustomStack {
    let maxSize: Int
    var stack = [Int]()

    init(_ maxSize: Int) {
        self.maxSize = maxSize
    }
    
    func push(_ x: Int) {
        if stack.count < maxSize {
            stack.append(x)
        }
    }
    
    func pop() -> Int {
        stack.popLast() ?? -1
    }
    
    func increment(_ k: Int, _ val: Int) {
        let k = min(k, stack.count)
        for i in 0..<k {
            stack[i] += val
        }
    }
}
```

# O(1) per operation solution
```swift []
class CustomStack {
    let maxSize: Int
    var stack = [Int]()
    var increments = [Int: Int]()

    init(_ maxSize: Int) {
        self.maxSize = maxSize
    }
    
    func push(_ x: Int) {
        if stack.count < maxSize {
            stack.append(x)
        }
    }
    
    func pop() -> Int {
        guard let top = stack.popLast() else { return -1 }
        let currentIncrement = increments[stack.count + 1] ?? 0

        // Update increments for the next "pop".
        increments[stack.count] =
            increments[stack.count, default: 0] + currentIncrement
        increments[stack.count + 1] = nil

        return top + currentIncrement
    }
    
    func increment(_ k: Int, _ val: Int) {
        let k = min(k, stack.count)
        increments[k] = increments[k, default: 0] + val
    }
}
```