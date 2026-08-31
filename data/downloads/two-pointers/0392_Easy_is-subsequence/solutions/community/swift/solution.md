# [Swift] Simplest solution

**Author:** Athleteg
**Votes:** 12
**Link:** [https://leetcode.com/problems/is-subsequence/solutions/2396678/](https://leetcode.com/problems/is-subsequence/solutions/2396678/)

---

Please, upvote if you found the solution useful.
```
class Solution {
	/// Time: O(n). Space: O(n).
    func isSubsequence(_ s: String, _ t: String) -> Bool {
        let sArray = Array(s)
        var index = 0

        for char in t {
            guard index < sArray.count, sArray[index] == char else { continue }
            index += 1
        }
        return index == sArray.count
    }
}
```