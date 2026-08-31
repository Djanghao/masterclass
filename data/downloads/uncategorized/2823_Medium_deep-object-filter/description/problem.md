# [2823. Deep Object Filter](https://leetcode.com/problems/deep-object-filter/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| JavaScript | Medium | 15 | 3 |




## Description

Given an object or an array `obj` and a function `fn`, return a filtered object or array `filteredObject`. 

Function `deepFilter` should perform a deep filter operation on the `obj`. The deep filter operation should remove properties for which the output of the filter function `fn` is `false`, as well as any empty objects or arrays that remain after the keys have been removed.

If the deep filter operation results in an empty object or array, with no remaining properties, `deepFilter` should return `undefined` to indicate that there is no valid data left in the `filteredObject`.

 

**Example 1:**

```

Input: 
obj = [-5, -4, -3, -2, -1, 0, 1], 
fn = (x) =&gt; x &gt; 0
Output: [1]
Explanation: All values that were not greater than 0 were removed.

```

**Example 2:**

```

Input: 
obj = {&quot;a&quot;: 1, &quot;b&quot;: &quot;2&quot;, &quot;c&quot;: 3, &quot;d&quot;: &quot;4&quot;, &quot;e&quot;: 5, &quot;f&quot;: 6, &quot;g&quot;: {&quot;a&quot;: 1}}, 
fn = (x) =&gt; typeof x === &quot;string&quot;
Output: {&quot;b&quot;:&quot;2&quot;,&quot;d&quot;:&quot;4&quot;}
Explanation: All keys with values that were not a string were removed. When the object keys were removed during the filtering process, any resulting empty objects were also removed.

```

**Example 3:**

```

Input: 
obj = [-1, [-1, -1, 5, -1, 10], -1, [-1], [-5]], 
fn = (x) =&gt; x &gt; 0
Output: [[5,10]]
Explanation: All values that were not greater than 0 were removed. When the values were removed during the filtering process, any resulting empty arrays were also removed.
```

**Example 4:**

```

Input: 
obj = [[[[5]]]], 
fn = (x) =&gt; Array.isArray(x)
Output: undefined

```

 

**Constraints:**

	- `fn` is a function that returns a boolean value

	- `obj` is a valid JSON object or array

	- `2 <= JSON.stringify(obj).length <= 10^5`

---

**Links:** [Submissions](https://leetcode.com/problems/deep-object-filter/) | [Solutions](https://leetcode.com/problems/deep-object-filter/)
