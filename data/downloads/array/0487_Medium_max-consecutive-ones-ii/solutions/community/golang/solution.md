# Go simple O(n) solution (with comments)

**Author:** sqts
**Votes:** 1
**Link:** [https://leetcode.com/problems/max-consecutive-ones-ii/solutions/1851814/](https://leetcode.com/problems/max-consecutive-ones-ii/solutions/1851814/)

---

```
func findMaxConsecutiveOnes(nums []int) int {
	i, max, count, prev := 0, 0, 0, -1

	for i < len(nums) {
		if nums[i] == 0 {
		    // if already flipped
			if prev >= 0 {
			    // save max
				if count > max {
					max = count
				}
				// rollback count to last 0
				count = i - prev - 1
			}
			// save index of current 0
			prev = i
		}
		count++
		i++
	}

	if count > max {
		max = count
	}

	return max
}
```