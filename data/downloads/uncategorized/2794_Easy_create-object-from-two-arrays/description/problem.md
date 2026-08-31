# [2794. Create Object from Two Arrays](https://leetcode.com/problems/create-object-from-two-arrays/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| JavaScript | Easy | 10 | 3 |




## Description

Given two arrays `keysArr` and `valuesArr`, return a new object `obj`. Each key-value pair in `obj` should come from `keysArr[i]` and `valuesArr[i]`.

If a duplicate key exists at a previous index, that key-value should be excluded. In other words, only the first key should be added to the object.

If the key is not a string, it should be converted into a string by calling `String()` on it.

 

**Example 1:**

```

Input: keysArr = [&quot;a&quot;, &quot;b&quot;, &quot;c&quot;], valuesArr = [1, 2, 3]
Output: {&quot;a&quot;: 1, &quot;b&quot;: 2, &quot;c&quot;: 3}
Explanation: The keys &quot;a&quot;, &quot;b&quot;, and &quot;c&quot; are paired with the values 1, 2, and 3 respectively.

```

**Example 2:**

```

Input: keysArr = [&quot;1&quot;, 1, false], valuesArr = [4, 5, 6]
Output: {&quot;1&quot;: 4, &quot;false&quot;: 6}
Explanation: First, all the elements in keysArr are converted into strings. We can see there are two occurrences of &quot;1&quot;. The value associated with the first occurrence of &quot;1&quot; is used: 4.

```

**Example 3:**

```

Input: keysArr = [], valuesArr = []
Output: {}
Explanation: There are no keys so an empty object is returned.

```

 

**Constraints:**

	- `keysArr` and `valuesArr` are valid JSON arrays

	- `2 <= JSON.stringify(keysArr).length, JSON.stringify(valuesArr).length <= 5 * 10^5`

	- `keysArr.length === valuesArr.length`

---

**Links:** [Submissions](https://leetcode.com/problems/create-object-from-two-arrays/) | [Solutions](https://leetcode.com/problems/create-object-from-two-arrays/)
