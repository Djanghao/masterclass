# Official Solution

**Link:** [https://leetcode.com/problems/special-array-i/solution/](https://leetcode.com/problems/special-array-i/solution/)

---

[TOC]

## Solution  
 
---

### Overview

We are given an array of integers, `nums`, and our task is to check whether the array is **special**. 

Key Definitions: 
- **Parity** refers to whether an integer is even or odd. 
- An array is **special** if every pair of adjacent numbers includes one even and one odd number.

Knowing this, we can see that a special array is one in which all numbers have alternating parities.

From the examples in the problem description, we can see that this condition requires the numbers in a special array to alternate in parity. An array with one integer is always considered special since it doesn't violate this condition.

---

### Approach 1: Modulo Comparisons

#### Intuition

To solve this problem, we first need a way to determine a number's parity. This is where the **modulo** operation comes in handy. When we divide a number by `2`, the remainder tells us its parity:
- If the remainder is `0`, the number is even (for example, `4 % 2 = 0` → 4 is even).  
- If the remainder is `1`, the number is odd (for example, `5 % 2 = 1` → 5 is odd). 

Now, the solution is a matter of using a loop to iterate through `nums` and applying the modulo operator to determine if the integers have alternating parities. 

#### Algorithm

1. Iterate through `nums` from index `0` to `n - 1`, where `n` is the length of `nums`:
    * For each index `i`, compare the parities of numbers `nums[i]` and `nums[i + 1]`.
        * If `nums[i] % 2` equals `nums[i + 1] % 2`, there are two adjacent numbers with the same parity, so it returns `false`.
2. If the loop completes without finding two adjacent numbers with the same parity, return `true`, indicating the array is special.

#### Implementation

<iframe src="https://leetcode.com/playground/ZdeyWU2T/shared" frameBorder="0" width="100%" height="361" name="ZdeyWU2T"></iframe>

#### Complexity Analysis

Let $n$ be the size of the `nums` array.

* Time complexity: $O(n)$

   In the best case, we find a pair of adjacent numbers with the same parity on the first iteration of the loop, which would take only $O(1)$ time. 
   
   In the worst case, the program has to iterate $n - 1$ times to return a result if no adjacent numbers with the same parity are found, taking $O(n - 1)$ time. 
   
   As a result, this leads to an overall time complexity of $O(n - 1)$, which can be simplified to $O(n)$.

* Space complexity: $O(1)$

   The space required does not depend on the size of the input array or any data structures that require additional space, so only constant $O(1)$ space is used.

---

### Approach 2: Bitwise Operations

#### Intuition

Similar to the previous solution, we determine the parities of each number and compare adjacent numbers by iterating through a loop. However, rather than using the modulo operation, we can use **bitwise operations** to determine the parities of the numbers. 

First, we need to determine the bitwise characteristic that differentiates between even and odd numbers. When we look at the binary form of a number, the last digit tells us its parity:
- If the last digit is `0`, the number is even (for example, `6` in binary is `110` → `6` is even).
- If the last digit is `1`, the number is odd (for example, `7` in binary is `111` → `7` is odd).

Next, we must choose a bitwise operation to compare individual bits directly. The **bitwise AND (&)** operation stands out as a notable option, as it returns `1` only if the two bits compared are `1`. Using this, we can check a number's last bit to determine its parity: an odd number AND `1` yields '1', while an even number AND `1` yields `0`.

Finally, we need to choose a bitwise operation to compare the parities of adjacent numbers. The **bitwise XOR (^)** is ideal for this purpose, as it returns a `1` if two numbers have alternating parities and a `0` if they have matching parities.

#### Algorithm

1. Iterate through `nums` from index `0` to `n - 1`, where `n` is the length of `nums`:
    * For each index `i`, compare the parities of numbers `nums[i]` and `nums[i + 1]`
        * If `nums[i] & 1 ^ nums[i + 1] & 1` equals `0`, there are two adjacent numbers that have the same parity, so it returns `false`
2. If the loop completes without finding two adjacent numbers with the same parity, return `true`, indicating the array is special.

#### Implementation

<iframe src="https://leetcode.com/playground/9oq6eECZ/shared" frameBorder="0" width="100%" height="361" name="9oq6eECZ"></iframe> 

#### Complexity Analysis

Let $n$ be the length of string `s`.

* Time complexity: $O(n)$

   In the best case, we find a pair of adjacent numbers with the same parity on the first iteration of the loop, which would take only $O(1)$ time. 
   
   In the worst case, the program has to iterate $n - 1$ times to return a result if no adjacent numbers with the same parity are found, taking $O(n - 1)$ time. 
   
   As a result, this leads to an overall time complexity of $O(n - 1)$, which can be simplified to $O(n)$.

* Space complexity: $O(1)$

   The space required does not depend on the size of the input array or any data structures that require additional space, so only constant $O(1)$ space is used.

---