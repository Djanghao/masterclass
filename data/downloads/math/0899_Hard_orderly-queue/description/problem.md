# [899. Orderly Queue](https://leetcode.com/problems/orderly-queue/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Hard | 1814 | 620 |

**Tags:** [`math`](https://leetcode.com/tag/math), [`string`](https://leetcode.com/tag/string), [`sorting`](https://leetcode.com/tag/sorting)

**Companies:** `amazon`

## Description

You are given a string `s` and an integer `k`. You can choose one of the first `k` letters of `s` and append it at the end of the string.

Return *the lexicographically smallest string you could have after applying the mentioned step any number of moves*.

 

**Example 1:**

```

Input: s = &quot;cba&quot;, k = 1
Output: &quot;acb&quot;
Explanation: 
In the first move, we move the 1st character &#39;c&#39; to the end, obtaining the string &quot;bac&quot;.
In the second move, we move the 1st character &#39;b&#39; to the end, obtaining the final result &quot;acb&quot;.

```

**Example 2:**

```

Input: s = &quot;baaca&quot;, k = 3
Output: &quot;aaabc&quot;
Explanation: 
In the first move, we move the 1st character &#39;b&#39; to the end, obtaining the string &quot;aacab&quot;.
In the second move, we move the 3rd character &#39;c&#39; to the end, obtaining the final result &quot;aaabc&quot;.

```

 

**Constraints:**

	- `1 <= k <= s.length <= 1000`

	- `s` consist of lowercase English letters.

---

**Links:** [Submissions](https://leetcode.com/problems/orderly-queue/) | [Solutions](https://leetcode.com/problems/orderly-queue/)
