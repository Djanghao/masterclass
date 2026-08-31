# [2759. Convert JSON String to Object](https://leetcode.com/problems/convert-json-string-to-object/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| JavaScript | Hard | 17 | 3 |



**Companies:** `mongodb`

## Description

Given a string `str`, return parsed JSON `parsedStr`. You may assume the `str` is a valid JSON string hence it only includes strings, numbers, arrays, objects, booleans, and null. `str` will not include invisible characters and escape characters. 

Please solve it without using the built-in `JSON.parse` method.

 

**Example 1:**

```

Input: str = &#39;{&quot;a&quot;:2,&quot;b&quot;:[1,2,3]}&#39;
Output: {&quot;a&quot;:2,&quot;b&quot;:[1,2,3]}
Explanation:&nbsp;Returns the object represented by the JSON string.
```

**Example 2:**

```

Input: str = &#39;true&#39;
Output: true
Explanation: Primitive types are valid JSON.
```

**Example 3:**

```

Input: str = &#39;[1,5,&quot;false&quot;,{&quot;a&quot;:2}]&#39;
Output: [1,5,&quot;false&quot;,{&quot;a&quot;:2}]
Explanation: Returns the array represented by the JSON string.
```

 

**Constraints:**

	- `str` is a valid JSON string

	- `1 <= str.length <= 10^5`

---

**Links:** [Submissions](https://leetcode.com/problems/convert-json-string-to-object/) | [Solutions](https://leetcode.com/problems/convert-json-string-to-object/)
