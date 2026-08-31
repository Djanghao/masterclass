# Dynamic Programming Solution with Detailed Explanation

**Author:** KhoaNam225
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-subarrays-with-lcm-equal-to-k/solutions/3599480/](https://leetcode.com/problems/number-of-subarrays-with-lcm-equal-to-k/solutions/3599480/)

---

# Intuition
The idea behind this solution is very simple. We simply iterate over all possible subarrays. For each subarray, we calculate the LCM of its items and keep track of the `count` variable, which we use to hold the number of subarrays satisfying the requirement.

# Approach
In order to efficiently calculate the LCM of many numbers, we need to know this property:
$$ LCM(a, b, c, ..) = LCM(a, LCM(b, LCM(c, ...))) $$

That means, if we know the LCM all items from index `i` to index `j`, we can easily calculate LCM of items from `i` to `j + 1` by using the same formula: 

$$ LCM[i, j + 1] = LCM[LCM[i , j], \\space nums[j + 1]] $$

This can be easily implemented using a 2D array `LCM` where `LCM[i][j]` denotes the LCM of subarray starting from `i` and ending at `j`.

Also, to avoid overflow with many multiplications performed, we can add a simply check. If `a > k` or `b > k` then `LCM(a, b) > k`, and we can simply ignore this case and avoid calculating the LCM.

# Complexity
- Time complexity: $$O(N^2logM)$$ with $$N$$ being the size of the input array `nums` and $$M$$ being the maximum values of `nums[i]`.
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(N^2)$$ with $$N$$ being the size of the input array `nums` since we are using a 2D array to cache values.
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
func min(nums ...int64) int64 {
	min := nums[0]
	for _, num := range nums {
		if num < min {
			min = num
		}
	}

	return min
}

func max(nums ...int64) int64 {
	max := nums[0]
	for _, num := range nums {
		if num > max {
			max = num
		}
	}

	return max
}

func gcd(a int64, b int64) int64 {
	smaller := min(a, b)
	larger := max(a, b)

	for smaller > 0 {
		temp := smaller
		smaller = larger % smaller
		larger = temp
	}

	return larger
}

func lcm(a int64, b int64) int64 {
	return int64(a) / int64(gcd(a, b)) * int64(b)
}

func subarrayLCM(nums []int, k int) int {
	count := 0
	n := len(nums)
	lcmArray := make([][]int64, n)

	for i := 0; i < n; i++ {
		lcmArray[i] = make([]int64, n)
	}

	for i := 0; i < n; i++ {
		for j := i; j < n; j++ {
			if i == j {
				lcmArray[i][j] = int64(nums[i])
			} else if lcmArray[i][j - 1] <= int64(k) && nums[j] <= k {
				lcmArray[i][j] = lcm(lcmArray[i][j - 1], int64(nums[j]))
			}

			if lcmArray[i][j] == int64(k) {
				count++
			}
		}
	}

	return count
}
```