# Official Solution

**Link:** [https://leetcode.com/problems/prison-cells-after-n-days/solution/](https://leetcode.com/problems/prison-cells-after-n-days/solution/)

---

[TOC]

## Solution

---
### Overview

First of all, one can consider this problem as a simplified version of the [Game of Life](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life) invented by the British mathematician John Horton Conway in 1970.

By simplification, this problem is played on one dimensional array (compared to 2D in Game of Life), and it has less rules.

>Due to the nature of game, one of the most intuitive solutions to solve this problem is _playing the game_, _i.e._ we can simply run the **simulation**.

Starting from the initial state of the prison cells, we could evolve the states following the rules defined in the problem _step by step_.

In the following sections, we will give some approaches on how to run the simulation efficiently.

---
### Approach 1: Simulation with Fast Forwarding

**Intuition**

One important observation from the Game of Life is that we would encounter some already-seen states over time, simply due to the fact that there are a limited number of states.

The above observation applies to our problem here as well. Given $$K$$ number of cells, there could be at most $$2^K$$ possible states. If the number of steps is larger than all possible states (_i.e._ $$N \gt 2^K$$), we are destined to repeat ourselves sooner or later.

In fact, we would encounter the repetitive states **sooner** than the theoretical boundary we estimated above. For instance, with the initial state of `[1,0,0,0,1,0,0,1]`, just after `15` steps, we would encounter a previously seen state. Once we encounter a state seen before, history would then repeat itself again and again, assuming that time is infinite.

>All states between two repetitive states form a cycle, which would repeat itself over time. Therefore, based on this observation, we could **fast-forward** the simulation rather than going step by step, once we encounter any repetitive state.

**Algorithm**

Here is the overall idea to implement our fast-forward strategy.

- First of all, we record the state at each step, with the index of the current step, _i.e._ `state -> step_index`.

- Once we discover a repetitive state, we can then determine the **_length_** (denoted as $$C$$) of the cycle, with the help of the hashmap that we recorded.

- Starting from this repetitive state, the prison cells would play out the states within the cycle over and over, until we run out of steps.

- In other words, if the remaining steps is $$N$$, at least we could **_fast-forward_** to the step of $$N \mod C$$.

- And then from the step of $$N \mod C$$, we continue the simulation step by step.

![fastforward](../Figures/957/957_fastforward.png)

Note: we only need to do the fast-forward once, if there is any.

Here are some sample implementations based on the above idea.

<iframe src="https://leetcode.com/playground/4AWwkBpL/shared" frameBorder="0" width="100%" height="500" name="4AWwkBpL"></iframe>



**Complexity Analysis**

Let $$K$$ be the number of cells, and $$N$$ be the number of steps.

- Time Complexity: $$\mathcal{O}\big(K \cdot \min(N, 2^K)\big)$$ 

    - As we discussed before, at most we could have $$2^K$$ possible states. While we run the simulation with $$N$$ steps, we might need to run $$\min(N, 2^K)$$ steps without fast-forwarding in the worst case.

    - For each simulation step, it takes $$\mathcal{O}(K)$$ time to process and evolve the state of cells.

    - Hence, the overall time complexity of the algorithm is $$\mathcal{O}\big(K \cdot \min(N, 2^K)\big)$$.

- Space Complexity:

    - The main memory consumption of the algorithm is the hashmap that we use to keep track of the states of the cells. The maximal number of entries in the hashmap would be $$2^K$$ as we discussed before.

    - In the Java implementation, we encode the state as a single integer value. Therefore, its space complexity would be $$\mathcal{O}(2^K)$$, assuming that $$K$$ does not exceed 32 so that a state can fit into a single integer number.

    - In the Python implementation, we keep the states of cells as they are in the hashmap. As a result, for each entry, it takes $$\mathcal{O}(K)$$ space. In total, its space complexity becomes $$\mathcal{O}(K \cdot 2^K)$$.

---
### Approach 2: Simulation with Bitmap

**Intuition**

In the above approach, we implemented the function `nextDay(state)`, which runs an **iteration** to calculate the next state of cells, given the current state.

Given that we have already encoded the state as a bitmap in the Java implementation of the previous approach, a more efficient way to implement the `nextDay` function would be to apply the **_bit operations_** (_e.g_ _AND, OR, XOR_ _etc._).

The next state of a cell depends on its left and right neighbors. To align the states of its neighbors, we could make a _left_ and a _right_ shift respectively on the bitmap. Upon the shifted bitmaps, we then apply the _XOR_ and _NOT_ operations sequentially, which would lead to the next state of the cell.

Here we show how it works with a concrete example.

![bit operations](../Figures/957/957_bit_operations.png)

Note that, the head and tail cells are particular, which would remain vacant once we start the simulation. Therefore, we should reset the head and tail bits by applying the bit _AND_ operation with the **bitmask** of `01111110` (_i.e._ `0x7e`).

**Algorithm**

We could reuse the bulk of the previous implementations, and simply rewrite the `nextDay` function with the bit operations as we discussed.

Additionally, at the end of the simulation, we should *decode* the states of the cells from the final bitmap.

<iframe src="https://leetcode.com/playground/G5TEhMP2/shared" frameBorder="0" width="100%" height="500" name="G5TEhMP2"></iframe>


**Complexity Analysis**

Let $$K$$ be the number of cells, and $$N$$ be the number of steps.

- Time Complexity: $$\mathcal{O}\big(\min(N, 2^K)\big)$$ assuming that $$K$$ does not exceed 32.

    - As we discussed before, at most we could have $$2^K$$ possible states. While we run the simulation, we need to run $$\min(N, 2^K)$$ steps without fast-forwarding in the worst case.

    - For each simulation step, it takes a constant $$\mathcal{O}(1)$$ time to process and evolve the states of cells, since we applied the bit operations rather than iteration. 

    - Hence, the overall time complexity of the algorithm is $$\mathcal{O}\big(\min(N, 2^K)\big)$$.

- Space Complexity: $$\mathcal{O}(2^K)$$

    - The main memory consumption of the algorithm is the hashmap that we use to keep track of the states of the cells. The maximal number of entries in the hashmap would be $$2^K$$ as we discussed before.

    - This time we adopted the bitmap for both Java and Python implementation so that each state consumes a constant $$\mathcal{O}(1)$$ space.

    - To sum up, the overall space complexity of the algorithm is $$\mathcal{O}(2^K)$$.

---