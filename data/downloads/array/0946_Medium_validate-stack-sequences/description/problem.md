# [946. Validate Stack Sequences](https://leetcode.com/problems/validate-stack-sequences/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 6076 | 129 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`stack`](https://leetcode.com/tag/stack), [`simulation`](https://leetcode.com/tag/simulation)

**Companies:** `facebook`, `amazon`, `microsoft`, `sprinklr`, `linkedin`

## Description

Given two integer arrays `pushed` and `popped` each with distinct values, return `true`* if this could have been the result of a sequence of push and pop operations on an initially empty stack, or *`false`* otherwise.*

 

**Example 1:**

```

Input: pushed = [1,2,3,4,5], popped = [4,5,3,2,1]
Output: true
Explanation: We might do the following sequence:
push(1), push(2), push(3), push(4),
pop() -&gt; 4,
push(5),
pop() -&gt; 5, pop() -&gt; 3, pop() -&gt; 2, pop() -&gt; 1

```

**Example 2:**

```

Input: pushed = [1,2,3,4,5], popped = [4,3,5,1,2]
Output: false
Explanation: 1 cannot be popped before 2.

```

 

**Constraints:**

	- `1 <= pushed.length <= 1000`

	- `0 <= pushed[i] <= 1000`

	- All the elements of `pushed` are **unique**.

	- `popped.length == pushed.length`

	- `popped` is a permutation of `pushed`.

---

**Links:** [Submissions](https://leetcode.com/problems/validate-stack-sequences/) | [Solutions](https://leetcode.com/problems/validate-stack-sequences/)
