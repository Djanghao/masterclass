# [2775. Undefined to Null](https://leetcode.com/problems/undefined-to-null/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| JavaScript | Medium | 15 | 1 |




## Description

Given a deeply nested object or array `obj`, return the object `obj` with any `undefined` values replaced by `null`.

`undefined` values are handled differently than `null` values when objects are converted to a JSON string using `JSON.stringify()`. This function helps ensure serialized data is free of unexpected errors.

 

**Example 1:**

```

Input: obj = {&quot;a&quot;: undefined, &quot;b&quot;: 3}
Output: {&quot;a&quot;: null, &quot;b&quot;: 3}
Explanation: The value for obj.a has been changed from undefined to null

```

**Example 2:**

```

Input: obj = {&quot;a&quot;: undefined, &quot;b&quot;: [&quot;a&quot;, undefined]}
Output: {&quot;a&quot;: null,&quot;b&quot;: [&quot;a&quot;, null]}
Explanation: The values for obj.a and obj.b[1] have been changed from undefined to null

```

 

**Constraints:**

	- `obj` is a valid JSON object or array

	- `2 <= JSON.stringify(obj).length <= 10^5`

---

**Links:** [Submissions](https://leetcode.com/problems/undefined-to-null/) | [Solutions](https://leetcode.com/problems/undefined-to-null/)
