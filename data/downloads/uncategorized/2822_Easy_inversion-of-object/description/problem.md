# [2822. Inversion of Object](https://leetcode.com/problems/inversion-of-object/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| JavaScript | Easy | 17 | 1 |




## Description

Given an object or an array `obj`, return an inverted object or array `invertedObj`.

The `invertedObj` should have the keys of `obj` as values and the values of `obj` as keys. The indices of array should be treated as keys.

The function should handle duplicates, meaning that if there are multiple keys in `obj` with the same value, the `invertedObj` should map the value to an array containing all corresponding keys.

It is guaranteed that the values in `obj` are only strings.

 

**Example 1:**

```

Input: obj = {&quot;a&quot;: &quot;1&quot;, &quot;b&quot;: &quot;2&quot;, &quot;c&quot;: &quot;3&quot;, &quot;d&quot;: &quot;4&quot;}
Output: invertedObj = {&quot;1&quot;: &quot;a&quot;, &quot;2&quot;: &quot;b&quot;, &quot;3&quot;: &quot;c&quot;, &quot;4&quot;: &quot;d&quot;}
Explanation: The keys from obj become the values in invertedObj, and the values from obj become the keys in invertedObj.

```

**Example 2:**

```

Input: obj = {&quot;a&quot;: &quot;1&quot;, &quot;b&quot;: &quot;2&quot;, &quot;c&quot;: &quot;2&quot;, &quot;d&quot;: &quot;4&quot;}
Output: invertedObj = {&quot;1&quot;: &quot;a&quot;, &quot;2&quot;: [&quot;b&quot;, &quot;c&quot;], &quot;4&quot;: &quot;d&quot;}
Explanation: There are two keys in&nbsp;obj&nbsp;with the same value, the&nbsp;invertedObj mapped the value to an array containing all corresponding keys.
```

**Example 3:**

```

Input: obj = [&quot;1&quot;, &quot;2&quot;, &quot;3&quot;, &quot;4&quot;]
Output: invertedObj = {&quot;1&quot;: &quot;0&quot;, &quot;2&quot;: &quot;1&quot;, &quot;3&quot;: &quot;2&quot;, &quot;4&quot;: &quot;3&quot;}
Explanation: Arrays are also objects therefore array has changed to an object and the keys (indices) from obj become the values in invertedObj, and the values from obj become the keys in invertedObj.

```

 

**Constraints:**

	- `obj` is a valid JSON object or array

	- `typeof obj[key] === "string"`

	- `2 <= JSON.stringify(obj).length <= 10^5`

---

**Links:** [Submissions](https://leetcode.com/problems/inversion-of-object/) | [Solutions](https://leetcode.com/problems/inversion-of-object/)
