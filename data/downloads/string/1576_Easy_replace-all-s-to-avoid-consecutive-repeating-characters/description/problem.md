# [1576. Replace All ?'s to Avoid Consecutive Repeating Characters](https://leetcode.com/problems/replace-all-s-to-avoid-consecutive-repeating-characters/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Easy | 594 | 180 |

**Tags:** [`string`](https://leetcode.com/tag/string)

**Companies:** `microsoft`

## Description

Given a string `s` containing only lowercase English letters and the `'?'` character, convert **all **the `'?'` characters into lowercase letters such that the final string does not contain any **consecutive repeating **characters. You **cannot **modify the non `'?'` characters.

It is **guaranteed **that there are no consecutive repeating characters in the given string **except **for `'?'`.

Return *the final string after all the conversions (possibly zero) have been made*. If there is more than one solution, return **any of them**. It can be shown that an answer is always possible with the given constraints.

 

**Example 1:**

```

Input: s = &quot;?zs&quot;
Output: &quot;azs&quot;
Explanation: There are 25 solutions for this problem. From &quot;azs&quot; to &quot;yzs&quot;, all are valid. Only &quot;z&quot; is an invalid modification as the string will consist of consecutive repeating characters in &quot;zzs&quot;.

```

**Example 2:**

```

Input: s = &quot;ubv?w&quot;
Output: &quot;ubvaw&quot;
Explanation: There are 24 solutions for this problem. Only &quot;v&quot; and &quot;w&quot; are invalid modifications as the strings will consist of consecutive repeating characters in &quot;ubvvw&quot; and &quot;ubvww&quot;.

```

 

**Constraints:**

	- `1 <= s.length <= 100`

	- `s` consist of lowercase English letters and `'?'`.

---

**Links:** [Submissions](https://leetcode.com/problems/replace-all-s-to-avoid-consecutive-repeating-characters/) | [Solutions](https://leetcode.com/problems/replace-all-s-to-avoid-consecutive-repeating-characters/)
