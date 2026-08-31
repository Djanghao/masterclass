# Swift solution

**Author:** azm819
**Votes:** 2
**Link:** [https://leetcode.com/problems/maximum-element-after-decreasing-and-rearranging/solutions/4289985/](https://leetcode.com/problems/maximum-element-after-decreasing-and-rearranging/solutions/4289985/)

---

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    func maximumElementAfterDecrementingAndRearranging(_ arr: [Int]) -> Int {
        let n = arr.count
        var counts = [Int: Int]()
        for num in arr {
            counts[min(num, n), default: .zero] += 1
        }

        var result = 0
        for num in 1 ... n {
            result = min(result + counts[num, default: .zero], num)
        }
        return result
    }
}
```