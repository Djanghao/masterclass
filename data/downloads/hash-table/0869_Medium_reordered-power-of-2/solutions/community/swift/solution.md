# Swift Simple Solution

**Author:** machinemxy
**Votes:** 2
**Link:** [https://leetcode.com/problems/reordered-power-of-2/solutions/2481027/](https://leetcode.com/problems/reordered-power-of-2/solutions/2481027/)

---

```
class Solution {
	func reorderedPowerOf2(_ n: Int) -> Bool {
		var pool = Set<[Character]>()
		var i = 1
		while i <= 1000000000 {
			pool.insert(String(i).sorted())
			i *= 2
		}
		return pool.contains(String(n).sorted())
	}
}
```