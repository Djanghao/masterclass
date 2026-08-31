# [692. Top K Frequent Words](https://leetcode.com/problems/top-k-frequent-words/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 7948 | 371 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`hash-table`](https://leetcode.com/tag/hash-table), [`string`](https://leetcode.com/tag/string), [`trie`](https://leetcode.com/tag/trie), [`sorting`](https://leetcode.com/tag/sorting), [`heap-priority-queue`](https://leetcode.com/tag/heap-priority-queue), [`bucket-sort`](https://leetcode.com/tag/bucket-sort), [`counting`](https://leetcode.com/tag/counting)

**Companies:** `google`, `bloomberg`, `oracle`, `robinhood`, `facebook`, `paypal`, `box`, `amazon`, `adobe`, `microsoft`, `apple`, `salesforce`, `uber`, `servicenow`, `ebay`, `intel`, `netflix`, `smartsheet`, `tiktok`, `zynga`, `yelp`, `pocket-gems`

## Description

Given an array of strings `words` and an integer `k`, return *the *`k`* most frequent strings*.

Return the answer **sorted** by **the frequency** from highest to lowest. Sort the words with the same frequency by their **lexicographical order**.

 

**Example 1:**

```

Input: words = [&quot;i&quot;,&quot;love&quot;,&quot;leetcode&quot;,&quot;i&quot;,&quot;love&quot;,&quot;coding&quot;], k = 2
Output: [&quot;i&quot;,&quot;love&quot;]
Explanation: &quot;i&quot; and &quot;love&quot; are the two most frequent words.
Note that &quot;i&quot; comes before &quot;love&quot; due to a lower alphabetical order.

```

**Example 2:**

```

Input: words = [&quot;the&quot;,&quot;day&quot;,&quot;is&quot;,&quot;sunny&quot;,&quot;the&quot;,&quot;the&quot;,&quot;the&quot;,&quot;sunny&quot;,&quot;is&quot;,&quot;is&quot;], k = 4
Output: [&quot;the&quot;,&quot;is&quot;,&quot;sunny&quot;,&quot;day&quot;]
Explanation: &quot;the&quot;, &quot;is&quot;, &quot;sunny&quot; and &quot;day&quot; are the four most frequent words, with the number of occurrence being 4, 3, 2 and 1 respectively.

```

 

**Constraints:**

	- `1 <= words.length <= 500`

	- `1 <= words[i].length <= 10`

	- `words[i]` consists of lowercase English letters.

	- `k` is in the range `[1, The number of unique words[i]]`

 

**Follow-up:** Could you solve it in `O(n log(k))` time and `O(n)` extra space?

---

**Links:** [Submissions](https://leetcode.com/problems/top-k-frequent-words/) | [Solutions](https://leetcode.com/problems/top-k-frequent-words/)
