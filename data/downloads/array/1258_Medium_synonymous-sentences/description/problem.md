# [1258. Synonymous Sentences](https://leetcode.com/problems/synonymous-sentences/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 373 | 171 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`hash-table`](https://leetcode.com/tag/hash-table), [`string`](https://leetcode.com/tag/string), [`backtracking`](https://leetcode.com/tag/backtracking), [`sort`](https://leetcode.com/tag/sort), [`union-find`](https://leetcode.com/tag/union-find)

**Companies:** `moveworks`, `rippling`, `cruise-automation`

## Description

You are given a list of equivalent string pairs `synonyms` where `synonyms[i] = [s_i, t_i]` indicates that `s_i` and `t_i` are equivalent strings. You are also given a sentence `text`.

Return *all possible synonymous sentences **sorted lexicographically***.

 

**Example 1:**

```

Input: synonyms = [[&quot;happy&quot;,&quot;joy&quot;],[&quot;sad&quot;,&quot;sorrow&quot;],[&quot;joy&quot;,&quot;cheerful&quot;]], text = &quot;I am happy today but was sad yesterday&quot;
Output: [&quot;I am cheerful today but was sad yesterday&quot;,&quot;I am cheerful today but was sorrow yesterday&quot;,&quot;I am happy today but was sad yesterday&quot;,&quot;I am happy today but was sorrow yesterday&quot;,&quot;I am joy today but was sad yesterday&quot;,&quot;I am joy today but was sorrow yesterday&quot;]

```

**Example 2:**

```

Input: synonyms = [[&quot;happy&quot;,&quot;joy&quot;],[&quot;cheerful&quot;,&quot;glad&quot;]], text = &quot;I am happy today but was sad yesterday&quot;
Output: [&quot;I am happy today but was sad yesterday&quot;,&quot;I am joy today but was sad yesterday&quot;]

```

 

**Constraints:**

	- `0 <= synonyms.length <= 10`

	- `synonyms[i].length == 2`

	- `1 <= s_i.length,_ t_i.length <= 10`

	- `s_i != t_i`

	- `text` consists of at most `10` words.

	- All the pairs of `synonyms` are **unique**.

	- The words of `text` are separated by single spaces.

---

**Links:** [Submissions](https://leetcode.com/problems/synonymous-sentences/) | [Solutions](https://leetcode.com/problems/synonymous-sentences/)
