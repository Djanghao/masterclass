# Official Solution

**Link:** [https://leetcode.com/problems/construct-smallest-number-from-di-string/solution/](https://leetcode.com/problems/construct-smallest-number-from-di-string/solution/)

---

[TOC]

## Solution

---

### Overview

We are given a string pattern consisting of the characters `'I'` (increasing) and `'D'`. We need to construct and return in the form of a string the lexicographically smallest number that satisfies certain conditions determined by the pattern.

> The term "lexicographically smallest" refers to the smallest possible sequence of numbers when compared as strings. This means we need to prioritize smaller numbers in the earlier positions when constructing the sequence.

To break down the problem, let's first understand the requirements. The pattern is a string of length `n`, where each character dictates the relationship between consecutive digits in the number. The primary goal is to satisfy the following conditions:

- If `pattern[i] == 'I'`, then the digit at position `i` in the number should be smaller than the digit at position `i + 1`.  
- If `pattern[i] == 'D'`, then the digit at position `i` should be larger than the digit at position `i + 1`.

In other words, this means:

- At positions where the pattern has `'I'`, the number must increase.  
- At positions where the pattern has `'D'`, the number must decrease.  

The resulting number, `num`, has a length of `n + 1` because it includes one more digit than the pattern. Additionally, the digits used in the number must be distinct, ranging from `'1'` to `'9'`, meaning that each digit can appear at most once.

Consider the input pattern `"IIIDIDDD"`. One valid number that satisfies this pattern is `"123549876"`. Here's why:  

- For the first three `'I'`s, the numbers must increase: `1 < 2 < 3 < 5`.  
- At position 3, we hit a `'D'`, so the numbers must decrease: `5 > 4`.  
- Then, we have another `'I'` (position 4), so the number at position 4 must be smaller than the one at position 5: `4 < 9`.  
- The rest of the pattern requires a decreasing sequence at positions 5, 6, 7 and 8: `9 > 8 > 7 > 6`.  

The number `"123549876"` is the smallest possible number that adheres to this pattern. Notably, each digit is used only once, and the number is constructed in lexicographically smallest order.

---

### Approach 1: Brute Force

#### Intuition

A straightforward way to solve this problem is to generate all possible arrangements of the digits '1' to '9' and check whether any of them matches the given pattern. Since the constraints are quite small, this brute-force approach will work within the allowed time.

The first step is to determine whether a given sequence of numbers satisfies the pattern. To do this, we define a `check` function. This function iterates through the pattern and verifies whether each character in the pattern is correctly reflected in the corresponding numbers. If the character is `'I'`, the number at that position must be smaller than the next one, and if the character is `'D'`, the number must be greater than the next one. If at any point the sequence does not match the pattern, we return `false`. Otherwise, if the entire sequence follows the pattern correctly, we return `true`.

Once we can check if a sequence is valid, the next step is to generate every possible sequence and pick the smallest one that works. We start by creating a sequence of numbers from 1 to `n + 1` (where `n` is the length of the pattern) in increasing order. This gives us a unique set of numbers to work with.

To explore all possible orders of these numbers, we can use a built-in function, which systematically generates the next lexicographically greater arrangement of the sequence. For each permutation, we use the `check` function to verify whether it follows the given pattern. The first valid permutation that satisfies the pattern is our answer, since permutations are generated in lexicographical order, ensuring that the first valid sequence found is also the smallest one.

#### Algorithm

##### `check` Function (Pattern Validation):
  - The `check` function verifies if the given sequence matches the pattern of `'I'` (Increasing) and `'D'` (Decreasing).
  - For each character in the pattern:
    - If the pattern character is `'I'`, ensure that the corresponding number in the sequence is in increasing order (`sequence[patternIndex] < sequence[patternIndex + 1]`).
    - If the pattern character is `'D'`, ensure that the corresponding number in the sequence is in decreasing order (`sequence[patternIndex] > sequence[patternIndex + 1]`).
  - If any mismatch is found between the sequence and the pattern, return `false`.
  - If the sequence matches the pattern for all characters, return `true`.

##### `smallestNumber` Function:
  - Given a pattern string, the `smallestNumber` function returns the smallest lexicographically valid sequence that matches the pattern.
  - Initialize a string `sequence` by creating a sequence of numbers from 1 to `n + 1`, where `n` is the length of the pattern.
  - Convert the sequence into a string by appending numbers (1 through `n + 1`) to the string `sequence`.
  - Generate the initial `permutation` of the sequence.
  - Use the `next_permutation` function to generate successive permutations of the sequence.
  - Keep generating permutations until a permutation that satisfies the pattern (checked using the `check` function) is found.
  - Once a valid permutation is found, return it.

#### Implementation

<iframe src="https://leetcode.com/playground/d24iGeGd/shared" frameBorder="0" width="100%" height="500" name="d24iGeGd"></iframe>

#### Complexity Analysis

Let $n$ be the length of the input string `pattern`.

- Time complexity: $O(n! \cdot n^2)$

    The algorithm generates all possible permutations of the sequence of numbers from 1 to $n + 1$. The number of permutations of a sequence of length $n + 1$ is $(n + 1)!$, which is $O(n! \cdot n)$. For each permutation, the algorithm checks if it matches the given pattern using the `check` function. The `check` function iterates through the permutation and the pattern, performing comparisons, which takes $O(n)$ time.

    Since there are $O(n! \cdot n)$ permutations and each check takes $O(n)$ time, the overall time complexity is $O(n! \cdot n^2)$. This is because the algorithm may need to check all permutations in the worst case before finding the correct one.

- Space complexity: $O(n)$

    The algorithm uses a string `sequence` to store the initial sequence of numbers from 1 to $n + 1$, which requires $O(n)$ space. Additionally, it uses a string `permutation` to store the current permutation being checked, which also requires $O(n)$ space.

    The `check` function uses constant extra space for comparisons, and the built-in function operates in-place, requiring no additional space. Therefore, the overall space complexity is $O(n)$, dominated by the storage of the `sequence` and `permutation` strings.

---

### Approach 2: Optimization with Bit Masking

#### Intuition

A different way to construct the smallest valid number is to use bit masking to track which digits have already been used, rather than generating and checking every single permutation like we did in the first approach. By representing the digits 1 to 9 as individual bits in an integer, we can quickly check whether a digit is available.

To construct the number, we start with an empty sequence and recursively attempt to place digits while ensuring that they satisfy the given pattern. The core idea is to define a recursive function that keeps track of three things: (1) the current position in the pattern, (2) a bitmask representing which digits have already been used, and (3) the number being formed. Initially, we start at position 0 with an empty number and aim to fill all positions while maintaining the constraints imposed by the pattern.

At each step, we loop through digits from 1 to 9 and check two conditions before placing a digit:
1. **Is the digit already used?** The bitmask helps here — we can efficiently check whether a digit is available by inspecting its corresponding bit.
2. **Does the digit follow the pattern constraint?** If the previous character in the pattern is `'I'`, the current digit must be greater than the last one placed. If it's `'D'`, the current digit must be smaller.

If a digit satisfies both conditions, we make a recursive call to the next position, appending this digit to our number. We also update the bitmask to mark this digit as used, ensuring it won't be selected again. Since our goal is to find the lexicographically smallest number, we explore digits in increasing order, ensuring that the first valid solution we find is also the smallest.

The recursion proceeds until we have placed all required digits. Once a complete sequence is formed, we compare it with the smallest valid number found so far and continue searching for a better (smaller) result if possible.

The recursion terminates when all positions have been filled (i.e., when `currentPosition` exceeds the length of the pattern). At this point, we have successfully constructed a valid number, which we return as the final answer.

#### Algorithm

##### `findSmallestNumber` Function:
  - This recursive function finds the smallest number that satisfies the given pattern.
  - Base Case: If the current position exceeds the pattern length, return the current number (`currentNum`).
  - Initialize `result` as some max value to track the smallest valid number.
  - Retrieve the last digit of the current number (`lastDigit`).
  - Determine if the next digit should be larger or smaller based on the previous character in the pattern:
    - If `currentPosition == 0` or the previous pattern character is `'I'`, the next digit should be larger.
    - Otherwise, the next digit should be smaller.

  - For each possible digit from 1 to 9:
    - Check if the digit has already been used by checking the `usedDigitsMask`.
    - Ensure the digit follows the pattern (greater or smaller than the last digit based on the pattern).
    - If valid, recursively call `findSmallestNumber` with the updated parameters:
      - Move to the next position in the pattern.
      - Mark the current digit as used by updating the `usedDigitsMask`.
      - Update the `currentNum` by appending the current digit.

  - Once the recursive function completes and finds the smallest valid number, return the result.
  
##### smallestNumber Function:
  - The main function converts the result of `findSmallestNumber` to a string and returns it.

#### Implementation

<iframe src="https://leetcode.com/playground/Yv4o8XZd/shared" frameBorder="0" width="100%" height="500" name="Yv4o8XZd"></iframe>

#### Complexity Analysis

Let $n$ be the length of the input string `pattern`.

- Time complexity: $O(9^n)$

    The algorithm uses a recursive approach to explore all possible combinations of digits (from 1 to 9) that satisfy the given pattern. At each step, it tries all unused digits (up to 9 choices) and recursively checks if they fit the pattern. In the worst case, the recursion depth is $n + 1$ (one level for each character in the pattern plus one for the base case), and at each level, there are up to 9 choices.

    This results in an exponential number of recursive calls, leading to a time complexity of $O(9^n)$. This is because the recursion tree has a branching factor of 9 and a depth of $n + 1$.

- Space complexity: $O(n)$

    The space complexity is dominated by the recursion stack. In the worst case, the recursion depth is $n + 1$, which means the stack can grow up to $O(n)$ levels deep. Additionally, the algorithm uses a few auxiliary variables like `currentPosition`, `usedDigitsMask`, and `currentNum`, which occupy constant space.

    The `usedDigitsMask` is an integer used to track which digits have been used, and it does not grow with the input size. Therefore, the overall space complexity is $O(n)$, primarily due to the recursion stack.

---

### Approach 3: Regulated Brute Force via Recursion

#### Intuition

A key observation is how the digits must be arranged based on the given pattern. When we see an `'I'`, the numbers should be in increasing order, which is straightforward to handle. However, when we encounter a `'D'`, the numbers should be in decreasing order, which introduces complexity.  

If the pattern consists only of `'I'` characters, the solution is simple. For example, with the pattern `"III"`, the answer would be `"1234"` — we just place the smallest available number at each step in sequential order. This is because each `'I'` ensures that the next number must be greater than the previous one, so we can directly append numbers in increasing order.  

However, when we introduce `'D'` into the pattern, we must be more careful. A `'D'` means that the current number must be larger than the next one, and we can’t just keep adding numbers sequentially as we did for `'I'`. The challenge is that when we see a `'D'`, we don't immediately know how many consecutive `'D'` characters will follow, which affects how we assign numbers.  

To resolve this, when we encounter a `'D'`, instead of placing a number at that position immediately, we delay the decision. We keep processing the pattern recursively until we reach an `'I'` or the end of the pattern. Once we’ve fully processed all future indices, we "unwind" the recursion and start placing numbers in reverse order. This ensures that the numbers corresponding to the `'D'` positions are placed in descending order, maintaining the correct decreasing relationship. 

To keep track of how many positions we have assigned a digit to, we introduce a variable `currentCount`. Clearly, the next available digit at any point is `currentCount + 1`.

For an `'I'`, we can simply place the next available number and move forward. The recursive relation in this case follows a natural increasing order: we call the helper function for the next index and proceed normally leading to `buildSequence(currentIndex = currentIndex + 1, currentCount = currentIndex + 1, patternArray, result)`. 

However, for a `'D'`, we defer placement and allow recursion to handle future numbers first. By the time we return from the recursive calls, we are guaranteed to place the correct larger number first, followed by smaller ones, satisfying the `'D'` condition. As we skip assigning a digit to the current position, we simply move to the next index without incrementing the `currentCount`: `buildSequence(currentIndex = currentIndex + 1, currentCount, patternArray, result)`.  

For example, consider the pattern `"IIIDIDDD"`. The first three `'I'` characters result in `"1234"`, following a simple increasing sequence. However, once we reach `'D'`, we stop placing numbers immediately and let recursion take control. After unwinding, we correctly place `"5"` before `"4"`, then continue the `'D'` sequence properly, resulting in `"123549876"`.  

Since numbers are appended at the bottom of the recursion stack, the final sequence is initially built in reverse order. To get the correct lexicographical order, we reverse the string at the end.

> For a more comprehensive understanding of recursion, check out the [Recursion Explore Card 🔗](https://leetcode.com/explore/learn/card/recursion-i/). This resource provides an in-depth look at recursion, explaining its key concepts and applications with a variety of problems to solidify understanding of the pattern.

#### Algorithm

- Initialize `result` as an empty string.
- Call `buildSequence` recursively with `currentIndex = 0` and `currentCount = 0` to construct the sequence.
- Reverse `result` after recursion completes.
- Return `result` as the final smallest number.

- In `buildSequence`:
  - If `currentIndex` is not at the end of `pattern`:
    - If `pattern[currentIndex]` is 'I', increment `currentCount` and recurse with the next index.
    - If `pattern[currentIndex]` is 'D', recurse without incrementing `currentCount` and recurse with the next index.
  - Append `currentCount + 1` to `result` to construct the sequence in reverse order.
  - Return `currentCount + 1` to propagate the correct value upward in recursion.

#### Implementation

<iframe src="https://leetcode.com/playground/RPnzTqTC/shared" frameBorder="0" width="100%" height="500" name="RPnzTqTC"></iframe>

#### Complexity Analysis

Let $n$ be the length of the input string `pattern`.

- Time complexity: $O(n)$

    The algorithm uses a recursive approach to build the sequence based on the pattern. Each recursive call processes one character of the pattern, and the recursion depth is at most $n + 1$ (one level for each character in the pattern plus one for the base case). Since each recursive call performs a constant amount of work (appending to the `result` and updating the count), the total time complexity is $O(n)$.

    Additionally, the final reversal of the `result` takes $O(n)$ time, but this is a single operation and does not change the overall linear time complexity. Thus, the overall time complexity is $O(n)$.

- Space complexity: $O(n)$

    The space complexity is dominated by the recursion stack and the `result`. The recursion stack can grow up to $n + 1$ levels deep, requiring $O(n)$ space. The `result` also grows linearly with the input size, storing up to $n + 1$ characters, which requires $O(n)$ space.

    Apart from these, the algorithm uses a few auxiliary variables like `currentIndex` and `currentCount`, which occupy constant space. Therefore, the overall space complexity is $O(n)$, primarily due to the recursion stack and the `result`.

---

### Approach 4: Using Stack

#### Intuition

The problems that are solved via recursion can almost always be solved using a stack as well. The reason is that recursion inherently uses a call stack to keep track of function calls, storing the current state before diving deeper into the problem. Each recursive call pushes a new frame onto the call stack, which holds the function’s local variables and execution context. When the base case is reached, the function calls start returning, effectively unwinding the stack in a last-in, first-out (LIFO) manner.  

In this case, the core idea is to use a stack to manage the order in which numbers are appended. The stack helps handle consecutive `'D'` characters efficiently by delaying their placement, ensuring that numbers in a decreasing sequence are correctly placed in the smallest lexicographical order.  

More specifically, we iterate through the pattern while pushing numbers onto the stack. Every time we see a `'D'`, we push the current number onto the stack and continue, delaying its placement in the result. This is because a `'D'` means the next number should be smaller than the current one, so we must delay placing the numbers to ensure that they appear in decreasing order when finally appended.

When we encounter an `'I'` or reach the end of the pattern, we know that all numbers stored in the stack must now be placed in the result to maintain the correct order. At this point, we start popping from the stack, appending each number to the result before moving forward. This guarantees that any numbers stored due to a sequence of `'D'` characters appear in descending order, ensuring the smallest valid number.  

For example, given the pattern `"IDID"`, we start by pushing `1` onto the stack because we always push the next number. Since the first character is `'I'`, we immediately pop from the stack and append `1` to the result. Then we push `2` and, seeing the next `'D'`, we push `3` instead of immediately appending. The `'I'` that follows tells us it's time to pop and append the numbers, so `3` and then `2` are added to the result, maintaining the required decreasing order. The process continues in this manner, ensuring that the number we build respects the pattern while remaining lexicographically smallest.  

#### Algorithm

- Initialize an empty string `result` to store the final smallest number.
- Use a `stack` named `numStack` to manage digits based on the pattern.

- Iterate through the `pattern`:
  - Push `index + 1` onto `numStack`, ensuring numbers are pushed in increasing order.
  - If at the end of the pattern or the current character is `'I'`:
    - Pop all elements from `numStack` and append them to `result`, ensuring that decreasing sequences are handled before moving to the next increasing sequence.

- Return `result` as the smallest number following the given pattern.

#### Implementation

<iframe src="https://leetcode.com/playground/4qKnP7Fr/shared" frameBorder="0" width="100%" height="446" name="4qKnP7Fr"></iframe>

#### Complexity Analysis

Let $n$ be the length of the input string `pattern`.

- Time complexity: $O(n)$

    We iterate through the `pattern` string once, processing each character exactly once. In each iteration, we push at most one number onto the stack, contributing $O(n)$ operations in total. Additionally, whenever we encounter `'I'` or reach the end, we pop all elements from the stack. Since each number is pushed and popped exactly once, this also contributes $O(n)$. Therefore, the overall time complexity is $O(n)$.  

- Space complexity: $O(n)$

    The extra space usage comes from the `stack`, which, in the worst case, holds all numbers from $1$ to $n+1$. This happens when the entire `pattern` consists of `'D'` characters, causing all numbers to be pushed before any are popped. Thus, the worst-case space complexity is $O(n)$.
 
---

### Approach 5: Greedy Approach with Sliding Window Reversal

#### Intuition

A more structured approach to constructing the smallest number that fits the given pattern is to use a **greedy strategy with a sliding window reversal technique**. Instead of constructing the number from scratch, we begin with a baseline sequence of consecutive numbers (e.g., `123456789` for a pattern of length `n`). This ensures that we always start with the smallest possible number and then modify it as needed to satisfy the given pattern.

The idea is to use two pointers: `currentIndex`, which traverses the pattern, and `previousIndex`, which marks the start of the segment that needs to be reversed after we encounter a `'D'` (Decreasing) character. Whenever we find an `'I'` (Increasing) or reach the end of the pattern, we reverse the segment between `previousIndex` and `currentIndex` to ensure that the digits follow the required decreasing order.

For each character in the pattern:
- If the current character is `'I'`, no modification is required because the sequence already maintains increasing order.
- If the current character is `'D'`, we continue moving until we find an `'I'` or reach the end of the pattern. Once we find an `'I'` or exhaust the pattern, we reverse the substring from `previousIndex` to `currentIndex` to create the required decreasing order.

Consider an example where the pattern is `"DDI"`:
1. We initialize our sequence as `"1234"`, since the pattern length is 3.
2. The first character is `'D'`, so we continue scanning until we reach an `'I'`. Once we reach the `'I'`, we reverse the first three elements (`"123" → "321"`).
3. Since the final character is `'I'`, no further modifications are needed, and we append the last digit as is.
4. The final result is `"3214"`.

#### Algorithm

- Initialize a string called `result` to store the final result.

- Iterate through the `pattern`:
  - Use `currentIndex` to traverse the pattern and `previousIndex` to mark the start of the substring that may need to be reversed.
  - Append the value `1 + currentIndex` to `result`.

  - When necessary, reverse the substring starting from `previousIndex`:
    - If `currentIndex` reaches the end of the pattern or the current character in the pattern is `'I'`:
      - Create a temporary string (`temp`) and reverse the substring starting from `previousIndex` to `currentIndex`.
      - Update `result` by concatenating the part before `previousIndex` and the reversed substring from `previousIndex` onward.
      - Update `previousIndex` to `currentIndex + 1`.

- Return the final `result` as a string.

#### Implementation

<iframe src="https://leetcode.com/playground/Amx83eMt/shared" frameBorder="0" width="100%" height="500" name="Amx83eMt"></iframe>

#### Complexity Analysis

Let $n$ be the length of the input string `pattern`.

- Time complexity: $O(n)$ 

    The algorithm iterates through the input string `pattern` once, which takes $O(n)$ time. During each iteration, when the character is 'I' or the end of the string is reached, the algorithm reverses a contiguous segment of the `result` string. While reversing a substring of length $ k $ takes $ O(k) $ time, each position in the array is reversed at most once throughout the entire process.  

    Since each element participates in at most one reversal, the total number of operations across all reversals is at most $ O(n) $. Thus, the overall time complexity is $O(n)$.

- Space complexity: $O(n)$

    The algorithm uses an extra string `result` to store the intermediate and final result, which grows linearly with the input size, requiring $O(n)$ space. Additionally, a temporary extra string named `temp` is used during substring reversal, which also requires $O(n)$ space.

    Apart from these, the algorithm uses a few auxiliary variables like `currentIndex` and `previousIndex`, which occupy constant space. Thus, the dominant space usage comes from the extra strings, making the overall space complexity $O(n)$.

---

### Approach 6: Optimized Greedy Approach with Precomputed 'D' Segments

#### Intuition

The previous approach used a sliding window reversal to handle decreasing sequences efficiently. An alternate strategy would involve precomputing the number of consecutive `'D'`s at each position. This allows us to directly determine the correct digit placement without the need for explicit reversal operations.

Instead of modifying an existing sequence as we traverse the pattern, we first scan the pattern **backward** to compute an array `arrD[i]`, where each entry represents the number of consecutive `'D'`s that appear after the corresponding position. This precomputed information allows us to determine the exact digit that should be placed in each position without needing to reverse segments manually.

As we build the answer, we maintain two key values:
1. `maxSoFar`: The largest number assigned so far.
2. `currMax`: A helper variable to ensure that subsequent digits are placed in proper increasing order, preventing conflicts between previously placed numbers.

When encountering an `'I'`, we simply assign the smallest available number, which is `maxSoFar + 1`. However, when encountering a `'D'`, we need to ensure that the digits form a descending order. To achieve this, we use `arrD[i]` to determine how far the descending sequence extends. Instead of constructing the decreasing sequence step by step, we calculate the correct number directly: 

$\text{digit} = 1 + \text{maxSoFar} + \text{arrD}[i]$

This formula ensures that:
- The assigned number is large enough to maintain the required descending order.
- The sequence remains lexicographically minimal by assigning the smallest possible numbers that satisfy the constraints.

The algorithm is visualized below:

!?!../Documents/2375_fix/optimized_greedy_fix.json:1120,475!?!

#### Algorithm

- Initialize `patternLength` to the length of the input `pattern`.
- Initialize `maxSoFar` and `currMax` to 0, which will keep track of the largest digits used so far.
- Initialize a vector `arrD` of size `patternLength + 1` to store the lengths of decreasing subsequences in the pattern.

- Calculate the lengths of decreasing subsequences in the pattern:
  - Iterate backward through the `pattern`:
    - If the current character is `'D'`, calculate the length of the decreasing subsequence starting from the current index as `arrD[patternIndex + 1] + 1`.

- Initialize an empty string `result` to build the final result.

- Build the result string based on the pattern:
  - Iterate through each position in the pattern:
    - If the current character is `'I'`, increment `maxSoFar`, append it to `result`, and update `maxSoFar`, as the maximum of its current value and `currMax`.
    - If the current character is `'D'`, calculate the appropriate digit from `maxSoFar` and `arrD[position]`, append it to `result`, and update `currMax`.

- Return the `result`, which represents the smallest number satisfying the pattern.

#### Implementation

<iframe src="https://leetcode.com/playground/XLhyzwNC/shared" frameBorder="0" width="100%" height="500" name="XLhyzwNC"></iframe>

#### Complexity Analysis

Let $n$ be the length of the input string `pattern`.

- Time complexity: $O(n)$

    The algorithm processes the input string `pattern` in two main steps. First, it performs a backward traversal to compute the lengths of decreasing subsequences. This step iterates through the string once, taking $O(n)$ time. Second, it performs a forward traversal to construct the result string based on the computed subsequence lengths. This step also iterates through the string once, taking $O(n)$ time. Since both steps are linear and independent, the overall time complexity is $O(n)$.

    Additionally, the use of built-in functions and string concatenation (`+=`) does not increase the time complexity beyond $O(n)$, as these operations are either constant time or linear in the context of this algorithm. Thus, the total time complexity remains $O(n)$.

- Space complexity: $O(n)$

    The algorithm uses additional space for two main purposes. First, it stores the lengths of decreasing subsequences in an array `arrD`, which requires $O(n)$ space. Second, it constructs the result string, which also grows linearly with the input size, requiring $O(n)$ space.

    Apart from these, the algorithm uses a few auxiliary variables like `maxSoFar`, `currMax`, and `temp`, which occupy constant space. Therefore, the dominant space usage comes from the array `arrD` and the result string, making the overall space complexity $O(n)$.
 
---