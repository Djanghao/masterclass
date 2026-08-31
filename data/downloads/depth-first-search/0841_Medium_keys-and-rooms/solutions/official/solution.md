# Official Solution

**Link:** [https://leetcode.com/problems/keys-and-rooms/solution/](https://leetcode.com/problems/keys-and-rooms/solution/)

---

[TOC]

---
### Approach #1: Depth-First Search [Accepted]

**Intuition and Algorithm**

When visiting a room for the first time, look at all the keys in that room.  For any key that hasn't been used yet, add it to the todo list (`stack`) for it to be used.

See the comments of the code for more details.

<iframe src="https://leetcode.com/playground/dRqvjiWp/shared" frameBorder="0" width="100%" height="446" name="dRqvjiWp"></iframe>

**Complexity Analysis**

* Time Complexity:  $$O(N + E)$$, where $$N$$ is the number of rooms, and $$E$$ is the total number of keys.

* Space Complexity:  $$O(N)$$ in additional space complexity, to store `stack` and `seen`.