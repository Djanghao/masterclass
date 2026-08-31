# [1985. Find the Kth Largest Integer in the Array](https://leetcode.com/problems/find-the-kth-largest-integer-in-the-array/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 1353 | 160 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`string`](https://leetcode.com/tag/string), [`divide-and-conquer`](https://leetcode.com/tag/divide-and-conquer), [`sorting`](https://leetcode.com/tag/sorting), [`heap-priority-queue`](https://leetcode.com/tag/heap-priority-queue), [`quickselect`](https://leetcode.com/tag/quickselect)

**Companies:** `facebook`

## Description

You are given an array of strings `nums` and an integer `k`. Each string in `nums` represents an integer without leading zeros.

Return *the string that represents the *`k^th`*** largest integer** in *`nums`.

**Note**: Duplicate numbers should be counted distinctly. For example, if `nums` is `["1","2","2"]`, `"2"` is the first largest integer, `"2"` is the second-largest integer, and `"1"` is the third-largest integer.

 

**Example 1:**

```

Input: nums = [&quot;3&quot;,&quot;6&quot;,&quot;7&quot;,&quot;10&quot;], k = 4
Output: &quot;3&quot;
Explanation:
The numbers in nums sorted in non-decreasing order are [&quot;3&quot;,&quot;6&quot;,&quot;7&quot;,&quot;10&quot;].
The 4th largest integer in nums is &quot;3&quot;.

```

**Example 2:**

```

Input: nums = [&quot;2&quot;,&quot;21&quot;,&quot;12&quot;,&quot;1&quot;], k = 3
Output: &quot;2&quot;
Explanation:
The numbers in nums sorted in non-decreasing order are [&quot;1&quot;,&quot;2&quot;,&quot;12&quot;,&quot;21&quot;].
The 3rd largest integer in nums is &quot;2&quot;.

```

**Example 3:**

```

Input: nums = [&quot;0&quot;,&quot;0&quot;], k = 2
Output: &quot;0&quot;
Explanation:
The numbers in nums sorted in non-decreasing order are [&quot;0&quot;,&quot;0&quot;].
The 2nd largest integer in nums is &quot;0&quot;.

```

 

**Constraints:**

	- `1 <= k <= nums.length <= 10^4`

	- `1 <= nums[i].length <= 100`

	- `nums[i]` consists of only digits.

	- `nums[i]` will not have any leading zeros.

---

**Links:** [Submissions](https://leetcode.com/problems/find-the-kth-largest-integer-in-the-array/) | [Solutions](https://leetcode.com/problems/find-the-kth-largest-integer-in-the-array/)
