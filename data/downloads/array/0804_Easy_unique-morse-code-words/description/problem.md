# [804. Unique Morse Code Words](https://leetcode.com/problems/unique-morse-code-words/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Easy | 2599 | 1551 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`hash-table`](https://leetcode.com/tag/hash-table), [`string`](https://leetcode.com/tag/string)

**Companies:** `wix`

## Description

International Morse Code defines a standard encoding where each letter is mapped to a series of dots and dashes, as follows:

	- `'a'` maps to `".-"`,

	- `'b'` maps to `"-..."`,

	- `'c'` maps to `"-.-."`, and so on.

For convenience, the full table for the `26` letters of the English alphabet is given below:

```

[&quot;.-&quot;,&quot;-...&quot;,&quot;-.-.&quot;,&quot;-..&quot;,&quot;.&quot;,&quot;..-.&quot;,&quot;--.&quot;,&quot;....&quot;,&quot;..&quot;,&quot;.---&quot;,&quot;-.-&quot;,&quot;.-..&quot;,&quot;--&quot;,&quot;-.&quot;,&quot;---&quot;,&quot;.--.&quot;,&quot;--.-&quot;,&quot;.-.&quot;,&quot;...&quot;,&quot;-&quot;,&quot;..-&quot;,&quot;...-&quot;,&quot;.--&quot;,&quot;-..-&quot;,&quot;-.--&quot;,&quot;--..&quot;]
```

Given an array of strings `words` where each word can be written as a concatenation of the Morse code of each letter.

	- For example, `"cab"` can be written as `"-.-..--..."`, which is the concatenation of `"-.-."`, `".-"`, and `"-..."`. We will call such a concatenation the **transformation** of a word.

Return *the number of different **transformations** among all words we have*.

 

**Example 1:**

```

Input: words = [&quot;gin&quot;,&quot;zen&quot;,&quot;gig&quot;,&quot;msg&quot;]
Output: 2
Explanation: The transformation of each word is:
&quot;gin&quot; -&gt; &quot;--...-.&quot;
&quot;zen&quot; -&gt; &quot;--...-.&quot;
&quot;gig&quot; -&gt; &quot;--...--.&quot;
&quot;msg&quot; -&gt; &quot;--...--.&quot;
There are 2 different transformations: &quot;--...-.&quot; and &quot;--...--.&quot;.

```

**Example 2:**

```

Input: words = [&quot;a&quot;]
Output: 1

```

 

**Constraints:**

	- `1 <= words.length <= 100`

	- `1 <= words[i].length <= 12`

	- `words[i]` consists of lowercase English letters.

---

**Links:** [Submissions](https://leetcode.com/problems/unique-morse-code-words/) | [Solutions](https://leetcode.com/problems/unique-morse-code-words/)
