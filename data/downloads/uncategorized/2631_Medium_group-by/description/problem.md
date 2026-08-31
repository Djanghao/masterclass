# [2631. Group By](https://leetcode.com/problems/group-by/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| JavaScript | Medium | 361 | 20 |




## Description

Write code that enhances all arrays such that you can call the `array.groupBy(fn)` method on any array and it will return a **grouped** version of the array.

A **grouped** array is an object where each key is the output of `fn(arr[i])` and each value is an array containing all items in the original array which generate that key.

The provided callback `fn` will accept an item in the array and return a string key.

The order of each value list should be the order the items appear in the array. Any order of keys is acceptable.

Please solve it without lodash's `_.groupBy` function.

 

**Example 1:**

```

Input: 
array = [
&nbsp; {&quot;id&quot;:&quot;1&quot;},
&nbsp; {&quot;id&quot;:&quot;1&quot;},
&nbsp; {&quot;id&quot;:&quot;2&quot;}
], 
fn = function (item) { 
&nbsp; return item.id; 
}
Output: 
{ 
&nbsp; &quot;1&quot;: [{&quot;id&quot;: &quot;1&quot;}, {&quot;id&quot;: &quot;1&quot;}], &nbsp; 
&nbsp; &quot;2&quot;: [{&quot;id&quot;: &quot;2&quot;}] 
}
Explanation:
Output is from array.groupBy(fn).
The selector function gets the &quot;id&quot; out of each item in the array.
There are two objects with an &quot;id&quot; of 1. Both of those objects are put in the first array.
There is one object with an &quot;id&quot; of 2. That object is put in the second array.

```

**Example 2:**

```

Input: 
array = [
&nbsp; [1, 2, 3],
&nbsp; [1, 3, 5],
&nbsp; [1, 5, 9]
]
fn = function (list) { 
&nbsp; return String(list[0]); 
}
Output: 
{ 
&nbsp; &quot;1&quot;: [[1, 2, 3], [1, 3, 5], [1, 5, 9]] 
}
Explanation:
The array can be of any type. In this case, the selector function defines the key as being the first element in the array. 
All the arrays have 1 as their first element so they are grouped together.
{
  &quot;1&quot;: [[1, 2, 3], [1, 3, 5], [1, 5, 9]]
}

```

**Example 3:**

```

Input: 
array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
fn = function (n) { 
&nbsp; return String(n &gt; 5);
}
Output:
{
&nbsp; &quot;true&quot;: [6, 7, 8, 9, 10],
&nbsp; &quot;false&quot;: [1, 2, 3, 4, 5]
}
Explanation:
The selector function splits the array by whether each number is greater than 5.

```

 

**Constraints:**

	- `0 <= array.length <= 10^5`

	- `fn` returns a string

---

**Links:** [Submissions](https://leetcode.com/problems/group-by/) | [Solutions](https://leetcode.com/problems/group-by/)
