# [2011. Final Value of Variable After Performing Operations](https://leetcode.com/problems/final-value-of-variable-after-performing-operations/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Easy | 1993 | 213 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`string`](https://leetcode.com/tag/string), [`simulation`](https://leetcode.com/tag/simulation)

**Companies:** `google`, `amazon`

## Description

There is a programming language with only **four** operations and **one** variable `X`:

	- `++X` and `X++` **increments** the value of the variable `X` by `1`.

	- `--X` and `X--` **decrements** the value of the variable `X` by `1`.

Initially, the value of `X` is `0`.

Given an array of strings `operations` containing a list of operations, return *the **final **value of *`X` *after performing all the operations*.

 

**Example 1:**

```

Input: operations = [&quot;--X&quot;,&quot;X++&quot;,&quot;X++&quot;]
Output: 1
Explanation:&nbsp;The operations are performed as follows:
Initially, X = 0.
--X: X is decremented by 1, X =  0 - 1 = -1.
X++: X is incremented by 1, X = -1 + 1 =  0.
X++: X is incremented by 1, X =  0 + 1 =  1.

```

**Example 2:**

```

Input: operations = [&quot;++X&quot;,&quot;++X&quot;,&quot;X++&quot;]
Output: 3
Explanation: The operations are performed as follows:
Initially, X = 0.
++X: X is incremented by 1, X = 0 + 1 = 1.
++X: X is incremented by 1, X = 1 + 1 = 2.
X++: X is incremented by 1, X = 2 + 1 = 3.

```

**Example 3:**

```

Input: operations = [&quot;X++&quot;,&quot;++X&quot;,&quot;--X&quot;,&quot;X--&quot;]
Output: 0
Explanation:&nbsp;The operations are performed as follows:
Initially, X = 0.
X++: X is incremented by 1, X = 0 + 1 = 1.
++X: X is incremented by 1, X = 1 + 1 = 2.
--X: X is decremented by 1, X = 2 - 1 = 1.
X--: X is decremented by 1, X = 1 - 1 = 0.

```

 

**Constraints:**

	- `1 <= operations.length <= 100`

	- `operations[i]` will be either `"++X"`, `"X++"`, `"--X"`, or `"X--"`.

---

**Links:** [Submissions](https://leetcode.com/problems/final-value-of-variable-after-performing-operations/) | [Solutions](https://leetcode.com/problems/final-value-of-variable-after-performing-operations/)
