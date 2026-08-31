# [2452. Words Within Two Edits of Dictionary](https://leetcode.com/problems/words-within-two-edits-of-dictionary/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 322 | 25 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`string`](https://leetcode.com/tag/string), [`trie`](https://leetcode.com/tag/trie)

**Companies:** `google`, `facebook`

## Description

You are given two string arrays, `queries` and `dictionary`. All words in each array comprise of lowercase English letters and have the same length.

In one **edit** you can take a word from `queries`, and change any letter in it to any other letter. Find all words from `queries` that, after a **maximum** of two edits, equal some word from `dictionary`.

Return* a list of all words from *`queries`*, **that match with some word from *`dictionary`* after a maximum of **two edits***. Return the words in the **same order** they appear in `queries`.

 

**Example 1:**

```

Input: queries = [&quot;word&quot;,&quot;note&quot;,&quot;ants&quot;,&quot;wood&quot;], dictionary = [&quot;wood&quot;,&quot;joke&quot;,&quot;moat&quot;]
Output: [&quot;word&quot;,&quot;note&quot;,&quot;wood&quot;]
Explanation:
- Changing the &#39;r&#39; in &quot;word&quot; to &#39;o&#39; allows it to equal the dictionary word &quot;wood&quot;.
- Changing the &#39;n&#39; to &#39;j&#39; and the &#39;t&#39; to &#39;k&#39; in &quot;note&quot; changes it to &quot;joke&quot;.
- It would take more than 2 edits for &quot;ants&quot; to equal a dictionary word.
- &quot;wood&quot; can remain unchanged (0 edits) and match the corresponding dictionary word.
Thus, we return [&quot;word&quot;,&quot;note&quot;,&quot;wood&quot;].

```

**Example 2:**

```

Input: queries = [&quot;yes&quot;], dictionary = [&quot;not&quot;]
Output: []
Explanation:
Applying any two edits to &quot;yes&quot; cannot make it equal to &quot;not&quot;. Thus, we return an empty array.

```

 

**Constraints:**

	- `1 <= queries.length, dictionary.length <= 100`

	- `n == queries[i].length == dictionary[j].length`

	- `1 <= n <= 100`

	- All `queries[i]` and `dictionary[j]` are composed of lowercase English letters.

---

**Links:** [Submissions](https://leetcode.com/problems/words-within-two-edits-of-dictionary/) | [Solutions](https://leetcode.com/problems/words-within-two-edits-of-dictionary/)
