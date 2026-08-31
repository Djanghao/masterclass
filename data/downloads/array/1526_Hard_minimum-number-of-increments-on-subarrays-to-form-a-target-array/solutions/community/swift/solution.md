# ✅ 2 Solutions: Math and Stack

**Author:** eleev
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-number-of-increments-on-subarrays-to-form-a-target-array/solutions/4690387/](https://leetcode.com/problems/minimum-number-of-increments-on-subarrays-to-form-a-target-array/solutions/4690387/)

---

# Solutions
## Math Solution O(n) time, O(1) space
```swift
class Solution {
    func minNumberOperations(_ target: [Int]) -> Int {
        (1..<target.count).reduce(target[0]) { 
            $0 + max(0, target[$1] - target[$1 - 1]) 
        }
    }
}
```
## Stack Solution O(n) time, O(n) space
```swift
class Solution {
    func minNumberOperations(_ target: [Int]) -> Int {
        var stack = [Int]()
        var operations = target[0]

        for i in target.indices {
            while let last = stack.last, target[last] < target[i] {
                operations += target[i] - target[stack.removeLast()]
                stack = []
            }
            stack += [i]
        }
        return operations
    }
}
```