# [839. Similar String Groups](https://leetcode.com/problems/similar-string-groups/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Hard | 2449 | 217 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`hash-table`](https://leetcode.com/tag/hash-table), [`string`](https://leetcode.com/tag/string), [`depth-first-search`](https://leetcode.com/tag/depth-first-search), [`breadth-first-search`](https://leetcode.com/tag/breadth-first-search), [`union-find`](https://leetcode.com/tag/union-find)

**Companies:** `google`, `apple`

## Description

Two strings, `X` and `Y`, are considered similar if either they are identical or we can make them equivalent by swapping at most two letters (in distinct positions) within the string `X`.

For example, `"tars"` and `"rats"` are similar (swapping at positions `0` and `2`), and `"rats"` and `"arts"` are similar, but `"star"` is not similar to `"tars"`, `"rats"`, or `"arts"`.

Together, these form two connected groups by similarity: `{"tars", "rats", "arts"}` and `{"star"}`.  Notice that `"tars"` and `"arts"` are in the same group even though they are not similar.  Formally, each group is such that a word is in the group if and only if it is similar to at least one other word in the group.

We are given a list `strs` of strings where every string in `strs` is an anagram of every other string in `strs`. How many groups are there?

 

**Example 1:**

```

Input: strs = [&quot;tars&quot;,&quot;rats&quot;,&quot;arts&quot;,&quot;star&quot;]
Output: 2

```

**Example 2:**

```

Input: strs = [&quot;omv&quot;,&quot;ovm&quot;]
Output: 1

```

 

**Constraints:**

	- `1 <= strs.length <= 300`

	- `1 <= strs[i].length <= 300`

	- `strs[i]` consists of lowercase letters only.

	- All words in `strs` have the same length and are anagrams of each other.

---

**Links:** [Submissions](https://leetcode.com/problems/similar-string-groups/) | [Solutions](https://leetcode.com/problems/similar-string-groups/)
