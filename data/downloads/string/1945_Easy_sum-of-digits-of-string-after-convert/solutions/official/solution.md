# Official Solution

**Link:** [https://leetcode.com/problems/sum-of-digits-of-string-after-convert/solution/](https://leetcode.com/problems/sum-of-digits-of-string-after-convert/solution/)

---

[TOC]

## Solution

---

### Approach 1: String Concatenation to Summation 

#### Intuition

We need to convert a given string into a sequence of integers and then repeatedly sum the digits of this sequence `k` times. The final result is the integer obtained after performing these operations.

One approach is to follow each step from the problem description literally:
1. Convert each letter in the string `s` to its position in the alphabet: 'a' becomes 1, 'b' becomes 2, and so on.
2. Concatenate these numbers to form a large string. For example, `"zbax"` becomes `"262124"`.
3. Perform the transformation `k` times. Each transformation involves summing the digits of this large number.

Convert the string to digits, sum them, and convert the result back to a string. Repeat this process for `k` transformations. Finally, convert the resulting string to an integer and return it. This method is straightforward but may be inefficient for very large numbers or high values of `k`.

#### Algorithm 

- Initialize an empty string `numericString` to store the numerical representation of each character in `s`.

- Iterate through each character `ch` in `s`:
  - Convert `ch` to its corresponding numerical value (1 for 'a', 2 for 'b', etc.).
  - Append this numerical value to `numericString`.

- While `k` is greater than 0:
  - Initialize `digitSum` to 0 to accumulate the sum of digits.
  - Iterate through each character `digit` in `numericString`:
    - Convert `digit` to its integer value and add it to `digitSum`.
  - Convert `digitSum` back to a string and assign it to `numericString`.
  - Decrement `k` by 1.

- Convert the final `numericString` to an integer and return it.

#### Implementation

<iframe src="https://leetcode.com/playground/fEviTtoU/shared" frameBorder="0" width="100%" height="497" name="fEviTtoU"></iframe>

#### Complexity Analysis

Let $n$ be the length of `s`. 

- Time complexity: $O(n)$

    For each character in the string `s`, we compute its numeric value and append it to `numericString`. We perform this transformation $k$ times. In each transformation, we iterate over the digits of `numericString`. The length of `numericString` depends on the total number of digits obtained from converting characters. In the worst case, each character contributes up to 2 digits (e.g., 'z' becomes 26). Thus, the length of `numericString` could be up to $2n$, making each transformation $O(n)$ on average.

    After converting `s` to `numericString`, we apply the digit sum transformation. Each transformation involves computing the sum of the digits of `numericString`. If `numericString` has up to $2n$ digits, the processing of each transformation would be $O(n)$.

    However, once the result of a transformation becomes a single digit (i.e., less than 10), further transformations are unnecessary. 

    To understand the impact of additional transformations, we sum over decreasing logarithmic terms:
        $$
        n \times \left(1 + \frac{\log_{10}(n)}{n} + \frac{\log_{10}(\log_{10}(n))}{n} + \ldots \right)
        $$
    
    These terms diminish quickly because each term is divided by $n$, which grows faster than the logarithmic functions. As a result, the total number of these logarithmic summations is bounded by a small constant factor.

    This shows that despite theoretically having $k$ transformations, the actual impact of additional logarithmic terms diminishes rapidly, and can be treated as effectively constant in practice.

- Space complexity: $O(n)$

    We use space proportional to the length of `numericString`, which can be up to $O(n)$ in the worst case. This gives us $O(n)$ space complexity for storing the intermediate numeric string.

---

### Approach 2: Direct Integer Operation

#### Intuition

Instead of converting the letters of the string to integers and combining them using string concatenation, we can simplify the process by summing their values directly as we iterate through the given string. Next, we'll sum the digits of the integer `k` times.

Given that `k` has a minimum value of 1 and the input string `s` can be up to 100 characters long, the maximum possible sum for each character's position in the alphabet is 10 (from the letter 's', which is 19, but the digit sum is 1 + 9 = 10). Therefore, the maximum possible sum for a string consisting of 100 characters, each having a position value like 's', is approximately $10 \times 100 = 1000$, which means further operations become more manageable and efficient.

This means we can solve the problem efficiently without dealing with very large numbers or performing complex string manipulations.

The algorithm is visualized below:

!?!../Documents/1945_fix/approach2_fix.json:990,545!?!

#### Algorithm
 
- Initialize `currentNumber` to 0 to accumulate the sum of digit values of characters in `s`.

- Iterate through each character `ch` in `s`:
  - Convert `ch` to its corresponding numerical position in the alphabet (1 for 'a', 2 for 'b', etc.).
  - While `position` is greater than 0:
    - Add the last digit of `position` to `currentNumber`.
    - Remove the last digit from `position`.

- For `k-1` iterations:
  - Initialize `digitSum` to 0 to accumulate the sum of digits in `currentNumber`.
  - While `currentNumber` is greater than 0:
    - Add the last digit of `currentNumber` to `digitSum`.
    - Remove the last digit from `currentNumber`.
  - Assign `digitSum` to `currentNumber`.

- Return the final value of `currentNumber`.

#### Implementation

<iframe src="https://leetcode.com/playground/8W6QosRE/shared" frameBorder="0" width="100%" height="500" name="8W6QosRE"></iframe>

#### Complexity Analysis

Let $n$ be the length of `s`. 

* Time complexity: $O(n)$

    For each character in `s`, we compute the sum of its digits. The time complexity for processing each character is $O(\log_{10}(\text{position}))$, where the position is at most 26, which is a constant time operation. Since there are `n` characters, the total complexity is $O(n)$.

    After the initial conversion, the digit sum transformations are applied. Initially, this involves reducing `currentNumber` to its digit sum, where each transformation involves a constant number of operations since the number of digits in `currentNumber` is small (bounded by 4, as the maximum sum after conversion is 1000). If the result becomes a single digit (less than 10), no further transformations are needed. This means that the number of transformations is effectively constant in practice.

    To understand the time complexity of the transformations in detail, we sum over decreasing logarithmic terms:
      $$
      n \times \left(1 + \frac{\log_{10}(n)}{n} + \frac{\log_{10}(\log_{10}(n))}{n} + \ldots \right)
      $$

    These terms diminish quickly because each term is divided by $n$, which grows faster than the logarithmic functions. Thus, the total number of summations is bounded by a small constant factor. This reasoning shows that despite $k$ transformations theoretically contributing to additional $K$ complexity, the actual time complexity is effectively much lower than $k$ due to the rapidly diminishing impact of additional logarithmic terms, and hence can be treated as constant.

    Therefore, when summing over the decreasing logarithmic terms, the additional complexity is bounded by a constant factor relative to $n$, making the overall time complexity $O(n)$.

* Space complexity: $O(1)$

    The space complexity is $O(1)$ due to the constant space required for the integer calculations.

---