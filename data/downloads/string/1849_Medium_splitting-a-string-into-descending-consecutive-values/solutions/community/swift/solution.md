# 💡Swift - Optimal Solution - Depth-First Search - O(n^2)

**Author:** bernikovich
**Votes:** 0
**Link:** [https://leetcode.com/problems/splitting-a-string-into-descending-consecutive-values/solutions/4258170/](https://leetcode.com/problems/splitting-a-string-into-descending-consecutive-values/solutions/4258170/)

---

# Solution
```
class Solution {
    func splitString(_ s: String) -> Bool {
        let s = s.map { $0.wholeNumberValue! }
        let n = s.count
        let maxValue = 9_999_999_999

        func split(_ start: Int, _ expected: Int?) -> Bool {
            var value = 0
            for i in start..<n {
                value = value * 10 + s[i]
                if value > maxValue { break }

                if let expected = expected {
                    if value > expected { break }
                    if value == expected {
                        if i == n - 1 || split(i + 1, expected - 1) {
                            return true
                        }
                    }
                } else if split(i + 1, value - 1) {
                    return true
                }
            }
            return false
        }

        return split(0, nil)
    }
}
```

# Complexity
- Time: $$O(n^2)$$ while it appears like the space complexity here must be $$O(2^n)$$ it's only $$O(n^2)$$ because for every initial number length $$O(n)$$ we go through the string once $$O(n)$$. This is because there's only one possible way to split the remaining part of the string having numbers in decreasing order.
- Space: $$O(n)$$ for the copy of the initial string and the recursion stack

# Two for-loops Solution
```
class Solution {
    func splitString(_ s: String) -> Bool {
        let s = s.map { $0.wholeNumberValue! }
        let n = s.count
        let maxValue = 9_999_999_999

        var initialValue = 0
        for i in 0..<(n - 1) {
            initialValue = initialValue * 10 + s[i]
            if initialValue > maxValue { return false }

            var expected = initialValue - 1
            var value = 0
            for j in (i + 1)..<n {
                value = value * 10 + s[j]
                if value > expected { break }
                if value == expected {
                    if expected == 0 {
                        // Corner case.
                        // All the remaining numbers should be zeros.
                        if s[j...].allSatisfy({ $0 == 0 }) {
                            return true
                        }
                    } else if j == n - 1 {
                        // The last number.
                        return true
                    } else {
                        expected -= 1
                        value = 0
                    }
                }
            }
        }
        return false
    }
}
```