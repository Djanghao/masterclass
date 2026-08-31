# Official Solution

**Link:** [https://leetcode.com/problems/robot-bounded-in-circle/solution/](https://leetcode.com/problems/robot-bounded-in-circle/solution/)

---

[TOC]

## Solution

---

### Overview

The robot's [trajectory attractor](https://en.wikipedia.org/wiki/Attractor) is a set of trajectories toward which a system tends to evolve. The question may sound a bit theoretical - is this attractor limited or not? In other words, if there exists a circle in the plane such that the robot never leaves the circle.

Diverging Trajectory            |  Limit Cycle Trajectory
:------------------------------:|:------------------------------:
![bla](../Figures/1041/pic1.png)|  ![bla](../Figures/1041/pic2.png)

*Figure 1. Diverging Trajectory vs Limit Cycle Trajectory.*


Why is it interesting to know? There are a bunch of practical problems related to topology, network planning, and password brute-forcing. For all these problems, the first thing to understand is do we work within a limited space or the behavior of our system could drastically diverge at some point? 

Diverging Trajectory            |  Limit Cycle Trajectory
:------------------------------:|:------------------------------:
![bla](../Figures/1041/pic3.png)|  ![bla](../Figures/1041/pic4.png)

*Figure 2. Diverging Trajectory vs Limit Cycle Trajectory.*


**Draw some trajectories**

[Here is a Jupiter notebook used to draw all figures in this article](https://github.com/leetcode/solution_assets/blob/master/solution_assets/1041_robot_bounded_in_circle/robot_trajectory.ipynb).
Do not hesitate to play with it in local or on the online platforms. Drawing different trajectories might help to notice some patterns. 

<br />
<br />


---
### Approach 1: One Pass

**Intuition**

This solution is based on two facts about the limit cycle trajectory.

- After at most 4 cycles, the limit cycle trajectory returns to the initial point `x = 0, y  = 0`. That is related to the fact that 4 directions (north, east, south, west) define the repeated cycles' plane symmetry [[proof]](#appendix-mathematical-proof). 

Ex. 1: Trajectory 1             |  Ex. 2: Trajectory 2
:------------------------------:|:------------------------------:
![bla](../Figures/1041/pic5.png)|  ![bla](../Figures/1041/pic6.png)

*Figure 3. After 4 cycles the limit cycle trajectory returns to the initial point `x = 0, y  = 0`.*


- We do not need to run 4 cycles to identify the limit cycle trajectory. One cycle is enough. There could be two situations here.

    - First, if the robot returns to the initial point after one cycle, that's the limit cycle trajectory. 

    - Second, if the robot doesn't face north at the end of the first cycle, that's the limit cycle trajectory. Once again, that's the consequence of the plane symmetry for the repeated cycles [[proof]](#appendix-mathematical-proof).
    
Ex. 1: Trajectory 1             |  Ex. 2: Trajectory 2
:------------------------------:|:------------------------------:
![bla](../Figures/1041/pic7.png)|  ![bla](../Figures/1041/pic8.png)

*Figure 4. If at the end of one cycle, the robot doesn't face north, that's the limit cycle trajectory.*


**Algorithm**

- Let's use numbers from 0 to 3 to mark the directions: `north = 0`, `east = 1`, `south = 2`, `west = 3`. In the array `directions` we could store corresponding coordinates changes, _i.e._ `directions[0]` is to go north, `directions[1]` is to go east, `directions[2]` is to go south, and `directions[3]` is to go west.

- The initial robot position is in the center `x = y = 0`, facing north `idx = 0`.

- Now everything is ready to iterate over the instructions.

    - If the current instruction is `R`, _i.e._ to turn on the right, the next direction is `idx = (idx + 1) % 4`. Modulo here is needed to deal with the situation - facing west, `idx = 3`, turn to the right to face north, `idx = 0`.  

    - If the current instruction is `L`, _i.e._ to turn on the left, the next direction could written in a symmetric way `idx = (idx - 1) % 4`. That means we have to deal with negative indices. A more simple way is to notice that 1 turn to the left = 3 turns to the right: `idx = (idx + 3) % 4`.
    
    - If the current instruction is to move, we simply update the coordinates: `x += directions[idx][0]`, `y += directions[idx][1]`.
    
- After one cycle we have everything to decide. 
It's a limit cycle trajectory if the robot is back to the center: `x = y = 0` or if the robot doesn't face north: `idx != 0`.

**Implementation**

<iframe src="https://leetcode.com/playground/ncTXcW7Z/shared" frameBorder="0" width="100%" height="497" name="ncTXcW7Z"></iframe>

**Complexity Analysis**

* Time complexity: $$\mathcal{O}(N)$$, where $$N$$ is a number of instructions
to parse. 
 
* Space complexity: $$\mathcal{O}(1)$$ because the array `directions` contains 
only 4 elements.

<br />
<br />


---
### Appendix: Mathematical Proof

Let's provide a strict mathematical proof.  

**If the robot doesn't face north at the end of the first cycle, then that's the limit cycle trajectory.**

> First, let's check which direction the robot faces after 4 cycles.

Let's use numbers from 0 to 3 to mark the directions: `north = 0`, `east = 1`, `south = 2`, `west = 3`. After one cycle the robot is facing direction `k != 0`. 

After 4 cycles, the robot faces direction `(k * 4) % 4 = 0`, i.e. _after 4 cycles, the robot is always facing north_.

> Second, let's find the robot coordinates after 4 cycles.

The robot's initial coordinates are `x = y = 0`. After one cycle, the new coordinates are $$x_1 = x + \Delta x$$, $$y_1 = y + \Delta y$$, where both $$\Delta x$$ and $$\Delta y$$ could be positive or negative.

Let's consider four situations.

- After one cycle, the robot faces north.

Then here is what we have after 4 cycles:

$$x_4 = x + \Delta x + \Delta x + \Delta x + \Delta x = x + 4 \Delta x$$

$$y_4 = y + \Delta y + \Delta y + \Delta y + \Delta y = y + 4 \Delta y$$

- After one cycle, the robot faces east.

Then here is what we have after 4 cycles:

$$x_4 = x + \Delta x + \Delta y - \Delta x - \Delta y = x$$

$$y_4 = y + \Delta y - \Delta x - \Delta y + \Delta x = y$$

- After one cycle, the robot faces south.

Then here is what we have after 4 cycles:

$$x_4 = x + \Delta x - \Delta x + \Delta x - \Delta x = x$$

$$y_4 = y + \Delta y - \Delta y + \Delta y - \Delta y = y$$

- After one cycle, the robot faces west.

Then here is what we have after 4 cycles:

$$x_4 = x + \Delta x - \Delta y - \Delta x + \Delta y = x$$

$$y_4 = y + \Delta y + \Delta x - \Delta y - \Delta x = y$$

> Hence, if the robot doesn't face north at the end of the first cycle, then after 4 cycles, the robot is back to the initial coordinates and faces north.

The following statement is a straight consequence. 

**After at most 4 cycles, the limit cycle trajectory returns to the initial point.**