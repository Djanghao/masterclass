# Official Solution

**Link:** [https://leetcode.com/problems/minimum-total-distance-traveled/solution/](https://leetcode.com/problems/minimum-total-distance-traveled/solution/)

---

[TOC]

## Solution

--- 

### Overview

The goal is to minimize the total distance that a set of robots must travel to reach factories for repairs. We are given:

1. An integer array `robot`, with unique starting positions of robots on the X-axis.
2. A 2D integer array `factory`, where each sub-array $[position_j, limit_j]$ represents the position of the `j`-th factory and its maximum repair capacity.

The robots, initially non-operational, move along the X-axis until reaching a factory capable of repairing them. To minimize the total travel distance, we need to set their initial movement direction strategically.

Important rules:
- Robots move at the same speed and will not collide, regardless of direction.
- Robots bypass factories that have reached their repair limit.
- Distance is measured as the absolute difference between each robot's starting and final positions.

---

### Approach 1: Recursion (Time Limit Exceeded)

#### Intuition

To minimize the total distance traveled by robots assigned to factories, we should aim to pair each robot with a nearby factory. Sorting both robots and factories by position lets us efficiently match each robot to a close factory.

</br>

<details>
  <summary>Analysis of the Optimal Solution for Assigning Robots to Factories: Why Does Sorting Always Work? (Click Here)</summary>

  Many solutions use sorting, but we found that the explanations for why sorting leads to an optimal solution weren’t convincing. Some explanations seemed to assume that the optimal solution naturally emerges from sorting, which felt like circular reasoning to me.

  The core question is why, in an optimal solution, a contiguous sequence of robots must be assigned to a given factory, and the next sequence of robots should be assigned to the following factory, rather than looping back to the previous one. To explore this, we used a case study with a simplified scenario: only two robots and two factories, with each factory capable of repairing only one robot. And We are taking the base as this for Sorting.
 
  **Terminologies**
  - `r1`, `r2`: robot locations, where `r1 < r2`
  - `f1`, `f2`: factory locations, where `f1 < f2`
  - **distance 1**: distance by assigning `r1` to `f1` and `r2` to `f2`
  - **distance 2**: distance by assigning `r1` to `f2` and `r2` to `f1`

  **Case Study**

  In this setup, we consider 6 cases based on the relative positions of robots and factories:

  1. **Case 1**
     - **Locations**:
       ```
       r1    r2
       f1    f2
       ```
     - **distance 1**: `r1 - f1 + r2 - f2`
     - **distance 2**: `f2 - r1 + r2 - f1`
     - **Result**: `distance 1 < distance 2`

  2. **Case 2**
     - **Locations**:
       ```
       r1    r2
       f1          f2
       ```
     - **distance 1**: `r1 - f1 + f2 - r2`
     - **distance 2**: `f2 - r1 + r2 - f1`
     - **Result**: `distance 1 < distance 2`

  3. **Case 3**
     - **Locations**:
       ```
       r1    r2
          f1    f2
       ```
     - **distance 1**: `f1 - r1 + f2 - r2`
     - **distance 2**: `f2 - r1 + r2 - f1`
     - **Result**: `distance 1 < distance 2`

  4. **Case 4**
     - **Locations**:
       ```
                     r1    r2
       f1    f2
       ```
     - **distance 1**: `r1 - f1 + r2 - f2`
     - **distance 2**: `r1 - f2 + r2 - f1`
     - **Result**: `distance 1 == distance 2`

  5. **Case 5**
     - **Locations**:
       ```
       r1        r2
          f1  f2
       ```
     - **distance 1**: `f1 - r1 + r2 - f2`
     - **distance 2**: `f2 - r1 + r2 - f1`
     - **Result**: `distance 1 < distance 2`

  6. **Case 6**
     - **Locations**:
       ```
       r1    r2
                 f1    f2
       ```
     - **distance 1**: `f1 - r1 + f2 - r2`
     - **distance 2**: `f2 - r1 + f1 - r2`
     - **Result**: `distance 1 == distance 2`

  In all cases, assigning `r1` to `f1` and `r2` to `f2` yields a distance that is either shorter or equal to the distance of assigning `r1` to `f2` and `r2` to `f1`. In cases 4 and 6, the distances are the same, meaning we can assign `r1` to `f1` and `r2` to `f2` without affecting optimality.

  This outcome implies that if `r1` is assigned to `f1`, then `r2` should consider only `f1` or the next factories, not any factory before `f1`. This supports why sorting works as an effective strategy for this problem.

This case study forms the foundation of the entire editorial and all the approaches that follow.

</details>

</br>

Once sorted, we use a recursive approach to define a function `minDistance(robotIdx, factoryIdx)`, which calculates the minimum distance for assigning robots starting from `robotIdx` to factories starting from `factoryIdx`.

For each robot-factory pair, we have two options:
  - Assign the robot to the current factory and move to the next robot `(robotIdx + 1, factoryIdx + 1, robot, factoryPositions)`.
  - Skip the current factory and try the next one `(robotIdx, factoryIdx + 1, robot, factoryPositions)`.

The base case occurs when we run out of robots, yielding a distance of zero since all robots are assigned, or when we run out of factories, where we return a large number (e.g., $1e12$) to indicate an impossible assignment.

While this approach is simple, it recalculates the same assignments for similar pairs, resulting in unnecessary repetition and potentially causing a Time Limit Exceeded (TLE) error.

#### Algorithm

- Sort the `robot` array and the `factory` array by their positions to facilitate the assignment process.

- Flatten the `factory` array into `factoryPositions` based on their capacities:
  - For each factory, repeat its position according to its capacity, resulting in a list of positions where robots can be assigned.

- Call the `calculateMinDistance` function recursively to compute the minimum total distance:
  - Pass the current indices of the robot (`robotIdx`) and factory positions (`factoryIdx`).

- In the `calculateMinDistance` function:
  - Check if all robots are assigned:
    - If yes, return `0` since there’s no distance left to calculate.
  
  - Check if there are no factories left to assign:
    - If yes, return a large value (`1e12`) to signify an impossible assignment.
  
  - Option 1: Assign the current robot to the current factory:
    - Calculate the distance as the absolute difference between the current robot and factory positions, then add the result of the recursive call for the next robot and the next factory.
  
  - Option 2: Skip the current factory for the current robot:
    - Recursively call `calculateMinDistance` for the same robot but the next factory.
  
  - Return the minimum of the two options (assign or skip) to ensure the minimum total distance is calculated.

#### Implementation

<iframe src="https://leetcode.com/playground/GUwDzFtw/shared" frameBorder="0" width="100%" height="500" name="GUwDzFtw"></iframe>

#### Complexity Analysis

Let $n$ be the number of robots and $m$ be the number of factories.

- Time complexity: $O(n^2 \cdot m)$

    The main function `minimumTotalDistance` involves sorting the `robot` array and the `factory` array. Sorting each of these arrays has a time complexity of $O(n \log n)$ and $O(m \log m)$, respectively.

    The nested loops that flatten the factory positions contribute an additional $O(k)$ for pushing the factory positions into the `factoryPositions` array. If every factory has a capacity of $k$, the overall number of positions pushed could be $O(k \cdot m)$. In the worst case, this could lead to $O(n \cdot m)$ positions if we consider $k$ to be on the order of $n$.

    The recursive function `calculateMinDistance` is called for each robot and factory position. This results in up to $O(n \cdot k)$ recursive calls, where $k$ can be up to $n \cdot m$ in the extreme case. Thus, the recursive calls lead to $O(n^2 \cdot m)$.

    Therefore, the dominant factor is the recursive calls, leading to the overall time complexity being $O(n^2 \cdot m)$.

- Space complexity: $O(n + m)$

    - The space complexity arises from:
        - The recursion stack used in `calculateMinDistance`, which can go as deep as $O(n + m)$ in the worst case if all robots and factories are utilized.
        - The `factoryPositions` array, which can store up to $O(k \cdot m)$ positions, where $k$ is the maximum capacity across all factories. However, this is not strictly dependent on $n$ or $m$, but it's still reasonable to consider it as contributing to the overall space used.

    The space taken by the sorting algorithm depends on the language of implementation:
      In Java, `Arrays.sort()` is implemented using a variant of the Quick Sort algorithm which has a space complexity of $O( \log n)$.
      In C++, the `sort()` function is implemented as a hybrid of Quick Sort, Heap Sort, and Insertion Sort, with a worst-case space complexity of $O(\log n)$.
      In Python, the `sort()` method sorts a list using the Timsort algorithm which is a combination of Merge Sort and Insertion Sort and has a space complexity of $O(n)$.

    Therefore, the total space complexity can be considered $O(n + m)$ due to the recursive stack and the additional storage used for `factoryPositions`.

---

### Approach 2: Memoization

#### Intuition 

Seeing the redundancy in our recursive approach, we can optimize it using memoization. Memoization lets us store previously computed results, avoiding recalculating distances for the same robot-factory pairs:

We introduce a table (or cache) that stores results for each combination of `robotIdx` and `factoryIdx`. Every time `minDistance(robotIdx, factoryIdx)` is called, we first check the memoization table. If we’ve already calculated the result for this combination, we simply return it.

The approach is still recursive but much faster because it avoids revisiting the same subproblems multiple times.

#### Algorithm

- Sort the `robot` and `factory` arrays by their positions to facilitate optimal assignment.
  
- Create a `factoryPositions` array:
  - Flatten the factory positions based on their capacities, where each factory contributes its position as many times as its capacity.

- Initialize `robotCount` as the number of robots and `factoryCount` as the number of factory positions.
  
- Create a 2D memoization table `memo` with dimensions `[robotCount][factoryCount]` initialized to `-1`.

- Call the recursive function `calculateMinDistance(0, 0, robot, factoryPositions, memo)` to compute the minimum total distance.

- In the `calculateMinDistance` function:
  - Check if all robots are assigned (`robotIdx == robot.size()`):
    - If true, return `0` since no distance is needed.
    
  - Check if there are no factories left to assign (`factoryIdx == factoryPositions.size()`):
    - If true, return a large value (e.g., `1e12`) to indicate an infeasible path.

  - Check the memoization table to see if the result is already computed (`memo[robotIdx][factoryIdx] != -1`):
    - If true, return the memoized value.
  
  - Calculate the cost for two options:
    - Option 1: Assign the current robot to the current factory:
      - Compute the distance as `abs(robot[robotIdx] - factoryPositions[factoryIdx])` plus the result of recursively calling `calculateMinDistance` for the next robot and the next factory.
      
    - Option 2: Skip the current factory for the current robot:
      - Call `calculateMinDistance` with the same robot but the next factory.
      
  - Store the minimum of the two options in `memo[robotIdx][factoryIdx]` and return this minimum value.

- The function returns the minimum total distance to assign all robots to factories efficiently.

#### Implementation

<iframe src="https://leetcode.com/playground/kyx8FnMM/shared" frameBorder="0" width="100%" height="500" name="kyx8FnMM"></iframe>

#### Complexity Analysis

Let $n$ be the number of robots and $m$ be the number of factories.

- Time complexity: $O(n^2 \cdot m)$

    Similar to the previous analysis, the function `minimumTotalDistance` involves sorting the `robot` and `factory` arrays, which has a time complexity of $O(n \log n)$ and $O(m \log m)$, respectively.

    The nested loops that flatten the factory positions can create up to $O(n \cdot m)$ positions in the worst case, where $n$ is the number of robots and $m$ is the number of original factories. If each factory has a maximum capacity equal to $n$, we could end up with $O(n^2)$ factory positions in total.

    The recursive function `calculateMinDistance` now uses memoization to store results for each combination of `robotIdx` and `factoryIdx`. Since each robot can potentially pair with each factory position, the number of unique state combinations is now $O(n \cdot m)$. However, the recursive calls can lead to up to $O(n)$ depth due to each robot potentially iterating through all factory positions.

    Therefore, the overall time complexity is more accurately represented as $O(n^2 \cdot m)$, as the flattening of factory positions majorily influences the complexity.

- Space complexity: $O(n \cdot m)$

    - The space complexity consists of:
        - The `memo` table, which is a 2D array of size $n \times m$. Thus, the space used for memoization is $O(n \cdot m)$.
        - The recursion stack used in `calculateMinDistance`, which can go as deep as $O(n + m)$ in the worst case if all robots and factories are utilized.
        - The `factoryPositions` array, which can store up to $O(k \cdot m)$ positions, though it is less critical for the overall complexity assessment.

    The space taken by the sorting algorithm depends on the language of implementation:
      In Java, `Arrays.sort()` is implemented using a variant of the Quick Sort algorithm which has a space complexity of $O( \log n)$.
      In C++, the `sort()` function is implemented as a hybrid of Quick Sort, Heap Sort, and Insertion Sort, with a worst-case space complexity of $O(\log n)$.
      In Python, the `sort()` method sorts a list using the Timsort algorithm which is a combination of Merge Sort and Insertion Sort and has a space complexity of $O(n)$.

    The dominant space usage comes from the `memo` table, leading to a total space complexity of $O(n \cdot m)$.

---

### Approach 3: Tabulation

#### Intuition

While recursive memoization optimizes by caching results, it still incurs overhead from recursive calls. To further improve, we can switch to a bottom-up tabulation approach, filling a 2D DP table iteratively to store results for each subproblem.

Each robot has two options: go to the current factory or skip it. For each robot-factory pairing, we need the robot’s and factory’s positions to calculate the distance and then find the minimum distance if the robot is assigned to this factory or skips to the next.

Using a 2D DP table, let `dp[i][j]` represent the minimum distance to assign robots starting from `i` to factories starting from `j`. We fill this table from the last robot and factory backward to ensure all future-dependent choices are precomputed.

The base case is when there are no robots left (`i` exceeds the last robot index), giving a minimum distance of `0`.

For each `dp[i][j]`, we choose the minimum of:
  - Assigning robot `i` to factory `j`, moving to `dp[i + 1][j]`,
  - Or skipping this factory, moving to `dp[i][j + 1]`.

Thus, $dp[i][j] = \min(|robot[i] - factory[j]| + dp[i + 1][j+1], dp[i][j + 1])$.

After filling the table, `dp[0][0]` holds the minimum distance to assign all robots from the first factory onward.

#### Algorithm

- Sort the `robot` array and the `factory` array based on their positions to ensure efficient matching.

- Flatten the factory positions into a single array `factoryPositions` according to their capacities, where each factory's position is repeated as many times as its capacity allows.

- Initialize `robotCount` to the number of robots and `factoryCount` to the number of factory positions.

- Create a 2D dynamic programming (DP) table `dp` of size `(robotCount + 1) x (factoryCount + 1)` initialized to zero, where `dp[i][j]` represents the minimum total distance for assigning robots from `i` to `robotCount - 1` using factories from `j` to `factoryCount - 1`.

- Set base cases:
  - For each robot `i`, set `dp[i][factoryCount]` to a large value (`1e12`) to represent that there are no factories left for assignment.

- Fill the DP table using a bottom-up approach:
  - Iterate backward through each robot `i` from `robotCount - 1` to `0`.
  - For each robot, iterate backward through each factory `j` from `factoryCount - 1` to `0`:
    - Calculate the distance for the current robot to the current factory and add the result of assigning the next robot to the next factory:  
      `assign = abs(robot[i] - factoryPositions[j]) + dp[i + 1][j + 1]`
    
    - Also consider skipping the current factory for the current robot:  
      `skip = dp[i][j + 1]`
    
    - Update `dp[i][j]` with the minimum of the two options:  
      `dp[i][j] = min(assign, skip)`

- Return the value at `dp[0][0]`, which represents the minimum total distance starting from the first robot and the first factory.

#### Implementation

<iframe src="https://leetcode.com/playground/5Ndvt4rE/shared" frameBorder="0" width="100%" height="500" name="5Ndvt4rE"></iframe>

#### Complexity Analysis

Let $n$ be the number of robots and $m$ be the number of factories.

- Time complexity: $O(m \cdot n^2)$

    The function `minimumTotalDistance` starts by sorting the `robot` and `factory` arrays, which takes $O(n \log n)$ and $O(m \log m)$ respectively.
    
    Flattening the factories based on their capacities can result in up to $O(m \cdot n)$ factory positions if each factory has a capacity up to $n$. This flattening step requires $O(m \cdot n)$ time.

    After flattening, the DP table is filled in a bottom-up manner. The table’s size is $O(n \cdot (m \cdot n))$, where each entry depends on evaluating two options for each pair of robots and factory positions. This makes the overall time complexity of filling the DP table $O(m \cdot n^2)$.

- Space complexity: $O(n \cdot m)$

    The space complexity is primarily determined by the DP table, which is a 2D array of size $(n + 1) \times (m + 1)$. This leads to a space complexity of $O(n \cdot m)$.
    
    The space taken by the sorting algorithm depends on the language of implementation:
      In Java, `Arrays.sort()` is implemented using a variant of the Quick Sort algorithm which has a space complexity of $O( \log n)$.
      In C++, the `sort()` function is implemented as a hybrid of Quick Sort, Heap Sort, and Insertion Sort, with a worst-case space complexity of $O(\log n)$.
      In Python, the `sort()` method sorts a list using the Timsort algorithm which is a combination of Merge Sort and Insertion Sort and has a space complexity of $O(n)$.

    Although additional space is used for storing the `factoryPositions` array, it is not as significant in terms of complexity compared to the DP table.

    Thus, the total space complexity remains $O(n \cdot m)$.

---

### Approach 4: Space Optimized Tabulation

#### Intuition

The 2D table approach uses more space than necessary. We can reduce space complexity from $O(n \cdot m)$ to $O(m)$ by using a 1D DP array.

Since calculating `current[i][j]` only requires values from the next row (`current[i + 1][...]`), we can maintain only two rows: one for the current state we’re filling and one for the next state holding results from the previous robot in the iteration.

By iterating backwards over robots and factories, we can use a single array, `current`, of size equal to the number of factories. Starting from the last robot, we iterate over factories in reverse, updating `current[j]` in place using `current[j + 1]` (for skipping the factory) and `current[j + 1] + |robot[i] - factoryPositions[j]|` (for assigning this factory).

This ensures `current[j]` holds the minimum distance for that subproblem. After finishing the iteration, `current[0]` will contain the minimum distance for assigning all robots to factories.

The algorithm is visualized below:

!?!../Documents/2463/approach4.json:845,950!?!

#### Algorithm

- Sort the `robots` array and the `factories` array by their positions to facilitate distance calculations.

- Flatten the `factories` into a `factoryPositions` array based on their capacities:
  - For each factory in `factories`, add its position to `factoryPositions` as many times as its capacity allows.

- Initialize variables:
  - `robotCount` to store the number of robots.
  - `factoryCount` to store the number of factory positions.
  - Two arrays, `next` and `current`, both of size `factoryCount + 1`, initialized to 0. These will be used for dynamic programming.

- Initialize `current[factoryCount]` to a large value (1e12) for the current robot's calculations.

- Fill the dynamic programming (DP) table using two rows for optimization:
  - Iterate over the robots in reverse order:    
    - For each factory position (also iterated in reverse):
      - Calculate the distance if the current robot is assigned to the current factory:
        - Use `assign = abs(robots[i] - factoryPositions[j]) + next[j + 1]`.
      - Calculate the distance if the current factory is skipped for this robot:
        - Use `skip = current[j + 1]`.
      - Store the minimum of `assign` and `skip` in `current[j]`.

    - Move to the next robot by updating `next` to be equal to `current`.

- After processing all robots, return `current[0]`, which contains the minimum total distance for assigning all robots to factories.

#### Implementation

<iframe src="https://leetcode.com/playground/77ZRqRLV/shared" frameBorder="0" width="100%" height="500" name="77ZRqRLV"></iframe>

#### Complexity Analysis

Let $n$ be the number of robots and $m$ be the number of factories.

- Time complexity: $O(m \cdot n^2)$

    The function `minimumTotalDistance` begins by sorting the `robots` and `factories` arrays, which have a time complexity of $O(n \log n)$ and $O(m \log m)$ respectively.

    The nested loops that flatten the factory positions based on each factory's capacity have a time complexity of $O(m \cdot n)$, as each factory can contribute up to $n$ positions. In the worst case, this results in a flattened `factoryPositions` array with $O(m \cdot n)$ items.

    The DP table is then filled using two rows to optimize space. The outer loop iterates through each robot, running $n$ times, and the inner loop iterates through the flattened factory positions, running $m \cdot n$ times. Thus, filling the DP table has a time complexity of $O(n \cdot (m \cdot n)) = O(m \cdot n^2)$.

- Space complexity: $O(m + S)$

    The space complexity is determined by the two 1D arrays: `next` and `current`, each of size $m + 1$. This gives a space complexity of $O(m)$.

    The space taken by the sorting algorithm depends ($S$) on the language of implementation:
      In Java, `Arrays.sort()` is implemented using a variant of the Quick Sort algorithm which has a space complexity of $O( \log S)$.
      In C++, the `sort()` function is implemented as a hybrid of Quick Sort, Heap Sort, and Insertion Sort, with a worst-case space complexity of $O(\log S)$.
      In Python, the `sort()` method sorts a list using the Timsort algorithm which is a combination of Merge Sort and Insertion Sort and has a space complexity of $O(S)$.

    Although the approach also uses the `factoryPositions` array to store factory positions, its impact on the overall complexity assessment is less compared to the other factors.

    Therefore, the total space complexity is primarily driven by the two rows used in the DP calculation and sorting, leading to a space complexity of $O(m + S)$.

---