# [830. Positions of Large Groups](https://leetcode.com/problems/positions-of-large-groups/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Easy | 917 | 126 |

**Tags:** [`string`](https://leetcode.com/tag/string)

**Companies:** `google`

## Description

In a string `s` of lowercase letters, these letters form consecutive groups of the same character.

For example, a string like `s = "abbxxxxzyy"` has the groups `"a"`, `"bb"`, `"xxxx"`, `"z"`, and `"yy"`.

A group is identified by an interval `[start, end]`, where `start` and `end` denote the start and end indices (inclusive) of the group. In the above example, `"xxxx"` has the interval `[3,6]`.

A group is considered **large** if it has 3 or more characters.

Return *the intervals of every **large** group sorted in **increasing order by start index***.

 

**Example 1:**

```

Input: s = &quot;abbxxxxzzy&quot;
Output: [[3,6]]
Explanation: &quot;xxxx&quot; is the only large group with start index 3 and end index 6.

```

**Example 2:**

```

Input: s = &quot;abc&quot;
Output: []
Explanation: We have groups &quot;a&quot;, &quot;b&quot;, and &quot;c&quot;, none of which are large groups.

```

**Example 3:**

```

Input: s = &quot;abcdddeeeeaabbbcd&quot;
Output: [[3,5],[6,9],[12,14]]
Explanation: The large groups are &quot;ddd&quot;, &quot;eeee&quot;, and &quot;bbb&quot;.

```

 

**Constraints:**

	- `1 <= s.length <= 1000`

	- `s` contains lowercase English letters only.

---

**Links:** [Submissions](https://leetcode.com/problems/positions-of-large-groups/) | [Solutions](https://leetcode.com/problems/positions-of-large-groups/)
