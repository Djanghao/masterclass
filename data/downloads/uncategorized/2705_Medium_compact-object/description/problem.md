# [2705. Compact Object](https://leetcode.com/problems/compact-object/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| JavaScript | Medium | 221 | 25 |




## Description

Given an object or array `obj`, return a **compact object**.

A **compact object** is the same as the original object, except with keys containing **falsy** values removed. This operation applies to the object and any nested objects. Arrays are considered objects where the indices are keys. A value is considered **falsy** when `Boolean(value)` returns `false`.

You may assume the `obj` is the output of `JSON.parse`. In other words, it is valid JSON.

 

**Example 1:**

```

Input: obj = [null, 0, false, 1]
Output: [1]
Explanation: All falsy values have been removed from the array.

```

**Example 2:**

```

Input: obj = {&quot;a&quot;: null, &quot;b&quot;: [false, 1]}
Output: {&quot;b&quot;: [1]}
Explanation: obj[&quot;a&quot;] and obj[&quot;b&quot;][0] had falsy values and were removed.
```

**Example 3:**

```

Input: obj = [null, 0, 5, [0], [false, 16]]
Output: [5, [], [16]]
Explanation: obj[0], obj[1], obj[3][0], and obj[4][0] were falsy and removed.

```

 

**Constraints:**

	- `obj` is a valid JSON object

	- `2 <= JSON.stringify(obj).length <= 10^6`

---

**Links:** [Submissions](https://leetcode.com/problems/compact-object/) | [Solutions](https://leetcode.com/problems/compact-object/)
