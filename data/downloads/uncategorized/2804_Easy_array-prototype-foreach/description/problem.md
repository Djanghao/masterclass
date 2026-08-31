# [2804. Array Prototype ForEach](https://leetcode.com/problems/array-prototype-foreach/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| JavaScript | Easy | 9 | 10 |




## Description

Write your version of method `forEach` that enhances all arrays such that you can call the `array.forEach(callback, context)` method on any array and it will execute `callback` on each element of the array. Method `forEach` should not return anything.

`callback` accepts the following arguments:

	- `currentValue` - represents the current element being processed in the array. It is the value of the element in the current iteration.

	- `index` - represents the index of the current element being processed in the array.

	- `array` - represents the array itself, allowing access to the entire array within the callback function.

The `context` is the object that should be passed as the function context parameter to the `callback` function, ensuring that the `this` keyword within the `callback` function refers to this `context` object.

Try to implement it without using the built-in array methods.

 

**Example 1:**

```

Input: 
arr = [1,2,3], 
callback = (val, i, arr) =&gt; arr[i] = val * 2, 
context = {&quot;context&quot;:true}
Output: [2,4,6]
Explanation: 
arr.forEach(callback, context)&nbsp; 
console.log(arr) // [2,4,6]

The callback is executed on each element of the array.

```

**Example 2:**

```

Input: 
arr = [true, true, false, false], 
callback = (val, i, arr) =&gt; arr[i] = this, 
context = {&quot;context&quot;: false}
Output: [{&quot;context&quot;:false},{&quot;context&quot;:false},{&quot;context&quot;:false},{&quot;context&quot;:false}]
Explanation: 
arr.forEach(callback, context)&nbsp;
console.log(arr) // [{&quot;context&quot;:false},{&quot;context&quot;:false},{&quot;context&quot;:false},{&quot;context&quot;:false}]

The callback is executed on each element of the array with the right context.

```

**Example 3:**

```

Input: 
arr = [true, true, false, false], 
callback = (val, i, arr) =&gt; arr[i] = !val, 
context = {&quot;context&quot;: 5}
Output: [false,false,true,true]

```

 

**Constraints:**

	- `arr` is a valid JSON array

	- `context` is a valid JSON object

	- `fn` is a function

	- `0 <= arr.length <= 10^5`

---

**Links:** [Submissions](https://leetcode.com/problems/array-prototype-foreach/) | [Solutions](https://leetcode.com/problems/array-prototype-foreach/)
