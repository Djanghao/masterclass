# ✅ [Swift] 2-line solution

**Author:** IlnurZayn
**Votes:** 1
**Link:** [https://leetcode.com/problems/most-frequent-even-element/solutions/3852805/](https://leetcode.com/problems/most-frequent-even-element/solutions/3852805/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    func mostFrequentEven(_ nums: [Int]) -> Int {
        
        guard nums.filter { $0 % 2 == 0 }.count > 0 else { return -1 }

        return nums.filter ({ $0 % 2 == 0 })
                   .reduce(into: [:]) { $0[$1, default: 0] += 1 }
                   .sorted { $0.value != $1.value ? $0.value > $1.value : $0.key < $1.key }[0].key
    }
}
```