# [338. Counting Bits](https://leetcode.com/problems/counting-bits/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Easy | 11784 | 601 |

**Tags:** [`dynamic-programming`](https://leetcode.com/tag/dynamic-programming), [`bit-manipulation`](https://leetcode.com/tag/bit-manipulation)

**Companies:** `google`, `bloomberg`, `facebook`, `microsoft`, `amazon`, `nvidia`, `oracle`

## Description

Given an integer `n`, return *an array *`ans`* of length *`n + 1`* such that for each *`i`* *(`0 <= i <= n`)*, *`ans[i]`* is the **number of ***`1`***'s** in the binary representation of *`i`.

 

**Example 1:**

```

Input: n = 2
Output: [0,1,1]
Explanation:
0 --&gt; 0
1 --&gt; 1
2 --&gt; 10

```

**Example 2:**

```

Input: n = 5
Output: [0,1,1,2,1,2]
Explanation:
0 --&gt; 0
1 --&gt; 1
2 --&gt; 10
3 --&gt; 11
4 --&gt; 100
5 --&gt; 101

```

 

**Constraints:**

	- `0 <= n <= 10^5`

 

**Follow up:**

	- It is very easy to come up with a solution with a runtime of `O(n log n)`. Can you do it in linear time `O(n)` and possibly in a single pass?

	- Can you do it without using any built-in function (i.e., like `__builtin_popcount` in C++)?

---

**Links:** [Submissions](https://leetcode.com/problems/counting-bits/) | [Solutions](https://leetcode.com/problems/counting-bits/)
