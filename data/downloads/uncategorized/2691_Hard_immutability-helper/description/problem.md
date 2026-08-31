# [2691. Immutability Helper](https://leetcode.com/problems/immutability-helper/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| JavaScript | Hard | 11 | 8 |




## Description

Creating clones of immutable objects with minor alterations can be a tedious process. Write a class `ImmutableHelper` that serves as a tool to help with this requirement. The constructor accepts an immutable object `obj` which will be a JSON object or array.

The class has a single method `produce` which accepts a function `mutator`. The function returns a new object which is similar to the original except it has those mutations applied.

`mutator` accepts a **proxied** version of `obj`. A user of this function can (appear to) mutate this object, but the original object `obj` should not actually be effected.

For example, a user could write code like this:

```

const originalObj = {&quot;x&quot;: 5};
const helper = new ImmutableHelper(originalObj);
const newObj = helper.produce((proxy) =&gt; {
  proxy.x = proxy.x + 1;
});
console.log(originalObj); // {&quot;x&quot;: 5}
console.log(newObj); // {&quot;x&quot;: 6}
```

Properties of the `mutator` function:

	- It will always return `undefined`.

	- It will never access keys that don't exist.

	- It will never delete keys (`delete obj.key`)

	- It will never call methods on a proxied object (`push`, `shift`, etc).

	- It will never set keys to objects (`proxy.x = {}`)

**Note on how the solution will be tested:** the solution validator will only analyze differences between what was returned and the original `obj`. Doing a full comparison would be too computationally expensive. Also, any mutations to the original object will result in a wrong answer.

 

**Example 1:**

```

Input: 
obj = {&quot;val&quot;: 10}, 
mutators = [
&nbsp; proxy =&gt; { proxy.val += 1; },
&nbsp; proxy =&gt; { proxy.val -= 1; }
]
Output: 
[
  {&quot;val&quot;: 11},
&nbsp; {&quot;val&quot;: 9}
]
Explanation:
const helper = new ImmutableHelper({val: 10});
helper.produce(proxy =&gt; { proxy.val += 1; }); // { &quot;val&quot;: 11 }
helper.produce(proxy =&gt; { proxy.val -= 1; }); // { &quot;val&quot;: 9 }

```

**Example 2:**

```

Input: 
obj = {&quot;arr&quot;: [1, 2, 3]} 
mutators = [
&nbsp;proxy =&gt; { 
&nbsp;  proxy.arr[0] = 5; 
&nbsp;  proxy.newVal = proxy.arr[0] + proxy.arr[1];
 }
]
Output: 
[
  {&quot;arr&quot;: [5, 2, 3], &quot;newVal&quot;: 7 } 
]
Explanation: Two edits were made to the original array. The first element in the array was to set 5. Then a new key was added with a value of 7.

```

**Example 3:**

```

Input: 
obj = {&quot;obj&quot;: {&quot;val&quot;: {&quot;x&quot;: 10, &quot;y&quot;: 20}}}
mutators = [
&nbsp; proxy =&gt; { 
&nbsp;   let data = proxy.obj.val; 
&nbsp;   let temp = data.x; 
&nbsp;   data.x = data.y; 
&nbsp;   data.y = temp; 
&nbsp; }
]
Output: 
[
  {&quot;obj&quot;: {&quot;val&quot;: {&quot;x&quot;: 20, &quot;y&quot;: 10}}}
]
Explanation: The values of &quot;x&quot; and &quot;y&quot; were swapped.

```

 

**Constraints:**

	- `2 <= JSON.stringify(obj).length <= 4 * 10^5`

	- `mutators` is an array of functions

	- `total calls to produce() < 10^5`

---

**Links:** [Submissions](https://leetcode.com/problems/immutability-helper/) | [Solutions](https://leetcode.com/problems/immutability-helper/)
