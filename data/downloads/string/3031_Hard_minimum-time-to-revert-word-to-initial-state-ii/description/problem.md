# [3031. Minimum Time to Revert Word to Initial State II](https://leetcode.com/problems/minimum-time-to-revert-word-to-initial-state-ii/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Hard | 154 | 22 |

**Tags:** [`string`](https://leetcode.com/tag/string), [`rolling-hash`](https://leetcode.com/tag/rolling-hash), [`string-matching`](https://leetcode.com/tag/string-matching), [`hash-function`](https://leetcode.com/tag/hash-function)

**Companies:** `sprinklr`

## Description

You are given a **0-indexed** string `word` and an integer `k`.

At every second, you must perform the following operations:

	- Remove the first `k` characters of `word`.

	- Add any `k` characters to the end of `word`.

**Note** that you do not necessarily need to add the same characters that you removed. However, you must perform **both** operations at every second.

Return *the **minimum** time greater than zero required for* `word` *to revert to its **initial** state*.

 

**Example 1:**

```

Input: word = &quot;abacaba&quot;, k = 3
Output: 2
Explanation: At the 1st second, we remove characters &quot;aba&quot; from the prefix of word, and add characters &quot;bac&quot; to the end of word. Thus, word becomes equal to &quot;cababac&quot;.
At the 2nd second, we remove characters &quot;cab&quot; from the prefix of word, and add &quot;aba&quot; to the end of word. Thus, word becomes equal to &quot;abacaba&quot; and reverts to its initial state.
It can be shown that 2 seconds is the minimum time greater than zero required for word to revert to its initial state.

```

**Example 2:**

```

Input: word = &quot;abacaba&quot;, k = 4
Output: 1
Explanation: At the 1st second, we remove characters &quot;abac&quot; from the prefix of word, and add characters &quot;caba&quot; to the end of word. Thus, word becomes equal to &quot;abacaba&quot; and reverts to its initial state.
It can be shown that 1 second is the minimum time greater than zero required for word to revert to its initial state.

```

**Example 3:**

```

Input: word = &quot;abcbabcd&quot;, k = 2
Output: 4
Explanation: At every second, we will remove the first 2 characters of word, and add the same characters to the end of word.
After 4 seconds, word becomes equal to &quot;abcbabcd&quot; and reverts to its initial state.
It can be shown that 4 seconds is the minimum time greater than zero required for word to revert to its initial state.

```

 

**Constraints:**

	- `1 <= word.length <= 10^6`

	- `1 <= k <= word.length`

	- `word` consists only of lowercase English letters.

---

**Links:** [Submissions](https://leetcode.com/problems/minimum-time-to-revert-word-to-initial-state-ii/) | [Solutions](https://leetcode.com/problems/minimum-time-to-revert-word-to-initial-state-ii/)
