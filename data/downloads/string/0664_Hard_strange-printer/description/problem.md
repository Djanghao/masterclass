# [664. Strange Printer](https://leetcode.com/problems/strange-printer/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Hard | 2754 | 288 |

**Tags:** [`string`](https://leetcode.com/tag/string), [`dynamic-programming`](https://leetcode.com/tag/dynamic-programming)

**Companies:** `inmobi`, `amazon`, `google`, `bloomberg`, `uber`, `facebook`, `netease`

## Description

There is a strange printer with the following two special properties:

	- The printer can only print a sequence of **the same character** each time.

	- At each turn, the printer can print new characters starting from and ending at any place and will cover the original existing characters.

Given a string `s`, return *the minimum number of turns the printer needed to print it*.

 

**Example 1:**

```

Input: s = &quot;aaabbb&quot;
Output: 2
Explanation: Print &quot;aaa&quot; first and then print &quot;bbb&quot;.

```

**Example 2:**

```

Input: s = &quot;aba&quot;
Output: 2
Explanation: Print &quot;aaa&quot; first and then print &quot;b&quot; from the second place of the string, which will cover the existing character &#39;a&#39;.

```

 

**Constraints:**

	- `1 <= s.length <= 100`

	- `s` consists of lowercase English letters.

---

**Links:** [Submissions](https://leetcode.com/problems/strange-printer/) | [Solutions](https://leetcode.com/problems/strange-printer/)
