# Swift: Set solution O(n), 100%

**Author:** voxqhuy
**Votes:** 5
**Link:** [https://leetcode.com/problems/check-if-n-and-its-double-exist/solutions/809704/](https://leetcode.com/problems/check-if-n-and-its-double-exist/solutions/809704/)

---

```
func checkIfExist(_ arr: [Int]) -> Bool {
	var nums = Set<Int>()

	for num in arr {
		if nums.contains(num * 2) { return true }
		if num % 2 == 0 && nums.contains(num / 2) { 
			return true
		}
		nums.insert(num)
	}

	return false
}
```