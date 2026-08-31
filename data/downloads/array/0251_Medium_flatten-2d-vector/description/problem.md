# [251. Flatten 2D Vector](https://leetcode.com/problems/flatten-2d-vector/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 737 | 416 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`two-pointers`](https://leetcode.com/tag/two-pointers), [`design`](https://leetcode.com/tag/design), [`iterator`](https://leetcode.com/tag/iterator)

**Companies:** `airbnb`, `amazon`, `twitter`, `google`, `zenefits`

## Description

Design an iterator to flatten a 2D vector. It should support the `next` and `hasNext` operations.

Implement the `Vector2D` class:

	- `Vector2D(int[][] vec)` initializes the object with the 2D vector `vec`.

	- `next()` returns the next element from the 2D vector and moves the pointer one step forward. You may assume that all the calls to `next` are valid.

	- `hasNext()` returns `true` if there are still some elements in the vector, and `false` otherwise.

 

**Example 1:**

```

Input
[&quot;Vector2D&quot;, &quot;next&quot;, &quot;next&quot;, &quot;next&quot;, &quot;hasNext&quot;, &quot;hasNext&quot;, &quot;next&quot;, &quot;hasNext&quot;]
[[[[1, 2], [3], [4]]], [], [], [], [], [], [], []]
Output
[null, 1, 2, 3, true, true, 4, false]

Explanation
Vector2D vector2D = new Vector2D([[1, 2], [3], [4]]);
vector2D.next();    // return 1
vector2D.next();    // return 2
vector2D.next();    // return 3
vector2D.hasNext(); // return True
vector2D.hasNext(); // return True
vector2D.next();    // return 4
vector2D.hasNext(); // return False

```

 

**Constraints:**

	- `0 iterators in C++ or iterators in Java.

---

**Links:** [Submissions](https://leetcode.com/problems/flatten-2d-vector/) | [Solutions](https://leetcode.com/problems/flatten-2d-vector/)
