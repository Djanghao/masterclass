# [1520. Maximum Number of Non-Overlapping Substrings](https://leetcode.com/problems/maximum-number-of-non-overlapping-substrings/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Hard | 876 | 86 |

**Tags:** [`string`](https://leetcode.com/tag/string), [`greedy`](https://leetcode.com/tag/greedy)

**Companies:** `amazon`

## Description

Given a string `s` of lowercase letters, you need to find the maximum number of **non-empty** substrings of `s` that meet the following conditions:

	- The substrings do not overlap, that is for any two substrings `s[i..j]` and `s[x..y]`, either `j  y` is true.

	- A substring that contains a certain character `c` must also contain all occurrences of `c`.

Find *the maximum number of substrings that meet the above conditions*. If there are multiple solutions with the same number of substrings, *return the one with minimum total length. *It can be shown that there exists a unique solution of minimum total length.

Notice that you can return the substrings in **any** order.

 

**Example 1:**

```

Input: s = &quot;adefaddaccc&quot;
Output: [&quot;e&quot;,&quot;f&quot;,&quot;ccc&quot;]
Explanation:&nbsp;The following are all the possible substrings that meet the conditions:
[
&nbsp; &quot;adefaddaccc&quot;
&nbsp; &quot;adefadda&quot;,
&nbsp; &quot;ef&quot;,
&nbsp; &quot;e&quot;,
  &quot;f&quot;,
&nbsp; &quot;ccc&quot;,
]
If we choose the first string, we cannot choose anything else and we&#39;d get only 1. If we choose &quot;adefadda&quot;, we are left with &quot;ccc&quot; which is the only one that doesn&#39;t overlap, thus obtaining 2 substrings. Notice also, that it&#39;s not optimal to choose &quot;ef&quot; since it can be split into two. Therefore, the optimal way is to choose [&quot;e&quot;,&quot;f&quot;,&quot;ccc&quot;] which gives us 3 substrings. No other solution of the same number of substrings exist.

```

**Example 2:**

```

Input: s = &quot;abbaccd&quot;
Output: [&quot;d&quot;,&quot;bb&quot;,&quot;cc&quot;]
Explanation: Notice that while the set of substrings [&quot;d&quot;,&quot;abba&quot;,&quot;cc&quot;] also has length 3, it&#39;s considered incorrect since it has larger total length.

```

 

**Constraints:**

	- `1 <= s.length <= 10^5`

	- `s` contains only lowercase English letters.

---

**Links:** [Submissions](https://leetcode.com/problems/maximum-number-of-non-overlapping-substrings/) | [Solutions](https://leetcode.com/problems/maximum-number-of-non-overlapping-substrings/)
