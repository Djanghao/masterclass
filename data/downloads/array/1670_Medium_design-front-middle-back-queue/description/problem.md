# [1670. Design Front Middle Back Queue](https://leetcode.com/problems/design-front-middle-back-queue/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 808 | 113 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`linked-list`](https://leetcode.com/tag/linked-list), [`design`](https://leetcode.com/tag/design), [`queue`](https://leetcode.com/tag/queue), [`data-stream`](https://leetcode.com/tag/data-stream)

**Companies:** `citadel`, `facebook`, `amazon`

## Description

Design a queue that supports `push` and `pop` operations in the front, middle, and back.

Implement the `FrontMiddleBack` class:

	- `FrontMiddleBack()` Initializes the queue.

	- `void pushFront(int val)` Adds `val` to the **front** of the queue.

	- `void pushMiddle(int val)` Adds `val` to the **middle** of the queue.

	- `void pushBack(int val)` Adds `val` to the **back** of the queue.

	- `int popFront()` Removes the **front** element of the queue and returns it. If the queue is empty, return `-1`.

	- `int popMiddle()` Removes the **middle** element of the queue and returns it. If the queue is empty, return `-1`.

	- `int popBack()` Removes the **back** element of the queue and returns it. If the queue is empty, return `-1`.

**Notice** that when there are two middle position choices, the operation is performed on the **frontmost** middle position choice. For example:

	- Pushing `6` into the middle of `[1, 2, 3, 4, 5]` results in `[1, 2, 6, 3, 4, 5]`.

	- Popping the middle from `[1, 2, 3, 4, 5, 6]` returns `3` and results in `[1, 2, 4, 5, 6]`.

 

**Example 1:**

```

Input:
[&quot;FrontMiddleBackQueue&quot;, &quot;pushFront&quot;, &quot;pushBack&quot;, &quot;pushMiddle&quot;, &quot;pushMiddle&quot;, &quot;popFront&quot;, &quot;popMiddle&quot;, &quot;popMiddle&quot;, &quot;popBack&quot;, &quot;popFront&quot;]
[[], [1], [2], [3], [4], [], [], [], [], []]
Output:
[null, null, null, null, null, 1, 3, 4, 2, -1]

Explanation:
FrontMiddleBackQueue q = new FrontMiddleBackQueue();
q.pushFront(1);   // [1]
q.pushBack(2);    // [1, 2]
q.pushMiddle(3);  // [1, 3, 2]
q.pushMiddle(4);  // [1, 4, 3, 2]
q.popFront();     // return 1 -&gt; [4, 3, 2]
q.popMiddle();    // return 3 -&gt; [4, 2]
q.popMiddle();    // return 4 -&gt; [2]
q.popBack();      // return 2 -&gt; []
q.popFront();     // return -1 -&gt; [] (The queue is empty)

```

 

**Constraints:**

	- `1 <= val <= 10^9`

	- At most `1000` calls will be made to `pushFront`, `pushMiddle`, `pushBack`, `popFront`, `popMiddle`, and `popBack`.

---

**Links:** [Submissions](https://leetcode.com/problems/design-front-middle-back-queue/) | [Solutions](https://leetcode.com/problems/design-front-middle-back-queue/)
