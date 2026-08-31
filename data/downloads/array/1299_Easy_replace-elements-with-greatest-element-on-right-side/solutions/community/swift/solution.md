# Swift: SIMPLE & SWEET

**Author:** voxqhuy
**Votes:** 4
**Link:** [https://leetcode.com/problems/replace-elements-with-greatest-element-on-right-side/solutions/809822/](https://leetcode.com/problems/replace-elements-with-greatest-element-on-right-side/solutions/809822/)

---

```
func replaceElements(_ arr: [Int]) -> [Int] {
	let lastIndex = arr.count - 1
	var nums = arr
	var curMax = nums[lastIndex]

	nums[lastIndex] = -1
	for i in stride(from: lastIndex - 1, through: 0, by: -1) {
		let temp = curMax
		curMax = max(curMax, nums[i])
		nums[i] = temp
	}

	return nums
}
```