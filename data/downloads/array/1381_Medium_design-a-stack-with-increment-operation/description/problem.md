# [1381. Design a Stack With Increment Operation](https://leetcode.com/problems/design-a-stack-with-increment-operation/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 2351 | 111 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`stack`](https://leetcode.com/tag/stack), [`design`](https://leetcode.com/tag/design)

**Companies:** `cloudflare`, `amazon`, `ebay`, `google`, `imc`, `microsoft`

## Description

Design a stack that supports increment operations on its elements.

Implement the `CustomStack` class:

	- `CustomStack(int maxSize)` Initializes the object with `maxSize` which is the maximum number of elements in the stack.

	- `void push(int x)` Adds `x` to the top of the stack if the stack has not reached the `maxSize`.

	- `int pop()` Pops and returns the top of the stack or `-1` if the stack is empty.

	- `void inc(int k, int val)` Increments the bottom `k` elements of the stack by `val`. If there are less than `k` elements in the stack, increment all the elements in the stack.

 

**Example 1:**

```

Input
[&quot;CustomStack&quot;,&quot;push&quot;,&quot;push&quot;,&quot;pop&quot;,&quot;push&quot;,&quot;push&quot;,&quot;push&quot;,&quot;increment&quot;,&quot;increment&quot;,&quot;pop&quot;,&quot;pop&quot;,&quot;pop&quot;,&quot;pop&quot;]
[[3],[1],[2],[],[2],[3],[4],[5,100],[2,100],[],[],[],[]]
Output
[null,null,null,2,null,null,null,null,null,103,202,201,-1]
Explanation
CustomStack stk = new CustomStack(3); // Stack is Empty []
stk.push(1);                          // stack becomes [1]
stk.push(2);                          // stack becomes [1, 2]
stk.pop();                            // return 2 --&gt; Return top of the stack 2, stack becomes [1]
stk.push(2);                          // stack becomes [1, 2]
stk.push(3);                          // stack becomes [1, 2, 3]
stk.push(4);                          // stack still [1, 2, 3], Do not add another elements as size is 4
stk.increment(5, 100);                // stack becomes [101, 102, 103]
stk.increment(2, 100);                // stack becomes [201, 202, 103]
stk.pop();                            // return 103 --&gt; Return top of the stack 103, stack becomes [201, 202]
stk.pop();                            // return 202 --&gt; Return top of the stack 202, stack becomes [201]
stk.pop();                            // return 201 --&gt; Return top of the stack 201, stack becomes []
stk.pop();                            // return -1 --&gt; Stack is empty return -1.

```

 

**Constraints:**

	- `1 <= maxSize, x, k <= 1000`

	- `0 <= val <= 100`

	- At most `1000` calls will be made to each method of `increment`, `push` and `pop` each separately.

---

**Links:** [Submissions](https://leetcode.com/problems/design-a-stack-with-increment-operation/) | [Solutions](https://leetcode.com/problems/design-a-stack-with-increment-operation/)
