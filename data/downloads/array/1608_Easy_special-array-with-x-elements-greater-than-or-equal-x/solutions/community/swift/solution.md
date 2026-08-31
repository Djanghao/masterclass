# ✅ O(n) solution

**Author:** koolair
**Votes:** 1
**Link:** [https://leetcode.com/problems/special-array-with-x-elements-greater-than-or-equal-x/solutions/5215055/](https://leetcode.com/problems/special-array-with-x-elements-greater-than-or-equal-x/solutions/5215055/)

---



# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    func specialArray(_ nums: [Int]) -> Int {
        let N = nums.count
        var counts = [Int](repeating: 0, count: N+1)
        for num in nums {
            if num >= N {
                counts[N] += 1
            } else {
                counts[num] += 1
            }
        }

        var res = 0
        var idx = N
        while idx >= 0 {
            res += counts[idx]
            if res == idx {
                return res
            }

            idx -= 1
        }

        return -1
    }
}
```