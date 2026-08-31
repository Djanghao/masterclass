# Go solution binary search

**Author:** noomaher12
**Votes:** 5
**Link:** [https://leetcode.com/problems/minimize-maximum-of-array/solutions/3381682/](https://leetcode.com/problems/minimize-maximum-of-array/solutions/3381682/)

---

# Approach
We determine the minimum and maximum that the result can be and then iterate through the options using a binary search. Further, while the $left$ is less than the $right$, we take the $middle$, and see what happens if we try to bring our array to the $middle$. We go from the last element to the first, if $nums[i]$ is greater than the $middle$, then we add the difference to the $total$, there is how much we need to subtract later. If the element is less than the $middle$, we add negative difference to the $total$, if the $total$ becomes less than zero we bring it back to zero. In the last step of the loop, we check whether it is possible to subtract $total$ from the $nums[0]$ and, depending on this, we decide in which direction to shift the boundary of our search.


# Complexity
- Time complexity:
$$O(n log (m))$$

- Space complexity:
$$O(1)$$

# Code
```
func minimizeArrayValue(nums []int) int {
	left, right, sum := 0, 0, 0

	for _, num := range nums {
		right = max(right, num)
        sum += num
	}
    left = sum / len(nums)

	for left < right {
		mid := (left + right) / 2
		total := 0
    
		for i := len(nums) - 1; i > 0; i-- {
            total += nums[i] - mid
			if total < 0 {
                total = 0
            }
		}

		if nums[0]+total > mid {
			left = mid + 1
		} else {
			right = mid
		}
	}

	return left
}

func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}
```