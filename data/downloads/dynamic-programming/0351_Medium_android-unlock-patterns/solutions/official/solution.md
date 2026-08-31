# Official Solution

**Link:** [https://leetcode.com/problems/android-unlock-patterns/solution/](https://leetcode.com/problems/android-unlock-patterns/solution/)

---

[TOC]

## Solution

---

### Overview

Most Android phones feature a security mechanism known as a lock pattern. It is a $3 \times 3$ grid of dots, where unmarked dots can be connected consecutively to create a pattern. More formally, from any dot in the grid, we can make 2 types of moves:

1. Single-step move: This involves connecting two dots directly.

![simple moves in dot grid](../Figures/351/simple_moves.png)

2. Skip move: This allows us to skip over exactly one dot to connect two non-neighboring dots, but only when the dot in between has already been marked.

![skip moves in dot grid](../Figures/351/skip_moves.png)

**Key Observations:**
1. From any given dot on the grid, all other dots are accessible through either a single-step move or a skip move.
2. No dot in the pattern may be visited twice, unless it is being passed over to connect two non-neighboring dots.

Given two integers, `m` and `n`, our task is to calculate the total number of possible patterns that can be formed using these moves, with the constraint that the pattern must include at least `m` dots and at most `n` dots.
    
---

### Approach 1: Backtracking

#### Intuition

One approach to solving this problem involves generating all possible patterns and counting those that meet our specified conditions. Let's explore this method with a slight optimization.

First, we'll create two arrays to represent each type of possible move: `SINGLE_STEP_MOVES` and `SKIP_DOT_MOVES`.

To find each pattern, we'll employ a recursive function `countPatternsFromDot` which explores all possible moves from the current dot under examination. We'll keep track of the dots explored at each step and start counting once the number of dots exceeds `m`. The recursion will continue until the current pattern reaches `n` dots, at which point it terminates. This function will successfully return all possible patterns from any given starting point. 

However, we can often predict whether a path will yield a satisfactory pattern well before reaching its end. For instance, if at any point in the pattern's development, all potential next moves violate the rules, we can conclude that any patterns stemming from this state will be invalid. At any step, if we determine that the current path will not lead to a valid solution, we can abandon it and return to a previous step that still shows promise. This technique, known as backtracking, helps optimize our approach. If you're unfamiliar with it, consider reviewing this LeetCode [Explore Card](https://leetcode.com/explore/learn/card/recursion-ii/472/backtracking/2654/) for a detailed explanation.

Since a valid pattern can start from any dot, we'll call `countPatternsFromDot` for each of the nine dots and aggregate the results. This total count represents the required number of unlock patterns.

#### Algorithm

- Define constants:
  - `SINGLE_STEP_MOVES`: All possible adjacent and diagonal moves.
  - `SKIP_DOT_MOVES`: Moves that jump over a dot, requiring the middle dot to be visited.

Main method `numberOfPatterns`:

- Initialize a counter `totalPatterns` to accumulate our result.
- Iterate through all 9 dots on the grid:
  - For each dot, call `countPatternsFromDot` and add it to `totalPatterns`.
- Return `totalPatterns`.

Helper method `countPatternsFromDot`:

- Define a method `countPatternsFromDot` with parameters: `m`, `n`, `currentLength`, `currentRow`, `currentCol` and a boolean matrix `visitedDots`.
- If `currentLength` exceeds `n`, return `0`.
- Initialize a variable `validPatterns` to count the number of patterns.
- If `currentLength` is greater than `m`, increment `validPatterns`.
- Mark the current dot as visited in `visitedDots`.
- Explore all `SINGLE_STEP_MOVES`:
  - For each `move`, check if it's valid using `isValidMove`.
  - If valid, recursively count patterns from the new position.
- Explore all `SKIP_DOT_MOVES`:
  - For each `move`, check if it's valid using `isValidMove`.
  - Find `middleRow` as `currentRow + move[0] / 2` and `middleCol` as `currentCol + move[1] / 2`.
  - If the middle point is visited, recursively count patterns from the new position.
- To backtrack, un-mark the current dot in `visitedDots`.
- Return `validPatterns`.

Helper method `isValidMove`:

- Define a method `isValidMove` with parameters: `row`, `col` and `visitedDots`.
- Return `true` if `(row, col)` is within the grid and hasn't been visited. 

> Note: For reference, the possible directions for traversal from any given cell are:
> ![directions in a grid](../Figures/351/directions.png)

#### Implementation

<iframe src="https://leetcode.com/playground/ATTrKNuh/shared" frameBorder="0" width="100%" height="500" name="ATTrKNuh"></iframe>

#### Complexity Analysis

Let $n$ be the maximum numbers of keys allowed in the pattern.

- Time complexity: $O(9 \cdot 8^n)$

    The method `numberOfPatterns` iterates through all $9$ dots on the grid as a starting point. 

    In each call to `countPatternsFromDot`, the function explores all possible moves from the current dot. Let $8$ be the approximate number of choices at each dot. In the worst-case scenario, each recursive call leads to further recursive calls, up to a maximum depth of $n$. Thus, the total number of patterns explored can be approximated by $9 \times 8^n$ (each move branching out into multiple further moves).

    Thus, the overall time complexity of the algorithm is $O(9 \cdot 8^n)$.

- Space complexity: $O(n)$
    
    The arrays `SINGLE_STEP_MOVES` and `SKIP_DOT_MOVES` use constant space.

    The `visitedDots` matrix is a $3 \times 3$ boolean array, which takes up constant space.

    The maximum depth of the recursion stack is $n$.

    Thus, the overall space complexity of the algorithm is $O(n)$.
---

### Approach 2: Backtracking (Optimized)

#### Intuition

A major inconvenience in the previous approach was hardcoding each possible move from a dot. Instead of physically creating a grid and traversing it, notice that we can reach all other dots from each dot, albeit some of those moves are skip moves. So, let's eliminate the arrays of moves, and instead maintain a matrix called `jump`. This matrix will track which moves require a jump and over which dot. For instance, moving from dot `2` to dot `8` necessitates jumping over dot `5`, so we'll set `jump[2][8]` to `5`.

Another crucial observation is that when we iterate over all numbers in `numberOfPatterns` to find the total number of moves starting with each number, we're performing redundant calculations. Check out the image below:

![image to show symmetry](../Figures/351/symmetry.png)

We can see that the positions (2, 4, 6, 8) are symmetrical, yielding the same number of total patterns. The same concept applies to the corner points (1, 3, 7, 9). Consequently, we can replace the nine calls to `countPatternsFromDot` with three calls:

1. A call for the corner points (1, 3, 7, 9).
2. A call for the edge points (2, 4, 6, 8).
3. A call for the center point (5).

#### Algorithm

Main method `numberOfPatterns`:
 
- Initialize a 2D array `jump` to store numbers that need to be jumped over for valid moves.
- Populate `jump` array with valid jump-over numbers. Each `jump[i][j]` contains the number needed to be jumped over to reach `j` from `i`.
- Create a boolean array `visitedNumbers` to track visited numbers.
- Initialize `totalPatterns` to store the count of valid patterns.
- Call `countPatternsFromNumber` for corner numbers (1, 3, 7, 9) and multiply by `4` due to symmetry. Add it to `totalPatterns`.
- Call `countPatternsFromNumber` for edge numbers (2, 4, 6, 8) and multiply by `4` due to symmetry. Add it to `totalPatterns`.
- Call `countPatternsFromNumber` for the final time to account for the center(5). Add it to `totalPatterns`.
- Return `totalPatterns`.

Helper method `countPatternsFromDot`:

- If `currentLength` exceeds `maxLength`, return `0`.
- Initialize a variable `validPatterns` to count the total number of patterns for the current configuration.
- If `currentLength` is greater than `minLength`, increment `validPatterns`.
- Mark `visitedNumbers[currentNumber]` as `true`.
- For each possible `nextNumber` from 1 to 9:
  - Calculate `jumpOverNumber` from the `jump` matrix.
  - If `nextNumber` has not been visited yet and either `jumpOverNumber` is `0` or `jumpOverNumber` is visited:
    - Recursively call `countPatternsFromDot` from `nextNumber` and add it to `validPatterns`.
- To backtrack, un-mark `currentNumber` from the `visitedNumbers` array.
- Return `validPatterns`.

#### Implementation

<iframe src="https://leetcode.com/playground/E55hUUCe/shared" frameBorder="0" width="100%" height="500" name="E55hUUCe"></iframe>

#### Complexity Analysis

Let $n$ be the maximum number of keys allowed in the pattern.  

* Time complexity: $O(3 \cdot 8^n)$

    The algorithm calls the recursive function `countPatternsFromNumber` a total of 3 times. Each recursive call explores approximately 8 surrounding dots in each call. In the worst case, each recursive call can spread up to a maximum depth of $n$ with a branching factor of $8$. Thus, the total time complexity of the algorithm comes out to be $O(3 \cdot 8^n)$.

* Space complexity: $O(n)$

    The `jump` array is a $10 \times 10$ grid which takes constant space. The maximum depth of recursion can be $n$ in the worst case. Thus, the overall space complexity is $O(n)$.

---

### Approach 3: Memoization

#### Intuition

As we recursively construct each pattern, we often encounter sub-problems that we've previously solved. For example, in the sequences [7, 8, 5] and [8, 7, 5], the number of patterns emerging from 5 will be identical in both cases, as it depends solely on the current number and the dots visited thus far. To avoid repeatedly calculating these overlapping sub-problems, we can significantly improve our time complexity by optimizing our algorithm.

This is where [dynamic programming](https://leetcode.com/explore/learn/card/dynamic-programming/630/an-introduction-to-dynamic-programming/4035/) comes in. The essence of dynamic programming is to save (memoize) the results of previously computed sub-problems, so that if we encounter the same sub-problem again, we can directly return the saved result instead of recalculating it. But how do we uniquely identify a sub-problem? The answer lies in its state. Each recursive state is defined by two factors: the current number from which the pattern emerges, and the dots visited up to that point. This state uniquely identifies each sub-problem, allowing us to store the result in a `dp` table using this state as the identifier.

However, storing all visited numbers in a boolean array is cumbersome to use as an identifier. We need something simpler, like an integer value. Considering the constraints of the problem, the maximum number of dots possible is 9. We can use a 9-digit binary number, where each digit can be a 0 or a 1, to represent whether a number has been visited (1) or not (0). This 9-digit binary number effectively replaces the `visitedNumbers` array, allowing us to memoize the recursion results in a `dp` table of size $10 \times (1<<10)$.

To manipulate this new `visitedNumbers` integer, we need three essential functions:

1. `setBit`: Toggles the `i`th bit of the number to `1`.
2. `clearBit`: Toggles the `i`th bit of the number to `0`.
3. `isSet`: Checks whether the `i`th bit is `0` or `1`.

For more information on bit manipulation concepts, you can refer to this LeetCode [Explore Card](https://leetcode.com/explore/learn/card/bit-manipulation/669/bit-manipulation-concepts/4496/).

#### Algorithm

Main method `numberOfPatterns`:
 
- Initialize a 2D array `jump` to store numbers that need to be jumped over for valid moves.
- Populate `jump` array such that `jump[i][j]` stores the number needed to be jumped over to get to `j` from `i`.
- Initialize variables:
  - `visitedNumbers` to `0` for tracking visited numbers.
  - `totalPatterns` to store the count of valid patterns.
- Create a 2D array 'dp' of size $10 \times (1 << 10)$ for memoization.
- Call `countPatternsFromNumber` for the corner numbers (1, 3, 7, 9) and multiply by 4 due to symmetry. Add it to `totalPatterns`.
- Call `countPatternsFromNumber` for the edge numbers (2, 4, 6, 8) and multiply by 4 due to symmetry. Add it to `totalPatterns`.
- Call `countPatternsFromNumber` a final time for the center (5). Add it to `totalPatterns`.
- Return `totalPatterns` as our answer.

Helper method `countPatternsFromNumber`:

- Define a method `countPatternsFromNumber` with parameters: `currentNumber`, `currentLength`, `minLength`, `maxLength`, the `jump` array, `visitedNumbers`, and the `dp` matrix.
- If `currentLength` exceeds `maxLength`, return `0`;
- If the result for the current state `(currentNumber, visitedNumbers)` is in `dp`, return it.
- Create a variable `validPatterns` to store the total patterns for the current combination.
- If `currentLength` is greater than `minLength`, increment `validPatterns`.
- Use `setBit` to mark `currentNumber` as visited in `visitedNumbers`.
- For each `nextNumber` from `1` to `9`:
  - Set `jumpOverNumber` as `jump[currentNumber][nextNumber]`.
  - Check if it's unvisited and either `jumpOverNumber` is `0` or the `jumpOverNumber` is visited:
    - If so, recursively count patterns for `nextNumber` and add them to `validPatterns`.
- Backtrack by un-marking `currentNumber` from `visitedNumbers`.
- Store `visitedNumbers` as the result for the current state in `dp` for the current state.
- Return `visitedNumbers`.

Helper method `setBit`:
- Define a method `setBit` with parameters: `num` and `position`.
- Left shift `1` by `(position-1)` places. Bitwise OR the result with `num`.
- Return `num`. 

Helper method `clearBit`:
- Define a method `clearBit` with parameters: `num` and `position`.
- Left shift `1` by `(position-1)` places. Bitwise XOR the result with `num`.
- Return `num`. 

Helper method `isSet`:
- Define a method `isSet` with parameters: `num` and `position`.
- Find the `bitAtPosition` by right shifting `num` by `(position-1)` places and bitwise AND'ing with `1`.
- Return `true` if `bitAtPosition` is `1`. Else return `false`.

#### Implementation

<iframe src="https://leetcode.com/playground/VjHqLpnk/shared" frameBorder="0" width="100%" height="500" name="VjHqLpnk"></iframe>

#### Complexity Analysis

Let $n$ be the maximum numbers of keys allowed in the pattern.

* Time complexity: $O(1)$

    Due to memoization, the time complexity of the algorithm is bounded by the total time required to fill the `dp` array. The total size of `dp` is $10 \times (1 << 10)$ or $10240$. So, the overall time complexity of the algorithm is $O(10240)$, which can be simplified to $O(1)$.

* Space complexity: $O(n)$

    The `jump` array and the `dp` array both use constant space irrelevant of the input. The recursion stack has a space complexity of $O(n)$. Thus, the space complexity of the algorithm is $O(n)$.

---