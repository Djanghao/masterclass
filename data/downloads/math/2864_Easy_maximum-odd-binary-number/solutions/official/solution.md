# Official Solution

**Link:** [https://leetcode.com/problems/maximum-odd-binary-number/solution/](https://leetcode.com/problems/maximum-odd-binary-number/solution/)

---

[TOC]

## Solution

--- 

### Overview
A binary string is odd if and only if the last bit (i.e. the one's place) equals `1`. Consider an integer in its base-2 representation. Most of its bits will not affect the integer's divisibility by $2$ since $2^b$ is always even for any $b \geq 1$. Therefore, it is required that the bit corresponding to $2^0$ (the rightmost bit) is equal to `1` in any odd number, and equal to `0` in any even number.

To rearrange bits in such a way as to maximize the value of the binary number, we should opt to swap as many `1` bits to the left as we can. This is because the more left a digit is, the more value it holds. A similar conclusion can be reached if we think about how the base-10 number system works.

We can combine these ideas into a strategy for building the maximum odd binary number! Place all but one `1` bit to the most significant places (i.e. leftmost bits), place a `1` in the one's place, and fill the rest of the string with $0$ bits (if any). Note that at least one `1` is guaranteed to be present in the string, which ensures that the resulting number is always odd.

> The maximum odd binary number will have this format: "111...111000...0001".

### Approach 1: Greedy Bit Manipulation (Sorting and Swapping)

#### Intuition
One approach for implementing the above strategy is to sort all the bits first, and then reverse the elements from the first index to the second to last index. This works because the initial sort will guarantee the resulting string is odd, and reversing the rest of the characters will maximize the string's value.

#### Algorithm

1. Sort the input string `s` in ascending order.
2. Reverse the bits in substring $[0, N-2]$.
3. Return the resulting string.

#### Implementation

<iframe src="https://leetcode.com/playground/EFaaHkWx/shared" frameBorder="0" width="100%" height="463" name="EFaaHkWx"></iframe>

#### Complexity Analysis

* Time complexity: $O(n \log n)$.

Sorting input string `s` takes $O(n \log n)$. We also iterate through $s$ which takes $O(n)$. $O(n \log n)$ is the dominating term, which is the final time complexity.

* Space complexity: $O(n)$ 
    - We create an auxillary array to process the string, requiring $O(n)$ space.
    - Some extra space is used when we sort $s$ in place. The space complexity of the sorting algorithm depends on the programming language.
        - In Python, the `sort` method sorts a list using the Timesort algorithm which is a combination of Merge Sort and Insertion Sort and has $$O(n)$$ additional space. No additional space is needed for the algorithm.
        - In Java, Arrays.sort() is implemented using a variant of the Quick Sort algorithm which has a space complexity of $$O(\log n)$$ for sorting two arrays. 
        - In C++, the sort() function is implemented as a hybrid of Quick Sort, Heap Sort, and Insertion Sort, with a worse-case space complexity of $O(\log n )$. 
    - The space required for the array is the dominating term, so the overall space complexity is $O(n)$.

---

### Approach 2: Greedy Bit Manipulation (Counting Ones)

#### Intuition
The answer depends only on the length of the input $n$ and the number of times `1` appears in the input. This means we can construct the answer directly by counting the number of ones and building a string with `ones_cnt - 1` occurrences of `1`, followed by `n - ones_cnt` occurrences of `0`, and a single occurrence of `1` at the end to ensure the final string is odd.

#### Algorithm

1. Count the number of occurrences of `1` in input `s`; let this count be `ones_cnt`.
2. Take bit `1` and append it `ones_cnt - 1` times. This ensures we maximize the value of the result, but we save a bit at the end to ensure the result is odd.
3. Take bit `0` and append it `n - ones_cnt` times. These are the `0` bits that we must include.
4. Append a single `1` bit. This keeps the result string an odd number.
5. Return the resulting string.

#### Implementation

<iframe src="https://leetcode.com/playground/Q99rVqTh/shared" frameBorder="0" width="100%" height="463" name="Q99rVqTh"></iframe>

#### Complexity Analysis

* Time complexity: $O(n)$.

Finding `ones_cnt` requires one pass through `s`, and concatenating the result string with length $n$ can also be done in linear time. Therefore, the final time complexity is $O(n)$.

* Space complexity: $O(n)$ 

The result string of length $n$ needs to be created, which implies a space complexity of $O(n)$.

---

### Approach 3: Greedy Bit Manipulation (One Pass with Two Pointers)

#### Intuition
To solve this problem with only one $O(n)$ pass, let's first focus on rearranging all bits such that all `1` bits come before all `0` bits in string `s`. Consider the two ends of string `s`, referenced by the pointers `left` and `right`. Keep moving the left pointer to the right until it reaches a `0` bit, and keep moving the right pointer to the left until it reaches a `1` bit. If both conditions are met when the left pointer is less than the right pointer, we can swap these two bits and continue with the two pointers process.

This works because the left pointer will only move when all bits that precede it are all `1` bits, and similarly for the right pointer. This algorithm is also guaranteed to terminate, since at every step, at least one pointer will iterate.

When this two pointers process is done, the left pointer is next to the rightmost occurence of a `1` bit in the rearranged `s`. The last step is to swap this `1` bit with the last position in `s` to ensure the resulting string is odd.

#### Algorithm

1. Initialize two pointers `left` at the beginning of `s` and `right` at the end of `s`.
2. Increment `left` if $s_{left} = 1$.
3. Decrement `right` if $s_{right} = 0$.
4. If $s_{left} = 0$, $s_{right} = 1$, and `left` <= `right`, swap these two bits.
5. Repeat steps 2-4 until `left` is greater than `right`.
6. Swap the rightmost 1 bit to the end to ensure the result is odd.
7. Return the resulting string.

#### Implementation

<iframe src="https://leetcode.com/playground/6JKTrfx8/shared" frameBorder="0" width="100%" height="500" name="6JKTrfx8"></iframe>

#### Complexity Analysis

* Time complexity: $O(n)$.

Each pointer will pass through input `s` once, hence the $O(n)$ time complexity.

* Space complexity: $O(n)$ 

Because strings are immutable, a copy of `s` must be created in order to modify the string during the two pointer algorithm. This means there is an $O(n)$ additional space complexity in this solution.

---