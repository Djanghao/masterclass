# [2722. Join Two Arrays by ID](https://leetcode.com/problems/join-two-arrays-by-id/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| JavaScript | Medium | 229 | 64 |



**Companies:** `google`

## Description

Given two arrays `arr1` and `arr2`, return a new array `joinedArray`. All the objects in each of the two inputs arrays will contain an `id` field that has an integer value. 

`joinedArray` is an array formed by merging `arr1` and `arr2` based on their `id` key. The length of `joinedArray` should be the length of unique values of `id`. The returned array should be sorted in **ascending** order based on the `id` key.

If a given `id` exists in one array but not the other, the single object with that `id` should be included in the result array without modification.

If two objects share an `id`, their properties should be merged into a single object:

	- If a key only exists in one object, that single key-value pair should be included in the object.

	- If a key is included in both objects, the value in the object from `arr2` should override the value from `arr1`.

 

**Example 1:**

```

Input: 
arr1 = [
&nbsp;   {&quot;id&quot;: 1, &quot;x&quot;: 1},
&nbsp;   {&quot;id&quot;: 2, &quot;x&quot;: 9}
], 
arr2 = [
    {&quot;id&quot;: 3, &quot;x&quot;: 5}
]
Output: 
[
&nbsp;   {&quot;id&quot;: 1, &quot;x&quot;: 1},
&nbsp;   {&quot;id&quot;: 2, &quot;x&quot;: 9},
    {&quot;id&quot;: 3, &quot;x&quot;: 5}
]
Explanation: There are no duplicate ids so arr1 is simply concatenated with arr2.

```

**Example 2:**

```

Input: 
arr1 = [
    {&quot;id&quot;: 1, &quot;x&quot;: 2, &quot;y&quot;: 3},
    {&quot;id&quot;: 2, &quot;x&quot;: 3, &quot;y&quot;: 6}
], 
arr2 = [
    {&quot;id&quot;: 2, &quot;x&quot;: 10, &quot;y&quot;: 20},
    {&quot;id&quot;: 3, &quot;x&quot;: 0, &quot;y&quot;: 0}
]
Output: 
[
    {&quot;id&quot;: 1, &quot;x&quot;: 2, &quot;y&quot;: 3},
    {&quot;id&quot;: 2, &quot;x&quot;: 10, &quot;y&quot;: 20},
&nbsp;   {&quot;id&quot;: 3, &quot;x&quot;: 0, &quot;y&quot;: 0}
]
Explanation: The two objects with id=1 and id=3 are included in the result array without modifiction. The two objects with id=2 are merged together. The keys from arr2 override the values in arr1.

```

**Example 3:**

```

Input: 
arr1 = [
    {&quot;id&quot;: 1, &quot;b&quot;: {&quot;b&quot;: 94},&quot;v&quot;: [4, 3], &quot;y&quot;: 48}
]
arr2 = [
    {&quot;id&quot;: 1, &quot;b&quot;: {&quot;c&quot;: 84}, &quot;v&quot;: [1, 3]}
]
Output: [
    {&quot;id&quot;: 1, &quot;b&quot;: {&quot;c&quot;: 84}, &quot;v&quot;: [1, 3], &quot;y&quot;: 48}
]
Explanation: The two objects with id=1 are merged together. For the keys &quot;b&quot; and &quot;v&quot; the values from arr2 are used. Since the key &quot;y&quot; only exists in arr1, that value is taken form arr1.
```

 

**Constraints:**

	- `arr1` and `arr2` are valid JSON arrays

	- Each object in `arr1` and `arr2` has a unique integer `id` key

	- `2 <= JSON.stringify(arr1).length <= 10^6`

	- `2 <= JSON.stringify(arr2).length <= 10^6`

---

**Links:** [Submissions](https://leetcode.com/problems/join-two-arrays-by-id/) | [Solutions](https://leetcode.com/problems/join-two-arrays-by-id/)
