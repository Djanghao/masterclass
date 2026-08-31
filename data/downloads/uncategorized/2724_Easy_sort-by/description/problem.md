# [2724. Sort By](https://leetcode.com/problems/sort-by/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| JavaScript | Easy | 225 | 49 |



**Companies:** `google`

## Description

Given an array `arr` and a function `fn`, return a sorted array `sortedArr`. You can assume `fn` only returns numbers and those numbers determine the sort order of `sortedArr`. `sortedArr` must be sorted in **ascending order** by `fn` output.

You may assume that `fn` will never duplicate numbers for a given array.

 

**Example 1:**

```

Input: arr = [5, 4, 1, 2, 3], fn = (x) =&gt; x
Output: [1, 2, 3, 4, 5]
Explanation: fn simply returns the number passed to it so the array is sorted in ascending order.

```

**Example 2:**

```

Input: arr = [{&quot;x&quot;: 1}, {&quot;x&quot;: 0}, {&quot;x&quot;: -1}], fn = (d) =&gt; d.x
Output: [{&quot;x&quot;: -1}, {&quot;x&quot;: 0}, {&quot;x&quot;: 1}]
Explanation: fn returns the value for the &quot;x&quot; key. So the array is sorted based on that value.

```

**Example 3:**

```

Input: arr = [[3, 4], [5, 2], [10, 1]], fn = (x) =&gt; x[1]
Output: [[10, 1], [5, 2], [3, 4]]
Explanation: arr is sorted in ascending order by number at index=1.&nbsp;

```

 

**Constraints:**

	- `arr` is a valid JSON array

	- `fn` is a function that returns a number

	- `1 <= arr.length <= 5 * 10^5`

---

**Links:** [Submissions](https://leetcode.com/problems/sort-by/) | [Solutions](https://leetcode.com/problems/sort-by/)
