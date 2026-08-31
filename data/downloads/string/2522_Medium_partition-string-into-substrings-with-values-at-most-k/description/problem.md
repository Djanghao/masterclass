# [2522. Partition String Into Substrings With Values at Most K](https://leetcode.com/problems/partition-string-into-substrings-with-values-at-most-k/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 390 | 54 |

**Tags:** [`string`](https://leetcode.com/tag/string), [`dynamic-programming`](https://leetcode.com/tag/dynamic-programming), [`greedy`](https://leetcode.com/tag/greedy)


## Description

You are given a string `s` consisting of digits from `1` to `9` and an integer `k`.

A partition of a string `s` is called **good** if:

	- Each digit of `s` is part of **exactly** one substring.

	- The value of each substring is less than or equal to `k`.

Return *the **minimum** number of substrings in a **good** partition of* `s`. If no **good** partition of `s` exists, return `-1`.

Note that:

	- The **value** of a string is its result when interpreted as an integer. For example, the value of `"123"` is `123` and the value of `"1"` is `1`.

	- A **substring** is a contiguous sequence of characters within a string.

 

**Example 1:**

```

Input: s = &quot;165462&quot;, k = 60
Output: 4
Explanation: We can partition the string into substrings &quot;16&quot;, &quot;54&quot;, &quot;6&quot;, and &quot;2&quot;. Each substring has a value less than or equal to k = 60.
It can be shown that we cannot partition the string into less than 4 substrings.

```

**Example 2:**

```

Input: s = &quot;238182&quot;, k = 5
Output: -1
Explanation: There is no good partition for this string.

```

 

**Constraints:**

	- `1 .spoilerbutton {display:block; border:dashed; padding: 0px 0px; margin:10px 0px; font-size:150%; font-weight: bold; color:#000000; background-color:cyan; outline:0; 
}
.spoiler {overflow:hidden;}
.spoiler > div {-webkit-transition: all 0s ease;-moz-transition: margin 0s ease;-o-transition: all 0s ease;transition: margin 0s ease;}
.spoilerbutton[value="Show Message"] + .spoiler > div {margin-top:-500%;}
.spoilerbutton[value="Hide Message"] + .spoiler {padding:5px;}

---

**Links:** [Submissions](https://leetcode.com/problems/partition-string-into-substrings-with-values-at-most-k/) | [Solutions](https://leetcode.com/problems/partition-string-into-substrings-with-values-at-most-k/)
