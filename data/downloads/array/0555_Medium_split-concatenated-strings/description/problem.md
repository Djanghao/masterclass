# [555. Split Concatenated Strings](https://leetcode.com/problems/split-concatenated-strings/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 80 | 264 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`string`](https://leetcode.com/tag/string), [`greedy`](https://leetcode.com/tag/greedy)

**Companies:** `alibaba`

## Description

You are given an array of strings `strs`. You could concatenate these strings together into a loop, where for each string, you could choose to reverse it or not. Among all the possible loops

Return *the lexicographically largest string after cutting the loop, which will make the looped string into a regular one*.

Specifically, to find the lexicographically largest string, you need to experience two phases:

	- Concatenate all the strings into a loop, where you can reverse some strings or not and connect them in the same order as given.

	- Cut and make one breakpoint in any place of the loop, which will make the looped string into a regular one starting from the character at the cutpoint.

And your job is to find the lexicographically largest one among all the possible regular strings.

 

**Example 1:**

```

Input: strs = [&quot;abc&quot;,&quot;xyz&quot;]
Output: &quot;zyxcba&quot;
Explanation: You can get the looped string &quot;-abcxyz-&quot;, &quot;-abczyx-&quot;, &quot;-cbaxyz-&quot;, &quot;-cbazyx-&quot;, where &#39;-&#39; represents the looped status. 
The answer string came from the fourth looped one, where you could cut from the middle character &#39;a&#39; and get &quot;zyxcba&quot;.

```

**Example 2:**

```

Input: strs = [&quot;abc&quot;]
Output: &quot;cba&quot;

```

 

**Constraints:**

	- `1 <= strs.length <= 1000`

	- `1 <= strs[i].length <= 1000`

	- `1 <= sum(strs[i].length) <= 1000`

	- `strs[i]` consists of lowercase English letters.

---

**Links:** [Submissions](https://leetcode.com/problems/split-concatenated-strings/) | [Solutions](https://leetcode.com/problems/split-concatenated-strings/)
