# [2690. Infinite Method Object](https://leetcode.com/problems/infinite-method-object/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| JavaScript | Easy | 32 | 9 |




## Description

Write a function that returns an **infinite-method**** object**.

An **infinite-method**** object** is defined as an object that allows you to call any method and it will always return the name of the method.

For example, if you execute `obj.abc123()`, it will return `"abc123"`.

 

**Example 1:**

```

Input: method = &quot;abc123&quot;
Output: &quot;abc123&quot;
Explanation:
const obj = createInfiniteObject();
obj[&#39;abc123&#39;](); // &quot;abc123&quot;
The returned string should always match the method name.
```

**Example 2:**

```

Input: method = &quot;.-qw73n|^2It&quot;
Output: &quot;.-qw73n|^2It&quot;
Explanation: The returned string should always match the method name.
```

 

**Constraints:**

	- `0 <= method.length <= 1000`

---

**Links:** [Submissions](https://leetcode.com/problems/infinite-method-object/) | [Solutions](https://leetcode.com/problems/infinite-method-object/)
