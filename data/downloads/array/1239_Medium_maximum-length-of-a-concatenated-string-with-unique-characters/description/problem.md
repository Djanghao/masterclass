# [1239. Maximum Length of a Concatenated String with Unique Characters](https://leetcode.com/problems/maximum-length-of-a-concatenated-string-with-unique-characters/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 4544 | 338 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`string`](https://leetcode.com/tag/string), [`backtracking`](https://leetcode.com/tag/backtracking), [`bit-manipulation`](https://leetcode.com/tag/bit-manipulation)

**Companies:** `facebook`, `groww`, `amazon`, `microsoft`, `adobe`

## Description

You are given an array of strings `arr`. A string `s` is formed by the **concatenation** of a **subsequence** of `arr` that has **unique characters**.

Return *the **maximum** possible length* of `s`.

A **subsequence** is an array that can be derived from another array by deleting some or no elements without changing the order of the remaining elements.

 

**Example 1:**

```

Input: arr = [&quot;un&quot;,&quot;iq&quot;,&quot;ue&quot;]
Output: 4
Explanation: All the valid concatenations are:
- &quot;&quot;
- &quot;un&quot;
- &quot;iq&quot;
- &quot;ue&quot;
- &quot;uniq&quot; (&quot;un&quot; + &quot;iq&quot;)
- &quot;ique&quot; (&quot;iq&quot; + &quot;ue&quot;)
Maximum length is 4.

```

**Example 2:**

```

Input: arr = [&quot;cha&quot;,&quot;r&quot;,&quot;act&quot;,&quot;ers&quot;]
Output: 6
Explanation: Possible longest valid concatenations are &quot;chaers&quot; (&quot;cha&quot; + &quot;ers&quot;) and &quot;acters&quot; (&quot;act&quot; + &quot;ers&quot;).

```

**Example 3:**

```

Input: arr = [&quot;abcdefghijklmnopqrstuvwxyz&quot;]
Output: 26
Explanation: The only string in arr has all 26 characters.

```

 

**Constraints:**

	- `1 <= arr.length <= 16`

	- `1 <= arr[i].length <= 26`

	- `arr[i]` contains only lowercase English letters.

---

**Links:** [Submissions](https://leetcode.com/problems/maximum-length-of-a-concatenated-string-with-unique-characters/) | [Solutions](https://leetcode.com/problems/maximum-length-of-a-concatenated-string-with-unique-characters/)
