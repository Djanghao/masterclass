# [Swift] Easy short solution TC: O(N) SC: O(1)

**Author:** odnaks
**Votes:** 4
**Link:** [https://leetcode.com/problems/find-k-closest-elements/solutions/2948556/](https://leetcode.com/problems/find-k-closest-elements/solutions/2948556/)

---

# Complexity
- Time complexity: O(N)
- Space complexity: O(1)

# Code
```
class Solution {
    func findClosestElements(_ arr: [Int], _ k: Int, _ x: Int) -> [Int] {
        var start = 0
        var end = arr.count - 1
        while end - start + 1 > k {
            if abs(arr[start] - x) <= abs(arr[end] - x) {
                end -= 1
            } else {
                start += 1
            }
        }
        return Array(arr[start...end])
    }
}
```