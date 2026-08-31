# Java | 3 liner | Explained

**Author:** prashant404
**Votes:** 148
**Link:** [https://leetcode.com/problems/arithmetic-slices/solutions/1814356/](https://leetcode.com/problems/arithmetic-slices/solutions/1814356/)

---

**Idea:**
* An Arithmetic Slice (AS) is at least 3 ints long, s.t. for a1, a2, a3, they're in arithmetic progression (AP), i.e. `a3 - a2 = a2 - a1`
* If there's an AS forming at any index, then it'll be 1 longer than the AS forming at the previous index. Why?
	* Let a[i], ..., a[j] form an AS of size k, and 
	* a[j + 1] - a[j] = a[j] - a[j - 1], then a[j + 1] becomes a part of the previous AS, i.e. it extends the AS by 1
* Total AS = sum of all count of AS ending at each index
* Example: `nums: [1, 2, 3, 8, 9, 10]`
```
Let AS[i] denote number of AS ending at this index. 
By definition AS[0] = AS[1] = 0. Also, AS[i] = 0 for any index for which the current int and previous two ints are not in AP

nums 1 2 3 8 9 10
AS   0 0 1 0 0 1

since 3 - 2 = 2 - 1 \u21D2 AS[2] = 1 + AS[1] = 1
8 - 3 \u2260 3 - 2 \u21D2 AS[3] = 0
9 - 8 \u2260 8 - 3 \u21D2 AS[4] = 0 
10 - 9 = 9 - 8 \u21D2 AS[5] = 1 + AS[4] = 1

Total AS = 1 + 1 = 2 [Ans]
```

>**T/S:** O(n)/O(1), where n = size(nums)
```
public int numberOfArithmeticSlices(int[] nums) {
	var slices = 0;
	
	for (int i = 2, prev = 0; i < nums.length; i++)
		slices += (nums[i] - nums[i - 1] == nums[i - 1] - nums[i - 2]) 
				? ++prev 
				: (prev = 0);
	
	return slices;
}
```
**Note:**
```
slices += (nums[i] - nums[i - 1] == nums[i - 1] - nums[i - 2]) ? ++prev : (prev = 0);
```
is just a 1 liner for 
```
if (nums[i] - nums[i - 1] == nums[i - 1] - nums[i - 2]) {
	prev = prev + 1;
	slices = slices + prev;
} else {
	prev = 0;
}
```
***Please upvote if this helps***