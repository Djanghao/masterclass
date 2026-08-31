# Swift: SIMPLE & SWEET 100%

**Author:** voxqhuy
**Votes:** 5
**Link:** [https://leetcode.com/problems/valid-mountain-array/solutions/809763/](https://leetcode.com/problems/valid-mountain-array/solutions/809763/)

---

```
func validMountainArray(_ A: [Int]) -> Bool {
	let count = A.count
	if count < 3 { return false }

	var index = 1
	while index < A.count && A[index - 1] < A[index] {
		index += 1
	}

	if index == 1 || index == count { return false } // did not find a valid peak
	while index < A.count && A[index - 1] > A[index] {
		index += 1
	}

	return index == count // after 2 interactions, index should be at the end
}
```