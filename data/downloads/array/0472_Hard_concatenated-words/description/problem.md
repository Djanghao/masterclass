# [472. Concatenated Words](https://leetcode.com/problems/concatenated-words/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Hard | 4046 | 292 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`string`](https://leetcode.com/tag/string), [`dynamic-programming`](https://leetcode.com/tag/dynamic-programming), [`depth-first-search`](https://leetcode.com/tag/depth-first-search), [`trie`](https://leetcode.com/tag/trie), [`sorting`](https://leetcode.com/tag/sorting)

**Companies:** `amazon`, `salesforce`, `ebay`, `tiktok`

## Description

Given an array of strings `words` (**without duplicates**), return *all the **concatenated words** in the given list of* `words`.

A **concatenated word** is defined as a string that is comprised entirely of at least two shorter words (not necessarily distinct) in the given array.

 

**Example 1:**

```

Input: words = [&quot;cat&quot;,&quot;cats&quot;,&quot;catsdogcats&quot;,&quot;dog&quot;,&quot;dogcatsdog&quot;,&quot;hippopotamuses&quot;,&quot;rat&quot;,&quot;ratcatdogcat&quot;]
Output: [&quot;catsdogcats&quot;,&quot;dogcatsdog&quot;,&quot;ratcatdogcat&quot;]
Explanation: &quot;catsdogcats&quot; can be concatenated by &quot;cats&quot;, &quot;dog&quot; and &quot;cats&quot;; 
&quot;dogcatsdog&quot; can be concatenated by &quot;dog&quot;, &quot;cats&quot; and &quot;dog&quot;; 
&quot;ratcatdogcat&quot; can be concatenated by &quot;rat&quot;, &quot;cat&quot;, &quot;dog&quot; and &quot;cat&quot;.
```

**Example 2:**

```

Input: words = [&quot;cat&quot;,&quot;dog&quot;,&quot;catdog&quot;]
Output: [&quot;catdog&quot;]

```

 

**Constraints:**

	- `1 <= words.length <= 10^4`

	- `1 <= words[i].length <= 30`

	- `words[i]` consists of only lowercase English letters.

	- All the strings of `words` are **unique**.

	- `1 <= sum(words[i].length) <= 10^5`

---

**Links:** [Submissions](https://leetcode.com/problems/concatenated-words/) | [Solutions](https://leetcode.com/problems/concatenated-words/)
