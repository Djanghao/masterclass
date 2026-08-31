# [2648. Generate Fibonacci Sequence](https://leetcode.com/problems/generate-fibonacci-sequence/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| JavaScript | Easy | 278 | 31 |



**Companies:** `google`

## Description

Write a generator function that returns a generator object which yields the **fibonacci sequence**.

The **fibonacci sequence** is defined by the relation `X_n = X_n-1 + X_n-2`.

The first few numbers of the series are `0, 1, 1, 2, 3, 5, 8, 13`.

 

**Example 1:**

```

Input: callCount = 5
Output: [0,1,1,2,3]
Explanation:
const gen = fibGenerator();
gen.next().value; // 0
gen.next().value; // 1
gen.next().value; // 1
gen.next().value; // 2
gen.next().value; // 3

```

**Example 2:**

```

Input: callCount = 0
Output: []
Explanation: gen.next() is never called so nothing is outputted

```

 

**Constraints:**

	- `0 <= callCount <= 50`

---

**Links:** [Submissions](https://leetcode.com/problems/generate-fibonacci-sequence/) | [Solutions](https://leetcode.com/problems/generate-fibonacci-sequence/)
