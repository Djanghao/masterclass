# Official Solution

**Link:** [https://leetcode.com/problems/lexicographical-numbers/solution/](https://leetcode.com/problems/lexicographical-numbers/solution/)

---

[TOC]

## Solution

---

### Overview

We need to create a list of integers from 1 to $n$ and sort them in lexicographical order. Lexicographical order is similar to dictionary order, where the sequence is based on how words are arranged alphabetically. For numbers, this means sorting them as if they were strings. For example, `'10'` comes before `'2'` because `'1'` is less than `'2'`.

The solution must be efficient, with a time complexity of $O(n)$. This means the algorithm should handle the input size directly without any nested loops that could slow it down. Additionally, the solution should use constant extra space, $O(1)$, which means it should not require extra memory beyond the output list itself.

---

### Approach 1: DFS Approach

#### Intuition

We can think of generating numbers in lexicographical order by imagining how they would appear in a dictionary. The first number is `1`, followed by `10`, `11`, `12`, and so on, before moving to `2`, then `20`, `21`, and so forth. The key is that smaller numbers starting with a particular digit should be fully explored before moving to the next starting digit.

Now, to translate this thinking into an algorithm, consider each number as part of a tree. For instance, `1` has children like `10`, `11`, `12`, and so on, while `2` has children `20`, `21`, and so forth. This naturally suggests a depth-first search (DFS) approach: we explore each number and its children before moving to the next digit.

We start with the numbers `1` through `9` as the roots of the tree. For each of these, we generate their children by appending digits from `0` to `9`, as long as the resulting number remains within the range `[1, n]`. Once we exhaust one branch (e.g., numbers starting with `1` that exceed `n`), we move to the next root (i.e., `2`) and repeat the process. In this way, we progressively build the lexicographical order.


![lexico_tree](../Figures/386/lexico_tree.png)


#### Algorithm

- Initialize an empty array `lexicographicalNumbers` to store the result.

- Iterate over each starting number from 1 to 9:
  - For each `start`, call `generateLexicalNumbers` with the current `start`, limit `n`, and `lexicographicalNumbers` array.

- `generateLexicalNumbers` function:
  - If `currentNumber` exceeds the `limit`, return from the function to stop recursion.

  - Add the `currentNumber` to the `result` array.

  - Iterate over digits from 0 to 9 to try appending them to `currentNumber`:
    - Calculate `nextNumber` by appending the digit to `currentNumber`.
    - If `nextNumber` is within the `limit`, recursively call `generateLexicalNumbers` with `nextNumber`, `limit`, and `result`.
    - If `nextNumber` exceeds the `limit`, break the loop to avoid unnecessary further recursion.

- Return the `lexicographicalNumbers` array containing numbers in lexicographical order.

#### Implementation

<iframe src="https://leetcode.com/playground/B6EiUFeW/shared" frameBorder="0" width="100%" height="500" name="B6EiUFeW"></iframe>

#### Complexity Analysis

- Time Complexity: $O(n)$

    The algorithm generates all numbers from 1 to n in lexicographical order. Each number is visited exactly once and added to the result list. The total number of operations is proportional to the number of elements generated, which is n.

- Space Complexity: $O(\log_{10}(n))$

    We only consider the recursion stack depth. The depth of recursion is proportional to the number of digits $d$ in $n$. Given that the maximum value for $n$ is 50,000, the maximum number of digits $d$ is 5. Thus, the recursion stack depth and corresponding space complexity is $O(d)$, which simplifies to $O(\log_{10}(n))$, but with a maximum constant value of 5 for practical constraints. It can also be argued as $O(1)$. This is because, when substituting $n$ as 50,000, the result is approximately 5 (specifically $4.698970004336$), which is extremely small and does not significantly affect the overall complexity in this range.

> The space complexity analysis does not account for the result list itself, as the problem requires returning a list with $n$ elements. Since we are only storing the elements in the list without performing additional operations on it, the space used by the list is not considered in the complexity analysis.

---

### Approach 2: Iterative Approach

#### Intuition

We can do the same thing iterative, the overall concept remains the same as DFS approach. The difference will be how we organize and implement it.

We initialize the current number as `1`, which is the first number in lexicographical order, and set up a loop that runs `n` times because we want to generate exactly `n` numbers.

In each iteration, we add the current number to the result list. After that, we check if we can go deeper by multiplying the current number by `10`, appending a zero to the current number, giving us the lexicographically smallest possible next number. If the result is still less than or equal to `n`, we update the current number to this new value and continue.

If multiplying by `10` would exceed `n`, we increment the current number. However, this increment can’t always happen directly. If the current number ends in `9` or goes beyond the next "root" (like moving from `19` to `2`), we divide by `10` to move up a level and strip off the last digit. This way we make sure we don’t skip any numbers.

After incrementing, if the new current number ends in a zero (like `20`), we continue removing zeroes, dividing by `10`, until we get a valid number. This ensures we stay in lexicographical order as we move forward.

This way, we mimic the way we would manually write numbers in lexicographical order. We move from one number to the next by considering when to go deeper (appending digits) and when to backtrack (moving to the next root). Unlike the recursive method, which explores each branch of the tree by diving deeper, this method keeps track of the current number and directly adjusts it. This makes it more space-efficient, with essentially no extra space overhead, and runs in $O(n)$ time.

#### Algorithm

- Initialize an empty array `lexicographicalNumbers` to store the results.
- Start with `currentNumber` set to 1.

- Generate numbers from 1 to `n`:
  - Add `currentNumber` to the `lexicographicalNumbers` array.
  
  - If multiplying `currentNumber` by 10 is less than or equal to `n` (i.e., `currentNumber * 10 <= n`), multiply `currentNumber` by 10 to move to the next lexicographical number (i.e., go deeper into the tree of numbers).

  - Otherwise:
    - Adjust `currentNumber` to move to the next valid lexicographical number:
      - While `currentNumber` ends with a 9 or is greater than or equal to `n`:
        - Divide `currentNumber` by 10 to remove the last digit.
      - Increment `currentNumber` by 1 to move to the next number in the sequence.

- Return the `lexicographicalNumbers` array containing the numbers in lexicographical order from 1 to `n`.

#### Implementation

<iframe src="https://leetcode.com/playground/YCsNLk2u/shared" frameBorder="0" width="100%" height="497" name="YCsNLk2u"></iframe>

#### Complexity Analysis

- Time Complexity: $O(n)$

    The algorithm generates numbers in lexicographical order and iterates up to $n$ times to populate the `lexicographicalNumbers` array. Each iteration involves constant-time operations (checking conditions and updating `currentNumber`). Thus, the time complexity is linear in terms of $n$.

- Space Complexity: $O(1)$

    The algorithm uses a constant amount of additional space for variables like `currentNumber` and loop counters. Therefore, the space complexity is $O(1)$.

> The space complexity analysis does not account for the result list itself, as the problem requires returning a list with $n$ elements. Since we are only storing the elements in the list without performing additional operations on it, the space used by the list is not considered in the complexity analysis.

---