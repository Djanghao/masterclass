# Scala Functional Two Point Solution

**Author:** imran-sarwar
**Votes:** 2
**Link:** [https://leetcode.com/problems/3sum-closest/solutions/1504285/](https://leetcode.com/problems/3sum-closest/solutions/1504285/)

---

1. Sort the list
2. Iterate on all numbers and keep 2 pointers
3. Sum all three and take decision what next

```scala
def threeSumClosest(nums: Array[Int], target: Int): Int = {
	Sorting.quickSort(nums)
	def helper(n: Int, left: Int, right: Int, diff: Int): Int = {
		if(left < right) {
			val sum = n + nums(left) + nums(right)
			if(Math.abs(sum - target) < Math.abs(diff))
				helper(n, left, right, target-sum)
			else if(sum < target)
				helper(n, left+1, right, diff)
			else
				helper(n, left, right-1, diff)
		} else
			diff
	}

	def iter(i: Int, ans: Int): Int = {
		if(i < nums.length) iter(i+1, helper(nums(i), i+1, nums.length-1, ans))
		else ans
	}
	target - iter(0, Int.MaxValue)
}
```