# [2060. Check if an Original String Exists Given Two Encoded Strings](https://leetcode.com/problems/check-if-an-original-string-exists-given-two-encoded-strings/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Hard | 325 | 160 |

**Tags:** [`string`](https://leetcode.com/tag/string), [`dynamic-programming`](https://leetcode.com/tag/dynamic-programming)

**Companies:** `facebook`, `bitgo`

## Description

An original string, consisting of lowercase English letters, can be encoded by the following steps:

	- Arbitrarily **split** it into a **sequence** of some number of **non-empty** substrings.

	- Arbitrarily choose some elements (possibly none) of the sequence, and **replace** each with **its length** (as a numeric string).

	- **Concatenate** the sequence as the encoded string.

For example, **one way** to encode an original string `"abcdefghijklmnop"` might be:

	- Split it as a sequence: `["ab", "cdefghijklmn", "o", "p"]`.

	- Choose the second and third elements to be replaced by their lengths, respectively. The sequence becomes `["ab", "12", "1", "p"]`.

	- Concatenate the elements of the sequence to get the encoded string: `"ab121p"`.

Given two encoded strings `s1` and `s2`, consisting of lowercase English letters and digits `1-9` (inclusive), return `true`* if there exists an original string that could be encoded as **both** *`s1`* and *`s2`*. Otherwise, return *`false`.

**Note**: The test cases are generated such that the number of consecutive digits in `s1` and `s2` does not exceed `3`.

 

**Example 1:**

```

Input: s1 = &quot;internationalization&quot;, s2 = &quot;i18n&quot;
Output: true
Explanation: It is possible that &quot;internationalization&quot; was the original string.
- &quot;internationalization&quot; 
  -&gt; Split:       [&quot;internationalization&quot;]
  -&gt; Do not replace any element
  -&gt; Concatenate:  &quot;internationalization&quot;, which is s1.
- &quot;internationalization&quot;
  -&gt; Split:       [&quot;i&quot;, &quot;nternationalizatio&quot;, &quot;n&quot;]
  -&gt; Replace:     [&quot;i&quot;, &quot;18&quot;,                 &quot;n&quot;]
  -&gt; Concatenate:  &quot;i18n&quot;, which is s2

```

**Example 2:**

```

Input: s1 = &quot;l123e&quot;, s2 = &quot;44&quot;
Output: true
Explanation: It is possible that &quot;leetcode&quot; was the original string.
- &quot;leetcode&quot; 
  -&gt; Split:      [&quot;l&quot;, &quot;e&quot;, &quot;et&quot;, &quot;cod&quot;, &quot;e&quot;]
  -&gt; Replace:    [&quot;l&quot;, &quot;1&quot;, &quot;2&quot;,  &quot;3&quot;,   &quot;e&quot;]
  -&gt; Concatenate: &quot;l123e&quot;, which is s1.
- &quot;leetcode&quot; 
  -&gt; Split:      [&quot;leet&quot;, &quot;code&quot;]
  -&gt; Replace:    [&quot;4&quot;,    &quot;4&quot;]
  -&gt; Concatenate: &quot;44&quot;, which is s2.

```

**Example 3:**

```

Input: s1 = &quot;a5b&quot;, s2 = &quot;c5b&quot;
Output: false
Explanation: It is impossible.
- The original string encoded as s1 must start with the letter &#39;a&#39;.
- The original string encoded as s2 must start with the letter &#39;c&#39;.

```

 

**Constraints:**

	- `1 <= s1.length, s2.length <= 40`

	- `s1` and `s2` consist of digits `1-9` (inclusive), and lowercase English letters only.

	- The number of consecutive digits in `s1` and `s2` does not exceed `3`.

---

**Links:** [Submissions](https://leetcode.com/problems/check-if-an-original-string-exists-given-two-encoded-strings/) | [Solutions](https://leetcode.com/problems/check-if-an-original-string-exists-given-two-encoded-strings/)
