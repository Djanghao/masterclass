# [1625. Lexicographically Smallest String After Applying Operations](https://leetcode.com/problems/lexicographically-smallest-string-after-applying-operations/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 685 | 320 |

**Tags:** [`string`](https://leetcode.com/tag/string), [`depth-first-search`](https://leetcode.com/tag/depth-first-search), [`breadth-first-search`](https://leetcode.com/tag/breadth-first-search), [`enumeration`](https://leetcode.com/tag/enumeration)

**Companies:** `amazon`, `jpmorgan`

## Description

You are given a string `s` of **even length** consisting of digits from `0` to `9`, and two integers `a` and `b`.

You can apply either of the following two operations any number of times and in any order on `s`:

	- Add `a` to all odd indices of `s` **(0-indexed)**. Digits post `9` are cycled back to `0`. For example, if `s = "3456"` and `a = 5`, `s` becomes `"3951"`.

	- Rotate `s` to the right by `b` positions. For example, if `s = "3456"` and `b = 1`, `s` becomes `"6345"`.

Return *the **lexicographically smallest** string you can obtain by applying the above operations any number of times on* `s`.

A string `a` is lexicographically smaller than a string `b` (of the same length) if in the first position where `a` and `b` differ, string `a` has a letter that appears earlier in the alphabet than the corresponding letter in `b`. For example, `"0158"` is lexicographically smaller than `"0190"` because the first position they differ is at the third letter, and `'5'` comes before `'9'`.

 

**Example 1:**

```

Input: s = &quot;5525&quot;, a = 9, b = 2
Output: &quot;2050&quot;
Explanation: We can apply the following operations:
Start:  &quot;5525&quot;
Rotate: &quot;2555&quot;
Add:    &quot;2454&quot;
Add:    &quot;2353&quot;
Rotate: &quot;5323&quot;
Add:    &quot;5222&quot;
Add:    &quot;5121&quot;
Rotate: &quot;2151&quot;
Add:    &quot;2050&quot;​​​​​
There is no way to obtain a string that is lexicographically smaller than &quot;2050&quot;.

```

**Example 2:**

```

Input: s = &quot;74&quot;, a = 5, b = 1
Output: &quot;24&quot;
Explanation: We can apply the following operations:
Start:  &quot;74&quot;
Rotate: &quot;47&quot;
​​​​​​​Add:    &quot;42&quot;
​​​​​​​Rotate: &quot;24&quot;​​​​​​​​​​​​
There is no way to obtain a string that is lexicographically smaller than &quot;24&quot;.

```

**Example 3:**

```

Input: s = &quot;0011&quot;, a = 4, b = 2
Output: &quot;0011&quot;
Explanation: There are no sequence of operations that will give us a lexicographically smaller string than &quot;0011&quot;.

```

 

**Constraints:**

	- `2 <= s.length <= 100`

	- `s.length` is even.

	- `s` consists of digits from `0` to `9` only.

	- `1 <= a <= 9`

	- `1 <= b <= s.length - 1`

---

**Links:** [Submissions](https://leetcode.com/problems/lexicographically-smallest-string-after-applying-operations/) | [Solutions](https://leetcode.com/problems/lexicographically-smallest-string-after-applying-operations/)
