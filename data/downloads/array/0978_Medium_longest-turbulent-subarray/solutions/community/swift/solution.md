# 🍎Swift solution – O(n)

**Author:** drxlx
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-turbulent-subarray/solutions/4928242/](https://leetcode.com/problems/longest-turbulent-subarray/solutions/4928242/)

---

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    func maxTurbulenceSize(_ arr: [Int]) -> Int {
        var l = 0
        var r = 1
        var res = 1
        var prev = ""

        while r < arr.count {
            if arr[r - 1] > arr[r] && prev != ">" {
                res = max(res, r - l + 1)
                r += 1
                prev = ">"
            } else if arr[r - 1] < arr[r] && prev != "<" {
                res = max(res, r - l + 1)
                r += 1
                prev = "<"
            } else {
                r = arr[r - 1] == arr[r] ? r + 1 : r
                l = r - 1
                prev = ""
            }
        }

        return res
    }
}
```