# [2754. Bind Function to Context](https://leetcode.com/problems/bind-function-to-context/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| JavaScript | Medium | 17 | 0 |




## Description

Enhance all functions to have the `bindPolyfill` method. When `bindPolyfill` is called with a passed object `obj`, that object becomes the `this` context for the function.

For example, if you had the code:

```

function f() {
  console.log(&#39;My context is &#39; + this.ctx);
}
f();

```

The output would be `"My context is undefined"`. However, if you bound the function:

```

function f() {
  console.log(&#39;My context is &#39; + this.ctx);
}
const boundFunc = f.boundPolyfill({ &quot;ctx&quot;: &quot;My Object&quot; })
boundFunc();

```

The output should be `"My context is My Object"`.

You may assume that a single non-null object will be passed to the `bindPolyfill` method.

Please solve it without the built-in `Function.bind` method.

 

**Example 1:**

```

Input: 
fn = function f(multiplier) { 
&nbsp; return this.x * multiplier; 
}
obj = {&quot;x&quot;: 10}
inputs = [5]
Output: 50
Explanation:
const boundFunc = f.bindPolyfill({&quot;x&quot;: 10});
boundFunc(5); // 50
A multiplier of 5 is passed as a parameter.
The context is set to {&quot;x&quot;: 10}.
Multiplying those two numbers yields 50.
```

**Example 2:**

```

Input: 
fn = function speak() { 
&nbsp; return &quot;My name is &quot; + this.name; 
}
obj = {&quot;name&quot;: &quot;Kathy&quot;}
inputs = []
Output: &quot;My name is Kathy&quot;
Explanation:
const boundFunc = f.bindPolyfill({&quot;name&quot;: &quot;Kathy&quot;});
boundFunc(); // &quot;My name is Kathy&quot;

```

 

**Constraints:**

	- `obj` is a non-null object

	- `0 <= inputs.length <= 100`

 

**Can you solve it without using any built-in methods?**

---

**Links:** [Submissions](https://leetcode.com/problems/bind-function-to-context/) | [Solutions](https://leetcode.com/problems/bind-function-to-context/)
