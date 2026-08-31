# [269. Alien Dictionary](https://leetcode.com/problems/alien-dictionary/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Hard | 4657 | 1034 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`string`](https://leetcode.com/tag/string), [`depth-first-search`](https://leetcode.com/tag/depth-first-search), [`breadth-first-search`](https://leetcode.com/tag/breadth-first-search), [`graph`](https://leetcode.com/tag/graph), [`topological-sort`](https://leetcode.com/tag/topological-sort)

**Companies:** `uber`, `facebook`, `google`, `amazon`, `apple`, `coupang`, `tiktok`, `microsoft`, `oracle`, `airbnb`, `twitter`, `snapchat`, `pocket-gems`, `wix`

## Description

There is a new alien language that uses the English alphabet. However, the order of the letters is unknown to you.

You are given a list of strings `words` from the alien language's dictionary. Now it is claimed that the strings in `words` are **sorted lexicographically** by the rules of this new language.

If this claim is incorrect, and the given arrangement of string in `words` cannot correspond to any order of letters, return `"".`

Otherwise, return *a string of the unique letters in the new alien language sorted in **lexicographically increasing order** by the new language's rules**. *If there are multiple solutions, return* **any of them***.

 

**Example 1:**

```

Input: words = [&quot;wrt&quot;,&quot;wrf&quot;,&quot;er&quot;,&quot;ett&quot;,&quot;rftt&quot;]
Output: &quot;wertf&quot;

```

**Example 2:**

```

Input: words = [&quot;z&quot;,&quot;x&quot;]
Output: &quot;zx&quot;

```

**Example 3:**

```

Input: words = [&quot;z&quot;,&quot;x&quot;,&quot;z&quot;]
Output: &quot;&quot;
Explanation: The order is invalid, so return &quot;&quot;.

```

 

**Constraints:**

	- `1 <= words.length <= 100`

	- `1 <= words[i].length <= 100`

	- `words[i]` consists of only lowercase English letters.

---

**Links:** [Submissions](https://leetcode.com/problems/alien-dictionary/) | [Solutions](https://leetcode.com/problems/alien-dictionary/)
