# Simple swift solution

**Author:** venkatasaipulipati_123
**Votes:** 0
**Link:** [https://leetcode.com/problems/queries-on-a-permutation-with-key/solutions/5764740/](https://leetcode.com/problems/queries-on-a-permutation-with-key/solutions/5764740/)

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
```swift []
class Solution {
    func processQueries(_ queries: [Int], _ m: Int) -> [Int] {
        var p = Array(1...m)
        var ans:[Int] = []
        for i in 0..<queries.count{
            let index = p.firstIndex(of:queries[i])!
            ans.append(index)
            let removed = p.remove(at:index)
            p.insert(removed,at:0)
        }
        return ans
    }
}
```