# ☑️ Swift Solution | Easy to understand

**Author:** clothor
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-moves-to-convert-string/solutions/2764936/](https://leetcode.com/problems/minimum-moves-to-convert-string/solutions/2764936/)

---

Since the substitution will not be used later, it can be omitted and only the occurrences can be counted.
My best result
Runtime:\xA0**2 ms**, faster than **100.00%** of Swift online submissions for Minimum Moves to Convert String.
```
class Solution {
	func minimumMoves(_ s: String) -> Int {
		var arr = Array(s)
		var index = 0
		var result = 0

		while index < arr.count {
			if arr[index] == "O" {
				index += 1
			} else {
				index += 3
				result += 1
			}
		}

		return result
	}
}
```