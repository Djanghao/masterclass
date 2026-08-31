# [2675. Array of Objects to Matrix](https://leetcode.com/problems/array-of-objects-to-matrix/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| JavaScript | Hard | 134 | 73 |




## Description

Write a function that converts an array of objects `arr` into a matrix `m`.

`arr` is an array of objects or arrays. Each item in the array can be deeply nested with child arrays and child objects. It can also contain numbers, strings, booleans, and null values.

The first row `m` should be the column names. If there is no nesting, the column names are the unique keys within the objects. If there is nesting, the column names are the respective paths in the object separated by `"."`.

Each of the remaining rows corresponds to an object in `arr`. Each value in the matrix corresponds to a value in an object. If a given object doesn't contain a value for a given column, the cell should contain an empty string `""`.

The columns in the matrix should be in **lexographically ascending** order.

 

**Example 1:**

```

Input: 
arr = [
&nbsp; {&quot;b&quot;: 1, &quot;a&quot;: 2},
&nbsp; {&quot;b&quot;: 3, &quot;a&quot;: 4}
]
Output: 
[
&nbsp; [&quot;a&quot;, &quot;b&quot;],
&nbsp; [2, 1],
&nbsp; [4, 3]
]

Explanation:
There are two unique column names in the two objects: &quot;a&quot; and &quot;b&quot;.
&quot;a&quot; corresponds with [2, 4].
&quot;b&quot; coresponds with [1, 3].

```

**Example 2:**

```

Input: 
arr = [
&nbsp; {&quot;a&quot;: 1, &quot;b&quot;: 2},
&nbsp; {&quot;c&quot;: 3, &quot;d&quot;: 4},
&nbsp; {}
]
Output: 
[
&nbsp; [&quot;a&quot;, &quot;b&quot;, &quot;c&quot;, &quot;d&quot;],
&nbsp; [1, 2, &quot;&quot;, &quot;&quot;],
&nbsp; [&quot;&quot;, &quot;&quot;, 3, 4],
&nbsp; [&quot;&quot;, &quot;&quot;, &quot;&quot;, &quot;&quot;]
]

Explanation:
There are 4 unique column names: &quot;a&quot;, &quot;b&quot;, &quot;c&quot;, &quot;d&quot;.
The first object has values associated with &quot;a&quot; and &quot;b&quot;.
The second object has values associated with &quot;c&quot; and &quot;d&quot;.
The third object has no keys, so it is just a row of empty strings.

```

**Example 3:**

```

Input: 
arr = [
&nbsp; {&quot;a&quot;: {&quot;b&quot;: 1, &quot;c&quot;: 2}},
&nbsp; {&quot;a&quot;: {&quot;b&quot;: 3, &quot;d&quot;: 4}}
]
Output: 
[
&nbsp; [&quot;a.b&quot;, &quot;a.c&quot;, &quot;a.d&quot;],
&nbsp; [1, 2, &quot;&quot;],
&nbsp; [3, &quot;&quot;, 4]
]

Explanation:
In this example, the objects are nested. The keys represent the full path to each value separated by periods.
There are three paths: &quot;a.b&quot;, &quot;a.c&quot;, &quot;a.d&quot;.

```

**Example 4:**

```

Input: 
arr = [
&nbsp; [{&quot;a&quot;: null}],
&nbsp; [{&quot;b&quot;: true}],
&nbsp; [{&quot;c&quot;: &quot;x&quot;}]
]
Output: 
[
&nbsp; [&quot;0.a&quot;, &quot;0.b&quot;, &quot;0.c&quot;],
&nbsp; [null, &quot;&quot;, &quot;&quot;],
&nbsp; [&quot;&quot;, true, &quot;&quot;],
&nbsp; [&quot;&quot;, &quot;&quot;, &quot;x&quot;]
]

Explanation:
Arrays are also considered objects with their keys being their indices.
Each array has one element so the keys are &quot;0.a&quot;, &quot;0.b&quot;, and &quot;0.c&quot;.

```

**Example 5:**

```

Input: 
arr = [
  {},
&nbsp; {},
&nbsp; {},
]
Output: 
[
&nbsp; [],
&nbsp; [],
&nbsp; [],
&nbsp; []
]

Explanation:
There are no keys so every row is an empty array.
```

 

**Constraints:**

	- `arr` is a valid JSON array

	- `1 <= arr.length <= 1000`

	- `unique keys <= 1000`

---

**Links:** [Submissions](https://leetcode.com/problems/array-of-objects-to-matrix/) | [Solutions](https://leetcode.com/problems/array-of-objects-to-matrix/)
