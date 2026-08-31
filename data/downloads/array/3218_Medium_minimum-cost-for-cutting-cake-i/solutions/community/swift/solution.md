# [Swift] Greedy solution

**Author:** icedcappuccino
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-cost-for-cutting-cake-i/solutions/5473456/](https://leetcode.com/problems/minimum-cost-for-cutting-cake-i/solutions/5473456/)

---

The solution for this question is the same as the solution for Q 3219. Minimum Cost for Cutting Cake II

# Complexity
- Time complexity: $$O(nlogn + mlogm)$$
    - Note that for Swift Arrays removeLast() is an $$O(1)$$ operation
- Space complexity: $$O(n + m)$$

# Code
```
class Solution {
    func minimumCost(_ m: Int, _ n: Int, _ horizontalCut: [Int], _ verticalCut: [Int]) -> Int {
        var ans: Int = 0

        var hc: [Int] = horizontalCut.sorted()
        var vc: [Int] = verticalCut.sorted()

        while hc.count > 0 || vc.count > 0 {
            if vc.count == 0 || ((hc.last ?? Int.min) > (vc.last ?? Int.min)) {
                ans += (n - vc.count) * hc.last!
                hc.removeLast()
            } else {
                ans += (m - hc.count) * vc.last!
                vc.removeLast()
            }
        }

        return ans
    }
}
```