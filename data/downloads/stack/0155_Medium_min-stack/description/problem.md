# [155. Min Stack](https://leetcode.com/problems/min-stack/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 15670 | 980 |

**Tags:** [`stack`](https://leetcode.com/tag/stack), [`design`](https://leetcode.com/tag/design)

**Companies:** `bloomberg`, `amazon`, `google`, `microsoft`, `facebook`, `salesforce`, `oracle`, `yandex`, `snowflake`, `palo-alto-networks`, `apple`, `lyft`, `linkedin`, `vimeo`, `tinkoff`, `adobe`, `walmart-labs`, `informatica`, `sigmoid`, `uber`, `snapchat`, `zenefits`

## Description

Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

Implement the `MinStack` class:

	- `MinStack()` initializes the stack object.

	- `void push(int val)` pushes the element `val` onto the stack.

	- `void pop()` removes the element on the top of the stack.

	- `int top()` gets the top element of the stack.

	- `int getMin()` retrieves the minimum element in the stack.

You must implement a solution with `O(1)` time complexity for each function.

 

**Example 1:**

```

Input
[&quot;MinStack&quot;,&quot;push&quot;,&quot;push&quot;,&quot;push&quot;,&quot;getMin&quot;,&quot;pop&quot;,&quot;top&quot;,&quot;getMin&quot;]
[[],[-2],[0],[-3],[],[],[],[]]

Output
[null,null,null,null,-3,null,0,-2]

Explanation
MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin(); // return -3
minStack.pop();
minStack.top();    // return 0
minStack.getMin(); // return -2

```

 

**Constraints:**

	- `-2^31 <= val <= 2^31 - 1`

	- Methods `pop`, `top` and `getMin` operations will always be called on **non-empty** stacks.

	- At most `3 * 10^4` calls will be made to `push`, `pop`, `top`, and `getMin`.

---

**Links:** [Submissions](https://leetcode.com/problems/min-stack/) | [Solutions](https://leetcode.com/problems/min-stack/)
