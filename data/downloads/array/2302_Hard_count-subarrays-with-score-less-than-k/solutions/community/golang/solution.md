# ✅ Sliding Window Approach || Most Optimal Solutions 🚀

**Author:** Krishna102001
**Votes:** 2
**Link:** [https://leetcode.com/problems/count-subarrays-with-score-less-than-k/solutions/5847528/](https://leetcode.com/problems/count-subarrays-with-score-less-than-k/solutions/5847528/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The problem involves counting subarrays based on a specific condition involving their sum and length. My first thought was to use a sliding window approach, which is efficient for problems where you need to maintain a certain condition over a contiguous subarray.

# Approach
<!-- Describe your approach to solving the problem. -->
The sliding window technique allows us to dynamically expand and contract a subarray while maintaining the necessary constraints. We maintain two pointers, `l` (left) and `r` (right), to represent the current subarray. We move the right pointer to expand the subarray until it violates the condition, then move the left pointer to shrink the subarray back within valid limits. The condition is checked such that the product of the subarray sum and its length must be less than `k`. We keep a running total of valid subarray counts.

1. Initialize `l` and `r` to `0`, with count and sum set to `0`.
2. Iterate with `r` over the array to expand the window.
3. Add the current value to `sum`.
4. If the `product` of sum and the window length `(r - l + 1)` exceeds or equals `k`, increment `l` to shrink the window and subtract `nums[l]` from `sum`
5. Add the count of valid subarrays ending at `r` to the result.
6. Continue until all subarrays are processed.

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```golang []
func countSubarrays(nums []int, k int64) int64 {
	l, r := 0, 0
	var count, sum int64 = 0, 0
	for r < len(nums) {
		sum += int64(nums[r])
		for sum*int64(r-l+1) >= k {
			sum -= int64(nums[l])
			l++
		}
		count += int64(r - l + 1)
		r++
	}

	return count
}
```
```python []
def count_subarrays(nums, k):
    l, r = 0, 0
    count, summation = 0, 0
    while r < len(nums):
        summation += nums[r]
        while summation * (r - l + 1) >= k:
            summation -= nums[l]
            l += 1
        count += (r - l + 1)
        r += 1
    return count
```
```java []
public class Solution {
    public long countSubarrays(int[] nums, long k) {
        int l = 0, r = 0;
        long count = 0, sum = 0;
        while (r < nums.length) {
            sum += nums[r];
            while (sum * (r - l + 1) >= k) {
                sum -= nums[l];
                l++;
            }
            count += (r - l + 1);
            r++;
        }
        return count;
    }
}
```


# **PLEASE UPVOTE THE SOLUTIONS **