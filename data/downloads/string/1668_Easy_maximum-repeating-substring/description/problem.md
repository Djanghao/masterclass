# [1668. Maximum Repeating Substring](https://leetcode.com/problems/maximum-repeating-substring/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Easy | 811 | 296 |

**Tags:** [`string`](https://leetcode.com/tag/string), [`dynamic-programming`](https://leetcode.com/tag/dynamic-programming), [`string-matching`](https://leetcode.com/tag/string-matching)

**Companies:** `pure-storage`, `google`, `asana`

## Description

For a string `sequence`, a string `word` is **`k`-repeating** if `word` concatenated `k` times is a substring of `sequence`. The `word`'s **maximum `k`-repeating value** is the highest value `k` where `word` is `k`-repeating in `sequence`. If `word` is not a substring of `sequence`, `word`'s maximum `k`-repeating value is `0`.

Given strings `sequence` and `word`, return *the **maximum `k`-repeating value** of `word` in `sequence`*.

 

**Example 1:**

```

Input: sequence = &quot;ababc&quot;, word = &quot;ab&quot;
Output: 2
Explanation: &quot;abab&quot; is a substring in &quot;ababc&quot;.

```

**Example 2:**

```

Input: sequence = &quot;ababc&quot;, word = &quot;ba&quot;
Output: 1
Explanation: &quot;ba&quot; is a substring in &quot;ababc&quot;. &quot;baba&quot; is not a substring in &quot;ababc&quot;.

```

**Example 3:**

```

Input: sequence = &quot;ababc&quot;, word = &quot;ac&quot;
Output: 0
Explanation: &quot;ac&quot; is not a substring in &quot;ababc&quot;. 

```

 

**Constraints:**

	- `1 <= sequence.length <= 100`

	- `1 <= word.length <= 100`

	- `sequence` and `word` contains only lowercase English letters.

---

**Links:** [Submissions](https://leetcode.com/problems/maximum-repeating-substring/) | [Solutions](https://leetcode.com/problems/maximum-repeating-substring/)
