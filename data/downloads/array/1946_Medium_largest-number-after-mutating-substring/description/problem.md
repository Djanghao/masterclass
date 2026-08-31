# [1946. Largest Number After Mutating Substring](https://leetcode.com/problems/largest-number-after-mutating-substring/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 234 | 232 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`string`](https://leetcode.com/tag/string), [`greedy`](https://leetcode.com/tag/greedy)

**Companies:** `infosys`

## Description

You are given a string `num`, which represents a large integer. You are also given a **0-indexed** integer array `change` of length `10` that maps each digit `0-9` to another digit. More formally, digit `d` maps to digit `change[d]`.

You may **choose** to mutate a single substring of `num`. To mutate a substring, replace each digit `num[i]` with the digit it maps to in `change` (i.e. replace `num[i]` with `change[num[i]]`).

Return *a string representing the **largest** possible integer after **mutating** (or choosing not to) a **single substring** of *`num`.

A **substring** is a contiguous sequence of characters within the string.

 

**Example 1:**

```

Input: num = &quot;132&quot;, change = [9,8,5,0,3,6,4,2,6,8]
Output: &quot;832&quot;
Explanation: Replace the substring &quot;1&quot;:
- 1 maps to change[1] = 8.
Thus, &quot;132&quot; becomes &quot;832&quot;.
&quot;832&quot; is the largest number that can be created, so return it.

```

**Example 2:**

```

Input: num = &quot;021&quot;, change = [9,4,3,5,7,2,1,9,0,6]
Output: &quot;934&quot;
Explanation: Replace the substring &quot;021&quot;:
- 0 maps to change[0] = 9.
- 2 maps to change[2] = 3.
- 1 maps to change[1] = 4.
Thus, &quot;021&quot; becomes &quot;934&quot;.
&quot;934&quot; is the largest number that can be created, so return it.

```

**Example 3:**

```

Input: num = &quot;5&quot;, change = [1,4,7,5,3,2,5,6,9,4]
Output: &quot;5&quot;
Explanation: &quot;5&quot; is already the largest number that can be created, so return it.

```

 

**Constraints:**

	- `1 <= num.length <= 10^5`

	- `num` consists of only digits `0-9`.

	- `change.length == 10`

	- `0 <= change[d] <= 9`

---

**Links:** [Submissions](https://leetcode.com/problems/largest-number-after-mutating-substring/) | [Solutions](https://leetcode.com/problems/largest-number-after-mutating-substring/)
