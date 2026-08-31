# Official Solution

**Link:** [https://leetcode.com/problems/get-equal-substrings-within-budget/solution/](https://leetcode.com/problems/get-equal-substrings-within-budget/solution/)

---

## Solution

---

### Approach: Sliding Window

#### Intuition

We are given two strings, `s` and `t`, of the same length, `N`. In one operation, we can choose an index `i` and convert the character `s[i]` to `t[i]`; the cost of this operation will be `|s[i] - t[i]|`. We can perform as many operations as we want as long as the total cost of all operations is less than or equal to `maxCost`. We need to return the maximum length of a substring in `s` that can be converted to the corresponding substring in `t`.

The naive way to solve this problem is to generate all substrings of `s` and their corresponding substring in `t`. Then, find the cost of converting each substring from `s` to `t`. If the cost is less than `maxCost`, then we can update the maximum length with the current substring length. However, this approach is inefficient as we would need to use nested loops to generate each substring and find the cost, leading to a time complexity of $O(N^3)$.

The key observation here is that we can only apply one operation at a given index of strings `s` and `t`; i.e., we can only convert the character `s[i]` to `t[i]` and not any other index of `t`. If we create a new costs array with the value at the `ith` index as `s[i] - t[i]`, then the problem transforms to finding the maximum subarray with a sum less than or equal to `maxCost`. This is because each index in this new array is the cost of converting the `ith` character in `s` to `t`. Thus, the sum of the subarray is the total cost of converting the substring in `s` to `t`.

This is somewhat similar to the problem [209. Minimum Size Subarray Sum](https://leetcode.com/problems/minimum-size-subarray-sum/) that can be solved using a sliding window. The sliding window pattern is applicable when the problem involves achieving a goal using subarrays or substrings, and individual elements cannot be independently selected. The concept behind the sliding window pattern is to maintain a window that meets the condition by continuously expanding from the right. If the condition ceases to be met, we adjust the window by shrinking it from the left until the condition is met again.

To save space, we can apply the sliding window pattern to track the cost of the substrings instead of creating a separate cost array. We use the variable `start` to track the left end of the window and `i` to track the right end. The condition is when the cost of the current window is less than or equal to the `maxCost`.

We can process `s` using a sliding window. We will keep adding the element on the right to the current cost, `currCost`. If the `currCost` becomes more than the `maxCost`, we will remove the elements from the left end. Then, we can compare the length of the current substring (from the left end `start` to the current index `i`) with the maximum length we have found so far and update the variable `maxLen` accordingly.

!?!../Documents/1208-re/1208_Get_Equal_Substrings_Within_Budget.json:960,720!?! <br>

#### Algorithm

1. Initialize the variables:

    - `maxLen` to `0`'; this will be the maximum length of a substring with a cost less than or equal to `maxCost` we have seen so far.
    - `start` to `0`; this is the left end of the current substring.
    - `currCost` to `0`; this will be the cost of converting the current window substring in `s` to `t`.

2. Iterate over the indices from `0` to `N - 1` and for each index `i`:

    - Add the cost to convert `s[i]` to `t[i]` to the variable `currCost`
    - Keep removing the elements from the left end by decrementing the cost required for the character at index `start` until `currCost` becomes less than or equal to `maxCost`.
    - Compare the length of the current window `i - start + 1` with the `maxLen` and update it accordingly.

3. Return `maxLen`.

#### Implementation

<iframe src="https://leetcode.com/playground/VT832uwv/shared" frameBorder="0" width="100%" height="500" name="VT832uwv"></iframe>

#### Complexity Analysis

Here, $N$ is the length of the strings `s` and `t`.

* Time complexity: $O(N)$

  We will process each index of `s` and `t` at most twice. This is because we iterate over the character while extending the window from the right side, and again while contracting the window from the left end. Therefore, the total time complexity is equal to $O(N)$.

* Space complexity: $O(1)$

  We do not need any extra space apart from some variables, and hence, the space complexity is constant.

---