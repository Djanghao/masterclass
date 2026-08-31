# Official Solution

**Link:** [https://leetcode.com/problems/find-the-punishment-number-of-an-integer/solution/](https://leetcode.com/problems/find-the-punishment-number-of-an-integer/solution/)

---

[TOC]

## Solution

---

### Overview

We are given a positive integer `n`, and our task is to return its **punishment number**.  

The **punishment number** is the sum of the squares of all integers `i` that satisfy two conditions:  
1. **Range**: `i` must be within the range `1 <= i <= n`.  
2. **Partition**: The decimal representation of `i * i` can be partitioned into contiguous substrings such that the sum of these substrings equals `i`.  

In other words, for each integer in the range `[1, n]`, we check whether the digits of its squared value can be split so that the resulting sum matches the original number. 

Let's look at examples where the squared integer's digits can be partitioned as described:  

![description](../Figures/2698/2698.png)  

As we can see, multiple ways exist to split the digits of a squared integer, leading to different summations. Our goal is to find at least one valid partition for each integer in the given range and sum up the squares of all numbers that satisfy the condition.

---

### Approach 1: Memoization

#### Intuition

We need to find whether a number’s square can be split into contiguous substrings that add to the original number. If such a partition exists, we add the square to the final punishment sum. To break this down, we need to establish the core relationship: for each number `currentNum` in the range `[1, n]`, we compute its square (say `squareNum`) and check whether we can split its digits in a way that the sum of those partitions equals `currentNum`. The challenge is to explore all possible ways to partition the number while ensuring we do not perform unnecessary computations.

A brute-force approach would involve generating every possible partition of `squareNum`, computing the sum for each partition, and checking if it equals `currentNum`. However, this results in exponential complexity since the number of ways to split a string grows exponentially with its length. Instead, we adopt a **recursive backtracking approach** where we attempt to build valid partitions step by step.  

The key observation is that at any given position in the string representation of `squareNum`, we can take a substring of any length starting from that position, convert it into an integer, and add it to a running sum (`sum`). If at any point `sum` exceeds `currentNum`, we stop exploring that branch early. If we reach the end of the string and `sum` equals `currentNum`, we confirm that a valid partition exists. This naturally leads to a recursive function that explores different partitioning options.  

However, recursion alone would lead to redundant calculations. If we repeatedly attempt to partition the same substring from the same index with the same accumulated sum, we are performing unnecessary recomputation. This is where **dynamic programming (DP) with memoization** helps. We use a 2D array `memo[startIndex][sum]` to store the results of previously computed states. Here, `startIndex` represents our current position in the string, and `sum` represents the accumulated sum of selected partitions. If a state has already been computed, we can return the stored result immediately, avoiding redundant calculations.  

With this strategy in mind, we iterate through numbers from `1` to `n`, square each number, and check if it can be partitioned using the recursive function `findPartitions()`. Before each call, we reset the DP array to ensure we do not mix results across different numbers. Then, our recursive function attempts to extract substrings, add them to the sum, and continue exploring further partitions. If a valid partition is found, we add `squareNum` to our total punishment sum.  

#### Algorithm

1. Initialize an integer `punishmentNum`, which represents the punishment number of the range `[1, n]`.
2. Create the `findPartitions()` function, which takes integers `startIndex`, `sum`, and `target`, a string `stringNum`, and a 2D array `memo` as parameters and returns a boolean value.
    * If we reach the end of the string, return `true` if the `sum` of the current partition equals `target`.
    * If the `sum` is greater than `target`, return `false`, indicating that the current permutation does not add up to `target`.
    * If `memo[startIndex][sum]` is not `-1`, return the stored result since it has already been computed.
    * Initialize a boolean value, `partitionFound`, to `false`.
    * Iterate through the digits from indices `startIndex` up to the size of `stringNum`. For each index, `currIndex`:
        * Get the substring of `stringNum` starting to the right of `currentIndex`.
        * Recursively call `findPartitions()` to check if the summation of the current partition added to the current `sum` equals `target`.
        * If any valid partition is found, return `true`.
    * Memoize the result for future reference and return the result.
3. Iterate through the integers from index `0` to `n`:
    * For each number, `currentNum`, calculate the squared value of `currentNum` and store it as `squareNum`.
    * Create a 2D array, `memoArray` to store all the partitions of `squareNum`, and initialize all of its values to `-1`.
    * Input `0`, `0`, the string version of `squareNum`, `currentNum`, and `memoArray` into the function `findPartitions()` as the `startIndex`, `sum`, `stringNum`, `target`, and `memo` parameters, respectively.
    * If `findPartitions()` returns `true`, add `currentNum` to `punishmentNum`.
4. After all the iterations are completed, return `punishmentNum`.

#### Implementation

<iframe src="https://leetcode.com/playground/Wb2YiAui/shared" frameBorder="0" width="100%" height="500" name="Wb2YiAui"></iframe>

#### Complexity Analysis

Let $n$ represent an integer in the range `[1, n]`.

* Time Complexity: $O(n \cdot 2^{\log_{10}(n)})$

    We iterate through $n$ integers only once. For each integer, we recursively traverse all the possible ways to split the number. The number of recursion calls is dependent on how many times we have to partition a number, `n`. This is proportional to the number of digits in the squared number, which can be calculated as ${\log_{10}(n^2)}$, or simply $\log_{10}(n)$.

    At each digit, we are given the option to either break a partition or continue adding to the partition, giving us 2 options at each digit. The number of times we have to make this decision to exhaust all possible options is proportional to the number of digits in the squared number. As a result, this leads to a time complexity for the recursive function of $O(2^{\log_{10}(n)})$.

    Since we iterate through this process $n$ times, we multiply this time complexity by a factor of $n$. This leads to an overall time complexity of $O(n \cdot 2^{\log_{10}(n)})$.

* Space Complexity: $O(n \cdot {\log_{10}(n)} + {\log_{10}(n)})$

    The space complexity is determined by the `memo` array and recursion stack. 

    The depth of the recursion stack is proportional to the current integer. In the worst case, a recursive call can continue until each digit is explored individually in a partition.

    As a result, the maximum size of the stack is proportional to the number of digits in the squared number, which can be calculated as ${\log_{10}(n^2)}$. This leads to a time complexity for the recursive stack of $O({\log_{10}(n^2)})$, which can be simplified to $O({\log_{10}(n)})$.

    As for the `memo` array, its size equals the number of digits that can be explored, multiplied by the number of potential values for $n$, to store all possible permutations. As a result, this creates a space complexity of $O(n \cdot {\log_{10}(n)})$.

    Combining these data structures, the overall space complexity of the solution is $O(n \cdot {\log_{10}(n)} + {\log_{10}(n)})$

---

### Approach 2: Recursion of Strings

#### Intuition

The primary source of memory usage in the previous solution is the `memo` array, which stores the results of all possible partitions. This array consumes significant space, but we only need to determine whether a valid partition exists for each number. This eliminates the need to track every potential partition for future reference, making it unnecessary to store intermediate results. Thus, we can reduce the overall space complexity by removing the dependency on the `memo` array.

With this realization, we can refactor the solution to rely entirely on **backtracking**. We traverse all possible substrings and attempt to add them to see if we can match the original number. As soon as we find a valid partition, we return `true` and stop further exploration. 

The rest of the solution follows the same logic as the memoization approach: for each number in the range `[1, n]`, we compute its square and check if any partition of the square sums up to the number itself. If we find a valid partition, we add the square to the punishment number. 

#### Algorithm

1. Initialize an integer `punishmentNum`, which represents the punishment number of the range `[1, num]`.
2. Create the function `canPartition()`, which takes a string `stringNum` and an integer `target` parameter and returns a boolean value.
    * If the string is empty and the target equals `0`, return `true`, indicating that a valid partition that adds up to the target was found.
    * If the target is less than 0, return false, indicating that the current partition is invalid.
    * Iterate through the string `stringNum`. For each index `index`:
        * Let string `left` represent the substring up to `index`, and `right` represent the remainder of the string.
        * Recursively call `canPartition()`to check if `right` can be partitioned to match `target - leftNum`.
    * If any recursive branch of `canPartition()` returns `true`, return `true`; else return `false`.
3. Iterate through the integers from index `0` to `num`:
    * For each number, `currentNum`, calculate the squared value of `currentNum` and store it as `squareNum`.
    * Input the string version of `currentNum`, and `squareNum` into the function `canPartition()` as the `num` and `target` parameters, respectively.
    * If `canPartition()` returns `true`, add `currentNum` to `punishmentNum`.
4. After all the iterations are completed, return `punishmentNum`.

#### Implementation

<iframe src="https://leetcode.com/playground/a973cKNN/shared" frameBorder="0" width="100%" height="500" name="a973cKNN"></iframe>


#### Complexity Analysis

Let $n$ represent an integer in the range `[1, n]`.

* Time Complexity: $O(n \cdot 2^{\log_{10}(n)})$

    We iterate through $n$ integers only once. For each integer, we recursively traverse all the possible ways to split the number. The number of recursion calls is dependent on how many times we have to partition a number, `n`. This is proportional to the number of digits in the squared number, which can be calculated as ${\log_{10}(n^2)}$, or simply $\log_{10}(n)$.

    At each digit, we are given the option to either break a partition or continue adding to the partition, giving us 2 options at each digit. The number of times we have to make this decision to exhaust all possible options is proportional to the number of digits in the squared number. As a result, this leads to a time complexity for the recursive function of $O(2^{\log_{10}(n)})$.

    Since we iterate through this process $n$ times, we multiply this time complexity by a factor of $n$. This leads to an overall time complexity of $O(n \cdot 2^{\log_{10}(n)})$. 

* Space Complexity: $O({\log_{10}(n)})$

    The space complexity is determined by the recursion stack. 

    The depth of the recursion stack is proportional to the current integer. In the worst case, a recursive call can iterate within itself when each digit is explored individually in a partition.

    As a result, the max size of the stack is proportional to the number of digits in the squared number, which can be calculated as ${\log_{10}(n^2)}$. This leads to a time complexity for the recursive stack of $O({\log_{10}(n^2)})$, which can be simplified to $O({\log_{10}(n)})$.

---

### Approach 3: Recursion of Integers

#### Intuition

In the previous approaches, we used string manipulation to get the answer. Now, instead of treating the problem as a sequence of string-based substrings, we can focus on partitioning the digits of a number using integer operations. This allows us to avoid the overhead of converting numbers to strings and directly work with the numeric properties of the number.

We can use the **modulo** and **division** operations to extract different parts of a number. These operations let us break the number down into individual digits or groups of digits, which we can then use to test if their sum matches the target value.

To understand this better, let's consider an example: the number `634`. Using the modulo operation, we can extract the digits or groups of digits as follows:
- `634 % 10 = 4` (extracts the last digit)
- `634 % 100 = 34` (extracts the last two digits)
- `634 % 1000 = 634` (extracts the entire number)

Now, using the division operation, we can continually reduce the number by removing its rightmost digits:
- `634 / 10 = 63` (removes the last digit)
- `634 / 100 = 6` (removes the last two digits)
- `634 / 1000 = 0` (number is fully reduced)

By performing these operations, we can generate permutations of the number from the rightmost side. This is a key observation: we start from the rightmost digits, using the modulo operation to extract the current part of the number and division to reduce the number progressively. When partitioning the number into its components, we want to break it down from the least significant digit (the rightmost side) to the most significant one.

More specifically, when processing from the right, we are naturally ensuring that smaller partitions (from right to left) are handled first. For instance, `634` can be partitioned as: `4`, `34`, and `634`. If we try to partition from left to right, we're forced to consider all permutations of the number starting with the largest unit (which can quickly escalate into complex cases).

#### Algorithm

1. Initialize an integer `punishmentNum`, which represents the punishment number of the range `[1, num]`.
2. Create the function `canPartition()`, which takes integer parameters `num` and `target` and returns a boolean value.
    * If `target` is less than `0` or `num` is less than `target`, return `false`, indicating that the current partition of `num` does not add up to `target`.
    * If `num` equals `target`, return true, indicating that the current partition of `num` adds up to `target`.
    * Otherwise, recursively check the digit combinations starting from the right side of the number to find any that make the summation equal to `target`, returning `true` if any are found.
        * Check each possible combination of digits, removing them from `num` and subtracting them from `target`.
        * Since `target` is bound by the constraint `1 <= num <= 1000`, we only have to check multiples of 10s, 100s, and 1000s.
3. Iterate through the integers from index `0` to `num`:
    * For each number, `currentNum`, calculate the squared value of `currentNum` and store it as `squareNum`.
    * Input the `currentNum` and `squareNum` into the function `canPartition()` as the `num` and `target` parameters, respectively.
    * If `canPartition()` returns `true`, add `currentNum` to `punishmentNum`.
4. After all the iterations are completed, return `punishmentNum`.

#### Implementation

<iframe src="https://leetcode.com/playground/VbNfb2Mb/shared" frameBorder="0" width="100%" height="500" name="VbNfb2Mb"></iframe>

#### Complexity Analysis

Let $n$ represent an integer in the range `[1, n]`.

* Time Complexity: $O(n \cdot 2^{\log_{10}(n)})$

    We iterate through $n$ integers only once. For each integer, we recursively traverse all the possible ways to split the number. The number of recursion calls is dependent on how many times we have to partition a number, `n`. This is proportional to the number of digits in the squared number, which can be calculated as ${\log_{10}(n^2)}$, or simply $\log_{10}(n)$.

    At each digit, we are given the option to either break a partition or continue adding to the partition, giving us 2 options at each digit. The number of times we have to make this decision to exhaust all possible options is proportional to the number of digits in the squared number. As a result, this leads to a time complexity for the recursive function of $O(2^{\log_{10}(n)})$.

    Since we iterate through this process $n$ times, we multiply this time complexity by a factor of $n$. This leads to an overall time complexity of $O(n \cdot 2^{\log_{10}(n)})$.

* Space Complexity: $O({\log_{10}(n)})$

    The space complexity is determined by the recursion stack. 

    The depth of the recursion stack is proportional to the current integer. In the worst case, a recursive call can iterate within itself when each digit is explored individually in a partition.

    As a result, the max size of the stack is proportional to the number of digits in the squared number, which can be calculated as ${\log_{10}(n^2)}$. This leads to a space complexity for the recursive stack of $O({\log_{10}(n^2)})$, which can be simplified to $O({\log_{10}(n)})$.
    
---