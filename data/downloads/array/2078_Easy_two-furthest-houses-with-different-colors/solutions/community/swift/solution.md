# Swift: clean solution

**Author:** chrisnyw
**Votes:** 1
**Link:** [https://leetcode.com/problems/two-furthest-houses-with-different-colors/solutions/1595237/](https://leetcode.com/problems/two-furthest-houses-with-different-colors/solutions/1595237/)

---

```
class Solution {
    func maxDistance(_ colors: [Int]) -> Int {
        var l = 0
        var r = colors.count - 1
        var n = colors.count - 1
        
        // find max distance from index 0
        while colors[0] == colors[r] {
            r -= 1
        }
        // find max distance from last index
        while colors[l] == colors[n] {
            l += 1
        }
        // return max
        return max(r-0, n-l)
    }
}
```