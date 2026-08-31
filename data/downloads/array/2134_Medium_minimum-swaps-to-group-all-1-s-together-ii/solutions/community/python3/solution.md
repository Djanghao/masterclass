# [Python3, Java, C++] Easy Sliding Window O(n)

**Author:** tojuna
**Votes:** 254
**Link:** [https://leetcode.com/problems/minimum-swaps-to-group-all-1s-together-ii/solutions/1676865/](https://leetcode.com/problems/minimum-swaps-to-group-all-1s-together-ii/solutions/1676865/)

---

*Intuition*:  
Whenever you are faced with a circular array question, you can just append the array to itself to get rid of the circular array part of the problem

***Explanation***:
* Count number of ones in nums, let the number of ones be stored in the variable `ones`
* Append nums to nums because we have to look at it as a circular array
* Find the maximum number of ones in a window of size `ones` in the new array
* Number of swaps = `ones` - maximum number of ones in a window of size `ones`
<iframe src="https://leetcode.com/playground/kCYY9jmQ/shared" frameBorder="0" width="600" height="300"></iframe>

We can also solve the same in O(1) space. Loop through the array twice:
```
def minSwaps(self, nums: List[int]) -> int:
	ones, n = nums.count(1), len(nums)
	x, onesInWindow = 0, 0
	for i in range(n * 2):
		if i >= ones and nums[i % n - ones]: x -= 1
		if nums[i % n] == 1: x += 1
		onesInWindow = max(x, onesInWindow)
	return ones - onesInWindow
```