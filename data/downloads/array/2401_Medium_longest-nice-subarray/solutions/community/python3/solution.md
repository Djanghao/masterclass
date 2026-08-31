# [Java/Python 3] Sliding window & bit manipulation, w/ explanation, comments and analysis.

**Author:** rock
**Votes:** 39
**Link:** [https://leetcode.com/problems/longest-nice-subarray/solutions/2527281/](https://leetcode.com/problems/longest-nice-subarray/solutions/2527281/)

---

**Q & A**

*Q*: How to think of such approach in interview?
*A*: I believe the key point is how to understand and then use the constraint "bitwise AND of every pair of elements that are in different positions in the subarray is equal to 0."

The other point is that a subarray is a **contiguous** part of an array, which reminds me of sliding window.

**End of Q & A**

----


**Intuition:**

According to the problem description: "bitwise AND of every pair of elements that are in different positions in the subarray is equal to 0.", we can conclude that **the elements within the subarray have distinct set (`1`) bits.**, which implies that we can use an integer as a mask to record the set bits of elements within the sliding window.

Therefore, we can maintain a sliding window such that the set bits of all elements in the window are distinct.

**Algorithm**

1. Use an integer to represent the set bits within the sliding window;  use bitwise OR operation to roll an element into window;
2. If there are duplicate set bits in current sliding window, their bitwise AND must be greater than `0`; use bitwise XOR to keep rolling the element at left bound out of the sliding window till bitwise AND becomes `0`;
3. Update the maximum window size.

```java
    public int longestNiceSubarray(int[] nums) {
        int ans = 0, mask = 0;
        for (int lo = -1, hi = 0; hi < nums.length; ++hi) {
            while ((mask & nums[hi]) != 0) { // nums[hi] has duplicate set bits for current sliding window.
                mask ^= nums[++lo]; // shrink left bound of current sliding window, and remove the corresponding element.
            }
            mask |= nums[hi]; // Expand right bound and put nums[hi] into window.
            ans = Math.max(ans, hi - lo); // update the max window size.
        }
        return ans;
    }
```
```python
    def longestNiceSubarray(self, nums: List[int]) -> int:
        lo, mask, ans = -1, 0, 1
        for hi, n in enumerate(nums):
            while (mask & n): # n has duplicate set bits for current sliding window.
                lo += 1 # shrink left bound of current sliding window.
                mask ^= nums[lo] # remove the corresponding element out of the window.
            mask |= n # Expand right bound and put n into window.
            ans = max(ans, hi - lo) # update the max window size.
        return ans
```

**Analysis:**

Time: `O(n)`, space: `O(1)`, where `n = nums.length`.

----


Similar Sliding Window Problems:

[159. Longest Substring with At Most Two Distinct Characters](https://leetcode.com/problems/longest-substring-with-at-most-two-distinct-characters/) (Premium)
[209. Minimum Size Subarray Sum](https://leetcode.com/problems/minimum-size-subarray-sum/description/)
[424. Longest Repeating Character Replacement](https://leetcode.com/problems/longest-repeating-character-replacement/)
[904. Fruit Into Baskets](https://leetcode.com/problems/fruit-into-baskets/)
[992. Subarrays with K Different Integers](https://leetcode.com/problems/subarrays-with-k-different-integers/)
[1004. Max Consecutive Ones III](https://leetcode.com/problems/max-consecutive-ones-iii/)
[1234. Replace the Substring for Balanced String](https://leetcode.com/problems/replace-the-substring-for-balanced-string/)
[1248. Count Number of Nice Subarrays](https://leetcode.com/problems/count-number-of-nice-subarrays/discuss/419321/JavaPython-3-1-pass-Sliding-Window-O(n)-time-O(1)-space-w-brief-explanation.)
[1838. Frequency of the Most Frequent Element](https://leetcode.com/problems/frequency-of-the-most-frequent-element/discuss/1175081/JavaPython-3-Sort-then-slide-window)
[2398. Maximum Number of Robots Within Budget](https://leetcode.com/problems/maximum-number-of-robots-within-budget/)
[2401. Longest Nice Subarray](https://leetcode.com/problems/longest-nice-subarray/discuss/2527281/JavaPython-3-Sliding-window-w-bit-manipulation.)

