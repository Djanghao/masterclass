# [2138. Divide a String Into Groups of Size k](https://leetcode.com/problems/divide-a-string-into-groups-of-size-k/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Easy | 789 | 31 |

**Tags:** [`string`](https://leetcode.com/tag/string), [`simulation`](https://leetcode.com/tag/simulation)

**Companies:** `google`, `canonical`

## Description

A string `s` can be partitioned into groups of size `k` using the following procedure:

	- The first group consists of the first `k` characters of the string, the second group consists of the next `k` characters of the string, and so on. Each element can be a part of **exactly one** group.

	- For the last group, if the string **does not** have `k` characters remaining, a character `fill` is used to complete the group.

Note that the partition is done so that after removing the `fill` character from the last group (if it exists) and concatenating all the groups in order, the resultant string should be `s`.

Given the string `s`, the size of each group `k` and the character `fill`, return *a string array denoting the **composition of every group** *`s`* has been divided into, using the above procedure*.

 

**Example 1:**

```

Input: s = &quot;abcdefghi&quot;, k = 3, fill = &quot;x&quot;
Output: [&quot;abc&quot;,&quot;def&quot;,&quot;ghi&quot;]
Explanation:
The first 3 characters &quot;abc&quot; form the first group.
The next 3 characters &quot;def&quot; form the second group.
The last 3 characters &quot;ghi&quot; form the third group.
Since all groups can be completely filled by characters from the string, we do not need to use fill.
Thus, the groups formed are &quot;abc&quot;, &quot;def&quot;, and &quot;ghi&quot;.

```

**Example 2:**

```

Input: s = &quot;abcdefghij&quot;, k = 3, fill = &quot;x&quot;
Output: [&quot;abc&quot;,&quot;def&quot;,&quot;ghi&quot;,&quot;jxx&quot;]
Explanation:
Similar to the previous example, we are forming the first three groups &quot;abc&quot;, &quot;def&quot;, and &quot;ghi&quot;.
For the last group, we can only use the character &#39;j&#39; from the string. To complete this group, we add &#39;x&#39; twice.
Thus, the 4 groups formed are &quot;abc&quot;, &quot;def&quot;, &quot;ghi&quot;, and &quot;jxx&quot;.

```

 

**Constraints:**

	- `1 <= s.length <= 100`

	- `s` consists of lowercase English letters only.

	- `1 <= k <= 100`

	- `fill` is a lowercase English letter.

---

**Links:** [Submissions](https://leetcode.com/problems/divide-a-string-into-groups-of-size-k/) | [Solutions](https://leetcode.com/problems/divide-a-string-into-groups-of-size-k/)
