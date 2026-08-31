# [2418. Sort the People](https://leetcode.com/problems/sort-the-people/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Easy | 1838 | 38 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`hash-table`](https://leetcode.com/tag/hash-table), [`string`](https://leetcode.com/tag/string), [`sorting`](https://leetcode.com/tag/sorting)

**Companies:** `google`, `facebook`, `bloomberg`, `infosys`

## Description

You are given an array of strings `names`, and an array `heights` that consists of **distinct** positive integers. Both arrays are of length `n`.

For each index `i`, `names[i]` and `heights[i]` denote the name and height of the `i^th` person.

Return `names`* sorted in **descending** order by the people's heights*.

 

**Example 1:**

```

Input: names = [&quot;Mary&quot;,&quot;John&quot;,&quot;Emma&quot;], heights = [180,165,170]
Output: [&quot;Mary&quot;,&quot;Emma&quot;,&quot;John&quot;]
Explanation: Mary is the tallest, followed by Emma and John.

```

**Example 2:**

```

Input: names = [&quot;Alice&quot;,&quot;Bob&quot;,&quot;Bob&quot;], heights = [155,185,150]
Output: [&quot;Bob&quot;,&quot;Alice&quot;,&quot;Bob&quot;]
Explanation: The first Bob is the tallest, followed by Alice and the second Bob.

```

 

**Constraints:**

	- `n == names.length == heights.length`

	- `1 <= n <= 10^3`

	- `1 <= names[i].length <= 20`

	- `1 <= heights[i] <= 10^5`

	- `names[i]` consists of lower and upper case English letters.

	- All the values of `heights` are distinct.

---

**Links:** [Submissions](https://leetcode.com/problems/sort-the-people/) | [Solutions](https://leetcode.com/problems/sort-the-people/)
