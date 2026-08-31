# ✅ Swift: Easy to Understand and Simple Solution

**Author:** sohagkumarbiswas
**Votes:** 9
**Link:** [https://leetcode.com/problems/unique-number-of-occurrences/solutions/2861651/](https://leetcode.com/problems/unique-number-of-occurrences/solutions/2861651/)

---

Solution:
```
class Solution {
	func uniqueOccurrences(_ arr: [Int]) -> Bool {
		var dict = [Int : Int]()
        
		for val in arr {
			dict[val, default: 0] += 1
		}
        
		return dict.count == Set(dict.values).count
	}
}
```