# Swift solution

**Author:** azm819
**Votes:** 2
**Link:** [https://leetcode.com/problems/diagonal-traverse-ii/solutions/4316897/](https://leetcode.com/problems/diagonal-traverse-ii/solutions/4316897/)

---

# Complexity
- Time complexity: $$O(n * log(n))$$ 
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    func findDiagonalOrder(_ nums: [[Int]]) -> [Int] {
        var elements = [(i: Int, indSum: Int, num: Int)]()
        for i in 0 ..< nums.count {
            for j in 0 ..< nums[i].count {
                elements.append((i, i + j, nums[i][j]))
            }
        }
        elements.sort { lhs, rhs in
            lhs.indSum < rhs.indSum ||
            lhs.indSum == rhs.indSum && lhs.i > rhs.i
        }
        return elements.map(\\.num)
    }
}
```