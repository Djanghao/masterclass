# [127. Word Ladder](https://leetcode.com/problems/word-ladder/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Hard | 13265 | 1956 |

**Tags:** [`hash-table`](https://leetcode.com/tag/hash-table), [`string`](https://leetcode.com/tag/string), [`breadth-first-search`](https://leetcode.com/tag/breadth-first-search)

**Companies:** `amazon`, `facebook`, `linkedin`, `microsoft`, `google`, `oracle`, `bloomberg`, `apple`, `tiktok`, `okta`, `snapchat`, `uber`, `visa`, `salesforce`, `adobe`, `box`, `phonepe`, `the-trade-desk`, `docusign`, `tekion`, `reddit`, `ebay`, `walmart-labs`, `samsung`, `yelp`

## Description

A **transformation sequence** from word `beginWord` to word `endWord` using a dictionary `wordList` is a sequence of words `beginWord -> s_1 -> s_2 -> ... -> s_k` such that:

	- Every adjacent pair of words differs by a single letter.

	- Every `s_i` for `1 <= i <= k` is in `wordList`. Note that `beginWord` does not need to be in `wordList`.

	- `s_k == endWord`

Given two words, `beginWord` and `endWord`, and a dictionary `wordList`, return *the **number of words** in the **shortest transformation sequence** from* `beginWord` *to* `endWord`*, or *`0`* if no such sequence exists.*

 

**Example 1:**

```

Input: beginWord = &quot;hit&quot;, endWord = &quot;cog&quot;, wordList = [&quot;hot&quot;,&quot;dot&quot;,&quot;dog&quot;,&quot;lot&quot;,&quot;log&quot;,&quot;cog&quot;]
Output: 5
Explanation: One shortest transformation sequence is &quot;hit&quot; -&gt; &quot;hot&quot; -&gt; &quot;dot&quot; -&gt; &quot;dog&quot; -&gt; cog&quot;, which is 5 words long.

```

**Example 2:**

```

Input: beginWord = &quot;hit&quot;, endWord = &quot;cog&quot;, wordList = [&quot;hot&quot;,&quot;dot&quot;,&quot;dog&quot;,&quot;lot&quot;,&quot;log&quot;]
Output: 0
Explanation: The endWord &quot;cog&quot; is not in wordList, therefore there is no valid transformation sequence.

```

 

**Constraints:**

	- `1 <= beginWord.length <= 10`

	- `endWord.length == beginWord.length`

	- `1 <= wordList.length <= 5000`

	- `wordList[i].length == beginWord.length`

	- `beginWord`, `endWord`, and `wordList[i]` consist of lowercase English letters.

	- `beginWord != endWord`

	- All the words in `wordList` are **unique**.

---

**Links:** [Submissions](https://leetcode.com/problems/word-ladder/) | [Solutions](https://leetcode.com/problems/word-ladder/)
