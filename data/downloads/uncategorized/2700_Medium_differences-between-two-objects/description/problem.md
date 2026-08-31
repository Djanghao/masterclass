# [2700. Differences Between Two Objects](https://leetcode.com/problems/differences-between-two-objects/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| JavaScript | Medium | 146 | 31 |



**Companies:** `google`

## Description

Write a function that accepts two deeply nested objects or arrays `obj1` and `obj2` and returns a new object representing their differences.

The function should compare the properties of the two objects and identify any changes. The returned object should only contains keys where the value is different from `obj1` to `obj2`.

For each changed key, the value should be represented as an array `[obj1 value, obj2 value]`. Keys that exist in one object but not in the other should not be included in the returned object. The end result should be a deeply nested object where each leaf value is a difference array.

When comparing two arrays, the indices of the arrays are considered to be their keys. 

You may assume that both objects are the output of `JSON.parse`.

 

**Example 1:**

```

Input: 
obj1 = {}
obj2 = {
&nbsp; &quot;a&quot;: 1, 
  &quot;b&quot;: 2
}
Output: {}
Explanation: There were no modifications made to obj1. New keys &quot;a&quot; and &quot;b&quot; appear in obj2, but keys that are added or removed should be ignored.

```

**Example 2:**

```

Input: 
obj1 = {
&nbsp; &quot;a&quot;: 1,
&nbsp; &quot;v&quot;: 3,
&nbsp; &quot;x&quot;: [],
&nbsp; &quot;z&quot;: {
&nbsp; &nbsp; &quot;a&quot;: null
&nbsp; }
}
obj2 = {
&nbsp; &quot;a&quot;: 2,
&nbsp; &quot;v&quot;: 4,
&nbsp; &quot;x&quot;: [],
&nbsp; &quot;z&quot;: {
&nbsp; &nbsp; &quot;a&quot;: 2
&nbsp; }
}
Output: 
{
&nbsp; &quot;a&quot;: [1, 2],
  &quot;v&quot;: [3, 4],
&nbsp; &quot;z&quot;: {
&nbsp;   &quot;a&quot;: [null, 2]
&nbsp; }
}
Explanation: The keys &quot;a&quot;, &quot;v&quot;, and &quot;z&quot; all had changes applied. &quot;a&quot; was changed from 1 to 2. &quot;v&quot; was changed from 3 to 4. &quot;z&quot; had a change applied to a child object. &quot;z.a&quot; was changed from null to 2.

```

**Example 3:**

```

Input: 
obj1 = {
&nbsp; &quot;a&quot;: 5, 
&nbsp; &quot;v&quot;: 6, 
&nbsp; &quot;z&quot;: [1, 2, 4, [2, 5, 7]]
}
obj2 = {
&nbsp; &quot;a&quot;: 5, 
&nbsp; &quot;v&quot;: 7, 
&nbsp; &quot;z&quot;: [1, 2, 3, [1]]
}
Output: 
{
&nbsp; &quot;v&quot;: [6, 7],
&nbsp; &quot;z&quot;: {
&nbsp;   &quot;2&quot;: [4, 3],
&nbsp;   &quot;3&quot;: {
&nbsp;     &quot;0&quot;: [2, 1]
&nbsp;   }
&nbsp; }
}
Explanation: In obj1 and obj2, the keys &quot;v&quot; and &quot;z&quot; have different assigned values. &quot;a&quot; is ignored because the value is unchanged. In the key &quot;z&quot;, there is a nested array. Arrays are treated like objects where the indices are keys. There were two alterations to the the array: z[2] and z[3][0]. z[0] and z[1] were unchanged and thus not included. z[3][1] and z[3][2] were removed and thus not included.

```

**Example 4:**

```

Input: 
obj1 = {
&nbsp; &quot;a&quot;: {&quot;b&quot;: 1}, 
}
obj2 = {
&nbsp; &quot;a&quot;: [5],
}
Output: 
{
  &quot;a&quot;: [{&quot;b&quot;: 1}, [5]]
}
Explanation: The key &quot;a&quot; exists in both objects. Since the two associated values have different types, they are placed in the difference array.
```

**Example 5:**

```

Input: 
obj1 = {
&nbsp; &quot;a&quot;: [1, 2, {}], 
&nbsp; &quot;b&quot;: false
}
obj2 = { &nbsp; 
&nbsp; &quot;b&quot;: false,
&nbsp; &quot;a&quot;: [1, 2, {}]
}
Output: 
{}
Explanation: Apart from a different ordering of keys, the two objects are identical so an empty object is returned.
```

 

**Constraints:**

	- `obj1` and `obj2` are valid JSON objects or arrays

	- `2 <= JSON.stringify(obj1).length <= 10^4`

	- `2 <= JSON.stringify(obj2).length <= 10^4`

---

**Links:** [Submissions](https://leetcode.com/problems/differences-between-two-objects/) | [Solutions](https://leetcode.com/problems/differences-between-two-objects/)
