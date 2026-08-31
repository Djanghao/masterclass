# [1419. Minimum Number of Frogs Croaking](https://leetcode.com/problems/minimum-number-of-frogs-croaking/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 1113 | 95 |

**Tags:** [`string`](https://leetcode.com/tag/string), [`counting`](https://leetcode.com/tag/counting)

**Companies:** `roblox`, `zoox`

## Description

You are given the string `croakOfFrogs`, which represents a combination of the string `"croak"` from different frogs, that is, multiple frogs can croak at the same time, so multiple `"croak"` are mixed.

*Return the minimum number of *different* frogs to finish all the croaks in the given string.*

A valid `"croak"` means a frog is printing five letters `'c'`, `'r'`, `'o'`, `'a'`, and `'k'` **sequentially**. The frogs have to print all five letters to finish a croak. If the given string is not a combination of a valid `"croak"` return `-1`.

 

**Example 1:**

```

Input: croakOfFrogs = &quot;croakcroak&quot;
Output: 1 
Explanation: One frog yelling &quot;croak&quot; twice.

```

**Example 2:**

```

Input: croakOfFrogs = &quot;crcoakroak&quot;
Output: 2 
Explanation: The minimum number of frogs is two. 
The first frog could yell &quot;crcoakroak&quot;.
The second frog could yell later &quot;crcoakroak&quot;.

```

**Example 3:**

```

Input: croakOfFrogs = &quot;croakcrook&quot;
Output: -1
Explanation: The given string is an invalid combination of &quot;croak&quot; from different frogs.

```

 

**Constraints:**

	- `1 <= croakOfFrogs.length <= 10^5`

	- `croakOfFrogs` is either `'c'`, `'r'`, `'o'`, `'a'`, or `'k'`.

---

**Links:** [Submissions](https://leetcode.com/problems/minimum-number-of-frogs-croaking/) | [Solutions](https://leetcode.com/problems/minimum-number-of-frogs-croaking/)
