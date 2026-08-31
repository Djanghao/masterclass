# Official Solution

**Link:** [https://leetcode.com/problems/robot-return-to-origin/solution/](https://leetcode.com/problems/robot-return-to-origin/solution/)

---

[TOC]

---
### Approach #1: Simulation [Accepted]

**Intuition**

We can simulate the position of the robot after each command.

**Algorithm**

Initially, the robot is at `(x, y) = (0, 0)`. If the move is `'U'`, the robot goes to `(x, y - 1)`; if the move is `'R'`, the robot goes to `(x, y) = (x + 1, y)`, and so on.

<iframe src="https://leetcode.com/playground/jyFhh6vm/shared" frameBorder="0" width="100%" height="259" name="jyFhh6vm"></iframe>

**Complexity Analysis**

* Time Complexity: $$O(N)$$, where $$N$$ is the length of `moves`. We iterate through the string.

* Space Complexity: $$O(1)$$. In Java, our character array is $$O(N)$$.