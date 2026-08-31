# [2630. Memoize II](https://leetcode.com/problems/memoize-ii/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| JavaScript | Hard | 131 | 46 |




## Description

Given a function `fn`, return a **memoized** version of that function.

A **memoized **function is a function that will never be called twice with the same inputs. Instead it will return a cached value.

`fn` can be any function and there are no constraints on what type of values it accepts. Inputs are considered identical if they are `===` to each other.

 

**Example 1:**

```

Input: 
getInputs = () =&gt; [[2,2],[2,2],[1,2]]
fn = function (a, b) { return a + b; }
Output: [{&quot;val&quot;:4,&quot;calls&quot;:1},{&quot;val&quot;:4,&quot;calls&quot;:1},{&quot;val&quot;:3,&quot;calls&quot;:2}]
Explanation:
const inputs = getInputs();
const memoized = memoize(fn);
for (const arr of inputs) {
  memoized(...arr);
}

For the inputs of (2, 2): 2 + 2 = 4, and it required a call to fn().
For the inputs of (2, 2): 2 + 2 = 4, but those inputs were seen before so no call to fn() was required.
For the inputs of (1, 2): 1 + 2 = 3, and it required another call to fn() for a total of 2.

```

**Example 2:**

```

Input: 
getInputs = () =&gt; [[{},{}],[{},{}],[{},{}]] 
fn = function (a, b) { return ({...a, ...b}); }
Output: [{&quot;val&quot;:{},&quot;calls&quot;:1},{&quot;val&quot;:{},&quot;calls&quot;:2},{&quot;val&quot;:{},&quot;calls&quot;:3}]
Explanation:
Merging two empty objects will always result in an empty object. It may seem like there should only be 1&nbsp;call to fn() because of cache-hits, however none of those objects are === to each other.

```

**Example 3:**

```

Input: 
getInputs = () =&gt; { const o = {}; return [[o,o],[o,o],[o,o]]; }
fn = function (a, b) { return ({...a, ...b}); }
Output: [{&quot;val&quot;:{},&quot;calls&quot;:1},{&quot;val&quot;:{},&quot;calls&quot;:1},{&quot;val&quot;:{},&quot;calls&quot;:1}]
Explanation:
Merging two empty objects will always result in an empty object. The 2nd and 3rd third function calls result in a cache-hit. This is because every object passed in is identical.

```

 

**Constraints:**

	- `1 <= inputs.length <= 10^5`

	- `0 <= inputs.flat().length <= 10^5`

	- `inputs[i][j] != NaN`

---

**Links:** [Submissions](https://leetcode.com/problems/memoize-ii/) | [Solutions](https://leetcode.com/problems/memoize-ii/)
