# Swift short 7 lines brute force

**Author:** blest
**Votes:** -1
**Link:** [https://leetcode.com/problems/count-pairs-with-xor-in-a-range/solutions/3622696/](https://leetcode.com/problems/count-pairs-with-xor-in-a-range/solutions/3622696/)

---

# Code
```
class Solution {
    func countPairs(_ nums: [Int], _ low: Int, _ high: Int) -> Int {
        var res = 0
        for (i, a) in nums.enumerated() {
            for b in nums.dropFirst(i+1) {
                res += low...high ~= a ^ b ? 1 : 0
            }
        }
        return res
    }
}
```

# Complexity
- Time complexity:  $$O(n^2)$$
- Space complexity: $$O(1)$$
