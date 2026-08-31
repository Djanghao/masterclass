# Official Solution

**Link:** [https://leetcode.com/problems/neighboring-bitwise-xor/solution/](https://leetcode.com/problems/neighboring-bitwise-xor/solution/)

---

[TOC]

## Solution

---

### Overview

We are given an integer array `derived` of length `n`. This array is formed by taking a binary array `original` (an array containing only 0s and 1s) and computing the bitwise XOR between adjacent elements in it.

For the last element in `derived`, the XOR is calculated as:
$$derived[n-1] = original[n - 1] \oplus original[0]$$

Our task is to determine if there exists a binary array `original` that could have generated the `derived` array.

To understand how to approach the problem, let’s recall some fundamental properties of XOR:

1. Commutativity: $a \oplus b = b \oplus a$
    The order in which you XOR two numbers doesn’t matter.

2. Associativity: $(a \oplus b) \oplus c = a \oplus (b \oplus c)$
    Grouping of XOR operations doesn’t affect the result.

3. Identity: $a \oplus 0 = a$
    XOR with 0 leaves the number unchanged.

4. Self-inverse: $a \oplus a = 0$
    XORing a number with itself results in 0.

5. Inversion:
    If $a \oplus b = c$, then:
    - $a = b \oplus c$
    - $b = a \oplus c$

These properties will help us manipulate XOR equations in coming sections to solve the problem.

---

### Approach 1: Simulation

#### Intuition

To determine whether a valid `original` array can be constructed from the given `derived` array, we can carefully simulate how the `original` array would be built.

From the problem, we know:
$$derived[i] = original[i] \oplus original[i + 1]$$

Using the inversion property of XOR, we can rewrite this as:
$$original[i + 1] = derived[i] \oplus original[i]$$

This means that if we know the value of the `original[i]`, we can calculate the next element, `original[i+1]`, using the corresponding value from `derived`.

The first element of `original`, `original[0]`, can be either 0 or 1 (since it’s binary).
- If we assume `original[0] = 0`, we can calculate the rest of the array.
- Similarly, we can repeat the process assuming `original[0] = 1`.

Once we compute all the elements of the `original` for both starting points, we need to check if they satisfy the circular condition:
$$derived[n - 1] = original[n - 1] \oplus original[0]$$

This ensures that the last element in `derived` matches the XOR of the first and last elements of `original`.

If the circular condition is satisfied for either of the two cases (`original[0] = 0` or `original[0] = 1`), then a valid `original` array exists, and we return true. Otherwise, we return false.

#### Algorithm

1. Create an array `original` initialized with `{0}`.

2. Construct the `original` array assuming the first element is `0`:
   - Iterate through the `derived` array using a loop:
     - For each index `i`, calculate the next element in `original` as `(derived[i] ^ original[i])` and append it to `original`.

3. Check if the first and last elements of `original` are equal and store the result in `checkForZero`.

4. Create an array `original` initialized with `{1}`.

5. Construct the `original` array assuming the first element is `1`:
   - Iterate through the `derived` array using a loop:
     - For each index `i`, calculate the next element in `original` as `(derived[i] ^ original[i])` and append it to `original`.

6. Check if the first and last elements of `original` are equal and store the result in `checkForOne`.

7. Return the logical OR of `checkForZero` and `checkForOne`.

#### Implementation

<iframe src="https://leetcode.com/playground/7stVVpPs/shared" frameBorder="0" width="100%" height="412" name="7stVVpPs"></iframe>

#### Complexity Analysis

Let $n$ be the size of the `derived` array.

- Time Complexity: $O(n)$

    The algorithm constructs the `original` array twice, once starting with `original[0] = 0` and once with `original[0] = 1`. Each construction involves iterating through the `derived` array once, which takes $O(n)$ time. Therefore, the overall time complexity is $O(2 \cdot n) = O(n)$.

- Space Complexity: $O(n)$

    The algorithm uses an additional array `original` to store the intermediate results during its construction. The size of the `original` array is equal to the size of the `derived` array, requiring $O(n)$ space. No other significant data structures are used, so the overall space complexity is $O(n)$.

---

### Approach 2: Optimized Simulation

#### Intuition

From Approach 1, we know that the entire array can be reconstructed based on the initial value of `original[0]`.

Since the value of `original[0]` is not provided, there are two possibilities: `original[0] = 0` or `original[0] = 1`. In the previous approach, we constructed both possible `original` arrays and checked if either satisfies the condition `original[0] == original[n - 1]`, which ensures the array forms a valid cycle.

However, the properties of XOR simplify this further. XOR uniquely determines one value given another, and the sequence of values in `original` is fully dictated by `derived` and the starting value of `original[0]`. More importantly, if the condition `original[0] == original[n - 1]` fails for one starting value, it will also fail for the other, and if it holds for one, it will hold for both. This eliminates the need to check both cases separately.

For example, consider `derived = [1, 0, 1]` and `n = 4`. We can start by assuming `original[0] = 0`. Using this assumption, we calculate the rest of the `original` array:

- $original[1] = derived[0] \oplus original[0] = 1 \oplus 0 = 1$
- $original[2] = derived[1] \oplus original[1] = 0 \oplus 1 = 1$
- $original[3] = derived[2] \oplus original[2] = 1 \oplus 1 = 0$

Now, we check if `original[0] == original[n - 1]` (i.e., `original[0] == original[3]`). In this case, it holds true (`0 == 0`), which means our assumption `original[0] = 0` works. There's no need to test `original[0] = 1`, because XOR has the property of reversibility and consistency across calculations. If one assumption about `original[0]` (e.g., `original[0] = 0`) works, the same result will hold for the other assumption (`original[0] = 1`), but with the values flipped across the entire sequence.

Based on this, we only need to simulate the process once, assuming `original[0] = 0`. We calculate the rest of the `original` array using the `derived` values and verify if the condition `original[0] == original[n - 1]` is satisfied. If it is, we return `true`; otherwise, we return `false`.

#### Algorithm

- Initialize the `original` array with the first element as `0`.

- Generate the original array based on the `derived` array and the first element of `original[0] = 0`:
  - Iterate through each element `i` in the `derived` array.
  - Compute the value of the current element in `original` by applying XOR between `derived[i]` and `original[i]`.
  - Append this computed value to the `original` array.

- Check if the array is valid by comparing the first and last elements of the `original` array:
  - If the first element is equal to the last element, the array is valid, and return `true`.
  - Otherwise, return `false`.

#### Implementation

<iframe src="https://leetcode.com/playground/7t6h5DW6/shared" frameBorder="0" width="100%" height="327" name="7t6h5DW6"></iframe>

#### Complexity Analysis

Let $n$ be the size of the `derived` array.

- Time complexity: $O(n)$  
  
    The algorithm iterates through the `derived` array once, performing a constant-time XOR operation for each element. The final comparison is also constant time.

- Space complexity: $O(n)$  
  
    The `original` array stores $n + 1$ elements, growing linearly with the input size. Input space is not counted.

---

### Approach 3: Cumulative XOR

#### Intuition

Observe the following equations that represent the relationship between the elements of the `derived` and `original` arrays:

```
derived[0] = original[0] XOR original[1]
derived[1] = original[1] XOR original[2]
derived[2] = original[2] XOR original[3]
derived[3] = original[3] XOR original[4]

...

derived[n-1] = original[n-1] XOR original[0]
```

Each element in `original` appears exactly twice in the equations: once as `original[i]` and once as `original[i+1]`. For example:

- `original[0]` appears in `derived[0]` (`original[0] XOR original[1]`)
- `original[0]` also appears in `derived[n-1]` (`original[n-1] XOR original[0]`)

Since XOR is both commutative and associative, the order doesn’t matter. When all occurrences of `original[i]` are XORed together, they cancel each other out: `original[0] XOR original[0] XOR original[1] XOR original[1] ... = 0`

If the `derived` array is valid (i.e., it was generated from some `original`), then the XOR of all elements in derived must be 0. This is because all elements of `original` cancel out when XORed.

#### Algorithm

1. Initialize a variable `XOR` to 0. This will store the cumulative XOR of elements in the `derived` array.

2. Iterate through each element in the `derived` array:
   - For each element, compute the XOR with the current value of `XOR` and update `XOR`.

3. After the loop, check the value of `XOR`:
   - If `XOR == 0`, return `true` (indicating the array is valid).
   - Otherwise, return `false`.

#### Implementation

<iframe src="https://leetcode.com/playground/N6UppPrB/shared" frameBorder="0" width="100%" height="225" name="N6UppPrB"></iframe>

#### Complexity Analysis

Let $n$ be the size of the `derived` array.

- Time Complexity: $O(n)$

    The algorithm iterates through all elements of the `derived` array once to compute the cumulative XOR. Each XOR operation takes constant time, and the loop runs for $n$ iterations. Thus, the time complexity is $O(n)$.

- Space Complexity: $O(1)$

    The algorithm uses a single integer variable `XOR` to store the cumulative XOR of elements in the array. No additional data structures are used, so the space complexity is $O(1)$.

---

### Approach 4: Sum Parity

#### Intuition

Similar to the previous approach, we can rely on the properties of XOR. However, this time, we focus on the parity (even or odd nature) of the numbers involved.

The XOR of two binary numbers produces a result based on their bits. Specifically:

```
0 XOR 0 = 0
1 XOR 1 = 0
0 XOR 1 = 1
1 XOR 0 = 1
```

Notice that when two identical numbers are XORed, the result is 0.

For an XOR operation to result in a balanced and valid sequence, the total number of 1s in the `derived` array (which represents mismatched bits) must be even. This is because each 1 in `derived` corresponds to a mismatch between adjacent elements in the original array, and mismatches can only be resolved in pairs.

The sum of the elements in `derived` gives the total count of 1s in the array.

- If the sum is even, it means that the mismatches can be paired and resolved, allowing us to construct a valid `original` array.
- If the sum is odd, it’s impossible to resolve the mismatches, and no valid original array can exist.

#### Algorithm

1. Initialize a variable `sum` to 0. This will store the cumulative sum of elements in the `derived` array.

2. Iterate through each element in the `derived` array:
   - For each element, add it's value to `sum`.

3. After the loop, check the value of `sum`:
   - If `sum % 2 == 0`, return `true` (indicating the array is valid).
   - Otherwise, return `false`.

#### Implementation

<iframe src="https://leetcode.com/playground/3gh7ennv/shared" frameBorder="0" width="100%" height="225" name="3gh7ennv"></iframe>

#### Complexity Analysis

Let $n$ be the size of the `derived` array.

- Time Complexity: $O(n)$

    The algorithm iterates through all elements of the `derived` array once to compute the cumulative sum and find it's parity. Thus, the time complexity is $O(n)$.

- Space Complexity: $O(1)$

    No additional data structures are used, so the space complexity is $O(1)$.

---