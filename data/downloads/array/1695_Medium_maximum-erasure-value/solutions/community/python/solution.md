# ✅ [C++/Python] Simple Solution w/ Explanation | Sliding Window

**Author:** r0gue_shinobi
**Votes:** 66
**Link:** [https://leetcode.com/problems/maximum-erasure-value/solutions/2140750/](https://leetcode.com/problems/maximum-erasure-value/solutions/2140750/)

---

If you are doing Daily LeetCoding Challenge for June, I highly recommend you look at the problem given on June 10: [3. Longest Substring Without Repeating Characters](https://leetcode.com/problems/longest-substring-without-repeating-characters/). I have already briefly discussed that problem [in this post](https://leetcode.com/problems/longest-substring-without-repeating-characters/discuss/2132954).
But if you are visiting this problem for the first time, I still recommend you to see that problem and try to find a similarity with this one \uD83D\uDE42. Here, we need to maximize the subarray sum instead of the length.
___
___
\u274C **Solution I: Brute-Force [TLE]**

Starting with each index, we can check all subarrays till we find a repeating number. We can use a set to store the numbers we've encountered so far to check for repetition.

```python
class Solution:
    def maximumUniqueSubarray(self, nums: List[int]) -> int:
        max_sum = 0
        seen = set()
        for l in range(len(nums)):
            seen.clear()
            curr_sum = 0
            r = l
            while r < len(nums):
                if nums[r] in seen:
                    break
                curr_sum += nums[r]
                seen.add(nums[r])
                r += 1
            max_sum = max(max_sum, curr_sum)
        return max_sum
```

- **Time Complexity:** `O(n\xB2)`
- **Space Complexity:** `O(1)`
___
\u2705 **Solution II (a): Sliding Window + Set [Accepted]**

If you haven't heard the term "sliding window" before, visit [this link](https://stackoverflow.com/questions/8269916/what-is-sliding-window-algorithm-examples).

The sliding windows approach is a two-pointer approach. Still, I refrained from saying it because I'm not actually using 2 pointers. The left bound of the window is defined by `l` and the right bound by the index of `num`.

**Algorithm:**

1. Create a sliding window: `[nums[l], nums[l + 1], ..., num].`
2. For each number in the `nums` array, we check if this `num` is already present in the window. We can use a set to lookup in `O(1)`.
3. If the number is present in the window, we keep shrinking the window from the left until there's no repetition.
4. We update the set by adding `num` and repeat the above process.

**Example:**
```text
nums = [4,2,1,2,6]
1. Window: [4]; set = {4}; curr_sum = 4; max_sum = 4
2. Window: [4, 2]; set = {4, 2}; curr_sum = 6; max_sum = 6
3. Window: [4, 2, 1]; set = {4, 2, 1}; curr_sum = 7; max_sum = 7
4(a). Window: [2, 1, 2]; set = {2, 1}; curr_sum = 5; max_sum = 7
4(b). Window: [1, 2]; set = {1, 2}; curr_sum = 3; max_sum = 7
5. Window: [1, 2, 6]; set = {1, 2, 6}; curr_sum = 9; max_sum = 9
```

<iframe src="https://leetcode.com/playground/bUc7dtpg/shared" frameBorder="0" width="1080" height="360"></iframe>

- **Time Complexity:** `O(n)`
- **Space Complexity:** `O(k)`, where k is the number of distinct elements. Here, `k = 10\u2074` (See constraints)
___
\u2705 **Solution II (b): Sliding Window + Array [Accepted]**

We create a sliding window whose left bound is defined by `l` and the right bound by `r`. We try to expand this window towards the right so that no number inside is repeated. In the previous approach to know whether `nums[r]` is already inside this window or not, we used a set. But in this case, we are using an array to know by storing the previous index of each element.
How storing the previous index will help?
\u27A1\uFE0F If the previous index of `nums[r]`, i.e., `prev[nums[r]]  >= l`, it means previous `nums[r]` is towards the right of `l`. In other words, inside the current window.

<iframe src="https://leetcode.com/playground/aspW6KyX/shared" frameBorder="0" width="1080" height="350"></iframe>

- **Time Complexity:** `O(n)`
- **Space Complexity:** `O(k)`, where k is the number of distinct elements. Here, `k = 10\u2074` (See constraints)

___
**FAQs:**

1. Why the time complexity for the second approach is `O(n)` instead of `O(n\xB2)`?
\u27A1\uFE0F Don't get confused by looking at the nested loops. Focus on how many elements both the pointers are traversing through. For `r`, it is `n` elements. For `l`, it is `n` in the worst case. So, `O(n) + O(n)` which is effectively `O(n)`.
___
___
If you like the solution, please **upvote**! \uD83D\uDD3C
For any questions, or discussions, comment below. \uD83D\uDC47\uFE0F
