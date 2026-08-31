# Sliding Window simple approach

**Author:** hongdangcs
**Votes:** 2
**Link:** [https://leetcode.com/problems/shortest-subarray-with-or-at-least-k-ii/solutions/6028396/](https://leetcode.com/problems/shortest-subarray-with-or-at-least-k-ii/solutions/6028396/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
![1448.PNG](./images/0.png)

# Approach
<!-- Describe your approach to solving the problem. -->
calculate OR result from start to i, if result greater than k, calculate OR from i to start. When result greater than k, stop adding element, check the range and update first element to i

for instance, we have array [1,2,3,4, 7, 10, 15], k = 11
first calculate OR from start(=0), stop when the result greater than k
so the array we got here is : [1, 2, 3, 4, 7, 10]
now we remove each element from start that keep the OR of entire array greater than k, we have [7, 11]
the start here now update from 0th to 4th
check the range of array by calculating i - start and compare to the output result
update start element to 5th
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```golang []
func minimumSubarrayLength(nums []int, k int) int {
	result := 220000
	n := 0
	for i := 0; i < len(nums); i++ {
		if nums[i] >= k {
			return 1
		}
		n = n | nums[i]
		if n >= k {
			t := nums[i]
			j := i
			for t < k {
				j--
				t = t | nums[j]
			}
			if i-j+1 < result {
				result = i - j + 1
			}
			j++
			n = nums[j]
			i = j
		}
	}
	if result < 220000 {
		return result
	}
	return -1
}
```