# Golang | Two pointers | With explanation | Easy-to-understand | Beats 75%

**Author:** dimaglushkov
**Votes:** 4
**Link:** [https://leetcode.com/problems/rearrange-array-elements-by-sign/solutions/4725545/](https://leetcode.com/problems/rearrange-array-elements-by-sign/solutions/4725545/)

---

# Approach

- Initialize a new array `ans` of the same length as the input array `nums`.
- Use two pointers, `ip` for positive numbers and `in` for negative numbers, to track positions in `nums`.
- Iterate through `ans` in steps of two, placing a positive number at even indices and a negative number at odd indices.
- Within each iteration, find the next positive and negative numbers in nums by incrementing ip and in until they point to a positive and a negative number, respectively.
- After placing a number in `ans`, increment the pointers to find the next numbers for subsequent positions.
- Return the rearranged array `ans`.



# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(n)$$

# Code
```
func rearrangeArray(nums []int) []int {
	n := len(nums)
	ans := make([]int, n)

	ip, in := 0, 0
	for i := 0; i < n; i += 2 {
		for in < n && nums[in] > 0 {
			in++
		}
		for ip < n && nums[ip] < 0 {
			ip++
		}
		
		ans[i], ans[i+1] = nums[ip], nums[in]
		
		ip++
		in++
	}

	return ans
}

```