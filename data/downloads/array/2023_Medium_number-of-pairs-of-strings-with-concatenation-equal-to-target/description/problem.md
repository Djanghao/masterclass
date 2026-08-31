# [2023. Number of Pairs of Strings With Concatenation Equal to Target](https://leetcode.com/problems/number-of-pairs-of-strings-with-concatenation-equal-to-target/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 747 | 56 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`hash-table`](https://leetcode.com/tag/hash-table), [`string`](https://leetcode.com/tag/string), [`counting`](https://leetcode.com/tag/counting)

**Companies:** `apple`

## Description

Given an array of **digit** strings `nums` and a **digit** string `target`, return *the number of pairs of indices *`(i, j)`* (where *`i != j`*) such that the **concatenation** of *`nums[i] + nums[j]`* equals *`target`.

 

**Example 1:**

```

Input: nums = [&quot;777&quot;,&quot;7&quot;,&quot;77&quot;,&quot;77&quot;], target = &quot;7777&quot;
Output: 4
Explanation: Valid pairs are:
- (0, 1): &quot;777&quot; + &quot;7&quot;
- (1, 0): &quot;7&quot; + &quot;777&quot;
- (2, 3): &quot;77&quot; + &quot;77&quot;
- (3, 2): &quot;77&quot; + &quot;77&quot;

```

**Example 2:**

```

Input: nums = [&quot;123&quot;,&quot;4&quot;,&quot;12&quot;,&quot;34&quot;], target = &quot;1234&quot;
Output: 2
Explanation: Valid pairs are:
- (0, 1): &quot;123&quot; + &quot;4&quot;
- (2, 3): &quot;12&quot; + &quot;34&quot;

```

**Example 3:**

```

Input: nums = [&quot;1&quot;,&quot;1&quot;,&quot;1&quot;], target = &quot;11&quot;
Output: 6
Explanation: Valid pairs are:
- (0, 1): &quot;1&quot; + &quot;1&quot;
- (1, 0): &quot;1&quot; + &quot;1&quot;
- (0, 2): &quot;1&quot; + &quot;1&quot;
- (2, 0): &quot;1&quot; + &quot;1&quot;
- (1, 2): &quot;1&quot; + &quot;1&quot;
- (2, 1): &quot;1&quot; + &quot;1&quot;

```

 

**Constraints:**

	- `2 <= nums.length <= 100`

	- `1 <= nums[i].length <= 100`

	- `2 <= target.length <= 100`

	- `nums[i]` and `target` consist of digits.

	- `nums[i]` and `target` do not have leading zeros.

---

**Links:** [Submissions](https://leetcode.com/problems/number-of-pairs-of-strings-with-concatenation-equal-to-target/) | [Solutions](https://leetcode.com/problems/number-of-pairs-of-strings-with-concatenation-equal-to-target/)
