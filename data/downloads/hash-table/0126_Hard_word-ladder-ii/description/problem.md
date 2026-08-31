# [126. Word Ladder II](https://leetcode.com/problems/word-ladder-ii/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Hard | 6477 | 825 |

**Tags:** [`hash-table`](https://leetcode.com/tag/hash-table), [`string`](https://leetcode.com/tag/string), [`backtracking`](https://leetcode.com/tag/backtracking), [`breadth-first-search`](https://leetcode.com/tag/breadth-first-search)

**Companies:** `facebook`, `lyft`, `microsoft`, `google`, `okta`, `amazon`, `bloomberg`, `linkedin`, `uber`, `apple`, `nutanix`, `citadel`, `tiktok`, `yelp`

## Description

A **transformation sequence** from word `beginWord` to word `endWord` using a dictionary `wordList` is a sequence of words `beginWord -> s_1 -> s_2 -> ... -> s_k` such that:

	- Every adjacent pair of words differs by a single letter.

	- Every `s_i` for `1 <= i <= k` is in `wordList`. Note that `beginWord` does not need to be in `wordList`.

	- `s_k == endWord`

Given two words, `beginWord` and `endWord`, and a dictionary `wordList`, return *all the **shortest transformation sequences** from* `beginWord` *to* `endWord`*, or an empty list if no such sequence exists. Each sequence should be returned as a list of the words *`[beginWord, s_1, s_2, ..., s_k]`.

 

**Example 1:**

```

Input: beginWord = &quot;hit&quot;, endWord = &quot;cog&quot;, wordList = [&quot;hot&quot;,&quot;dot&quot;,&quot;dog&quot;,&quot;lot&quot;,&quot;log&quot;,&quot;cog&quot;]
Output: [[&quot;hit&quot;,&quot;hot&quot;,&quot;dot&quot;,&quot;dog&quot;,&quot;cog&quot;],[&quot;hit&quot;,&quot;hot&quot;,&quot;lot&quot;,&quot;log&quot;,&quot;cog&quot;]]
Explanation:&nbsp;There are 2 shortest transformation sequences:
&quot;hit&quot; -&gt; &quot;hot&quot; -&gt; &quot;dot&quot; -&gt; &quot;dog&quot; -&gt; &quot;cog&quot;
&quot;hit&quot; -&gt; &quot;hot&quot; -&gt; &quot;lot&quot; -&gt; &quot;log&quot; -&gt; &quot;cog&quot;

```

**Example 2:**

```

Input: beginWord = &quot;hit&quot;, endWord = &quot;cog&quot;, wordList = [&quot;hot&quot;,&quot;dot&quot;,&quot;dog&quot;,&quot;lot&quot;,&quot;log&quot;]
Output: []
Explanation: The endWord &quot;cog&quot; is not in wordList, therefore there is no valid transformation sequence.

```

 

**Constraints:**

	- `1 <= beginWord.length <= 5`

	- `endWord.length == beginWord.length`

	- `1 <= wordList.length <= 500`

	- `wordList[i].length == beginWord.length`

	- `beginWord`, `endWord`, and `wordList[i]` consist of lowercase English letters.

	- `beginWord != endWord`

	- All the words in `wordList` are **unique**.

	- The **sum** of all shortest transformation sequences does not exceed `10^5`.

---

**Links:** [Submissions](https://leetcode.com/problems/word-ladder-ii/) | [Solutions](https://leetcode.com/problems/word-ladder-ii/)
