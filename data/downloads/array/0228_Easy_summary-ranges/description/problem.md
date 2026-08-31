# [228. Summary Ranges](https://leetcode.com/problems/summary-ranges/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Easy | 4456 | 2362 |

**Tags:** [`array`](https://leetcode.com/tag/array)

**Companies:** `yandex`, `google`, `amazon`, `bloomberg`, `facebook`, `netflix`, `apple`

## Description

You are given a **sorted unique** integer array `nums`.

A **range** `[a,b]` is the set of all integers from `a` to `b` (inclusive).

Return *the **smallest sorted** list of ranges that **cover all the numbers in the array exactly***. That is, each element of `nums` is covered by exactly one of the ranges, and there is no integer `x` such that `x` is in one of the ranges but not in `nums`.

Each range `[a,b]` in the list should be output as:

	- `"a->b"` if `a != b`

	- `"a"` if `a == b`

 

**Example 1:**

```

Input: nums = [0,1,2,4,5,7]
Output: [&quot;0-&gt;2&quot;,&quot;4-&gt;5&quot;,&quot;7&quot;]
Explanation: The ranges are:
[0,2] --&gt; &quot;0-&gt;2&quot;
[4,5] --&gt; &quot;4-&gt;5&quot;
[7,7] --&gt; &quot;7&quot;

```

**Example 2:**

```

Input: nums = [0,2,3,4,6,8,9]
Output: [&quot;0&quot;,&quot;2-&gt;4&quot;,&quot;6&quot;,&quot;8-&gt;9&quot;]
Explanation: The ranges are:
[0,0] --&gt; &quot;0&quot;
[2,4] --&gt; &quot;2-&gt;4&quot;
[6,6] --&gt; &quot;6&quot;
[8,9] --&gt; &quot;8-&gt;9&quot;

```

 

**Constraints:**

	- `0 <= nums.length <= 20`

	- `-2^31 <= nums[i] <= 2^31 - 1`

	- All the values of `nums` are **unique**.

	- `nums` is sorted in ascending order.

---

**Links:** [Submissions](https://leetcode.com/problems/summary-ranges/) | [Solutions](https://leetcode.com/problems/summary-ranges/)
