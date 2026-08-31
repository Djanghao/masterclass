# [1152. Analyze User Website Visit Pattern](https://leetcode.com/problems/analyze-user-website-visit-pattern/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 564 | 3983 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`hash-table`](https://leetcode.com/tag/hash-table), [`string`](https://leetcode.com/tag/string), [`sorting`](https://leetcode.com/tag/sorting)

**Companies:** `amazon`, `spotify`, `uber`

## Description

You are given two string arrays `username` and `website` and an integer array `timestamp`. All the given arrays are of the same length and the tuple `[username[i], website[i], timestamp[i]]` indicates that the user `username[i]` visited the website `website[i]` at time `timestamp[i]`.

A **pattern** is a list of three websites (not necessarily distinct).

	- For example, `["home", "away", "love"]`, `["leetcode", "love", "leetcode"]`, and `["luffy", "luffy", "luffy"]` are all patterns.

The **score** of a **pattern** is the number of users that visited all the websites in the pattern in the same order they appeared in the pattern.

	- For example, if the pattern is `["home", "away", "love"]`, the score is the number of users `x` such that `x` visited `"home"` then visited `"away"` and visited `"love"` after that.

	- Similarly, if the pattern is `["leetcode", "love", "leetcode"]`, the score is the number of users `x` such that `x` visited `"leetcode"` then visited `"love"` and visited `"leetcode"` **one more time** after that.

	- Also, if the pattern is `["luffy", "luffy", "luffy"]`, the score is the number of users `x` such that `x` visited `"luffy"` three different times at different timestamps.

Return the **pattern** with the largest **score**. If there is more than one pattern with the same largest score, return the lexicographically smallest such pattern.

Note that the websites in a pattern **do not** need to be visited *contiguously*, they only need to be visited in the order they appeared in the pattern.

 

**Example 1:**

```

Input: username = [&quot;joe&quot;,&quot;joe&quot;,&quot;joe&quot;,&quot;james&quot;,&quot;james&quot;,&quot;james&quot;,&quot;james&quot;,&quot;mary&quot;,&quot;mary&quot;,&quot;mary&quot;], timestamp = [1,2,3,4,5,6,7,8,9,10], website = [&quot;home&quot;,&quot;about&quot;,&quot;career&quot;,&quot;home&quot;,&quot;cart&quot;,&quot;maps&quot;,&quot;home&quot;,&quot;home&quot;,&quot;about&quot;,&quot;career&quot;]
Output: [&quot;home&quot;,&quot;about&quot;,&quot;career&quot;]
Explanation: The tuples in this example are:
[&quot;joe&quot;,&quot;home&quot;,1],[&quot;joe&quot;,&quot;about&quot;,2],[&quot;joe&quot;,&quot;career&quot;,3],[&quot;james&quot;,&quot;home&quot;,4],[&quot;james&quot;,&quot;cart&quot;,5],[&quot;james&quot;,&quot;maps&quot;,6],[&quot;james&quot;,&quot;home&quot;,7],[&quot;mary&quot;,&quot;home&quot;,8],[&quot;mary&quot;,&quot;about&quot;,9], and [&quot;mary&quot;,&quot;career&quot;,10].
The pattern (&quot;home&quot;, &quot;about&quot;, &quot;career&quot;) has score 2 (joe and mary).
The pattern (&quot;home&quot;, &quot;cart&quot;, &quot;maps&quot;) has score 1 (james).
The pattern (&quot;home&quot;, &quot;cart&quot;, &quot;home&quot;) has score 1 (james).
The pattern (&quot;home&quot;, &quot;maps&quot;, &quot;home&quot;) has score 1 (james).
The pattern (&quot;cart&quot;, &quot;maps&quot;, &quot;home&quot;) has score 1 (james).
The pattern (&quot;home&quot;, &quot;home&quot;, &quot;home&quot;) has score 0 (no user visited home 3 times).

```

**Example 2:**

```

Input: username = [&quot;ua&quot;,&quot;ua&quot;,&quot;ua&quot;,&quot;ub&quot;,&quot;ub&quot;,&quot;ub&quot;], timestamp = [1,2,3,4,5,6], website = [&quot;a&quot;,&quot;b&quot;,&quot;a&quot;,&quot;a&quot;,&quot;b&quot;,&quot;c&quot;]
Output: [&quot;a&quot;,&quot;b&quot;,&quot;a&quot;]

```

 

**Constraints:**

	- `3 <= username.length <= 50`

	- `1 <= username[i].length <= 10`

	- `timestamp.length == username.length`

	- `1 <= timestamp[i] <= 10^9`

	- `website.length == username.length`

	- `1 <= website[i].length <= 10`

	- `username[i]` and `website[i]` consist of lowercase English letters.

	- It is guaranteed that there is at least one user who visited at least three websites.

	- All the tuples `[username[i], timestamp[i], website[i]]` are **unique**.

---

**Links:** [Submissions](https://leetcode.com/problems/analyze-user-website-visit-pattern/) | [Solutions](https://leetcode.com/problems/analyze-user-website-visit-pattern/)
