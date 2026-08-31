# [2692. Make Object Immutable](https://leetcode.com/problems/make-object-immutable/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| JavaScript | Medium | 17 | 0 |




## Description

Write a function that takes an object `obj` and returns a new **immutable** version of this object.

An **immutable **object is an object that can't be altered and will throw an error if any attempt is made to alter it.

There are three types of error messages that can be produced from this new object.

	- Attempting to modify a key on the object will result in this error message: ``Error Modifying: ${key}``.

	- Attempting to modify an index on an array will result in this error message: ``Error Modifying Index: ${index}``.

	- Attempting to call a method that mutates an array will result in this error message: ``Error Calling Method: ${methodName}``. You may assume the only methods that can mutate an array are `['pop', 'push', 'shift', 'unshift', 'splice', 'sort', 'reverse']`.

`obj` is a valid JSON object or array, meaning it is the output of `JSON.parse()`.

Note that a string literal should be thrown, not an `Error`.

 

**Example 1:**

```

Input: 
obj = {
&nbsp; &quot;x&quot;: 5
}
fn = (obj) =&gt; { 
&nbsp; obj.x = 5;
&nbsp; return obj.x;
}
Output: {&quot;value&quot;: null, &quot;error&quot;: &quot;Error Modifying:&nbsp;x&quot;}
Explanation: Attempting to modify a key on an object resuts in a thrown error. Note that it doesn&#39;t matter that the value was set to the same value as it was before.

```

**Example 2:**

```

Input: 
obj = [1, 2, 3]
fn = (arr) =&gt; { 
&nbsp; arr[1] = {}; 
&nbsp; return arr[2]; 
}
Output: {&quot;value&quot;: null, &quot;error&quot;: &quot;Error Modifying&nbsp;Index: 1&quot;}
Explanation: Attempting to modify an array results in a thrown error.

```

**Example 3:**

```

Input: 
obj = {
&nbsp; &quot;arr&quot;: [1, 2, 3]
}
fn = (obj) =&gt; { 
&nbsp; obj.arr.push(4);
&nbsp; return 42;
}
Output: { &quot;value&quot;: null, &quot;error&quot;: &quot;Error Calling Method: push&quot;}
Explanation: Calling a method that can result in a mutation results in a thrown error.

```

**Example 4:**

```

Input: 
obj = {
&nbsp; &quot;x&quot;: 2,
&nbsp; &quot;y&quot;: 2
}
fn = (obj) =&gt; { 
&nbsp; return Object.keys(obj);
}
Output: {&quot;value&quot;: [&quot;x&quot;, &quot;y&quot;], &quot;error&quot;: null}
Explanation: No mutations were attempted so the function returns as normal.

```

 

**Constraints:**

	- `obj` is a valid JSON object or array

	- `2 <= JSON.stringify(obj).length <= 10^5`

---

**Links:** [Submissions](https://leetcode.com/problems/make-object-immutable/) | [Solutions](https://leetcode.com/problems/make-object-immutable/)
