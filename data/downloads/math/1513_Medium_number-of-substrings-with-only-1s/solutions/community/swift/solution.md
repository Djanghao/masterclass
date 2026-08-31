# [Swift] Clean & Short

**Author:** jayyaj1224
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-substrings-with-only-1s/solutions/2969354/](https://leetcode.com/problems/number-of-substrings-with-only-1s/solutions/2969354/)

---

# Approach
### consecutive 1s : substring count
1: 1
11: 1 + 2
111: 1 + 2 + 3
1111: 1 + 2 + 3 + 4
11111: 1 + 2 + 3 + 4 + 5

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(1)

# Code
```
class Solution {
    func numSub(_ s: String) -> Int {
        var count = 0, consecutive = 0

        for c in s { 
            consecutive = (c == "0") ? 0 : consecutive+1 
            count+=consecutive
        }
        return count % Int(pow(Double(10), Double(9)) + 7)
    }
}

```