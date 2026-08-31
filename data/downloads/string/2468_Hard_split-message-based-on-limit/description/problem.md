# [2468. Split Message Based on Limit](https://leetcode.com/problems/split-message-based-on-limit/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Hard | 193 | 199 |

**Tags:** [`string`](https://leetcode.com/tag/string), [`binary-search`](https://leetcode.com/tag/binary-search), [`enumeration`](https://leetcode.com/tag/enumeration)

**Companies:** `faire`, `uber`, `tiktok`, `capital-one`, `databricks`, `roblox`

## Description

You are given a string, `message`, and a positive integer, `limit`.

You must **split** `message` into one or more **parts** based on `limit`. Each resulting part should have the suffix `""`, where `"b"` is to be **replaced** with the total number of parts and `"a"` is to be **replaced** with the index of the part, starting from `1` and going up to `b`. Additionally, the length of each resulting part (including its suffix) should be **equal** to `limit`, except for the last part whose length can be **at most** `limit`.

The resulting parts should be formed such that when their suffixes are removed and they are all concatenated **in order**, they should be equal to `message`. Also, the result should contain as few parts as possible.

Return* the parts *`message`* would be split into as an array of strings*. If it is impossible to split `message` as required, return* an empty array*.

 

**Example 1:**

```

Input: message = &quot;this is really a very awesome message&quot;, limit = 9
Output: [&quot;thi&lt;1/14&gt;&quot;,&quot;s i&lt;2/14&gt;&quot;,&quot;s r&lt;3/14&gt;&quot;,&quot;eal&lt;4/14&gt;&quot;,&quot;ly &lt;5/14&gt;&quot;,&quot;a v&lt;6/14&gt;&quot;,&quot;ery&lt;7/14&gt;&quot;,&quot; aw&lt;8/14&gt;&quot;,&quot;eso&lt;9/14&gt;&quot;,&quot;me&lt;10/14&gt;&quot;,&quot; m&lt;11/14&gt;&quot;,&quot;es&lt;12/14&gt;&quot;,&quot;sa&lt;13/14&gt;&quot;,&quot;ge&lt;14/14&gt;&quot;]
Explanation:
The first 9 parts take 3 characters each from the beginning of message.
The next 5 parts take 2 characters each to finish splitting message. 
In this example, each part, including the last, has length 9. 
It can be shown it is not possible to split message into less than 14 parts.

```

**Example 2:**

```

Input: message = &quot;short message&quot;, limit = 15
Output: [&quot;short mess&lt;1/2&gt;&quot;,&quot;age&lt;2/2&gt;&quot;]
Explanation:
Under the given constraints, the string can be split into two parts: 
- The first part comprises of the first 10 characters, and has a length 15.
- The next part comprises of the last 3 characters, and has a length 8.

```

 

**Constraints:**

	- `1 <= message.length <= 10^4`

	- `message` consists only of lowercase English letters and `' '`.

	- `1 <= limit <= 10^4`

---

**Links:** [Submissions](https://leetcode.com/problems/split-message-based-on-limit/) | [Solutions](https://leetcode.com/problems/split-message-based-on-limit/)
