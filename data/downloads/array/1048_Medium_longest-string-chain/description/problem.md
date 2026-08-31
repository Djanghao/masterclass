# [1048. Longest String Chain](https://leetcode.com/problems/longest-string-chain/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 7725 | 268 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`hash-table`](https://leetcode.com/tag/hash-table), [`two-pointers`](https://leetcode.com/tag/two-pointers), [`string`](https://leetcode.com/tag/string), [`dynamic-programming`](https://leetcode.com/tag/dynamic-programming), [`sorting`](https://leetcode.com/tag/sorting)

**Companies:** `google`, `tekion`, `bloomberg`, `facebook`, `microsoft`, `de-shaw`, `paypal`, `citadel`, `atlassian`, `amazon`, `tiktok`, `two-sigma`, `wix`

## Description

You are given an array of `words` where each word consists of lowercase English letters.

`word_A` is a **predecessor** of `word_B` if and only if we can insert **exactly one** letter anywhere in `word_A` **without changing the order of the other characters** to make it equal to `word_B`.

	- For example, `"abc"` is a **predecessor** of `"abac"`, while `"cba"` is not a **predecessor** of `"bcad"`.

A **word chain*** *is a sequence of words `[word_1, word_2, ..., word_k]` with `k >= 1`, where `word_1` is a **predecessor** of `word_2`, `word_2` is a **predecessor** of `word_3`, and so on. A single word is trivially a **word chain** with `k == 1`.

Return *the **length** of the **longest possible word chain** with words chosen from the given list of *`words`.

 

**Example 1:**

```

Input: words = [&quot;a&quot;,&quot;b&quot;,&quot;ba&quot;,&quot;bca&quot;,&quot;bda&quot;,&quot;bdca&quot;]
Output: 4
Explanation: One of the longest word chains is [&quot;a&quot;,&quot;ba&quot;,&quot;bda&quot;,&quot;bdca&quot;].

```

**Example 2:**

```

Input: words = [&quot;xbc&quot;,&quot;pcxbcf&quot;,&quot;xb&quot;,&quot;cxbc&quot;,&quot;pcxbc&quot;]
Output: 5
Explanation: All the words can be put in a word chain [&quot;xb&quot;, &quot;xbc&quot;, &quot;cxbc&quot;, &quot;pcxbc&quot;, &quot;pcxbcf&quot;].

```

**Example 3:**

```

Input: words = [&quot;abcd&quot;,&quot;dbqca&quot;]
Output: 1
Explanation: The trivial word chain [&quot;abcd&quot;] is one of the longest word chains.
[&quot;abcd&quot;,&quot;dbqca&quot;] is not a valid word chain because the ordering of the letters is changed.

```

 

**Constraints:**

	- `1 <= words.length <= 1000`

	- `1 <= words[i].length <= 16`

	- `words[i]` only consists of lowercase English letters.

---

**Links:** [Submissions](https://leetcode.com/problems/longest-string-chain/) | [Solutions](https://leetcode.com/problems/longest-string-chain/)
