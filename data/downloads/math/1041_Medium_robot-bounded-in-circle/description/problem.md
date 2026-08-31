# [1041. Robot Bounded In Circle](https://leetcode.com/problems/robot-bounded-in-circle/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 3844 | 715 |

**Tags:** [`math`](https://leetcode.com/tag/math), [`string`](https://leetcode.com/tag/string), [`simulation`](https://leetcode.com/tag/simulation)

**Companies:** `microsoft`, `goldman-sachs`, `apple`, `amazon`, `linkedin`, `chewy`, `zscaler`, `nvidia`, `airbnb`

## Description

On an infinite plane, a robot initially stands at `(0, 0)` and faces north. Note that:

	- The **north direction** is the positive direction of the y-axis.

	- The **south direction** is the negative direction of the y-axis.

	- The **east direction** is the positive direction of the x-axis.

	- The **west direction** is the negative direction of the x-axis.

The robot can receive one of three instructions:

	- `"G"`: go straight 1 unit.

	- `"L"`: turn 90 degrees to the left (i.e., anti-clockwise direction).

	- `"R"`: turn 90 degrees to the right (i.e., clockwise direction).

The robot performs the `instructions` given in order, and repeats them forever.

Return `true` if and only if there exists a circle in the plane such that the robot never leaves the circle.

 

**Example 1:**

```

Input: instructions = &quot;GGLLGG&quot;
Output: true
Explanation: The robot is initially at (0, 0) facing the north direction.
&quot;G&quot;: move one step. Position: (0, 1). Direction: North.
&quot;G&quot;: move one step. Position: (0, 2). Direction: North.
&quot;L&quot;: turn 90 degrees anti-clockwise. Position: (0, 2). Direction: West.
&quot;L&quot;: turn 90 degrees anti-clockwise. Position: (0, 2). Direction: South.
&quot;G&quot;: move one step. Position: (0, 1). Direction: South.
&quot;G&quot;: move one step. Position: (0, 0). Direction: South.
Repeating the instructions, the robot goes into the cycle: (0, 0) --&gt; (0, 1) --&gt; (0, 2) --&gt; (0, 1) --&gt; (0, 0).
Based on that, we return true.

```

**Example 2:**

```

Input: instructions = &quot;GG&quot;
Output: false
Explanation: The robot is initially at (0, 0) facing the north direction.
&quot;G&quot;: move one step. Position: (0, 1). Direction: North.
&quot;G&quot;: move one step. Position: (0, 2). Direction: North.
Repeating the instructions, keeps advancing in the north direction and does not go into cycles.
Based on that, we return false.

```

**Example 3:**

```

Input: instructions = &quot;GL&quot;
Output: true
Explanation: The robot is initially at (0, 0) facing the north direction.
&quot;G&quot;: move one step. Position: (0, 1). Direction: North.
&quot;L&quot;: turn 90 degrees anti-clockwise. Position: (0, 1). Direction: West.
&quot;G&quot;: move one step. Position: (-1, 1). Direction: West.
&quot;L&quot;: turn 90 degrees anti-clockwise. Position: (-1, 1). Direction: South.
&quot;G&quot;: move one step. Position: (-1, 0). Direction: South.
&quot;L&quot;: turn 90 degrees anti-clockwise. Position: (-1, 0). Direction: East.
&quot;G&quot;: move one step. Position: (0, 0). Direction: East.
&quot;L&quot;: turn 90 degrees anti-clockwise. Position: (0, 0). Direction: North.
Repeating the instructions, the robot goes into the cycle: (0, 0) --&gt; (0, 1) --&gt; (-1, 1) --&gt; (-1, 0) --&gt; (0, 0).
Based on that, we return true.

```

 

**Constraints:**

	- `1 <= instructions.length <= 100`

	- `instructions[i]` is `'G'`, `'L'` or, `'R'`.

---

**Links:** [Submissions](https://leetcode.com/problems/robot-bounded-in-circle/) | [Solutions](https://leetcode.com/problems/robot-bounded-in-circle/)
