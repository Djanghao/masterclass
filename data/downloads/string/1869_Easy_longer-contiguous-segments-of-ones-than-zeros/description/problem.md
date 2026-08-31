# [1869. Longer Contiguous Segments of Ones than Zeros](https://leetcode.com/problems/longer-contiguous-segments-of-ones-than-zeros/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Easy | 560 | 13 |

**Tags:** [`string`](https://leetcode.com/tag/string)


## Description

Given a binary string `s`, return `true`* if the **longest** contiguous segment of *`1`'*s is **strictly longer** than the **longest** contiguous segment of *`0`'*s in *`s`, or return `false`* otherwise*.

	- For example, in `s = "110100010"` the longest continuous segment of `1`s has length `2`, and the longest continuous segment of `0`s has length `3`.

Note that if there are no `0`'s, then the longest continuous segment of `0`'s is considered to have a length `0`. The same applies if there is no `1`'s.

 

**Example 1:**

```

Input: s = &quot;1101&quot;
Output: true
Explanation:
The longest contiguous segment of 1s has length 2: &quot;1101&quot;
The longest contiguous segment of 0s has length 1: &quot;1101&quot;
The segment of 1s is longer, so return true.

```

**Example 2:**

```

Input: s = &quot;111000&quot;
Output: false
Explanation:
The longest contiguous segment of 1s has length 3: &quot;111000&quot;
The longest contiguous segment of 0s has length 3: &quot;111000&quot;
The segment of 1s is not longer, so return false.

```

**Example 3:**

```

Input: s = &quot;110100010&quot;
Output: false
Explanation:
The longest contiguous segment of 1s has length 2: &quot;110100010&quot;
The longest contiguous segment of 0s has length 3: &quot;110100010&quot;
The segment of 1s is not longer, so return false.

```

 

**Constraints:**

	- `1 <= s.length <= 100`

	- `s[i]` is either `'0'` or `'1'`.

---

**Links:** [Submissions](https://leetcode.com/problems/longer-contiguous-segments-of-ones-than-zeros/) | [Solutions](https://leetcode.com/problems/longer-contiguous-segments-of-ones-than-zeros/)
