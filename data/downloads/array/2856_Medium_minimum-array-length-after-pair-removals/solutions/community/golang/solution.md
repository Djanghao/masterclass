# spider man solution 100% faster than , Zero memory

**Author:** omarmahmoud252
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-array-length-after-pair-removals/solutions/4248058/](https://leetcode.com/problems/minimum-array-length-after-pair-removals/solutions/4248058/)

---

# Intuition
get maxCount then check if it <= length of array
# Approach
get count for every number by start (l) , end(r) then count =r -l
and the maxCount = max (maxCount ,count)

in last the array you should add 1 for count then count = length -l +1
make this out of loop to save time 
# Complexity
- Time complexity:
  O(n)
- Space complexity:
 zero Memory
# Code
```
func minLengthAfterRemovals(nums []int) int {
	maxCount, current, l := 0, 0, 0
	for r, num := range nums {
		if current != num {
			current = num
			if maxCount < r-l {
				maxCount = r - l
			}
			l = r
		}
	}
	if maxCount < len(nums)-l-1 {
		maxCount = len(nums) - l
	}
    if maxCount <= len(nums)/2 {
		return len(nums) % 2
	} 
	return 2*maxCount - len(nums)
}

```