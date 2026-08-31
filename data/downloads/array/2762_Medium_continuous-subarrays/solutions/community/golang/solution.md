# 🔥🔥🔥 O(N) | Golang |  Deque

**Author:** denzel777
**Votes:** 1
**Link:** [https://leetcode.com/problems/continuous-subarrays/solutions/3718187/](https://leetcode.com/problems/continuous-subarrays/solutions/3718187/)

---

# Approach
<!-- Describe your approach to solving the problem. -->
Maintains a sliding window in which all subarrays' maximum and minimum values difference is less than or equal to 2.

# Complexity
- Time complexity:
$$O(N)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
The time complexity of the function is O(n), where n is the length of the input array A. Here's why:

We iterate over the array once, and each iteration takes constant time, except for the operations involving the deques.
Each element in the array is added once and removed once from each deque. Since adding to and removing from a deque are both O(1) operations, these result in constant time work per array element.
The while loop can also cause multiple iterations for a single 'right' pointer position. However, in total over the entire algorithm, the while loop performs at most 'n' iterations since it moves the 'left' pointer, which can only be moved 'n' times.
So, adding up all this work, the total time complexity remains O(n).

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(N)$$

# Code
```

func continuousSubarrays(A []int) int64 {
	minDeque := make([]int, len(A))
	maxDeque := make([]int, len(A))
	res := 0
	left := 0

	// Iterate over each element in A
	for right := 0; right < len(A); right++ {
		// While the maximum deque is not empty and its last value is smaller than val, remove the last value
		for len(maxDeque) > 0 && A[maxDeque[len(maxDeque)-1]] < A[right] {
			maxDeque = maxDeque[:len(maxDeque)-1]
		}

		// Add the index of val to the max_deq
		maxDeque = append(maxDeque, right)

		// While the minimum deque is not empty and its last value is larger than val, remove the last value
		for len(minDeque) > 0 && A[minDeque[len(minDeque)-1]] > A[right] {
			minDeque = minDeque[:len(minDeque)-1]
		}

		// Add the index of val to the min_deq
		minDeque = append(minDeque, right)
		/*
			While the difference between the max and min value is greater than 2
			we remove the deque with the lowest index
			This is because we're maintaining a set of subarrays where each subarray from A[left] to A[right]
			satisfies the condition that the maximum and minimum values difference is at most 2.
			When the condition is violated, we should slide our window from the oldest value to ensure
			we're always considering new and valid subarrays. If we don't, then we're not shifting the
			'left' pointer far enough and we'll end up including some subarrays that have already been
			counted in the previous steps, leading to duplicate counts
		*/
		for len(minDeque) > 0 && len(maxDeque) > 0 && A[maxDeque[0]]-A[minDeque[0]] > 2 {
			if minDeque[0] > maxDeque[0] {
				left = maxDeque[0] + 1
				maxDeque = maxDeque[1:]
			} else {
				left = minDeque[0] + 1
				minDeque = minDeque[1:]
			}
		}
		// Count the subarrays. Every time we move the right pointer,
		// we count all valid subarrays ending at A[right], which is right - left + 1
		res += right - left + 1
	}

	return int64(res)
}


```