# DFS solution in Swift

**Author:** olegmetallic
**Votes:** 1
**Link:** [https://leetcode.com/problems/2-keys-keyboard/solutions/5660032/](https://leetcode.com/problems/2-keys-keyboard/solutions/5660032/)

---

# Approach
Declare `Operation` enum with 2 cases:
1. `copy` - for copy all operation.
2. `paste(value)` - for paste operation, `value` is count of chars we will add.

Now let's declare our `dfs` function, it will take two params:
1. `current` - current notepad chars count.
2. `operation` - current operation.
First we should check the edge cases, if `current` is bigger than `n` return max int (this result won't be counted), if `current` is equal to `n` return `0` since we reached needed point.
Otherwise switch on `operation`:
1. `copy` - here we add `1` to the final result and call `dfs` with `current` value and set operation to `.paste(current)`, since we want to paste all current chars in the notepad.
2. `paste` - here we add `1` to the final result and get the minimum among two `dfs` calls. First for copy and second for the paste operation with current `value`.

In the end just call `dfs` func.

# Complexity
- Time complexity:
O(2^n) - where `n` is input param.

- Space complexity:
O(1) - no extra space needed.

# Code
```swift []
class Solution {
    enum Operation {
        case copy
        case paste(Int)
    }
    
    func minSteps(_ n: Int) -> Int {
        func dfs(current: Int = 1,
                 operation: Operation = .copy) -> Int {
            guard current < n else {
                return current == n ? 0 : Int.max
            }
            switch operation {
            case .copy:
                let count = dfs(current: current, operation: .paste(current))
                guard count != Int.max else { return Int.max }
                return 1 + count
            case let .paste(value):
                let count = min(dfs(current: current + value, operation: .copy),
                                dfs(current: current + value, operation: .paste(value)))
                guard count != Int.max else { return Int.max }
                return 1 + count
            }
        }
        return dfs()
    }
}
```