# [1678. Goal Parser Interpretation](https://leetcode.com/problems/goal-parser-interpretation/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Easy | 1659 | 93 |

**Tags:** [`string`](https://leetcode.com/tag/string)


## Description

You own a **Goal Parser** that can interpret a string `command`. The `command` consists of an alphabet of `"G"`, `"()"` and/or `"(al)"` in some order. The Goal Parser will interpret `"G"` as the string `"G"`, `"()"` as the string `"o"`, and `"(al)"` as the string `"al"`. The interpreted strings are then concatenated in the original order.

Given the string `command`, return *the **Goal Parser**'s interpretation of *`command`.

 

**Example 1:**

```

Input: command = &quot;G()(al)&quot;
Output: &quot;Goal&quot;
Explanation:&nbsp;The Goal Parser interprets the command as follows:
G -&gt; G
() -&gt; o
(al) -&gt; al
The final concatenated result is &quot;Goal&quot;.

```

**Example 2:**

```

Input: command = &quot;G()()()()(al)&quot;
Output: &quot;Gooooal&quot;

```

**Example 3:**

```

Input: command = &quot;(al)G(al)()()G&quot;
Output: &quot;alGalooG&quot;

```

 

**Constraints:**

	- `1 <= command.length <= 100`

	- `command` consists of `"G"`, `"()"`, and/or `"(al)"` in some order.

---

**Links:** [Submissions](https://leetcode.com/problems/goal-parser-interpretation/) | [Solutions](https://leetcode.com/problems/goal-parser-interpretation/)
