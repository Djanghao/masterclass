# Official Solution

**Link:** [https://leetcode.com/problems/construct-the-lexicographically-largest-valid-sequence/solution/](https://leetcode.com/problems/construct-the-lexicographically-largest-valid-sequence/solution/)

---

[TOC]

## Solution

---

### Overview

Given an integer `n`, we need to find the lexicographically largest sequence that satisfies all of these conditions:
- The integer `1` occurs once in the sequence.
- All other integers from `2` to `n` occur exactly twice, and the distance between these occurrences is equal to the value of this integer.

The distance between two integers is defined as the difference in the indices of both the integers. For example: in the array `nums = [1,2,3,1,2]`, the distance between both occurences of 1 is given by 3.

> A sequence `a` is lexicographically larger than a sequence `b` (of the same length) if in the first position where `a` and `b` differ, sequence `a` has a number greater than the corresponding number in `b`. For example, `[0,1,9,0]` is lexicographically larger than `[0,1,5,6]` because the first position they differ is at the third number, and 9 is greater than 5.

---

### Approach: Backtracking

#### Intuition

Observe the lexicographically largest sequences for smaller values of `n`:

- For `n = 1`: `[1]`
- For `n = 2`: `[2, 1, 2]`
- For `n = 3`: `[3, 1, 2, 3, 2]`
- For `n = 4`: `[4, 2, 3, 2, 4, 3, 1]`

Identifying an intuitive pattern for these sequences is challenging. Given that `n` lies in the range `1 <= n <= 20`, we can generate all possible valid sequences and find the lexicographically largest among them using backtracking. We'll use a recursive boolean function to determine whether the current sequence is valid. If it's not, we can terminate the recursive process early. 

Let's represent the recursive function as `bool findLargestSequence(currentIndex, resultSequence, isNumberUsed, targetNumber)`, where we start with an empty sequence `resultSequence` and assign values from `1` to `n` one by one at the `currentIndex`. However, since we want to find the lexicographically maximum sequence, we can start assigning the values from `n` to `1`, in decreasing order. This would help us assign greater values at the beginning of the list. Therefore, the first valid list created would be the lexicographically greatest one.

The base case occurs when `currentIndex` reaches the end of the sequence, signaling that a valid solution has been constructed. We return `true` and save the current sequence as the answer.

We will try to place all the values from `n` to `1` at the `currentIndex`. If the value to be assigned, `numberToPlace`, is not `1`, we must assign this value at an index located `numberToPlace` positions away to create a valid sequence. If that position, given by `numberToPlace + currentIndex`, already contains a value, the current sequence is invalid, and we cannot assign the current value to this index. So we move to the next possible value for `numberToPlace` and check if it can be assigned to the current index. For `numberToPlace = 1`, we can proceed directly to the next index.

After assigning `numberToPlace`, we recursively attempt to fill subsequent positions by passing the modified sequence and incrementing the `currentIndex` in the recursive state. However, backtracking requires that we undo the assignments at both `currentIndex` and `currentIndex + numberToPlace` to explore other valid sequences. So we unassign the values at both these indices and repeat the process for other values of `numberToPlace`.

#### Algorithm

Recursive Helper Function `findLexicographicallyLargestSequence(currentIndex, resultSequence, isNumberUsed, targetNumber)`:

- If `currentIndex` equals the size of `resultSequence`, return `true` as the sequence is fully constructed.  
- If `resultSequence[currentIndex]` is not zero, recursively call the function for `currentIndex + 1`.  
- Loop through numbers from `targetNumber` down to `1` to ensure a lexicographically largest result.  
  - If `isNumberUsed[numberToPlace] == true`, continue to the next number.  
  - Mark the number as used by setting `isNumberUsed[numberToPlace] = true`.  
  - Place `numberToPlace` at `currentIndex` in `resultSequence`.  
  - If `numberToPlace == 1`, directly move to the next index and recursively call the function. If the recursion returns `true`, return `true`.  
  - For larger numbers, check if `currentIndex + numberToPlace` is a valid index and that position is empty. If valid:  
    - Place `numberToPlace` at `currentIndex + numberToPlace`.  
    - Recursively call the function and return `true` if the recursion succeeds.  
    - Undo the placement at `currentIndex + numberToPlace` for backtracking.  
  - Undo the current placement and mark `numberToPlace` as unused.  
- Return `false` if no valid placement is found.

Main Function:

- Initialize `resultSequence` as a vector of size `2 * targetNumber - 1`, filled with zeros, to store the final sequence.
- Create a boolean vector `isNumberUsed` of size `targetNumber + 1`, initialized to `false`, to track the numbers already placed in the sequence.
- Call the recursive helper function `findLexicographicallyLargestSequence(0, resultSequence, isNumberUsed, targetNumber)` to construct the sequence.

#### Implementation

<iframe src="https://leetcode.com/playground/QHtdmgDi/shared" frameBorder="0" width="100%" height="500" name="QHtdmgDi"></iframe>

#### Complexity Analysis

Let $n$ be the target number.

- Time Complexity: $O(n!)$

    The recursive function generates permutations by exploring all possible ways to arrange a set of numbers. For a given target number `n`, the function places each number from `n` down to 1 at every valid index in the sequence. Since there are `n` possible choices for the first number, `n-1` choices for the second, and so on, the total number of possible arrangements is the factorial of `n`, denoted as $O(n!)$. This is because each recursive call explores a new possibility by reducing the problem size by 1 until all positions are filled, creating a tree-like structure with `n!` leaves at the deepest level.

    However, while the theoretical time complexity is $O(n!)$, the actual runtime is often much lower in practice. This is due to early pruning of invalid states during the backtracking process. The algorithm can stop as soon as it finds the lexicographically largest valid permutation or an invalid permutation, avoiding further exploration of unnecessary branches. This reduces the number of recursive calls significantly, as many permutations are discarded without fully exploring their subtrees.

- Space Complexity: $O(n)$

    The recursion depth is bounded by `n` due to backtracking. Additional space is required for the `resultSequence` and `isNumberUsed` lists, both of size $O(n)$. Therefore, the total space complexity is given by $O(n)$.

---