# Greedy by Swift

**Author:** daoduyquang91
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-swaps-to-make-strings-equal/solutions/4896009/](https://leetcode.com/problems/minimum-swaps-to-make-strings-equal/solutions/4896009/)

---

# Intuition
* The `x-x` & `y-y` pairs wont affect to final result then we can filter them.
* There're 2 possible distinct pairs: `x-y` & `y-x`.
* Use greedy approach to find the final result base on the count of distinct pairs.

# Approach
Read comment code

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(n)

# Code
```swift
class Solution {
    func minimumSwap(_ s1: String, _ s2: String) -> Int {
        // check pre-conditions
        if s1 == s2 {
            return 0
        } else if s1.count != s2.count {
            return -1
        }
        
        let s1 = Array(s1)
        let s2 = Array(s2)
        var xy = 0
        var yx = 0
        
        for i in 0..<s1.count {
            // ignore same elements
            if s1[i] == s2[i] {
                continue
            }
            // count the x-y and y-x pair
            if s1[i] == "x" && s2[i] == "y" {
                xy += 1
            } else {
                yx += 1
            }
        }
        // the pairs must be coupled
        if (xy + yx) % 2 != 0 {
            return -1
        }
        // return the result base on greedy formula
        return xy/2 + yx/2 + (xy%2 + yx%2)
    }
}

```