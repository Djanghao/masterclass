# [2343. Query Kth Smallest Trimmed Number](https://leetcode.com/problems/query-kth-smallest-trimmed-number/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 341 | 442 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`string`](https://leetcode.com/tag/string), [`divide-and-conquer`](https://leetcode.com/tag/divide-and-conquer), [`sorting`](https://leetcode.com/tag/sorting), [`heap-priority-queue`](https://leetcode.com/tag/heap-priority-queue), [`radix-sort`](https://leetcode.com/tag/radix-sort), [`quickselect`](https://leetcode.com/tag/quickselect)

**Companies:** `de-shaw`

## Description

You are given a **0-indexed** array of strings `nums`, where each string is of **equal length** and consists of only digits.

You are also given a **0-indexed** 2D integer array `queries` where `queries[i] = [k_i, trim_i]`. For each `queries[i]`, you need to:

	- **Trim** each number in `nums` to its **rightmost** `trim_i` digits.

	- Determine the **index** of the `k_i^th` smallest trimmed number in `nums`. If two trimmed numbers are equal, the number with the **lower** index is considered to be smaller.

	- Reset each number in `nums` to its original length.

Return *an array *`answer`* of the same length as *`queries`,* where *`answer[i]`* is the answer to the *`i^th`* query.*

**Note**:

	- To trim to the rightmost `x` digits means to keep removing the leftmost digit, until only `x` digits remain.

	- Strings in `nums` may contain leading zeros.

 

**Example 1:**

```

Input: nums = [&quot;102&quot;,&quot;473&quot;,&quot;251&quot;,&quot;814&quot;], queries = [[1,1],[2,3],[4,2],[1,2]]
Output: [2,2,1,0]
Explanation:
1. After trimming to the last digit, nums = [&quot;2&quot;,&quot;3&quot;,&quot;1&quot;,&quot;4&quot;]. The smallest number is 1 at index 2.
2. Trimmed to the last 3 digits, nums is unchanged. The 2nd smallest number is 251 at index 2.
3. Trimmed to the last 2 digits, nums = [&quot;02&quot;,&quot;73&quot;,&quot;51&quot;,&quot;14&quot;]. The 4th smallest number is 73.
4. Trimmed to the last 2 digits, the smallest number is 2 at index 0.
   Note that the trimmed number &quot;02&quot; is evaluated as 2.

```

**Example 2:**

```

Input: nums = [&quot;24&quot;,&quot;37&quot;,&quot;96&quot;,&quot;04&quot;], queries = [[2,1],[2,2]]
Output: [3,0]
Explanation:
1. Trimmed to the last digit, nums = [&quot;4&quot;,&quot;7&quot;,&quot;6&quot;,&quot;4&quot;]. The 2nd smallest number is 4 at index 3.
   There are two occurrences of 4, but the one at index 0 is considered smaller than the one at index 3.
2. Trimmed to the last 2 digits, nums is unchanged. The 2nd smallest number is 24.

```

 

**Constraints:**

	- `1 <= nums.length <= 100`

	- `1 <= nums[i].length <= 100`

	- `nums[i]` consists of only digits.

	- All `nums[i].length` are **equal**.

	- `1 <= queries.length <= 100`

	- `queries[i].length == 2`

	- `1 <= k_i <= nums.length`

	- `1 <= trim_i <= nums[i].length`

 

**Follow up:** Could you use the **Radix Sort Algorithm** to solve this problem? What will be the complexity of that solution?

---

**Links:** [Submissions](https://leetcode.com/problems/query-kth-smallest-trimmed-number/) | [Solutions](https://leetcode.com/problems/query-kth-smallest-trimmed-number/)
