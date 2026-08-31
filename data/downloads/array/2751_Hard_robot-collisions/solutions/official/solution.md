# Official Solution

**Link:** [https://leetcode.com/problems/robot-collisions/solution/](https://leetcode.com/problems/robot-collisions/solution/)

---

[TOC]

## Solution

--- 

### Overview

We have a set of robots on a line, each robot is described with three variables: a unique position on the line, health, and direction of movement (`L` for left and `R` for right). 

All robots start moving simultaneously and at the same speed. If two robots collide, the one with lower health is destroyed, and the health of the surviving robot decreases by one. If both robots have the same health, they are both destroyed. 

We aim to determine the health of the robots that survive all collisions and list it in the order of their initial positions.

---

### Approach: Sorting & Stack 

#### Intuition

To solve this problem, we need to simulate the robots' movements and handle collisions step by step. The key challenge is managing the collisions in the correct sequence.

Because all the robots move at the same speed, they will only collide if a robot with the lower position is moving to the right (`R`), and another robot with a higher position is moving to the left (`L`). Robots moving in the same direction or moving away from each other will never meet.

The crucial step here is to sort the robots by their position so we can simulate their potential collisions in the correct order, which starts from the leftmost robot to the rightmost robot.

Once we have the robots sorted by position, the next challenge is to handle the collisions as they occur. Let's break down the mechanism of what happens during collisions and why a stack is the right tool for this job.

When we encounter a robot moving to the left (`L`), it might collide with one or more robots moving to the right (`R`) that are located to the left of the current robot. We need to compare the health of the left-moving robot with the health of each right-moving robot it collides with, in the order they were encountered. 

This comparison must continue until one of these scenarios happens:

1. The left-moving robot is destroyed.
2. The right-moving robot(s) are destroyed.
3. Both are destroyed if their health is equal.

A stack is highly effective for managing this sequence of comparisons and updates.

A stack operates on a last-in-first-out principle (`LIFO`), which aligns with how we need to manage the collisions. The most recent robot moving to the right (`R`) will be the first to potentially collide with a left-moving robot (`L`).

> Note: Every time you encounter a problem where recent elements need to be revisited or managed in reverse order, consider if a stack might be appropriate. Recognizing these patterns can help you identify the right data structure. In interviews, this approach can guide you to the correct solution when it isn't immediately clear.

We push right-moving robots onto the stack to keep track of any that could potentially collide with a left-moving robot located a higher position. When we encounter a left-moving robot, we simply pop robots off the stack to handle each collision in the correct order.

More specifically, when a left-moving robot (`L`) is encountered, we start by popping the robot at the top of the stack, which represents the most recent right-moving robot (`R`). We compare the health of these two robots:


* If the health of the left-moving robot is greater, the right-moving robot is destroyed. The left-moving robot's health decreases by one, and we continue popping the next robot from the stack if there are any.


* If the health of the right-moving robot is greater, the left-moving robot is destroyed, and the right-moving robot's health decreases by one. We push the right-moving robot back onto the stack with its updated health.

* If both robots have the same health, both are destroyed and we do not push anything back onto the stack.

This process continues until the left-moving robot is destroyed, all right-moving robots that could collide have been handled, or both robots are destroyed.

After processing all robots, the stack will contain only the right-moving robots that survived all collisions.

Any left-moving robots that survived will not have encountered further right-moving robots, so they are also added to the final result.

Consider a list of robots sorted by their position:

`Positions: [1, 2, 3, 4]`, `Healths: [3, 2, 5, 4]`, `Directions: ['R', 'R', 'L', 'L']`

1. Start with an empty stack.
2. Process the first robot at position 1 (`R`): push onto the stack.
3. Process the second robot at position 2 (`R`): push onto the stack.
4. Process the third robot at position 3 (`L`): 
    - Compare with the robot at position 2 (`R`). If the robot's health at position 3 is higher, it survives with decreased health. Otherwise, the robot at position 2 survives.
5. Continue this process until either the left-moving robot is destroyed, all right-moving robots in the stack are handled, or both are destroyed.
6. Process the fourth robot at position 4 (`L`) similarly.

Here are some popular questions that use the stack as their central idea:

* [20. Valid Parentheses](https://leetcode.com/problems/valid-parentheses/editorial/)
* [678. Valid Parenthesis String](https://leetcode.com/problems/valid-parenthesis-string/editorial/)

* [227. Basic Calculator II](https://leetcode.com/problems/basic-calculator-ii/editorial/)

This question in particular is very similar to our current one, albeit a little more straightforward:

* [735. Asteroid Collision](https://leetcode.com/problems/asteroid-collision/description/)


#### Algorithm

1. Initialization:
    - Determine the number of robots and store it in `n`.
    - Create an array `indices` to keep track of the original indices of the robots.
    - Create a list `result` to store the health of the surviving robots.
    - Initialize an empty stack to manage right-moving robots.
2. Sort Robots by Position:
    - Sort the `indices` array based on the positions of the robots to ensure they are processed from left to right.
3. Process Each Robot:
    - Iterate through each `current_index` in the sorted `indices` array:
        - If the robot is moving to the right (`'R'`):
            - Push `current_index` onto the stack.
        - If the robot is moving to the left (`'L'`):
            - While the stack is not empty and the current robot's health is greater than `0`:
                - Pop the top robot from the stack (this is the most recent right-moving robot).
                - Compare the health of the current left-moving robot and the top right-moving robot:
                    - If the top right-moving robot has more health:
                        - Decrease its health by `1` and push it back onto the stack.
                        - Set the current left-moving robot's health to `0`.
                    - If the current left-moving robot has more health:
                        - Decrease its health by `1`.
                        - Set the top right-moving robot's health to `0`.
                    - If both robots have the same health:
                        - Set both robots' health to `0`.
4. Collect Surviving Robots:
    - Iterate through each robot index from `0` to `n - 1`:
        - If the robot's health is greater than `0`:
            - Append the robot's health to the `result` list.
5. Return the `result` list, which contains the health of the surviving robots.

#### Implementation 

<iframe src="https://leetcode.com/playground/PWpq6xtA/shared" frameBorder="0" width="100%" height="500" name="PWpq6xtA"></iframe>

#### Complexity Analysis

Let $n$ be the number of robots.

- Time Complexity: $O(n \cdot \log n)$

    Sorting the robots based on their positions takes $O(n \log n)$ time. 
  
    Initializing the `indices` array takes $O(n)$ time.
    
    The for loop that processes each robot runs in $O(n)$ time since each robot is processed once. 
    
    Therefore, the overall time complexity is dominated by the sorting step, making it $O(n \cdot \log n)$.

- Space Complexity: $O(n)$

    In Python, the `sort` method uses Timsort, which has a worst-case space complexity of $O(n)$ due to the additional space used by the merge operations. 
    
    In Java, `Arrays.sort()` uses a variant of Quick Sort for primitive types, with a space complexity of $O(\log n)$. 
    
    In C++, the `sort()` function typically uses a hybrid of Quick Sort, Heap Sort, and Insertion Sort, with a worst-case space complexity of $O(\log n)$.

    Apart from the sorting step, we use an additional space of $O(n)$ for the `indices` array.
    
    The stack in the worst case holds $O(n)$ elements. 
    
    Therefore, the total space complexity is $O(n)$.

---