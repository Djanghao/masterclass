# [2633. Convert Object to JSON String](https://leetcode.com/problems/convert-object-to-json-string/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| JavaScript | Medium | 209 | 12 |



**Companies:** `google`

## Description

Given a value, return a valid JSON string of that value. The value can be a string, number, array, object, boolean, or null. The returned string should not include extra spaces. The order of keys should be the same as the order returned by `Object.keys()`.

Please solve it without using the built-in `JSON.stringify` method.

 

**Example 1:**

```

Input: object = {&quot;y&quot;:1,&quot;x&quot;:2}
Output: {&quot;y&quot;:1,&quot;x&quot;:2}
Explanation: 
Return the JSON representation.
Note that the order of keys should be the same as the order returned by Object.keys().
```

**Example 2:**

```

Input: object = {&quot;a&quot;:&quot;str&quot;,&quot;b&quot;:-12,&quot;c&quot;:true,&quot;d&quot;:null}
Output: {&quot;a&quot;:&quot;str&quot;,&quot;b&quot;:-12,&quot;c&quot;:true,&quot;d&quot;:null}
Explanation:
The primitives of JSON are strings, numbers, booleans, and null.

```

**Example 3:**

```

Input: object = {&quot;key&quot;:{&quot;a&quot;:1,&quot;b&quot;:[{},null,&quot;Hello&quot;]}}
Output: {&quot;key&quot;:{&quot;a&quot;:1,&quot;b&quot;:[{},null,&quot;Hello&quot;]}}
Explanation:
Objects and arrays can include other objects and arrays.

```

**Example 4:**

```

Input: object = true
Output: true
Explanation:
Primitive types are valid inputs.
```

 

**Constraints:**

	- `value` is a valid JSON value

	- `1 <= JSON.stringify(object).length <= 10^5`

	- `maxNestingLevel <= 1000`

	- all strings contain only alphanumeric characters

---

**Links:** [Submissions](https://leetcode.com/problems/convert-object-to-json-string/) | [Solutions](https://leetcode.com/problems/convert-object-to-json-string/)
