# Official Solution

**Link:** [https://leetcode.com/problems/find-the-k-th-lucky-number/solution/](https://leetcode.com/problems/find-the-k-th-lucky-number/solution/)

---

[TOC]

## Solution

---

### Approach 1: Count Digits 

#### Intuition

The brute force solution is to generate all of the lucky numbers up to `k` and then return the <code class="">k<sup>th</sup></code> one.

Let's start by generating the first few lucky numbers.

| k | Number |
|:-:|:------:|
| 1 |   4    |
| 2 |   7    |
| 3 |   44   |
| 4 |   47   |
| 5 |   74   |
| 6 |   77   |

Double-digit lucky numbers are created by prepending a `4` or a `7` to the left of the first two lucky numbers. Prepend means to add something at the beginning of another thing.

This process is inefficient for generating large lucky numbers because we generate many lucky numbers that we do not need. Can we identify a pattern to find the <code class="">k<sup>th</sup></code> lucky number without generating all the previous lucky numbers?

There are two double-digit lucky numbers for each of the two single-digit lucky numbers, for a total of four double-digit lucky numbers. 

We can identify a relationship between the number of digits of a lucky number and the number of lucky numbers with that many digits. Let's assume that we have the list of lucky numbers with ${c - 1}$ digits. We can generate the list of lucky numbers with ${c}$ digits by appending a `"4"` or `"7"` to the left side of each lucky number in that list. 

We know there are two lucky numbers that have a single digit. Additionally, we generate two lucky numbers with ${c}$ digits for each lucky number with ${c - 1}$ digits. Therefore, there are $2^c$ lucky numbers with $c$ digits. 

Let's develop a strategy for finding the <code class="">p<sup>th</sup></code> lucky number with `c` digits. We'll start with `c = 3`.

The values `4` and `7` are simply placeholders and can be replaced with any other digits. If we were to replace the digits of the lucky numbers listed in the table with `0` and `1`, they would represent binary numbers.

With this insight, we can examine the binary representation of lucky numbers to find patterns that help us solve the problem. Let's replace `4` with `0` and `7` with `1` to create the patterns shown below. We'll compare this with the binary representation of `p`.

| p | Number |Replace 4-> 0 & 7->1  | Binary Representation of p |
|:-:|:------:|:--------------------:|:--------------------------:|
| 1 |   444  |         000          |            001             |
| 2 |   447  |         001          |            010             |
| 3 |   474  |         010          |            011             |
| 4 |   477  |         011          |            010             |
| 5 |   744  |         100          |            101             | 
| 6 |   747  |         101          |            110             |
| 7 |   774  |         110          |            111             |
| 8 |   777  |         111          |           1000             |

By analyzing the table, we can see that the <code class="">p<sup>th</sup></code> lucky number with three digits follows the same pattern as `p - 1` represented in binary. This happens because, as we mentioned, `"4"` and `"7"` can be replaced with any other symbols. The lucky numbers are 1-indexed, and binary numbers are 0-indexed, which is why we need to subtract `1` from `p`.

For example, when `p = 7`, `7 -1 = 6`. Six is `110` in binary. We replace the digits to get `"774"` as the <code class="">7<sup>th</sup></code> lucky number with three digits.

There are `6` lucky numbers with three digits that are less than the <code class="">7<sup>th</sup></code> lucky number, `"774"`. `p - 1` represents the number of lucky numbers with `c` digits that are less than the <code class="">p<sup>th</sup></code> lucky number. 

To determine the <code class="">p<sup>th</sup></code> lucky number with `c` digits, we set `x` equal to `p - 1`. We convert `x` to its binary representation, then replace each `0` with `4` and each `1` with `7`. If the resulting number has fewer than `c` digits, we prepend `4`s to the left until it reaches the desired length.

**Example:** c = 3, p = 7

```
x = p - 1
x = 6 (110) in binary
pthLuckyNum = 774
```

Let's break down the original problem of finding the <code class="">k<sup>th</sup></code> lucky number into smaller subproblems for which we already have solutions.

If the <code class="">k<sup>th</sup></code> lucky number has `c` digits, the key is to find `x`, where `x` is the number of lucky numbers with `c` digits that are less than the <code class="">k<sup>th</sup></code> lucky number.

We will use `c` to store the number of digits in the <code class="">k<sup>th</sup></code> lucky number, and `numCount` to store the number of lucky numbers that have `c` or fewer digits.

We start by calculating `c` and `numCount`. For each digit in `k`, we add `1` to `c` and add $2^\text{c}$ to `numCount`. $2^\text{c}$ is the number of lucky numbers with `c` digits. 

**Example:** k = 13, lucky num = 774

```
c = 3 
numCount = 2^1 + 2^2 + 2^3 = 14
```

We can calculate `x` by subtracting the number of lucky numbers with fewer than `c` digits from `k - 1`.

The equation for `x` is : `x = k - 1 - (num_count - 2^c)`

`(num_count - 2^c)` is the number of lucky numbers with fewer than `c` digits. `numCount` is the number of lucky numbers that have `c` or fewer digits, so we subtract $2^c$ from `numCount` because $2^c$ represents the total number of lucky numbers with exactly `c` digits.

```
x = k - 1 - (num_count - 2^c)
x = 13 - 1 - (14 - 8)
x = 6
```

Next, we add the digits to the result string. We traverse the binary representation of `x` from the least to the most significant digit (right to left). If the current bit in `x` is `0`, we prepend `"4"` to the left of the result. Otherwise, the current bit in `x` is `1`, so we prepend `"7"` to the result.

```
x = 6 (110) in binary
kthLuckyNum = 774
```

#### Algorithm

1. Initialize the following variables:
    - `c` to `0`. Stores the number of digits in the <code class="">k<sup>th</sup></code> lucky number.
    - `numCount` to `0`. Stores the number of lucky numbers with `c` or fewer digits.
2. Calculate the number of digits in the <code class="">k<sup>th</sup></code> lucky number. While `numCount` is less than `k`:
    - Increment `c` by `1`.
    - Add the number of lucky numbers with `c` digits ($2^c$) to `numCount`.
3. Calculate `x`, the number of lucky numbers with `c` digits before the <code class="">k<sup>th</sup></code> number. Subtract the number of lucky numbers with exactly `c` digits, $2^c$, from `numCount` to find the number of lucky numbers with less than `c` digits, then subtract this value from `k - 1`.
4. Initialize `kthLuckyNum` as an empty string.
5. Build the result string using the binary representation of `x`. `0` corresponds to `"4"` and `1` corresponds to `"7"`. For each `digit`:
    - If the least significant bit of `x` is `1`, set `digit` to `"7"`.
    - Otherwise, the least significant bit is `0`, so set `digit` to `"4"`.
    - Preppend `digit` to the left of `kthLuckyNum`.
    - Divide `x` by `2` using integer division to move the next bit to the least significant bit position.
6. Return the `kthLuckyNum`.

The algorithm is visualized below:

!?!../Documents/2802/2802_slideshow.json:570,380!?!

#### Implementation

<iframe src="https://leetcode.com/playground/aJHQcvWo/shared" frameBorder="0" width="100%" height="500" name="aJHQcvWo"></iframe>

#### Complexity Analysis

Let $k$ be the given `k`.

* Time complexity: $O((\log k)^2)$

    The binary representation of the `kthLuckyNum` has $\log (k + 1)$ digits, rounded down to the nearest integer. We can represent this as $O(\log k)$.
    
    The loops to calculate the number of digits in the <code class="">k<sup>th</sup></code> lucky number and build the result using `x` each iterate once for each digit, $\log (k + 1)$ times. Prepending a character to the left of a string takes, at worst $O(n)$, where $n$ is the length of the string.

    Therefore, the overall space complexity is $O(\log k + (\log k)^2)$, which we can simplify to $O((\log k)^2)$.


* Space complexity: $O(1)$ (Python3 & C++) or $O(\log k)$ (Java)

    In the C++ and Python3 implementations, `kthLuckyNum` is only used to store the output, so it does not count toward the space complexity. We use a few variables to calculate the result, but no data structures that grow with input size, so the space complexity is constant, i.e. $O(1)$.

    The Java implementation uses a string builder for `kthLuckyNum`, which requires $O(\log k)$ auxiliary space.

---

### Approach 2: Bit Manipulation

#### Intuition

The previous approach used binary numbers, which means we may be able to develop a more efficient approach using bit manipulation.

Let's examine the relationship between the binary string corresponding to the <code class="">k<sup>th</sup></code> lucky number and the binary representation of `k`. 

| k | Number | Replace 4-> 0 & 7->1 | Binary Representation of k |
|:-:|:------:|:--------------------:|:--------------------------:|
| 1 |   4    |          0           |              1             |
| 2 |   7    |          1           |              10            |
| 3 |   44   |          00          |              11            |
| 4 |   47   |          01          |              100           |
| 5 |   74   |          10          |              101           |
| 6 |   77   |          11          |             110            |
| 7 |   444  |         000          |              111           |
| 8 |   447  |         001          |              1000          |
| 9 |   474  |         010          |            1001            |
| 10|   477  |         011          |              1010          |
| 11|   744  |         100          |            1011            |
| 12|   747  |         101          |              1100          |
| 13|   774  |         110          |              1101          |
| 14|   777  |         111          |              1110          |
| 15|  4444  |         0000         |              1111          |
| 16|  4447  |         0001         |             10000          |

Observing the pattern in the table reveals the following: to find the <code class="">k<sup>th</sup></code> lucky number, we increment `k` by one, convert the result to its binary representation, drop the most significant bit, and then replace `0`s with `4`s and `1`s with `7`s. 

For example, if `k = 5`, incrementing by one gives `6`, which in binary is `110`. Dropping the most significant bit gives `10`, and replacing the `0`s with `4`s and `1`s with `7`s results in the lucky number `"74"`.

We can construct the result from the binary number in a similar manner to the previous method. This process continues as long as `k` is greater than `1`, which allows us to skip the last bit position.

By skipping the last bit position, we effectively reduce the count by excluding lucky numbers that have fewer digits than the <code class="">k<sup>th</sup></code> lucky number. This method works similarly to the previous approach.

#### Algorithm

1. Set `k` to `k + 1`.
2. Initialize `kthLuckyNum` as an empty string.
3. Build the result string using the binary representation of `k`. `0` corresponds to `"4"` and `1` corresponds to `"7"`. For each `digit`:
    - If the least significant bit of `k` is `1`, prepend `"7"` to the left of `kthLuckyNum`.
    - Otherwise, the least significant bit is `0`, prepend `"4"` to `kthLuckyNum`.
    - Shift `k` by `1` so the next bit moves to the least significant bit position.
4. Return the `kthLuckyNum`.

#### Implementation

<iframe src="https://leetcode.com/playground/DsfYR7eB/shared" frameBorder="0" width="100%" height="327" name="DsfYR7eB"></iframe>

#### Complexity Analysis

Let $k$ be the given `k`.

* Time complexity: $O((\log k)^2)$

    The binary representation of the `kthLuckyNum` has $\log (k + 1)$ digits, rounded down to the nearest integer. We can represent this as $O(\log k)$. 
    
    The loop runs once for each digit in the `kthLuckyNum`. Prepending a character to the left of a string takes at worst $O(n)$ where $n$ is the length of the string. Therefore, the space complexity is $O((\log k)^2)$.


* Space complexity: $O(1)$ (Python3 & C++) or $O(\log k)$ (Java)

    In the C++ and Python3 implementations, `kthLuckyNum` is only used to store the output, so it does not count toward the space complexity. We use a few variables to calculate the result, but no data structures that grow with input size, so the space complexity is constant, i.e. $O(1)$.

    The Java implementation uses a string builder for `kthLuckyNum`, which requires $O(\log k)$ auxiliary space.

---

### Approach 3: Optimized Bit Manipulation

#### Intuition

The previous approaches build the <code class="">k<sup>th</sup></code> lucky number as a string by prepending each character to the left. This may require resizing the string, which results in an inefficient time complexity.

In Java and Python, strings are immutable, which means they cannot be changed after they are created. 

We can optimize the string-building process by creating a mutable binary representation of `k + 1`, excluding the most significant `1` and any bits to the left of it.

Then, we can replace `0` with `4` and `1` with `7` to obtain the <code class="">k<sup>th</sup></code> lucky number in logarithmic time.

#### Algorithm

1. Set `k` to `k + 1`.
2. Create a mutable binary representation of `k` up to the most significant `1`.
3. Build the result string using the binary representation of `k`. Replace with `0` with `'4'` and `1` with `'7'`.
4. Return the `kthLuckyNum`.

#### Implementation

> Note: Strings are mutable in C++. Therefore, instead of creating a mutable binary representation of `k,` we calculate the number of digits the <code class="">k<sup>th</sup></code> lucky number has using `log2(k)` and initialize `kthLuckyNum` to that size. This helps limit the complexity because the method for converting a number to a binary string in C++, `bitset<32>(k).to_string()`, uses a fixed amount of space and time.

<iframe src="https://leetcode.com/playground/i9xx37rb/shared" frameBorder="0" width="100%" height="378" name="i9xx37rb"></iframe>

#### Complexity Analysis

Let $k$ be the given `k`.

* Time complexity: $O(\log k)$

    The binary representation of the `kthLuckyNum` has $\log (k + 1)$ digits, rounded down to the nearest integer. We can represent this as $O(\log k)$.
    
    Creating the mutable binary representation of `k` up to the most significant `1` takes $O(\log k)$. The loop runs once for each digit in the `kthLuckyNum`. $O(1)$ work is performed inside the loop. Therefore, the time complexity is $O(\log k)$.


* Space complexity: $O(\log k)$ (Java and Python3) or $O(1)$ (C++)

    Storing the binary representation of `k` up to the most significant `1` requires $O(\log k)$ space.
    
    The Java implementation also uses a char array of size $O(\log k)$.

    The C++ implementation doesn't store the binary representation of `k`. `kthLuckyNum` is only used to store the output, so it does not count toward the space complexity. This implementation only requires constant, i.e. $O(1)$ space.

---