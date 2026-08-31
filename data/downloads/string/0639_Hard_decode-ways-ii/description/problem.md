# [639. Decode Ways II](https://leetcode.com/problems/decode-ways-ii/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Hard | 1645 | 825 |

**Tags:** [`string`](https://leetcode.com/tag/string), [`dynamic-programming`](https://leetcode.com/tag/dynamic-programming)

**Companies:** `phonepe`, `facebook`

## Description

A message containing letters from `A-Z` can be **encoded** into numbers using the following mapping:

```

&#39;A&#39; -&gt; &quot;1&quot;
&#39;B&#39; -&gt; &quot;2&quot;
...
&#39;Z&#39; -&gt; &quot;26&quot;

```

To **decode** an encoded message, all the digits must be grouped then mapped back into letters using the reverse of the mapping above (there may be multiple ways). For example, `"11106"` can be mapped into:

	- `"AAJF"` with the grouping `(1 1 10 6)`

	- `"KJF"` with the grouping `(11 10 6)`

Note that the grouping `(1 11 06)` is invalid because `"06"` cannot be mapped into `'F'` since `"6"` is different from `"06"`.

**In addition** to the mapping above, an encoded message may contain the `'*'` character, which can represent any digit from `'1'` to `'9'` (`'0'` is excluded). For example, the encoded message `"1*"` may represent any of the encoded messages `"11"`, `"12"`, `"13"`, `"14"`, `"15"`, `"16"`, `"17"`, `"18"`, or `"19"`. Decoding `"1*"` is equivalent to decoding **any** of the encoded messages it can represent.

Given a string `s` consisting of digits and `'*'` characters, return *the **number** of ways to **decode** it*.

Since the answer may be very large, return it **modulo** `10^9 + 7`.

 

**Example 1:**

```

Input: s = &quot;*&quot;
Output: 9
Explanation: The encoded message can represent any of the encoded messages &quot;1&quot;, &quot;2&quot;, &quot;3&quot;, &quot;4&quot;, &quot;5&quot;, &quot;6&quot;, &quot;7&quot;, &quot;8&quot;, or &quot;9&quot;.
Each of these can be decoded to the strings &quot;A&quot;, &quot;B&quot;, &quot;C&quot;, &quot;D&quot;, &quot;E&quot;, &quot;F&quot;, &quot;G&quot;, &quot;H&quot;, and &quot;I&quot; respectively.
Hence, there are a total of 9 ways to decode &quot;*&quot;.

```

**Example 2:**

```

Input: s = &quot;1*&quot;
Output: 18
Explanation: The encoded message can represent any of the encoded messages &quot;11&quot;, &quot;12&quot;, &quot;13&quot;, &quot;14&quot;, &quot;15&quot;, &quot;16&quot;, &quot;17&quot;, &quot;18&quot;, or &quot;19&quot;.
Each of these encoded messages have 2 ways to be decoded (e.g. &quot;11&quot; can be decoded to &quot;AA&quot; or &quot;K&quot;).
Hence, there are a total of 9 * 2 = 18 ways to decode &quot;1*&quot;.

```

**Example 3:**

```

Input: s = &quot;2*&quot;
Output: 15
Explanation: The encoded message can represent any of the encoded messages &quot;21&quot;, &quot;22&quot;, &quot;23&quot;, &quot;24&quot;, &quot;25&quot;, &quot;26&quot;, &quot;27&quot;, &quot;28&quot;, or &quot;29&quot;.
&quot;21&quot;, &quot;22&quot;, &quot;23&quot;, &quot;24&quot;, &quot;25&quot;, and &quot;26&quot; have 2 ways of being decoded, but &quot;27&quot;, &quot;28&quot;, and &quot;29&quot; only have 1 way.
Hence, there are a total of (6 * 2) + (3 * 1) = 12 + 3 = 15 ways to decode &quot;2*&quot;.

```

 

**Constraints:**

	- `1 <= s.length <= 10^5`

	- `s[i]` is a digit or `'*'`.

---

**Links:** [Submissions](https://leetcode.com/problems/decode-ways-ii/) | [Solutions](https://leetcode.com/problems/decode-ways-ii/)
