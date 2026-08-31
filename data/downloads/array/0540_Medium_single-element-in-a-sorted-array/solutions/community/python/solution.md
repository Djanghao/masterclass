# Python Binary Search O(logn) - explained

**Author:** cjporteo
**Votes:** 113
**Link:** [https://leetcode.com/problems/single-element-in-a-sorted-array/solutions/628036/](https://leetcode.com/problems/single-element-in-a-sorted-array/solutions/628036/)

---

If every element in the sorted array were to appear exactly twice, they would occur in pairs at indices `i`, `i+1` for all **even** `i`. 

Equivalently, `nums[i] = nums[i+1]` and `nums[i+1] != nums[i+2]` for all **even** `i`.

When we insert the unique element into this list, the indices of all the pairs following it will be shifted by one, negating the above relationship. 

So, for any **even** index `i`, we can compare `nums[i]` to `nums[i+1]`. 
* If they are equal, the unique element must occur somewhere **after** index `i+1`
* If they aren't equal, the unique element must occur somewhere **before** index `i+1`

Using this knowledge, we can use binary search to find the unique element.

We just have to make sure that our pivot index is always even, so we can use `mid = 2 * ((lo + hi) // 4)` instead of the usual `mid = (lo + hi) // 2`.
<hr>

**Solution:**

Time: `O(logn)`
Space: `O(1)`

```
def singleNonDuplicate(self, nums: List[int]) -> int:
	lo, hi = 0, len(nums) - 1
	while lo < hi:
		mid = 2 * ((lo + hi) // 4)
		if nums[mid] == nums[mid+1]:
			lo = mid+2
		else:
			hi = mid
	return nums[lo]
```