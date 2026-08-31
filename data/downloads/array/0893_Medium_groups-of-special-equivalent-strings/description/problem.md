# [893. Groups of Special-Equivalent Strings](https://leetcode.com/problems/groups-of-special-equivalent-strings/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 565 | 1488 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`hash-table`](https://leetcode.com/tag/hash-table), [`string`](https://leetcode.com/tag/string), [`sorting`](https://leetcode.com/tag/sorting)

**Companies:** `facebook`

## Description

You are given an array of strings of the same length `words`.

In one **move**, you can swap any two even indexed characters or any two odd indexed characters of a string `words[i]`.

Two strings `words[i]` and `words[j]` are **special-equivalent** if after any number of moves, `words[i] == words[j]`.

	- For example, `words[i] = "zzxy"` and `words[j] = "xyzz"` are **special-equivalent** because we may make the moves `"zzxy" -> "xzzy" -> "xyzz"`.

A **group of special-equivalent strings** from `words` is a non-empty subset of words such that:

	- Every pair of strings in the group are special equivalent, and

	- The group is the largest size possible (i.e., there is not a string `words[i]` not in the group such that `words[i]` is special-equivalent to every string in the group).

Return *the number of **groups of special-equivalent strings** from *`words`.

 

**Example 1:**

```

Input: words = [&quot;abcd&quot;,&quot;cdab&quot;,&quot;cbad&quot;,&quot;xyzz&quot;,&quot;zzxy&quot;,&quot;zzyx&quot;]
Output: 3
Explanation: 
One group is [&quot;abcd&quot;, &quot;cdab&quot;, &quot;cbad&quot;], since they are all pairwise special equivalent, and none of the other strings is all pairwise special equivalent to these.
The other two groups are [&quot;xyzz&quot;, &quot;zzxy&quot;] and [&quot;zzyx&quot;].
Note that in particular, &quot;zzxy&quot; is not special equivalent to &quot;zzyx&quot;.

```

**Example 2:**

```

Input: words = [&quot;abc&quot;,&quot;acb&quot;,&quot;bac&quot;,&quot;bca&quot;,&quot;cab&quot;,&quot;cba&quot;]
Output: 3

```

 

**Constraints:**

	- `1 <= words.length <= 1000`

	- `1 <= words[i].length <= 20`

	- `words[i]` consist of lowercase English letters.

	- All the strings are of the same length.

---

**Links:** [Submissions](https://leetcode.com/problems/groups-of-special-equivalent-strings/) | [Solutions](https://leetcode.com/problems/groups-of-special-equivalent-strings/)
