# [Swift] n^2 solution

**Author:** muzle
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-unique-categories/solutions/5136554/](https://leetcode.com/problems/number-of-unique-categories/solutions/5136554/)

---

# Complexity
- Time complexity: O(n^2)
- Space complexity: O(1)

# Code
```
/**
 * Definition for a category handler.
 * class CategoryHandler {
 *     init(categories: [Int]) {}
 *     func haveSameCategory(a: Int, b: Int) -> Bool {}
 * }
 */
class Solution {
    func numberOfCategories(_ n: Int, _ categoryHandler: CategoryHandler) -> Int {
        var items = [Int](0..<n)
        for i in 0..<n-1 {
            for j in i+1..<n {
                guard categoryHandler.haveSameCategory(a: i, b: j) else { continue }
                items[j] = items[i]
            }
        }
        return Set(items).count
    }
}
```