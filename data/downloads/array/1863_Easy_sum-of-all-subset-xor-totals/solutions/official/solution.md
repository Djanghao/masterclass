# Official Solution

**Link:** [https://leetcode.com/problems/sum-of-all-subset-xor-totals/solution/](https://leetcode.com/problems/sum-of-all-subset-xor-totals/solution/)

---

[TOC]

## Solution

---

### Overview

The task is to calculate the sum of the **XOR** totals for every subset of `nums`.

All the possible subsets are known as the power set, which includes all combinations of different lengths, ranging from $0$ to $N$.

Relevant properties of **XOR**:
- The **XOR** operator `^` evaluates to true for two operands if exactly one of them is true.
- The **XOR** total of a subset with one element is that element.
- The **XOR** total of a subset with multiple elements is the **XOR** of all of the elements.

The solutions in this editorial utilize the following concepts:

- **XOR** and **OR** bitwise operations: [Bitwise Operator Explore Card](https://leetcode.com/explore/learn/card/bit-manipulation/669/bit-manipulation-concepts/4496/)
- Backtracking: [Backtracking Explore Card](https://leetcode.com/explore/learn/card/recursion-ii/472/backtracking/2654/)

If you are not familiar with a topic, we recommend you read the corresponding linked explore card.

---

### Approach 1: Generate All Subsets Using Backtracking

#### Intuition

We can break calculating the sum of the subset **XOR** totals into three main steps.

1. Generate all the subsets.
2. Calculate the **XOR** total for each subset.
3. Return the sum of the subset **XOR** totals.

A common way to generate subsets is using backtracking.

We will use a list of lists to store the subsets, where each list is a subset. We can create a function `generateSubsets` that recursively generates all the subsets for the array `nums`.

For each element, we can include it in the subset or not include it.

![subsets](../Figures/1863/1863_subsets.png)

The bottom row of the diagram shows all of the subsets for the input.

For a given element from `nums`, we can call `generateSubsets` with the element included in the subset and without the element in the subset.

For the first element, we can start building subsets in two ways:
1. Include the element in the subset and continue choosing other elements. Add the element to the subset, call `generateSubsets` with the next element, and then remove the element from the subset so we can explore other subsets.
2. Not include the element in the subset and continue choosing other elements. Call `generateSubsets` with the next element.

Our base case is when we pass the last index of `nums` because there are no more elements to try adding to the subset. We add the subset to the list of subsets and return.

Then, we use a nested loop to calculate the sum of the subset **XOR** totals. The outer loop iterates through the subsets, adding each subset's **XOR** total to the result. The inner loop iterates through each element in a subset, calculating the running **XOR** total for that subset. 

#### Algorithm

1. Initialize a list of lists `subsets`.
2. Declare a recursive function `generateSubsets` that generates all the subsets of `nums` using backtracking and add them to the list.
    - Base case: `index` equals the size of `nums`. The current subset is complete. Add it to `subsets` and return.
    - Include the current element `nums[i]` in the current subset. Add the element to the subset, call `generateSubsets` with the next element, and then remove the element from the subset. 
    - Generate the next subset without the current element. Call `generateSubsets` with the next element.
3. Initialize a variable `result` to `0`.
4. For each `subset` in `subsets`:
    - Set `subsetXORTotal` to `0`.
    - For each element `num` in the subset, **XOR** `num` with the `subsetXORTotal` to calculate the **XOR** total of the subset.
    - Add the current subset's `subsetXORTotal` to the `result`.
5. Return the `result`.

#### Implementation

<iframe src="https://leetcode.com/playground/9qz46r4G/shared" frameBorder="0" width="100%" height="500" name="9qz46r4G"></iframe>

#### Complexity Analysis

Let $N$ be the size of `nums`.

* Time complexity: $O(N \cdot 2^N)$

    Each element can be included or excluded from any given subset, meaning there are $2^N$ possible subsets. Generating them takes $O(2^N)$.

    We iterate through each of the $2^N$ subsets to calculate the result. The average size of each subset is approximately $\frac{N}{2}$, so it takes $O(\frac{N}{2} \cdot 2^N)$.

    Therefore, the overall time complexity is $O(2^N + \frac{N}{2} \cdot 2^N)$, which we can represent as $O(N \cdot 2^N)$.

* Space complexity: $O(N \cdot 2^N)$

    The `subsets` list will contain $2^N$ subsets with an average size of $\frac{N}{2}$, so it requires $O(\frac{N}{2} \cdot 2^N)$ space.

    The recursion depth can reach size $N$ because we generate subsets with and without each index in `nums`. The recursive call stack may use up to $O(N)$ space.

    Therefore, the overall space complexity is $O(N + \frac{N}{2} \cdot 2^N)$, which we can represent as $O(N \cdot 2^N)$.

---

### Approach 2: Optimized Backtracking 

#### Intuition

The previous approach generated each subset and then calculated the running **XOR** totals and sum. We can develop a more efficient approach by performing these calculations while we generate the subsets.

We can calculate the running **XOR** total for the current subset by passing the **XOR** of the running **XOR** and the current element in `nums` as a parameter to our helper function.

For the current subset, we save the **XOR** total by adding the element to the subset in the variable `withElement` and the **XOR** total by not adding the element in the variable `withoutElement`. Each of these variables represents the **XOR** total of a different subset, so we can return their sum to compute the running total for those two subsets.

The process is visualized below:

![XOR Sum](../Figures/1863/1863_XORsum.png)

The subsets are shown in the above image for visualization purposes; the algorithm does not explicitly store the subsets in lists.

#### Algorithm

1. Declare a recursive function `XORSum` that calculates the sum of the subset **XOR** totals using backtracking. The parameters are `nums`, `index`, and `currentXOR`. 
    - Base case: `index` equals the size of `nums`. The current subset is complete. Return  `currentXOR`.
    - Calculate the sum of the subset **XOR** totals when the current element `nums[i]` is added to the current subset. Save the result of `XORSum` with the next element and `currentXOR ^ nums[index]` as `withElement`.
    - Calculate the sum of the subset **XOR** totals when the current element `nums[i]` is not added to the current subset. Save the result of `XORSum` with the next element and `currentXOR` as `withoutElement`.
    - Return the sum of `withElement` and `withoutElement`, which is the sum of the subset **XOR** totals.
2. Return the result of `XORSum` with `nums`. The initial index and initial `currentXOR` are both `0`.

#### Implementation

<iframe src="https://leetcode.com/playground/EvtDBKgr/shared" frameBorder="0" width="100%" height="412" name="EvtDBKgr"></iframe>

#### Complexity Analysis

Let $N$ be the size of `nums`.

* Time complexity: $O(2^N)$

    We traverse through each of the $2^N$ subsets to calculate the result.

* Space complexity: $O(N)$

    The recursion depth can reach $N$ because we calculate the **XOR** totals for each of the $N$ indices in `nums`. The recursive call stack may require up to $O(N)$ space.

---

### Approach 3: Bit Manipulation

#### Intuition

**XOR** is a bitwise operation, so we may be able to develop a more efficient approach using bit manipulation.

Working backward can help develop bit manipulation approaches.

Let's start by considering what bits are set in the result.

> Input: nums = [1,3] (N = 2) Output = 6 = `110`
> Input: nums = [5,1,6] (N = 3) Output = 28 = `11100`
> Input: nums = [3,4,5,6,7,8] (N = 6) Output = 480 = `111100000`

Let's look for patterns in the output. Focusing on the bit representation, we can observe a pattern that the least significant (rightmost) `N - 1` bits in the binary representation are `0`.

Let's see if we can break the pattern by testing more inputs.

> Input: nums = [1] (N = 1) Output = 1 = `1`

`1 - 1 = 0` so the least significant `N - 1` (0) bits in the binary representation are still `0`. All test cases will follow this pattern. The reason for this is further explained in the dropdown below.

This means we can find the bits that need to be set, then shift them by `N - 1`, and we will have the result.

We can observe that the most significant bits in the output are all `1`. Let's try to break this pattern.

> Input: nums = [5, 20] (n = 2) Output = 42 = `101010`.

We found a test case that broke the pattern, which means we need to develop a way to determine the most significant bits.

Let's compare the bits in the numbers with the bits in the output.

![compare bits](../Figures/1863/1863_compare_bits.png)

This image shows the most significant of the output - all bits excluding the least significant (rightmost) `N - 1` bits.

Observe that every bit that is set in any of the elements is set in the output. The **OR** operator is true for a bit position if that bit position is set for any of the elements in the input, so we can utilize **OR** to get from the input to the output.

We can generate and test a solution using this strategy. First, we calculate the running **OR** of each of the elements in `nums` and save it in `result`. Then, we append `N - 1` zeros to the right of the binary representation by shifting the `result` by `N - 1`.

<details>
<summary><b> Why Does This Method Work? (Click Here): </b></summary>

The underlying idea of this method is to directly find the number of times each bit is set in all of the subset **XOR** totals, and use this to set the appropriate bits in the result.

We utilize several additional properties of **XOR**:

- The **XOR** of two equal numbers is zero.
- The **XOR** total of the empty set is zero.
- With more than two operands, the **XOR** operation evaluates to true when an odd number of them are true.

```
0 ^ 0 ^ 0 = 0
0 ^ 0 ^ 1 = 1
1 ^ 1 ^ 0 = 0
1 ^ 1 ^ 1 = 1
```

*For a bit position to be set in the subset **XOR** total, it must be set in an odd number of the elements in the subset.*

For a given element, how many subsets will include it?

- When `nums` contains $N$ elements, the total number of subsets, including the empty set, is $2^N$. A particular element will be included in half of those subsets as shown in the first approach. Half of $2^N$ is $2^{N-1}$.

For a given bit position `x`, how many subset **XOR** totals have the <code class="">x<sup>th</sup></code> bit set?

- If the <code class="">x<sup>th</sup></code> bit is not set in any of the elements, none of the subset **XOR** totals will have the <code class="">x<sup>th</sup></code> bit set.

- If the <code class="">x<sup>th</sup></code> bit is set in exactly one of the elements, it will be set in half of the **XOR** totals because half of the subsets contain that element.

![bit set once](../Figures/1863/1863_bit_set_once.png)

- If the <code class="">x<sup>th</sup></code> bit is set in more than one of the elements, it will be set in half of the subset **XOR** totals. 
    - Let's consider when `nums` contains two elements with the <code class="">x<sup>th</sup></code> bit set. The <code class="">x<sup>th</sup></code> bit is not set in the **XOR** total of the empty subset. For the two subsets with one element, the <code class="">x<sup>th</sup></code> bit is set in both of their **XOR** totals, so it will not be set in the **XOR** total of the subset containing both elements. Therefore, the <code class="">x<sup>th</sup></code> bit will be set in two out of four, or half, of the subset **XOR** totals. Let's call this set of subsets $A$.
    - If we add an element with the <code class="">x<sup>th</sup></code> bit set to `nums`, all of the $A$ subsets will still be included. There will also be several new subsets that consist of one of the $A$ subsets and the new element. For each of these new subsets, if the <code class="">x<sup>th</sup></code> bit of the **XOR** total was `0` in the corresponding subset in $A$, it will be `1` in the new subset, and vice versa. This means the <code class="">x<sup>th</sup></code> bit will be set for half of the new subsets. Since the <code class="">x<sup>th</sup></code> bit was also set for half of the $A$ subsets, the <code class="">x<sup>th</sup></code> bit will be set for half of the total subsets.
    - Adding another element that has the <code class="">x<sup>th</sup></code> bit set to a subset creates a new subset for each of the original subsets. The <code class="">x<sup>th</sup></code> bit will be flipped in **XOR** total for each new subset, so the <code class="">x<sup>th</sup></code> bit will be set in half of the subsets.

![bit set multiple](../Figures/1863/1863_bit_set_multiple.png)

*This means for each bit that is set in any of the numbers in `nums`, the bit will be set in half of the subsets.*

How is this information used to set the appropriate bits in the result?

We take the **OR** of all of the elements to capture every bit that is set in any of the elements and store in `result`.

*If a bit is set in any element at least once, its corresponding value will be added to the sum exactly $2^{N-1}$ times.*

> Input: nums = [1,3] (N = 2) Output = 6 = `110`

$2^{N-1} = 2^{2-1} = 2$
The first bit is set in $2$ of the subsets: $1 \cdot 2 = 2$
The second bit is set in $2$ of the subsets: $2 \cdot 2 = 4$
$2 + 4 = 6$

So, we multiply the `result` containing the set bit positions by the number of subsets each bit is set in, $2^{N-1}$, which can be achieved using the shift operation: `result << (N - 1)`.

</details>

#### Algorithm

1. Initialize a variable `result` to `0`.
2. For each `num` in `nums`:
    - Take the running **OR** of `result` and `num`, `result |= num`.
3. Append `N - 1` zeros to the right of the binary representation of `result` by shifting `result` by `N - 1` places, `result << (N - 1)`.

#### Implementation

<iframe src="https://leetcode.com/playground/mVMb8sab/shared" frameBorder="0" width="100%" height="259" name="mVMb8sab"></iframe>

#### Complexity Analysis

Let $N$ be the size of `nums`.

* Time complexity: $O(N)$

    We traverse through each of the $N$ elements in `nums` to calculate the running **OR** so the time complexity is $O(N)$.

* Space complexity: $O(1)$

    We use a couple of variables but no data structures that grow with input size, so the space complexity is constant, i.e. $O(1)$.

---