# ✅ [Beats 100%] n^2 solution. Easy to understand

**Author:** protodimbo
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-triplets-that-can-form-two-arrays-of-equal-xor/solutions/5229107/](https://leetcode.com/problems/count-triplets-that-can-form-two-arrays-of-equal-xor/solutions/5229107/)

---

# Complexity
- Time complexity:
$$O(n^2)$$

- Space complexity:
$$O(1)$$

# Code
```
class Solution {
    func countTriplets(_ arr: [Int]) -> Int {
        var n = arr.count, res = 0
        for i in 0..<n {
            var curXOR = arr[i]
            for k in i + 1..<n {
                curXOR ^= arr[k]
                if curXOR == 0 {
                    res += k - i
                }
            }
        }
        return res
    }
}
```