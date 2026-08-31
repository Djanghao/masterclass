# [2976. Minimum Cost to Convert String I](https://leetcode.com/problems/minimum-cost-to-convert-string-i/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 957 | 65 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`string`](https://leetcode.com/tag/string), [`graph`](https://leetcode.com/tag/graph), [`shortest-path`](https://leetcode.com/tag/shortest-path)

**Companies:** `microsoft`, `google`, `atlassian`

## Description

You are given two **0-indexed** strings `source` and `target`, both of length `n` and consisting of **lowercase** English letters. You are also given two **0-indexed** character arrays `original` and `changed`, and an integer array `cost`, where `cost[i]` represents the cost of changing the character `original[i]` to the character `changed[i]`.

You start with the string `source`. In one operation, you can pick a character `x` from the string and change it to the character `y` at a cost of `z` **if** there exists **any** index `j` such that `cost[j] == z`, `original[j] == x`, and `changed[j] == y`.

Return *the **minimum** cost to convert the string *`source`* to the string *`target`* using **any** number of operations. If it is impossible to convert* `source` *to* `target`, *return* `-1`.

**Note** that there may exist indices `i`, `j` such that `original[j] == original[i]` and `changed[j] == changed[i]`.

 

**Example 1:**

```

Input: source = &quot;abcd&quot;, target = &quot;acbe&quot;, original = [&quot;a&quot;,&quot;b&quot;,&quot;c&quot;,&quot;c&quot;,&quot;e&quot;,&quot;d&quot;], changed = [&quot;b&quot;,&quot;c&quot;,&quot;b&quot;,&quot;e&quot;,&quot;b&quot;,&quot;e&quot;], cost = [2,5,5,1,2,20]
Output: 28
Explanation: To convert the string &quot;abcd&quot; to string &quot;acbe&quot;:
- Change value at index 1 from &#39;b&#39; to &#39;c&#39; at a cost of 5.
- Change value at index 2 from &#39;c&#39; to &#39;e&#39; at a cost of 1.
- Change value at index 2 from &#39;e&#39; to &#39;b&#39; at a cost of 2.
- Change value at index 3 from &#39;d&#39; to &#39;e&#39; at a cost of 20.
The total cost incurred is 5 + 1 + 2 + 20 = 28.
It can be shown that this is the minimum possible cost.

```

**Example 2:**

```

Input: source = &quot;aaaa&quot;, target = &quot;bbbb&quot;, original = [&quot;a&quot;,&quot;c&quot;], changed = [&quot;c&quot;,&quot;b&quot;], cost = [1,2]
Output: 12
Explanation: To change the character &#39;a&#39; to &#39;b&#39; change the character &#39;a&#39; to &#39;c&#39; at a cost of 1, followed by changing the character &#39;c&#39; to &#39;b&#39; at a cost of 2, for a total cost of 1 + 2 = 3. To change all occurrences of &#39;a&#39; to &#39;b&#39;, a total cost of 3 * 4 = 12 is incurred.

```

**Example 3:**

```

Input: source = &quot;abcd&quot;, target = &quot;abce&quot;, original = [&quot;a&quot;], changed = [&quot;e&quot;], cost = [10000]
Output: -1
Explanation: It is impossible to convert source to target because the value at index 3 cannot be changed from &#39;d&#39; to &#39;e&#39;.

```

 

**Constraints:**

	- `1 <= source.length == target.length <= 10^5`

	- `source`, `target` consist of lowercase English letters.

	- `1 <= cost.length == original.length == changed.length <= 2000`

	- `original[i]`, `changed[i]` are lowercase English letters.

	- `1 <= cost[i] <= 10^6`

	- `original[i] != changed[i]`

---

**Links:** [Submissions](https://leetcode.com/problems/minimum-cost-to-convert-string-i/) | [Solutions](https://leetcode.com/problems/minimum-cost-to-convert-string-i/)
