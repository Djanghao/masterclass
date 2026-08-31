# [JavaScript] All Solutions With a Step by Step Tackling of the Problem

**Author:** devmotheg
**Votes:** 30
**Link:** [https://leetcode.com/problems/sum-of-subarray-ranges/solutions/1625501/](https://leetcode.com/problems/sum-of-subarray-ranges/solutions/1625501/)

---

# Prompt

We're prompted to return the sum of all the subarray ranges (a subarray range is the difference between its max and min values); e.g. let [1, 2, 3] be our array of `nums`, all of its subarrays are the following
- [1]: Min = 1, max = 1
- [1, 2]: Min = 1, max = 2
- [1, 2, 3]: Min = 1, max = 3
- [2]: Min = 2, max =2
- [2, 3]: Min = 2, max = 3
- [3]: Min = 3, max = 3
The answer for the previous example will be (1 - 1) + (2 - 1) + (3 - 1) + (2 - 2) + (3 - 2) + (3 - 3) = 4

# Approach

By observing the prompt we can take one of two approaches to solve this problem (naive, optimal approaches):

1. The naive approach will be to simply get all of the subarrays and add to the result the difference between their max and min values. This approach can be done in two ways either with **3 `for` loops** or **2 `for` loops** having `O(n^3)` and `O(n^2)` time complexities respectively.
2. The more interesting approach is to think about this problem in a slightly different way; instead of getting the max and min values for each subarray then sum to the result their difference, we can instead **sum all of the max values** and substract from that the **sum of all the min values**; e.g. instead of writing the answer like that `(1 - 1) + (2 - 1) + (3 - 1) + (2 - 2) + (3 - 2) + (3 - 3) = 4`, we can also write it this way `(1 + 2 + 3 + 2 + 3 + 3) - (1 + 1 + 1 + 2 + 2 + 3) = 4`. which means to find the answer for this problem we can see how many times a certian number was a max in all of the subarrays that included it and how many times it was a min in the same subarrays! To do this we need to consider using a monotonic stack in which we add the index of our number and pop any previously inserted values in the stack **if and only if** they're smaller than us, that's how we end up getting the left range that includes all the possible subarrays that we are the max value in; the right range will be achived when we (the number) get poped by a value that's greater than us. (Please read the comments in the code carefully, it will make things more clear).

**1. Naive approaches:**

```
// O(n^3) time | O(1) space
var subArrayRanges = function(nums) {
	let res = 0
	for (let i = 1; i < nums.length; i++) {
		for (let j = 0; j < i; j++) {
			let smallest = nums[i], biggest = nums[i]
			for (let k = j; k < i; k++) {
				smallest = Math.min(smallest, nums[k])
				biggest = Math.max(biggest, nums[k])
			}
			res += biggest - smallest
		}
	}
	return res
};
```

```
// O(n^2) time | O(1) space
var subArrayRanges = function(nums) {
	let res = 0
	for (let i = 0; i < nums.length; i++) {
		let smallest = nums[i], biggest = nums[i]
		for (let j = i; j < nums.length; j++) {
			smallest = Math.min(smallest, nums[j])
			biggest = Math.max(biggest, nums[j])
			res += biggest - smallest
		}
	}
	return res
};
```

**2. Optimal approach:**

```
// O(n) time | O(n) space
var subArrayRanges = function(nums) {
	/**
	 * The max range for each value in a negative copy of the array will be the min range...
	 * for the same value in the positive array.
	 */
	const N = nums.map(n => -n)
	return getMaxRange(nums) + getMaxRange(N)

	function getMaxRange(nums) {
		/**
		 * Monotonic stack initialized with a -1 for potential edge cases where we have...
		 * no values in the stack and we wanna calculate the left range of the poped number.
		 */
		const S = [-1]
		nums.push(Infinity)
		let res = 0
		for (let i = 0; i < nums.length; i++) {
			/**
			 * If we're poping values that're smaller than us that mean we gonna end up with a...
			 * boundary to our left that's greater than us, meaning we extended our range to include...
			 * all of the values that're smaller than us, meaning we got the full left range...
			 * in which we are the max.
			 */
			/**
			 * We will get the right range when a value from future position in the array pop us out...
			 * that's why we have an Infinity value at the end of the array that will pop the last...
		  	 * number out!
			 */
			while (nums[S[S.length - 1]] < nums[i]) {
				const MOST_MAX = S.pop(),
					LEFT_BOUNDARY = S[S.length - 1]
				const LEFT_RANGE = MOST_MAX - LEFT_BOUNDARY,
					RIGHT_RANGE = i - MOST_MAX
				/**
				 * By multiplying all these 3 values we get exactly how many times this number...
				 * was a max in its range!
				 */
				res += nums[MOST_MAX] * LEFT_RANGE * RIGHT_RANGE
			}
			S.push(i)
		}
		return res
	}
};
```