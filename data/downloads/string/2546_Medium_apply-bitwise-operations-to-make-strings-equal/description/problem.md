# [2546. Apply Bitwise Operations to Make Strings Equal](https://leetcode.com/problems/apply-bitwise-operations-to-make-strings-equal/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 261 | 101 |

**Tags:** [`string`](https://leetcode.com/tag/string), [`bit-manipulation`](https://leetcode.com/tag/bit-manipulation)

**Companies:** `sprinklr`

## Description

You are given two **0-indexed binary** strings `s` and `target` of the same length `n`. You can do the following operation on `s` **any** number of times:

	- Choose two **different** indices `i` and `j` where `0 <= i, j < n`.

	- Simultaneously, replace `s[i]` with (`s[i]` **OR** `s[j]`) and `s[j]` with (`s[i]` **XOR** `s[j]`).

For example, if `s = "0110"`, you can choose `i = 0` and `j = 2`, then simultaneously replace `s[0]` with (`s[0]` **OR** `s[2]` = `0` **OR** `1` = `1`), and `s[2]` with (`s[0]` **XOR** `s[2]` = `0` **XOR** `1` = `1`), so we will have `s = "1110"`.

Return `true` *if you can make the string *`s`* equal to *`target`*, or *`false`* otherwise*.

 

**Example 1:**

```

Input: s = &quot;1010&quot;, target = &quot;0110&quot;
Output: true
Explanation: We can do the following operations:
- Choose i = 2 and j = 0. We have now s = &quot;0010&quot;.
- Choose i = 2 and j = 1. We have now s = &quot;0110&quot;.
Since we can make s equal to target, we return true.

```

**Example 2:**

```

Input: s = &quot;11&quot;, target = &quot;00&quot;
Output: false
Explanation: It is not possible to make s equal to target with any number of operations.

```

 

**Constraints:**

	- `n == s.length == target.length`

	- `2 <= n <= 10^5`

	- `s` and `target` consist of only the digits `0` and `1`.

---

**Links:** [Submissions](https://leetcode.com/problems/apply-bitwise-operations-to-make-strings-equal/) | [Solutions](https://leetcode.com/problems/apply-bitwise-operations-to-make-strings-equal/)
