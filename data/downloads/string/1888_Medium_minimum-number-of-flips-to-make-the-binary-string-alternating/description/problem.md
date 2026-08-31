# [1888. Minimum Number of Flips to Make the Binary String Alternating](https://leetcode.com/problems/minimum-number-of-flips-to-make-the-binary-string-alternating/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 1284 | 83 |

**Tags:** [`string`](https://leetcode.com/tag/string), [`dynamic-programming`](https://leetcode.com/tag/dynamic-programming), [`sliding-window`](https://leetcode.com/tag/sliding-window)

**Companies:** `google`, `ibm`

## Description

You are given a binary string `s`. You are allowed to perform two types of operations on the string in any sequence:

	- **Type-1: Remove** the character at the start of the string `s` and **append** it to the end of the string.

	- **Type-2: Pick** any character in `s` and **flip** its value, i.e., if its value is `'0'` it becomes `'1'` and vice-versa.

Return *the **minimum** number of **type-2** operations you need to perform* *such that *`s` *becomes **alternating**.*

The string is called **alternating** if no two adjacent characters are equal.

	- For example, the strings `"010"` and `"1010"` are alternating, while the string `"0100"` is not.

 

**Example 1:**

```

Input: s = &quot;111000&quot;
Output: 2
Explanation: Use the first operation two times to make s = &quot;100011&quot;.
Then, use the second operation on the third and sixth elements to make s = &quot;101010&quot;.

```

**Example 2:**

```

Input: s = &quot;010&quot;
Output: 0
Explanation: The string is already alternating.

```

**Example 3:**

```

Input: s = &quot;1110&quot;
Output: 1
Explanation: Use the second operation on the second element to make s = &quot;1010&quot;.

```

 

**Constraints:**

	- `1 <= s.length <= 10^5`

	- `s[i]` is either `'0'` or `'1'`.

---

**Links:** [Submissions](https://leetcode.com/problems/minimum-number-of-flips-to-make-the-binary-string-alternating/) | [Solutions](https://leetcode.com/problems/minimum-number-of-flips-to-make-the-binary-string-alternating/)
