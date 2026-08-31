# [2131. Longest Palindrome by Concatenating Two Letter Words](https://leetcode.com/problems/longest-palindrome-by-concatenating-two-letter-words/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 2941 | 79 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`hash-table`](https://leetcode.com/tag/hash-table), [`string`](https://leetcode.com/tag/string), [`greedy`](https://leetcode.com/tag/greedy), [`counting`](https://leetcode.com/tag/counting)

**Companies:** `google`, `facebook`, `microsoft`, `databricks`

## Description

You are given an array of strings `words`. Each element of `words` consists of **two** lowercase English letters.

Create the **longest possible palindrome** by selecting some elements from `words` and concatenating them in **any order**. Each element can be selected **at most once**.

Return *the **length** of the longest palindrome that you can create*. If it is impossible to create any palindrome, return `0`.

A **palindrome** is a string that reads the same forward and backward.

 

**Example 1:**

```

Input: words = [&quot;lc&quot;,&quot;cl&quot;,&quot;gg&quot;]
Output: 6
Explanation: One longest palindrome is &quot;lc&quot; + &quot;gg&quot; + &quot;cl&quot; = &quot;lcggcl&quot;, of length 6.
Note that &quot;clgglc&quot; is another longest palindrome that can be created.

```

**Example 2:**

```

Input: words = [&quot;ab&quot;,&quot;ty&quot;,&quot;yt&quot;,&quot;lc&quot;,&quot;cl&quot;,&quot;ab&quot;]
Output: 8
Explanation: One longest palindrome is &quot;ty&quot; + &quot;lc&quot; + &quot;cl&quot; + &quot;yt&quot; = &quot;tylcclyt&quot;, of length 8.
Note that &quot;lcyttycl&quot; is another longest palindrome that can be created.

```

**Example 3:**

```

Input: words = [&quot;cc&quot;,&quot;ll&quot;,&quot;xx&quot;]
Output: 2
Explanation: One longest palindrome is &quot;cc&quot;, of length 2.
Note that &quot;ll&quot; is another longest palindrome that can be created, and so is &quot;xx&quot;.

```

 

**Constraints:**

	- `1 <= words.length <= 10^5`

	- `words[i].length == 2`

	- `words[i]` consists of lowercase English letters.

---

**Links:** [Submissions](https://leetcode.com/problems/longest-palindrome-by-concatenating-two-letter-words/) | [Solutions](https://leetcode.com/problems/longest-palindrome-by-concatenating-two-letter-words/)
