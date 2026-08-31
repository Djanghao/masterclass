# [Swift] Solution without using .map

**Author:** blackbirdNG
**Votes:** 6
**Link:** [https://leetcode.com/problems/build-array-from-permutation/solutions/1356986/](https://leetcode.com/problems/build-array-from-permutation/solutions/1356986/)

---

*<- Please vote if my solution was helpful to you.*
Runtime and Memory as the same as when using .map
```
class Solution {
	func buildArray(_ nums: [Int]) -> [Int] {
		var result = [Int]()
		for i in 0..<nums.count {
			result.append(nums[nums[i]])
		}
		return result
	}
}
```