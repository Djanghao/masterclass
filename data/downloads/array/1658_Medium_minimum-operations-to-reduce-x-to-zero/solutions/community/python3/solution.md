# ✅ [C++/Python] Simple Solution w/ Explanation | Sliding Window

**Author:** r0gue_shinobi
**Votes:** 206
**Link:** [https://leetcode.com/problems/minimum-operations-to-reduce-x-to-zero/solutions/2136555/](https://leetcode.com/problems/minimum-operations-to-reduce-x-to-zero/solutions/2136555/)

---

Sometimes, converting a problem into some other familiar one helps a lot. This question is one of them.
Let me state a different problem, and your task is to relate how solving this problem will help in solving the actual one.
> Given an array containing integers, your task is to find the length of the longest subarray with a given sum.

If you were able to relate, congratulations! \uD83C\uDF89
And if not, don't worry; it happens with all of us (or maybe use hints \uD83D\uDE09).
Continue reading below to find the solution.
___
___
\u2705 **Solution I - Sliding Window [Accepted]**

We need to make `prefix_sum + suffix_sum = x`. But instead of this, finding a subarray whose sum is `sum(nums) - x` will do the job. Now we only need to maximize the length of this subarray to minimize the length of `prefix + suffix`, which can be done greedily. By doing this, we can get the minimum length, i.e., the minimum number of operations to reduce `x` to exactly `0` (if possible).

If you haven't heard the term "sliding window" before, visit [this link](https://stackoverflow.com/questions/8269916/what-is-sliding-window-algorithm-examples).

1. Let us take a sliding window whose ends are defined by `start_idx` and `end_idx`.
2. If the sum of this sliding window (subarray) exceeds the target, keep reducing the window size (by increasing `start_idx`) until its sum becomes `<= target`.
3. If the sum becomes equal to the target, compare the length, and store if it exceeds the previous length.
4. Return `-1` if the sum of the sliding window never becomes equal to `target`.

<iframe src="https://leetcode.com/playground/PoeSGL3x/shared" frameBorder="0" width="1080" height="450"></iframe>

- **Time Complexity:** `O(n)`
- **Space Complexity:** `O(1)`

___
___
If you like the solution, please **upvote**! \uD83D\uDD3C
For any questions, or discussions, comment below. \uD83D\uDC47\uFE0F
