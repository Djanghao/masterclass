# [2704. To Be Or Not To Be](https://leetcode.com/problems/to-be-or-not-to-be/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| JavaScript | Easy | 891 | 215 |



**Companies:** `google`, `microsoft`, `bloomberg`, `amazon`, `facebook`, `adobe`

## Description

Write a function `expect` that helps developers test their code. It should take in any value `val` and return an object with the following two functions.

	- `toBe(val)` accepts another value and returns `true` if the two values `===` each other. If they are not equal, it should throw an error `"Not Equal"`.

	- `notToBe(val)` accepts another value and returns `true` if the two values `!==` each other. If they are equal, it should throw an error `"Equal"`.

 

**Example 1:**

```

Input: func = () =&gt; expect(5).toBe(5)
Output: {&quot;value&quot;: true}
Explanation: 5 === 5 so this expression returns true.

```

**Example 2:**

```

Input: func = () =&gt; expect(5).toBe(null)
Output: {&quot;error&quot;: &quot;Not Equal&quot;}
Explanation: 5 !== null so this expression throw the error &quot;Not Equal&quot;.

```

**Example 3:**

```

Input: func = () =&gt; expect(5).notToBe(null)
Output: {&quot;value&quot;: true}
Explanation: 5 !== null so this expression returns true.

```

---

**Links:** [Submissions](https://leetcode.com/problems/to-be-or-not-to-be/) | [Solutions](https://leetcode.com/problems/to-be-or-not-to-be/)
