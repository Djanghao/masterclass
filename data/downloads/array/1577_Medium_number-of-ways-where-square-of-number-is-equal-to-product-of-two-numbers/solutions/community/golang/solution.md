# Frequency table, beat 100%

**Author:** user5529V
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-ways-where-square-of-number-is-equal-to-product-of-two-numbers/solutions/2941753/](https://leetcode.com/problems/number-of-ways-where-square-of-number-is-equal-to-product-of-two-numbers/solutions/2941753/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Precalculate frequencies of two arrays.

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

$$O(n*m)$$

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(n)$$

# Code
```
func numTriplets(nums1 []int, nums2 []int) int {
	if len(nums1) == 1 && len(nums2) == 1 {
		return 0
	}
	cnt1, cnt2 := freqMap(nums1), freqMap(nums2)

	return calculate(nums1, nums2, cnt1, cnt2) + calculate(nums2, nums1, cnt2, cnt1)
}

func freqMap(nums []int) *map[int]int {
	counts := map[int]int{}
	for i := range nums {
		counts[nums[i]] += 1
	}
	return &counts
}

func calculate(nums1, nums2 []int, cnt1, cnt2 *map[int]int) int {
	var result int
	var xSqr, acc int
	for x1, c := range *cnt1 {
		acc = 0
		xSqr = x1 * x1
		for _, x2 := range nums2 {
			if xSqr%x2 != 0 {
				continue
			}
        	y := xSqr / x2
     		if val, ok := (*cnt2)[y]; ok {
				acc += val
				if y == x2 {
					acc -= 1
				}
			}
		}
		result += c * acc / 2
	}
	return result
}
```