# [139. Word Break](https://leetcode.com/problems/word-break/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 18447 | 887 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`hash-table`](https://leetcode.com/tag/hash-table), [`string`](https://leetcode.com/tag/string), [`dynamic-programming`](https://leetcode.com/tag/dynamic-programming), [`trie`](https://leetcode.com/tag/trie), [`memoization`](https://leetcode.com/tag/memoization)

**Companies:** `amazon`, `microsoft`, `google`, `bloomberg`, `facebook`, `uber`, `oracle`, `walmart-labs`, `tiktok`, `mongodb`, `netflix`, `arista-networks`, `millennium`, `salesforce`, `linkedin`, `grammarly`, `apple`, `nutanix`, `zoho`, `intuit`, `netskope`, `palo-alto-networks`, `tekion`, `cleartrip`, `buyhatke`, `pocket-gems`, `yahoo`, `square`, `coupang`

## Description

Given a string `s` and a dictionary of strings `wordDict`, return `true` if `s` can be segmented into a space-separated sequence of one or more dictionary words.

**Note** that the same word in the dictionary may be reused multiple times in the segmentation.

 

**Example 1:**

```

Input: s = &quot;leetcode&quot;, wordDict = [&quot;leet&quot;,&quot;code&quot;]
Output: true
Explanation: Return true because &quot;leetcode&quot; can be segmented as &quot;leet code&quot;.

```

**Example 2:**

```

Input: s = &quot;applepenapple&quot;, wordDict = [&quot;apple&quot;,&quot;pen&quot;]
Output: true
Explanation: Return true because &quot;applepenapple&quot; can be segmented as &quot;apple pen apple&quot;.
Note that you are allowed to reuse a dictionary word.

```

**Example 3:**

```

Input: s = &quot;catsandog&quot;, wordDict = [&quot;cats&quot;,&quot;dog&quot;,&quot;sand&quot;,&quot;and&quot;,&quot;cat&quot;]
Output: false

```

 

**Constraints:**

	- `1 <= s.length <= 300`

	- `1 <= wordDict.length <= 1000`

	- `1 <= wordDict[i].length <= 20`

	- `s` and `wordDict[i]` consist of only lowercase English letters.

	- All the strings of `wordDict` are **unique**.

---

**Links:** [Submissions](https://leetcode.com/problems/word-break/) | [Solutions](https://leetcode.com/problems/word-break/)
