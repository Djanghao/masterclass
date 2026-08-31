# [1772. Sort Features by Popularity](https://leetcode.com/problems/sort-features-by-popularity/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 92 | 43 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`hash-table`](https://leetcode.com/tag/hash-table), [`string`](https://leetcode.com/tag/string), [`sorting`](https://leetcode.com/tag/sorting)

**Companies:** `amazon`

## Description

You are given a string array `features` where `features[i]` is a single word that represents the name of a feature of the latest product you are working on. You have made a survey where users have reported which features they like. You are given a string array `responses`, where each `responses[i]` is a string containing space-separated words.

The **popularity** of a feature is the number of `responses[i]` that contain the feature. You want to sort the features in non-increasing order by their popularity. If two features have the same popularity, order them by their original index in `features`. Notice that one response could contain the same feature multiple times; this feature is only counted once in its popularity.

Return *the features in sorted order.*

 

**Example 1:**

```

Input: features = [&quot;cooler&quot;,&quot;lock&quot;,&quot;touch&quot;], responses = [&quot;i like cooler cooler&quot;,&quot;lock touch cool&quot;,&quot;locker like touch&quot;]
Output: [&quot;touch&quot;,&quot;cooler&quot;,&quot;lock&quot;]
Explanation: appearances(&quot;cooler&quot;) = 1, appearances(&quot;lock&quot;) = 1, appearances(&quot;touch&quot;) = 2. Since &quot;cooler&quot; and &quot;lock&quot; both had 1 appearance, &quot;cooler&quot; comes first because &quot;cooler&quot; came first in the features array.

```

**Example 2:**

```

Input: features = [&quot;a&quot;,&quot;aa&quot;,&quot;b&quot;,&quot;c&quot;], responses = [&quot;a&quot;,&quot;a aa&quot;,&quot;a a a a a&quot;,&quot;b a&quot;]
Output: [&quot;a&quot;,&quot;aa&quot;,&quot;b&quot;,&quot;c&quot;]

```

 

**Constraints:**

	- `1 <= features.length <= 10^4`

	- `1 <= features[i].length <= 10`

	- `features` contains no duplicates.

	- `features[i]` consists of lowercase letters.

	- `1 <= responses.length <= 10^2`

	- `1 <= responses[i].length <= 10^3`

	- `responses[i]` consists of lowercase letters and spaces.

	- `responses[i]` contains no two consecutive spaces.

	- `responses[i]` has no leading or trailing spaces.

---

**Links:** [Submissions](https://leetcode.com/problems/sort-features-by-popularity/) | [Solutions](https://leetcode.com/problems/sort-features-by-popularity/)
