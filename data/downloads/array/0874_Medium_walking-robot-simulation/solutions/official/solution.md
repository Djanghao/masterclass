# Official Solution

**Link:** [https://leetcode.com/problems/walking-robot-simulation/solution/](https://leetcode.com/problems/walking-robot-simulation/solution/)

---

[TOC]

## Solution

---

### Overview

We have a robot facing north at the origin `(0, 0)` of an infinite 2D grid. The robot receives a series of instructions from a given list of `commands`, where instruction can be of three types:

1. `-2`: Turn left 90 degrees while staying at the current coordinate.
2. `-1`: Turn right 90 degrees while staying at the current coordinate.
3. Any positive integer `k` from 1 to 9: Advance `k` units in the current direction.

Additionally, we are given a list of `obstacles` containing the coordinates of various obstacles on the grid. If the robot encounters an obstacle while moving forward, it stops its motion at the coordinate just before the obstacle and proceeds to the next command.

Our goal is to find the farthest squared distance from the origin that the robot reaches during its journey. In other words, we need to find the maximum value of $x \times x + y \times y$ that can be achieved at any point `(x, y)` visited by the robot.

Keep in mind when planning your approach that the farthest traveled distance during the robot's journey is not the same as its distance from the origin at the end of its journey.

> Note: An obstacle may exist at the origin (0, 0). In this case, the robot can move away from the starting point but will be unable to return to (0, 0).
  
---

### Approach: Simulation

#### Intuition

The robot's state is defined by two factors:
1. The coordinates of the robot's position: we can use a simple integer array `[x, y]`.
2. The direction the robot is facing: we can use an integer value (0, 1, 2, 3) representing North, East, South, and West respectively. Consequently, we need a `directions` array representing the direction of motion of the robot, where each index corresponds to [North, East, South, West].

The presence of obstacles prevents us from being able to simply loop over each command and simulate the robot's motion on the grid. A naive approach would be to loop through the obstacle array to check if the next attempted move is blocked by an obstacle. However, this results in quadratic complexity, which is inefficient given our constraints.

Checking whether a given coordinate is an obstacle using hash sets allows for constant-time lookups. If you're unfamiliar with hash sets, this LeetCode [Explore Card](https://leetcode.com/explore/learn/card/hash-table/183/combination-with-other-algorithms/1130/) provides an in-depth explanation. 

Our challenge becomes how to look up coordinates in a hash set. 

We solve this by hashing the coordinates of each obstacle to a unique integer value and storing these values in the hash set. To check if a coordinate contains an obstacle, we hash the coordinates using the same function and check if the value is present in the hash set.

There are various methods to create [hashing functions](https://en.wikipedia.org/wiki/List_of_hash_functions). For this problem, we'll create a simple one that generates a unique integer value for all coordinates within the given problem constraints.

```
hash(x, y) = x + HASH_MULTIPLIER * y
```

Where `HASH_MULTIPLIER` is a constant slightly larger than twice the maximum possible coordinate value. In this case, we choose `60013`.

> We choose `60013` because it is the smallest prime number greater than 60000 (twice the maximum possible coordinate). This helps reduce the number of potential collisions in our hash function.

The below slideshow visualizes the robot's journey for Example 2 of the problem description:

!?!../Documents/874/slideshow.json:1332,1236!?!

#### Algorithm

- Create a constant `HASH_MULTIPLIER` to use in the hashing function.

`robotSim` Function:

- Convert the list of obstacles into a set of hashed coordinates for quick lookup during the simulation.
- Define the four possible movement directions corresponding to North, East, South, and West.
- Initialize the robot's starting position at the origin `(0, 0)` and set the initial maximum distance squared to zero.
- Initialize the current direction of the robot facing North.
- Iterate through the list of commands:
  - If the command is `-1`, turn the robot 90 degrees to the right by adjusting the current direction index.
  - If the command is `-2`, turn the robot 90 degrees to the left by adjusting the current direction index.
  - Otherwise, for a positive command, move the robot forward step by step:
    - Calculate the next potential position by adding the current direction vector to the robot's position.
    - If the next position is an obstacle, stop moving forward.
    - Otherwise, update the robot's position to the new coordinates.
  - Update the maximum distance squared if the current position is farther from the origin than before.
- Return the maximum distance squared as the result of the simulation.

`hashCoordinates` Function:

- Combine the `x` and `y` coordinates into a unique hash value by multiplying the `y` coordinate by a constant multiplier and adding the `x` coordinate.
- Return the computed hash value to be used for obstacle lookup.

#### Implementation

<iframe src="https://leetcode.com/playground/akVkpuwr/shared" frameBorder="0" width="100%" height="500" name="akVkpuwr"></iframe>

#### Complexity Analysis

Let $m$ and $n$ be the length of `commands` and `obstacles`, respectively.

- Time complexity: $O(m + n)$

    The algorithm initially iterates over the `obstacles` array and hashes each obstacle’s coordinates, taking $O(n)$ time.

    The algorithm then loops over the `commands` array. In the worst case, each command is a positive integer `k`. Since the maximum value of `k` is limited to $9$, this step has a time complexity of $O(9 \cdot m) = O(m)$.

    Thus, the overall time complexity of the algorithm is $O(n) + O(m) = O(m + n)$.

- Space complexity: $O(n)$

    The only additional space used by the algorithm is the `obstacleSet`, which stores up to $n$ hashed obstacle positions. The `directions` and `currentPosition` arrays and all other primitive variables use constant space.

    Thus, the space complexity of the algorithm is $O(n)$.

---