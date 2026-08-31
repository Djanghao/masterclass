# [763. Partition Labels](https://leetcode.com/problems/partition-labels/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 11140 | 440 |

**Tags:** [`hash-table`](https://leetcode.com/tag/hash-table), [`two-pointers`](https://leetcode.com/tag/two-pointers), [`string`](https://leetcode.com/tag/string), [`greedy`](https://leetcode.com/tag/greedy)

**Companies:** `amazon`, `facebook`, `google`, `microsoft`, `linkedin`, `yandex`, `inmobi`

## Description

You are given a string `s`. We want to partition the string into as many parts as possible so that each letter appears in at most one part. For example, the string `"ababcc"` can be partitioned into `["abab", "cc"]`, but partitions such as `["aba", "bcc"]` or `["ab", "ab", "cc"]` are invalid.

Note that the partition is done so that after concatenating all the parts in order, the resultant string should be `s`.

Return *a list of integers representing the size of these parts*.

 

**Example 1:**

```

Input: s = &quot;ababcbacadefegdehijhklij&quot;
Output: [9,7,8]
Explanation:
The partition is &quot;ababcbaca&quot;, &quot;defegde&quot;, &quot;hijhklij&quot;.
This is a partition so that each letter appears in at most one part.
A partition like &quot;ababcbacadefegde&quot;, &quot;hijhklij&quot; is incorrect, because it splits s into less parts.

```

**Example 2:**

```

Input: s = &quot;eccbbbbdec&quot;
Output: [10]

```

 

**Constraints:**

	- `1 <= s.length <= 500`

	- `s` consists of lowercase English letters.

---

**Links:** [Submissions](https://leetcode.com/problems/partition-labels/) | [Solutions](https://leetcode.com/problems/partition-labels/)
