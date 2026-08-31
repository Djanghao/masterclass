# [1830. Minimum Number of Operations to Make String Sorted](https://leetcode.com/problems/minimum-number-of-operations-to-make-string-sorted/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Hard | 185 | 131 |

**Tags:** [`math`](https://leetcode.com/tag/math), [`string`](https://leetcode.com/tag/string), [`combinatorics`](https://leetcode.com/tag/combinatorics)

**Companies:** `samsung`

## Description

You are given a string `s` (**0-indexed**)​​​​​​. You are asked to perform the following operation on `s`​​​​​​ until you get a sorted string:

	- Find **the largest index** `i` such that `1 <= i < s.length` and `s[i] < s[i - 1]`.

	- Find **the largest index** `j` such that `i <= j < s.length` and `s[k] < s[i - 1]` for all the possible values of `k` in the range `[i, j]` inclusive.

	- Swap the two characters at indices `i - 1`​​​​ and `j`​​​​​.

	- Reverse the suffix starting at index `i`​​​​​​.

Return *the number of operations needed to make the string sorted.* Since the answer can be too large, return it **modulo** `10^9 + 7`.

 

**Example 1:**

```

Input: s = &quot;cba&quot;
Output: 5
Explanation: The simulation goes as follows:
Operation 1: i=2, j=2. Swap s[1] and s[2] to get s=&quot;cab&quot;, then reverse the suffix starting at 2. Now, s=&quot;cab&quot;.
Operation 2: i=1, j=2. Swap s[0] and s[2] to get s=&quot;bac&quot;, then reverse the suffix starting at 1. Now, s=&quot;bca&quot;.
Operation 3: i=2, j=2. Swap s[1] and s[2] to get s=&quot;bac&quot;, then reverse the suffix starting at 2. Now, s=&quot;bac&quot;.
Operation 4: i=1, j=1. Swap s[0] and s[1] to get s=&quot;abc&quot;, then reverse the suffix starting at 1. Now, s=&quot;acb&quot;.
Operation 5: i=2, j=2. Swap s[1] and s[2] to get s=&quot;abc&quot;, then reverse the suffix starting at 2. Now, s=&quot;abc&quot;.

```

**Example 2:**

```

Input: s = &quot;aabaa&quot;
Output: 2
Explanation: The simulation goes as follows:
Operation 1: i=3, j=4. Swap s[2] and s[4] to get s=&quot;aaaab&quot;, then reverse the substring starting at 3. Now, s=&quot;aaaba&quot;.
Operation 2: i=4, j=4. Swap s[3] and s[4] to get s=&quot;aaaab&quot;, then reverse the substring starting at 4. Now, s=&quot;aaaab&quot;.

```

 

**Constraints:**

	- `1 <= s.length <= 3000`

	- `s`​​​​​​ consists only of lowercase English letters.

---

**Links:** [Submissions](https://leetcode.com/problems/minimum-number-of-operations-to-make-string-sorted/) | [Solutions](https://leetcode.com/problems/minimum-number-of-operations-to-make-string-sorted/)
