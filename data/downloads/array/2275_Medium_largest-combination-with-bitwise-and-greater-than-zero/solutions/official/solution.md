# Official Solution

**Link:** [https://leetcode.com/problems/largest-combination-with-bitwise-and-greater-than-zero/solution/](https://leetcode.com/problems/largest-combination-with-bitwise-and-greater-than-zero/solution/)

---

[TOC]

## Solution

---

### Overview 

When we want to find groups of numbers where their bitwise AND is greater than zero, we first need to understand what conditions allow for a positive result. The crucial factor is that all numbers in the group must share at least one '1' bit in the same position. For instance, if we take the numbers 6 (binary `110`) and 4 (binary `100`), their AND operation yields 4 (binary `100`) because they both have a '1' in the third position.

This insight leads us to a critical conclusion: the size of the largest group we can form will correspond to the count of numbers that share a '1' bit in any particular position. 

To illustrate this further, consider the numbers `[6, 4, 5, 3]`, which in binary are `[110, 100, 101 , 011]`. For these numbers to yield a bitwise AND greater than zero, they must have at least one '1' bit in the same position. Analyzing the binary representations, we see that three numbers (6, 4, and 5) have a common '1' in the third position. This means we can form groups of size 3 that will result in a non-zero AND. The other groups will be smaller than the size of 3.

In practical terms, for numbers constrained to be less than or equal to $10^7$ (requiring a maximum of 24 bits), we only need to check bit positions 0 to 23 when working with 32-bit integers. For larger numbers, like those up to $10^9$, we would check up to 30 bits, since $2^{30} = 1,073,741,824$.

---

### Approach 1: Using a Bit Count Array

#### Intuition

Since we’re interested in grouping numbers that share 1 bit at the same positions, we can scan through each bit position across all numbers and simply count how many times each position has a 1. For example, if the third bit position has three numbers with a 1, then we know we can form a group of three with a non-zero AND result. By doing this for all bit positions, the largest count we find will represent the maximum group size that meets our criteria.

To implement this, we create an array called `bitCount`, with each index representing a bit position (from 0 to 23). We initialize all values to zero. As we iterate through each number in `candidates`, we check if each bit is set using a bitwise AND operation. If it is set, we increment the corresponding index in `bitCount`. By the end of this process, `bitCount[i]` will tell us how many numbers have the i-th bit set.

Finally, we look for the maximum value in the `bitCount` array. This value represents the largest group of candidates that can contribute to a bitwise AND greater than zero. The logic here is straightforward: if more numbers have a specific bit set, we can form a larger combination that retains that bit in the final AND result. 
 
For instance, given the input `candidates = [6, 3, 4, 5]`, we check each bit position. For the most significant bit (bit 0), the numbers 6 (binary 110), 3 (011), 4 (100), and 5 (101) contribute to a count of 3, since 3 candidates have their most significant bit set. The final maximum count across all bit positions is 3, indicating that the largest combination with a bitwise AND greater than zero consists of 3 numbers.

#### Algorithm

- Initialize an array `bitCount` of size 24 with zeros to store the count of set bits at each bit position from 0 to 23.

- For each bit position `i` from 0 to 23:
  - For each number `num` in `candidates`:
    - Check if the i-th bit of `num` is set using the expression `(num & (1 << i)) != 0`.
    - If the bit is set, increment `bitCount[i]` to track how many numbers have the i-th bit set.

- After counting set bits for all positions, find the maximum value in `bitCount` using `max_element`.
  
- Return the maximum count, which represents the largest size of candidates that have a common bit set at the same position.


<details>
  <summary>Working of <code>(num & (1 << i)) != 0</code> (Click here to check)</summary>
  
  <p>
    The expression <code>(num & (1 << i)) != 0</code> is a way to check if the bit at the <em>i-th</em> position of <code>num</code> is <code>1</code>.
  </p>
  <p>
    The expression <code>(1 << i)</code> moves the bit <code>1</code> to the left by <code>i</code> places. For example:
    <ul>
      <li><code>(1 << 0)</code> is <code>0001</code> (1 in decimal).</li>
      <li><code>(1 << 1)</code> is <code>0010</code> (2 in decimal).</li>
      <li><code>(1 << 2)</code> is <code>0100</code> (4 in decimal).</li>
    </ul>
    This creates a number where only the i-th bit is <code>1</code>, and all other bits are <code>0</code>.
  </p>
  <p>
    Then the <code>&</code> (bitwise AND) operation compares each bit of <code>num</code> with <code>(1 << i)</code>.
    <ul>
      <li>If the i-th bit of <code>num</code> is <code>1</code>, then <code>(num & (1 << i))</code> will give a non-zero result, because there’s a <code>1</code> in the same position for both <code>num</code> and <code>(1 << i)</code>.</li>
      <li>If the i-th bit of <code>num</code> is <code>0</code>, the result of <code>(num & (1 << i))</code> will be <code>0</code>, because there’s no <code>1</code> in that position in <code>num</code>.</li>
    </ul>
  </p>
  <p>
    Say <code>num</code> is <code>5</code> (binary <code>0101</code>), and we want to check if the 2nd bit (counting from 0) is <code>1</code>:
    <ul>
      <li><code>(1 << 2)</code> gives <code>0100</code>.</li>
      <li><code>num & (1 << 2)</code> does <code>0101 & 0100</code>, which gives <code>0100</code> (not zero), so the 2nd bit in <code>num</code> is indeed <code>1</code>.</li>
    </ul>
  </p>
</details>


#### Implementation

<iframe src="https://leetcode.com/playground/LNGeKnEk/shared" frameBorder="0" width="100%" height="446" name="LNGeKnEk"></iframe>

#### Complexity Analysis

Let $n$ be the size of the `candidates` array.

- Time complexity: $O(n \cdot b + b) = O(n)$

    The outer loop iterates over 24 bit positions (from 0 to 23), checking each integer in `candidates` to see if a specific bit is set. Inside the nested loop, the bitwise operation `(num & (1 << i))` is performed, which executes in constant time for each candidate and bit position.

    Given that there are $n$ integers in `candidates` and we check up to 24 bit positions for each, the total time complexity for this part is $O(n \cdot 24)$.

    Additionally, we find the maximum value in the `bitCount` array, which has a fixed size of 24. This allows the operation to complete in $O(b)$ time, where $b$ represents the fixed size of the array.

    Thus, the overall time complexity can be expressed as $O(n \cdot b + b) = O(n)$, where $b = 24$ represents the fixed bit width.

- Space complexity: $O(b) = O(1)$

    We utilize an auxiliary array `bitCount` of size 24 to store the count of set bits at each bit position. Since 24 is a constant that "doesn't scale with $n$", the space complexity is $O(b) = O(1)$, where $b = 24$ represents the fixed bit width.

    Aside from `bitCount`, we only use a few fixed-size variables, resulting in no additional space complexity beyond $O(b)$.

---

### Approach 2: Direct Maximum Bit Count

#### Intuition

We can simplify the method by focusing on finding the maximum count of candidates with set bits without using an extra array. Here, we keep track of the highest count directly with a single variable, `maxCount`.

As we loop through each bit position from 0 to 23, we initialize a `count` variable to zero for each position. For every candidate, we check if the current bit is set. If it is, we increment `count`. At the end of checking all candidates for a bit position, we compare `count` to `maxCount`. If `count` is larger, we update `maxCount`. By the end of our iterations, `maxCount` will reflect the size of the largest combination with a bitwise AND greater than zero.

![Direct Maximum Bit Count](../Figures/2275/2275_approach_2.png)

#### Algorithm

- Initialize `maxCount` to `0` to track the maximum number of candidates with the same bit position set.

- Loop over each bit position from `0` to `23` (assuming 24 bits are sufficient for the input constraints):
  - Set `count` to `0` for the current bit position to count how many candidates have this bit set.

  - For each number in `candidates`:
    - Use bitwise AND to check if the current bit position (i-th bit) is set in the number.
    - If the bit is set, increment `count`.

  - After counting for the current bit position, update `maxCount` with the maximum value between `maxCount` and `count`.

- Return the `maxCount`, which represents the largest size of candidates that have a common bit set at the same position.


#### Implementation

<iframe src="https://leetcode.com/playground/S3MrFPY2/shared" frameBorder="0" width="100%" height="327" name="S3MrFPY2"></iframe>

#### Complexity Analysis

Let $n$ be the size of the `candidates` array.

- Time complexity: $O(n \cdot b) = O(n)$

    The outer loop runs 24 times, corresponding to checking each of the 24 bits (from the least significant to the 24th bit). Inside this loop, an inner loop iterates over all $n$ elements in the `candidates` array. For each element, we perform a constant-time operation (bitwise AND) to determine if a specific bit is set.

    Thus, the overall time complexity is $O(n \cdot b)$, where $b = 24$ represents the fixed bit width being processed. The built-in functions used include `max` (constant time), `&`, and bit shifting `<<`, all of which operate in $O(1)$.  

- Space complexity: $O(1)$

    The space complexity is constant because the algorithm only uses a fixed amount of extra space: `maxCount` and `count` (both integers) and does not require any additional data structures.

---