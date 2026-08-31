# ✅ [Swift] Easy to understand

**Author:** lmvtsv
**Votes:** 3
**Link:** [https://leetcode.com/problems/delete-columns-to-make-sorted/solutions/2851555/](https://leetcode.com/problems/delete-columns-to-make-sorted/solutions/2851555/)

---

```
class Solution {
    func minDeletionSize(_ strs: [String]) -> Int {
        var strs = strs.map { Array($0) }
		var result = 0

		for column in 0..<strs[0].count {
			for row in 0..<strs.count - 1 {
				if strs[row][column] > strs[row + 1][column] {
					result += 1
                    break
				}
			}
		}

		return result
    }
}
```