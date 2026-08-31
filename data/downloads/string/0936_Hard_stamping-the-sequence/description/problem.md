# [936. Stamping The Sequence](https://leetcode.com/problems/stamping-the-sequence/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Hard | 1572 | 222 |

**Tags:** [`string`](https://leetcode.com/tag/string), [`stack`](https://leetcode.com/tag/stack), [`greedy`](https://leetcode.com/tag/greedy), [`queue`](https://leetcode.com/tag/queue)

**Companies:** `morgan-stanley`

## Description

You are given two strings `stamp` and `target`. Initially, there is a string `s` of length `target.length` with all `s[i] == '?'`.

In one turn, you can place `stamp` over `s` and replace every letter in the `s` with the corresponding letter from `stamp`.

	- For example, if `stamp = "abc"` and `target = "abcba"`, then `s` is `"?????"` initially. In one turn you can:

	
		place `stamp` at index `0` of `s` to obtain `"abc??"`,

		- place `stamp` at index `1` of `s` to obtain `"?abc?"`, or

		- place `stamp` at index `2` of `s` to obtain `"??abc"`.

	
	Note that `stamp` must be fully contained in the boundaries of `s` in order to stamp (i.e., you cannot place `stamp` at index `3` of `s`).

We want to convert `s` to `target` using **at most** `10 * target.length` turns.

Return *an array of the index of the left-most letter being stamped at each turn*. If we cannot obtain `target` from `s` within `10 * target.length` turns, return an empty array.

 

**Example 1:**

```

Input: stamp = &quot;abc&quot;, target = &quot;ababc&quot;
Output: [0,2]
Explanation: Initially s = &quot;?????&quot;.
- Place stamp at index 0 to get &quot;abc??&quot;.
- Place stamp at index 2 to get &quot;ababc&quot;.
[1,0,2] would also be accepted as an answer, as well as some other answers.

```

**Example 2:**

```

Input: stamp = &quot;abca&quot;, target = &quot;aabcaca&quot;
Output: [3,0,1]
Explanation: Initially s = &quot;???????&quot;.
- Place stamp at index 3 to get &quot;???abca&quot;.
- Place stamp at index 0 to get &quot;abcabca&quot;.
- Place stamp at index 1 to get &quot;aabcaca&quot;.

```

 

**Constraints:**

	- `1 <= stamp.length <= target.length <= 1000`

	- `stamp` and `target` consist of lowercase English letters.

---

**Links:** [Submissions](https://leetcode.com/problems/stamping-the-sequence/) | [Solutions](https://leetcode.com/problems/stamping-the-sequence/)
