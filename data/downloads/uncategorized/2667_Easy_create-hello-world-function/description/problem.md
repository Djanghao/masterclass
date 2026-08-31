# [2667. Create Hello World Function](https://leetcode.com/problems/create-hello-world-function/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| JavaScript | Easy | 1593 | 223 |



**Companies:** `google`, `amazon`, `bloomberg`, `microsoft`, `facebook`, `yandex`, `apple`, `adobe`, `tcs`

## Description

Write a function `createHelloWorld`. It should return a new function that always returns `"Hello World"`.

 

**Example 1:**

```

Input: args = []
Output: &quot;Hello World&quot;
Explanation:
const f = createHelloWorld();
f(); // &quot;Hello World&quot;

The function returned by createHelloWorld should always return &quot;Hello World&quot;.

```

**Example 2:**

```

Input: args = [{},null,42]
Output: &quot;Hello World&quot;
Explanation:
const f = createHelloWorld();
f({}, null, 42); // &quot;Hello World&quot;

Any arguments could be passed to the function but it should still always return &quot;Hello World&quot;.

```

 

**Constraints:**

	- `0 <= args.length <= 10`

---

**Links:** [Submissions](https://leetcode.com/problems/create-hello-world-function/) | [Solutions](https://leetcode.com/problems/create-hello-world-function/)
