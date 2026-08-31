# Official Solution

**Link:** [https://leetcode.com/problems/minimum-array-end/solution/](https://leetcode.com/problems/minimum-array-end/solution/)

---

[TOC]

## Solution

---

### Approach 1: Consecutive ORing  

#### Intuition

The challenge is that the array must be strictly increasing, at the same time, we need to ensure that the AND of all the numbers stays as `x`.

The first thing that comes to mind is that, for the AND of all numbers to remain `x`, every number in the array needs to include at least the same bits as `x`. This means that the numbers in the array must retain the bitwise characteristics of `x` as we move from one element to the next.

Now, the smallest valid number we can start with is `x` itself, since including anything smaller would lose the bit pattern that defines `x`. From there, we need to build up the next elements while keeping the numbers strictly increasing. The key idea is that as long as the new number has the same relevant bits as `x`, the AND result will remain unchanged.

To achieve this, we take the current number and increment it. But after incrementing, we force the new number to keep the bit pattern of `x` by applying a bitwise OR with `x`. This ensures that no bits from `x` are lost in the process, and we continue this until the last element is constructed. The result is the smallest last element that satisfies both conditions: strictly increasing order and preserving the AND operation result as `x`.

For example, take `n = 3` and `x = 4`:

Starting with $x = 4$ (binary: $100$), we need to find the smallest integer $y$ such that $y > 4$ and the bitwise AND of $4$ and $y$ remains $4$. We apply the expression:

$\text{result} = (\text{result} + 1) | x$

1. First Step:

   $\text{result} = 4 \implies \text{result} = (4 + 1) | 4 \implies \text{result} = 5 | 4 = 5$
   
   Confirming the AND condition: 

   $4 \& 5 = 4$

2. Second Step:

   $\text{result} = 5 \implies \text{result} = (5 + 1) | 4 \implies \text{result} = 6 | 4 = 6$

   Confirming the AND condition:

   $4 \& 5 \& 6 = 4$

Thus, $6$ is the smallest valid last element, ensuring that the array satisfies both the increasing order and the required AND condition.

#### Algorithm

- Initialize `result` with the value of `x`.

- Iterate `n - 1` times (since `result` is already initialized with `x`):
  - Increment `result` by `1`.
  - Perform a bitwise OR operation between `result` and `x`, and store the result back in `result`.

- After completing the iterations, return `result`.

#### Implementation

> Note: The Python’s handling of arbitrarily large integers and loop overhead causes slower performance, leading to TLE for large inputs.

<iframe src="https://leetcode.com/playground/AWVw5vdc/shared" frameBorder="0" width="100%" height="310" name="AWVw5vdc"></iframe>

#### Complexity Analysis

Let $n$ be the number of iterations required, which is determined by the input size of `n`.

- Time complexity: $O(n)$

    The `while` loop runs $n - 1$ times because the loop starts with `n` reduced by 1(because of x), and each iteration performs a constant number of operations:

    Therefore, the time complexity is linear in terms of $n$, so the overall time complexity is $O(n)$.

- Space complexity: $O(1)$

    The space complexity remains constant since only a few variables (`result`, `n`, and `x`) are used, and no additional data structures or recursive calls are involved.

---

### Approach 2: Bit Manipulation and Binary Construction

#### Intuition

Here we dig deeper into the bit-level structure of the numbers. We begin by converting both `x` and `n-1` (the difference between the first and last elements) into their binary forms.
 
The intuition here is that the binary representation of `x` tells us which bits we need to preserve across all numbers, while the binary form of `n-1` gives us the flexibility to fill in the gaps between consecutive numbers. We essentially want to merge the bit structures of `x` and `n-1` in a way that allows us to build the smallest valid number that still retains the necessary bits from `x`.

We loop through the binary bits of `x`, identifying the positions where bits can be set to create valid numbers. At the same time, we insert bits from `n-1` where allowed, making sure that this bit manipulation still results in numbers that are strictly larger than the previous ones. The final number is constructed by combining the bits from both `x` and `n-1` in a way that keeps the AND result consistent.

For example, take `n = 3` and `x = 4`:

We start with `x = 4` (binary: $100$) and check the bits of $n-1 = 2$ (binary: $010$).

- At position 2, $x$ has a $1$, meaning we must preserve this bit.
- At position 1, $x$ has a $0$, allowing us to use the bit from $n-1$, which is $1$.
- At position 0, both $x$ and $n-1$ have $0$, so we keep it unset.

Thus, the combined binary result is $110$ (which is $6$ in decimal).


![DetailedBinaryOperationAnalysis](../Figures/3133/3133_Approach2.png)

#### Algorithm

- Initialize `result` as 0 to store the final result, and `bit` for bit manipulation.

- Decrease `n` by 1 to exclude `x` from the iteration (`--n`).

- Initialize two arrays, `binaryX` and `binaryN`, each of size 64 to hold the binary representation of `x` and `n-1`, respectively.

- Convert `x` and `n-1` to `long long` for 64-bit manipulation.

- Build the binary representations for both `x` and `n-1`:
  - For each bit position `i` from 0 to 63:
    - Extract the `i`-th bit of `x` and store it in `binaryX[i]`.
    - Extract the `i`-th bit of `n-1` and store it in `binaryN[i]`.

- Initialize two pointers, `posX` and `posN`, to 0 to keep track of the current bit positions in `binaryX` and `binaryN`.

- Traverse the binary representation of `x` (`binaryX`):
  - Move `posX` forward until a `0` bit is found in `binaryX`.
  - Copy the corresponding bit from `binaryN[posN]` into `binaryX[posX]`.
  - Increment both `posX` and `posN` to continue the traversal.

- Rebuild the final result from the combined binary representation:
  - For each bit `i` from 0 to 63:
    - If `binaryX[i]` is `1`, convert the bit back to its decimal value using `2^i` and add it to `result`.

- Return `result`, which is the combined binary representation as a decimal number.

#### Implementation

<iframe src="https://leetcode.com/playground/nQAfi88E/shared" frameBorder="0" width="100%" height="500" name="nQAfi88E"></iframe>

#### Complexity Analysis

- Time Complexity: $O(\log n)$

    The algorithm performs operations based on the number of bits in `n`. On a 64-bit system, this translates to at most 64 bits, but theoretically, the number of bits scales with the input size, leading to $O(\log n)$ complexity.
    
    Constructing the binary representation of both `x` and `n-1` involves extracting each bit. For a 64-bit integer, this requires at most 64 iterations, but for an arbitrary integer, it would take $O(\log n)$ time.
    
    The second loop traverses the bits of `x` to locate the first zero bit and replace it with the corresponding bit from `n-1`, requiring up to $\log n$ iterations.
    
    Converting the modified binary representation back to a decimal requires $O(\log n)$ operations.
    
    Thus, the theoretical time complexity is $O(\log n)$, although for 64-bit systems, it effectively operates within a constant bound of 64 iterations.

- Space Complexity: $O(\log n)$

    The algorithm utilizes two arrays, `binaryX` and `binaryN`, each with a size of $O(\log n)$ to store the bit representations of `x` and `n-1`.
    
    A constant number of scalar variables (`result`, `bit`, `posX`, `posN`) are also used, which take up $O(1)$ space.
    
    Thus, the space complexity is $O(\log n)$, which reflects the storage required for the bitwise representation of `n`.

> Both the time complexity (TC) and space complexity (SC) are $O(\log n)$. However, on 64-bit systems, they effectively operate within a constant bound of 64 iterations. Thus, it can sometimes be argued that the complexity is $O(1)$ as well.

---

### Approach 3: Bitmasking with Logical Operations

#### Intuition

We can refine the logic further by focusing directly on manipulating the bits.

First, we reduce `n` by 1, since we’re constructing a list that has `n` gaps between the first and last elements. Then, starting from `x`, we look at each bit and decide if adding a new bit will help us meet the condition. If a bit isn’t already set in `x`, we check whether setting that bit from `n` will help. We do this bit by bit, using a mask to check and adjust each position.

By carefully adding only the bits we need from `n`, we can ensure that the final number is as small as possible while keeping overall AND equal to `x`. 

#### Algorithm

- Initialize `result` to `x` and define a `mask` variable for bit manipulation.

- Decrement `n` by 1 to exclude `x` from the iteration.

- Iterate over each bit position with `mask`, starting from 1 and shifting left in each iteration:
  - If the corresponding bit in `x` is 0 (`(mask & x) == 0`):
    - Update `result` by setting the bit based on the least significant bit of `n`.
    - Right shift `n` by 1 to process the next bit.

- Continue this process until `n` becomes 0.

- Return `result` as the final computed value.

#### Implementation

<iframe src="https://leetcode.com/playground/fEAMkmDr/shared" frameBorder="0" width="100%" height="412" name="fEAMkmDr"></iframe>

#### Complexity Analysis

Let $b$ be the number of bits in the binary representation of `n`

- Time complexity: $O(\log n)$

    The loop iterates over the bits of `n` and `x` using the mask, checking each bit of `x` to see if it's 0. The loop condition is driven by `n > 0`, meaning it will terminate when all bits of `n` have been processed.

    The number of iterations of the `for` loop depends on the number of bits in `x` where `mask & x == 0`. In the worst case, this could be up to $\log n$.

    For each iteration, we perform constant-time operations like bitwise AND, shifting, and OR. Thus, the overall time complexity is $O(\log n)$, which for a fixed size (like 64 bits) could be considered $O(1)$ in practical terms.
    
- Space complexity: $O(1)$

    The space complexity is constant because the algorithm uses a fixed number of variables (`result`, `mask`, and `n`) and no additional data structures that grow with input size.

---