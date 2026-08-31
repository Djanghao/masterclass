# [38. Count and Say](https://leetcode.com/problems/count-and-say/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 4998 | 8996 |

**Tags:** [`string`](https://leetcode.com/tag/string)

**Companies:** `bloomberg`, `google`, `amazon`, `zoho`, `lg-electronics`, `veeva`, `facebook`, `microsoft`, `pinterest`, `oracle`, `yahoo`

## Description

The **count-and-say** sequence is a sequence of digit strings defined by the recursive formula:

	- `countAndSay(1) = "1"`

	- `countAndSay(n)` is the run-length encoding of `countAndSay(n - 1)`.

Run-length encoding (RLE) is a string compression method that works by replacing consecutive identical characters (repeated 2 or more times) with the concatenation of the character and the number marking the count of the characters (length of the run). For example, to compress the string `"3322251"` we replace `"33"` with `"23"`, replace `"222"` with `"32"`, replace `"5"` with `"15"` and replace `"1"` with `"11"`. Thus the compressed string becomes `"23321511"`.

Given a positive integer `n`, return *the *`n^th`* element of the **count-and-say** sequence*.

 

**Example 1:**

**Input:** n = 4

**Output:** "1211"

**Explanation:**

```

countAndSay(1) = &quot;1&quot;
countAndSay(2) = RLE of &quot;1&quot; = &quot;11&quot;
countAndSay(3) = RLE of &quot;11&quot; = &quot;21&quot;
countAndSay(4) = RLE of &quot;21&quot; = &quot;1211&quot;

```

**Example 2:**

**Input:** n = 1

**Output:** "1"

**Explanation:**

This is the base case.

 

**Constraints:**

	- `1 <= n <= 30`

 

**Follow up:** Could you solve it iteratively?

---

**Links:** [Submissions](https://leetcode.com/problems/count-and-say/) | [Solutions](https://leetcode.com/problems/count-and-say/)
