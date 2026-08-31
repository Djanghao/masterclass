# Official Solution

**Link:** [https://leetcode.com/problems/make-array-elements-equal-to-zero/solution/](https://leetcode.com/problems/make-array-elements-equal-to-zero/solution/)

---

### Approach 1: Simulation

#### Intuition

Since the data range is small, we can directly simulate each scheme and determine its effectiveness.

Take each position in the array $\textit{nums}$ that equals $0$ as an initial position, and perform simulations in both directions. During the simulation, check whether the current element is $0$. If it is, continue moving in the same direction. Otherwise, subtract $1$ from the current value, reverse the direction, and move to the next position.

The simulation ends when all elements become $0$ or when we move out of the array’s index range. If all elements have become $0$ at that point, it is considered a valid solution.

#### Implementation

<iframe src="https://leetcode.com/playground/aFCvJjua/shared" frameBorder="0" width="100%" height="500" name="aFCvJjua"></iframe>

#### Complexity Analysis

Let $n$ be the length of the array $\textit{nums}$, and $m$ be the maximum element in $\textit{nums}$.

- Time complexity: $O(n^2m)$.
  
  There are $O(n)$ possible initial positions, each simulated in two directions. Each simulation takes $O(nm)$ time, giving a total time complexity of $O(n^2m)$.

- Space complexity: $O(n)$.
  
  A copy of the array $\textit{nums}$ is needed for each simulation.

### Approach 2: Prefix Sum

#### Intuition

We can view the entire process as a "Breakout" game, where for each selected initial position, a ball bounces back and forth in both directions. Each time it encounters a positive number, it bounces back and reduces that number by $1$.

To eliminate all positive numbers, assume the initial direction is to the right. The sum of the elements on both sides of the initial position should either be equal, or the sum on the right should be exactly $1$ greater than the sum on the left. In this case, the ball completes its final bounce on the right and exits to the left. The situation is symmetric when the initial direction is to the left.

We can enumerate each position equal to $0$ as an initial position, and use prefix sums to compute the sums of elements on both sides to determine whether it forms a valid selection scheme.

#### Implementation

<iframe src="https://leetcode.com/playground/gX9MySsm/shared" frameBorder="0" width="100%" height="500" name="gX9MySsm"></iframe>

#### Complexity Analysis

Let $n$ be the length of the array $\textit{nums}$.

- Time complexity: $O(n)$.
  
  We traverse the array once to compute prefix sums, and again to count the number of valid selection schemes.

- Space complexity: $O(1)$.
  
  Only a few additional variables are used.

---