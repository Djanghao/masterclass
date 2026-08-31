# [1147. Longest Chunked Palindrome Decomposition](https://leetcode.com/problems/longest-chunked-palindrome-decomposition/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Hard | 703 | 35 |

**Tags:** [`two-pointers`](https://leetcode.com/tag/two-pointers), [`string`](https://leetcode.com/tag/string), [`dynamic-programming`](https://leetcode.com/tag/dynamic-programming), [`greedy`](https://leetcode.com/tag/greedy), [`rolling-hash`](https://leetcode.com/tag/rolling-hash), [`hash-function`](https://leetcode.com/tag/hash-function)

**Companies:** `google`

## Description

You are given a string `text`. You should split it to k substrings `(subtext_1, subtext_2, ..., subtext_k)` such that:

	- `subtext_i` is a **non-empty** string.

	- The concatenation of all the substrings is equal to `text` (i.e., `subtext_1 + subtext_2 + ... + subtext_k == text`).

	- `subtext_i == subtext_k - i + 1` for all valid values of `i` (i.e., `1 <= i <= k`).

Return the largest possible value of `k`.

 

**Example 1:**

```

Input: text = &quot;ghiabcdefhelloadamhelloabcdefghi&quot;
Output: 7
Explanation: We can split the string on &quot;(ghi)(abcdef)(hello)(adam)(hello)(abcdef)(ghi)&quot;.

```

**Example 2:**

```

Input: text = &quot;merchant&quot;
Output: 1
Explanation: We can split the string on &quot;(merchant)&quot;.

```

**Example 3:**

```

Input: text = &quot;antaprezatepzapreanta&quot;
Output: 11
Explanation: We can split the string on &quot;(a)(nt)(a)(pre)(za)(tep)(za)(pre)(a)(nt)(a)&quot;.

```

 

**Constraints:**

	- `1 <= text.length <= 1000`

	- `text` consists only of lowercase English characters.

---

**Links:** [Submissions](https://leetcode.com/problems/longest-chunked-palindrome-decomposition/) | [Solutions](https://leetcode.com/problems/longest-chunked-palindrome-decomposition/)
